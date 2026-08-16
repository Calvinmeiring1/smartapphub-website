import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ['/', '/sitters', '/commission', '/graphic-design', '/buy-mini-app', '/privacy', '/terms'];

async function run() {
  // Skip prerendering if explicitly disabled (e.g., in CI environments without Puppeteer dependencies)
  if (process.env.SKIP_PRERENDER === 'true') {
    console.log('Skipping prerendering as SKIP_PRERENDER is set to true.');
    return;
  }

  const Renderer = Prerenderer.default || Prerenderer;
  const PRenderer = PuppeteerRenderer.default || PuppeteerRenderer;

  const prerenderer = new Renderer({
    staticDir: path.join(__dirname, 'dist'),
    renderer: new PRenderer({
      renderAfterTime: 2000,
      // Add no-sandbox for Linux CI environments
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
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

      let html = route.html.trim();
      html = html.replace(/<link rel="modulepreload"[^>]*?http:\/\/127\.0\.0\.1:8000[^>]*?>/g, '');

      fs.writeFileSync(outputFile, html);
      console.log(`Prerendered: ${route.route}`);
    }
  } catch (err) {
    console.warn('Prerender error encountered:', err.message);
    console.warn('The build will continue without prerendering.');
    // Do not exit with 1, allow the build to finish as a standard SPA if prerendering fails
  } finally {
    try {
      await prerenderer.destroy();
    } catch (e) {
      // Ignore destruction errors
    }
  }
}

run();
