/// <reference types="node" />
import { prerenderToNodeStream } from "react-dom/static";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./router/Router";
import { MetadataContext } from "./components/PageMetadata";
import type { PageMetadata } from "./components/PageMetadata";

export async function render(url: string): Promise<{html: string; metadata: PageMetadata}> {
  const metadata: { current?: PageMetadata } = {};
  const {prelude} = await prerenderToNodeStream(
    <StaticRouter location={url}><MetadataContext.Provider value={metadata}><AppRoutes /></MetadataContext.Provider></StaticRouter>,
    {signal: AbortSignal.timeout(30000)},
  );
  // Resolve lazy routes first, then emit completed static boundaries rather
  // than a streamed fallback that depends on React's replacement scripts.
  for await (const chunk of prelude) void chunk;
  const html = renderToString(<StaticRouter location={url}><MetadataContext.Provider value={metadata}><AppRoutes /></MetadataContext.Provider></StaticRouter>);
  if (!metadata.current) throw new Error(`Missing page metadata: ${url}`);
  return {html, metadata: metadata.current};
}
