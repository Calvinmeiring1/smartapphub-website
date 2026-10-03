import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import worker from "./video-delivery.js";

for (const file of ["sitters-intro.mp4", "sitters-background.mp4"]) {
  const bytes = readFileSync(new URL(`../public/media/${file}`, import.meta.url));
  const env = { ASSETS: { fetch: async (request) => {
    assert.equal(request.headers.get("Range"), null);
    return new Response(request.method === "HEAD" ? null : bytes, {
      headers: { "Content-Type": "video/mp4", "Content-Length": String(bytes.length), ETag: '"film"' },
    });
  } } };
  const fetch = (range, extra = {}) => worker.fetch(new Request(`https://example.com/media/${file}`, {
    ...extra, headers: { ...(range ? { Range: range } : {}), ...extra.headers },
  }), env);

  test(`${file}: Safari's initial probe returns exactly two bytes`, async () => {
    const response = await fetch("bytes=0-1");
    assert.equal(response.status, 206);
    assert.equal(response.headers.get("Content-Range"), `bytes 0-1/${bytes.length}`);
    assert.equal(response.headers.get("Content-Length"), "2");
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), bytes.subarray(0, 2));
  });
  test(`${file}: seeking, suffix and open-ended ranges return matching bytes`, async () => {
    for (const [range, start, end] of [
      ["bytes=14000-14999", 14000, 15000],
      ["bytes=-1024", bytes.length - 1024, bytes.length],
      [`bytes=${bytes.length - 8}-`, bytes.length - 8, bytes.length],
      [`bytes=${bytes.length - 8}-${bytes.length + 100}`, bytes.length - 8, bytes.length],
    ]) {
      const response = await fetch(range);
      assert.equal(response.status, 206);
      assert.deepEqual(Buffer.from(await response.arrayBuffer()), bytes.subarray(start, end));
    }
  });
  test(`${file}: invalid bounds return 416; mismatched validator returns full file`, async () => {
    for (const range of [`bytes=${bytes.length}-`, "bytes=20-10", "bytes=-0"]) {
      const response = await fetch(range);
      assert.equal(response.status, 416);
      assert.equal(response.headers.get("Content-Range"), `bytes */${bytes.length}`);
    }
    const response = await fetch("bytes=0-1", { headers: { "If-Range": '"old-film"' } });
    assert.equal(response.status, 200);
    assert.equal((await response.arrayBuffer()).byteLength, bytes.length);
  });
  test(`${file}: HEAD reports total length without a body`, async () => {
    const response = await fetch(null, { method: "HEAD" });
    assert.equal(response.headers.get("Accept-Ranges"), "bytes");
    assert.equal(response.headers.get("Content-Length"), String(bytes.length));
    assert.equal((await response.arrayBuffer()).byteLength, 0);
  });
}

test("Other assets and pages retain static asset routing", async () => {
  const request = new Request("https://example.com/sitters");
  const expected = new Response("page");
  const response = await worker.fetch(request, { ASSETS: { fetch: (received) => {
    assert.equal(received, request);
    return expected;
  } } });
  assert.equal(response, expected);
});
