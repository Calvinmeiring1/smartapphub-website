import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import worker from "./video-delivery.js";

for (const file of ["sitters-intro.mp4", "sitters-film-v2.mp4", "sitters-film-v3.mp4", "sitters-background.mp4"]) {
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

test("Public pages serve their generated HTML", async () => {
  const request = new Request("https://example.com/sitters");
  const expected = new Response("page");
  const response = await worker.fetch(request, { ASSETS: { fetch: (received) => {
    assert.equal(new URL(received.url).pathname, "/sitters/index.html");
    return expected;
  } } });
  assert.equal(response, expected);
});

for (const path of ["/commission/", "/commission/index.html"]) {
  test(`${path} redirects to canonical path and retains query`, async () => {
    const response = await worker.fetch(new Request(`https://smartapphub.co.za${path}?source=test`), {});
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("Location"), "https://smartapphub.co.za/commission?source=test");
  });
}
test("www redirects to the canonical hostname", async () => {
  const response = await worker.fetch(new Request("https://www.smartapphub.co.za/contact?q=test"), {});
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("Location"), "https://smartapphub.co.za/contact?q=test");
});
test("Unknown page returns real 404", async () => {
  const response = await worker.fetch(new Request("https://smartapphub.co.za/no-such-page"), {ASSETS:{fetch: request => {
    assert.equal(new URL(request.url).pathname, "/404.html");
    return new Response("Missing page");
  }}});
  assert.equal(response.status, 404);
  assert.equal(await response.text(), "Missing page");
});
test("Dynamic profile remains accessible without being indexed", async () => {
  const response = await worker.fetch(new Request("https://smartapphub.co.za/profile/test"), {ASSETS:{fetch: request => {
    assert.equal(new URL(request.url).pathname, "/index.html");
    return new Response("App");
  }}});
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("X-Robots-Tag"), "noindex");
});
