import fs from "node:fs/promises";
import { render } from "./.artifacts/ssr/entry-server.js";
const template = await fs.readFile("dist/index.html", "utf8");
const sitemap = await fs.readFile("public/sitemap.xml", "utf8");
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
if (!routes.includes("/") || new Set(routes).size !== routes.length) throw new Error("Invalid sitemap routes");
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
for (const route of [...routes, "/404"]) {
  const { html, metadata } = await render(route);
  if (!/<h1[\s>]/.test(html) || html.includes("Loading page…")) throw new Error(`Incomplete page HTML: ${route}`);
  if (metadata.canonical !== `https://smartapphub.co.za${route}`) throw new Error(`Incorrect canonical: ${route}`);
  let page = template.replace(/<title>.*?<\/title>/s, `<title>${escape(metadata.title)}</title>`);
  for (const [attr, key, value] of [
    ["name", "description", metadata.description],
    ["property", "og:title", metadata.title],
    ["property", "og:description", metadata.description],
    ["property", "og:type", metadata.ogType],
    ["name", "twitter:title", metadata.title],
    ["name", "twitter:description", metadata.description],
  ]) page = page.replace(new RegExp(`<meta ${attr}="${key}"[^>]*>`), `<meta ${attr}="${key}" content="${escape(value)}" />`);
  page = page.replace("</head>", `<link rel="canonical" href="${escape(metadata.canonical)}" />${route === "/404" ? '<meta name="robots" content="noindex" />' : ""}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (page.includes('<div id="root"></div>')) throw new Error(`Empty page: ${route}`);
  const file = route === "/404" ? "dist/404.html" : route === "/" ? "dist/index.html" : `dist${route}/index.html`;
  await fs.mkdir(file.slice(0, file.lastIndexOf("/")), { recursive: true });
  await fs.writeFile(file, page);
  console.log(`Prerendered: ${route}`);
}
await fs.writeFile(".artifacts/public-routes.json", JSON.stringify(routes));
