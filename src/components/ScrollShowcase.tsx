import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, MousePointer2, Type, PenTool, Square, Layers } from "lucide-react";
import Container from "./Container";

const stages = [
  { name: "Apps", title: "An idea you can hold.", text: "Android and iOS apps built around the people who use them.", href: "/commission", action: "Explore app development" },
  { name: "Websites", title: "A place for your business.", text: "Clear, responsive websites that turn curiosity into a conversation.", href: "/website-development", action: "Explore website development" },
  { name: "Design", title: "A look that feels like you.", text: "Business graphics, digital assets and stationery with your identity at the centre.", href: "/graphic-design", action: "Explore graphic design" },
];

export default function ScrollShowcase() {
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const links = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const root = section.current;
    const panel = stage.current;
    if (!root || !panel) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motion.matches);
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const staticMode = (motion.matches && !motionEnabled) || window.innerHeight <= 650;
      const progress = staticMode ? 0 : Math.max(0, Math.min(1, -rect.top / travel));
      const phase = progress * 2;
      const website = Math.max(0, Math.min(1, phase));
      const design = Math.max(0, Math.min(1, phase - 1));
      const browserFade = Math.max(0, Math.min(1, (phase - 0.5) / 0.3));
      const canvasFade = Math.max(0, Math.min(1, (phase - 1.5) / 0.3));
      const opacity = [1 - browserFade, browserFade - canvasFade, canvasFade];
      const active = phase < 0.65 ? 0 : phase < 1.65 ? 1 : 2;
      panel.style.setProperty("--frame-width", `${220 + website * 300 - design * 80}px`);
      panel.style.setProperty("--frame-height", `${360 - website * 40}px`);
      panel.style.setProperty("--frame-radius", `${34 - website * 18 + design * 2}px`);
      opacity.forEach((value, index) => {
        panel.style.setProperty(`--stage-${index}`, String(value));
        const link = links.current[index];
        if (link) link.tabIndex = staticMode || index === active ? 0 : -1;
      });
      panel.dataset.active = String(active);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      cancelAnimationFrame(frame);
    };
  }, [motionEnabled]);

  return (
    <section ref={section} className={`scroll-showcase ${motionEnabled ? "showcase-motion-enabled" : ""}`} aria-label="Explore our three services">
      <div ref={stage} className="showcase-stage" data-active="0">
        <Container className="showcase-layout">
          <div className="showcase-copy">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">One studio. Three ways to create.</p>
            {reducedMotion && !motionEnabled && <button type="button" onClick={() => setMotionEnabled(true)} className="mt-4 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm text-white">Enable scroll animation preview</button>}
            <div className="showcase-headings">
              {stages.map((item, index) => <div key={item.name} className={`showcase-story showcase-story-${index}`}>
                <p className="mt-6 text-sm text-[var(--color-text-muted)]">0{index + 1} / {item.name}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">{item.title}</h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
                <Link ref={element => { links.current[index] = element; }} to={item.href} className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">{item.action}<ArrowRight size={16} aria-hidden="true" /></Link>
              </div>)}
            </div>
            <div className="showcase-progress" aria-hidden="true">{stages.map((item, index) => <span key={item.name} className={`showcase-dot showcase-dot-${index}`} />)}</div>
            <p className="showcase-hint mt-5 flex items-center gap-2 text-xs text-[var(--color-text-muted)]"><ChevronDown size={14} aria-hidden="true" />Scroll to see what your idea can become</p>
          </div>
          <div className="showcase-visual" aria-hidden="true">
            <div className="showcase-frame">
              <div className="showcase-art showcase-art-0"><div className="showcase-notch" /><p className="showcase-brand">SmartAppHub</p><div className="showcase-app-mark">S</div><p className="showcase-app-title">Your next idea.</p><div className="showcase-app-lines"><span /><span /><span /></div><div className="showcase-app-button">Let’s get started</div><div className="showcase-app-nav"><span /><span /><span /></div></div>
              <div className="showcase-art showcase-art-1"><div className="showcase-browser"><i /><i /><i /><span>your-business.co.za</span></div><div className="showcase-site"><p className="showcase-brand">YOUR BUSINESS</p><h3>Make your<br />first impression<br /><em>count.</em></h3><div className="showcase-site-button" /><div className="showcase-site-cards"><span /><span /><span /></div></div></div>
              <div className="showcase-art showcase-art-2">
                <div className="showcase-browser"><i /><i /><i /><span>Brand poster · Design studio</span></div>
                <div className="showcase-design-workspace">
                  <div className="showcase-design-tools"><MousePointer2 size={13} /><Type size={15} /><PenTool size={14} /><Square size={13} /><Layers size={14} /></div>
                  <div className="showcase-design-artboard">
                    <span className="showcase-poster-label">YOUR BRAND / 01</span>
                    <div className="showcase-poster-orbit" />
                    <div className="showcase-type-selection"><strong>Make<br />your<br /><em>mark.</em></strong><i /><i /><i /><i /></div>
                    <span className="showcase-poster-footer">IDENTITY. COLOUR. CHARACTER.</span>
                  </div>
                  <div className="showcase-design-properties"><span>COLOUR</span><div className="showcase-design-palette"><i /><i /><i /></div><span>TYPE</span><b>Aa</b><small>Display / Bold</small><span>LAYERS</span><div className="showcase-layer" /><div className="showcase-layer" /><div className="showcase-layer" /></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
