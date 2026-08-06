# SMARTAPPHUB — Sitters website

Marketing site for **Sitters**, built as milestone 1 of the SMARTAPPHUB company
site: foundation, routing, theme, navbar/footer, and a complete home page.

## Tech stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no config file needed)
- Framer Motion (scroll/entrance animations)
- React Router (Home / Privacy / Terms)
- Lucide React (icons)

## Run locally
```bash
npm install
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Outputs to `dist/`.

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub repo.
2. In Cloudflare Pages, connect the repo.
3. Build command: `npm run build`
4. Output directory: `dist`

## What's built

**Milestone 1 — Foundation**
- [x] Project structure, routing, global theme
- [x] Responsive, blurred sticky navbar
- [x] Footer with legal/contact links

**Milestones 2–3 — Home page**
- [x] Hero with animated phone mockup + verification badge
- [x] Animated stat counters (427+ users, 144+ sitters, 5 countries)
- [x] Features, How It Works, Countries, FAQ sections
- [x] Download CTA section
- [x] Privacy & Terms page scaffolds (fill in real legal copy before launch)

**Milestone 4 — Branding, SEO & metadata**
- [x] Real SmartAppHub logo applied to navbar, footer, and favicon (`public/logo-icon.png`)
- [x] Page title, meta description, Open Graph + Twitter card tags
- [x] `robots.txt` and `sitemap.xml`
- [ ] Analytics — see below
- [ ] Deploy to Cloudflare Pages — see below

## Analytics
Since you're deploying to Cloudflare Pages, the easiest option needs **zero code**:
after your site is live, go to your Pages project → **Analytics** → **Enable Web
Analytics**. Cloudflare injects the tracking beacon automatically, no snippet to
paste. (Plausible or GA4 are alternatives if you want more detail later — those
do need a script tag added to `index.html`.)

## Still to do (later milestones)
- [ ] Replace placeholder legal copy in `src/pages/Privacy.tsx` and `Terms.tsx`
- [ ] Real screenshots to replace the illustrated phone mockup (optional)
- [ ] Live stats pulled from Firebase instead of hardcoded numbers
- [ ] Apps page + Pulse/PlateSmart pages once those ship
