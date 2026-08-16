import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ['/', '/sitters', '/commission', '/graphic-design', '/buy-mini-app', '/privacy', '/terms'];

async function run() {
  const Renderer = Prerenderer.default || Prerenderer;
  const PRenderer = PuppeteerRenderer.default || PuppeteerRenderer;

  const prerenderer = new Renderer({
    staticDir: path.join(__dirname, 'dist'),
    renderer: new PRenderer({
      renderAfterTime: 2000, // Wait 2 seconds for lazy components
    }),
  });

  try {
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(routes);

    for (const route of renderedRoutes) {
      const outputDir = path.join(__dirname, 'dist', route.route);
      const outputFile = path.join(outputDir, 'index.html');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Cleanup HTML: remove absolute local host preloads added by renderer
      let html = route.html.trim();
      html = html.replace(/<link rel="modulepreload"[^>]*?http:\/\/127\.0\.0\.1:8000[^>]*?>/g, '');

      fs.writeFileSync(outputFile, html);
      console.log(`Prerendered: ${route.route}`);
    }
  } catch (err) {
    console.error('Prerender error:', err);
    process.exit(1);
  } finally {
    await prerenderer.destroy();
  }
}

run();
