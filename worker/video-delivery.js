const videos = new Set([
  "/media/sitters-intro.mp4",
  "/media/sitters-film-v2.mp4",
  "/media/sitters-film-v3.mp4",
  "/media/sitters-background.mp4",
]);

export default {
  async fetch(request, env) {
    if (!videos.has(new URL(request.url).pathname) || !["GET", "HEAD"].includes(request.method)) {
      return env.ASSETS.fetch(request);
    }

    // The static asset binding can ignore Range. Fetch the full, unencoded
    // asset and construct the partial response Safari needs for MP4 playback.
    const assetRequest = new Request(request);
    assetRequest.headers.delete("Range");
    assetRequest.headers.delete("If-Range");
    assetRequest.headers.set("Accept-Encoding", "identity");
    const asset = await env.ASSETS.fetch(assetRequest);
    if (asset.status !== 200) return asset;

    const headers = new Headers(asset.headers);
    headers.set("Accept-Ranges", "bytes");
    headers.set("Cache-Control", "public, max-age=0, must-revalidate, no-transform");
    if (request.method === "HEAD") return new Response(null, { status: 200, headers });

    const range = request.headers.get("Range");
    const ifRange = request.headers.get("If-Range");
    const validatorMatches = !ifRange ||
      (!ifRange.startsWith("W/") && ifRange === headers.get("ETag")) ||
      ifRange === headers.get("Last-Modified");
    const match = range && validatorMatches && /^bytes=(\d*)-(\d*)$/.exec(range);
    // Unsupported multi-range or malformed requests can receive the full file.
    if (!match || (!match[1] && !match[2])) return new Response(asset.body, { status: 200, headers });

    const bytes = await asset.arrayBuffer();
    const size = bytes.byteLength;
    const suffix = !match[1];
    const first = Number(match[1]);
    const last = match[2] ? Number(match[2]) : size - 1;
    const start = suffix ? Math.max(0, size - last) : first;
    const end = suffix ? size - 1 : Math.min(last, size - 1);
    headers.delete("Content-Encoding");
    headers.delete("Content-Length");
    if (!Number.isSafeInteger(first) || !Number.isSafeInteger(last) ||
        start >= size || end < start || (suffix && last === 0)) {
      headers.set("Content-Range", `bytes */${size}`);
      return new Response(null, { status: 416, headers });
    }

    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(bytes.slice(start, end + 1), { status: 206, headers });
  },
};
