import { useState, useEffect, useRef } from "react";
import { Search, ShieldCheck, Heart, MapPin, Star, Download } from "lucide-react";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.smartapphub.thesitters";
const ICON_URL =
  "https://play-lh.googleusercontent.com/dwtkN5RjHDmrFn7YzGNqo3BypvZErwZ8pi4YXZywJkkc1ZDbs0_UE6x5RvxIJ7FmdPx8BzF2qVVEiyB15PJ1=w240-h480";
const SHOT_URL =
  "https://play-lh.googleusercontent.com/cDpdSO5uGb-LnVM_vwqSSKhgSUK_hLt9adsqqdqYOVoWkqeNrgtpmRk7BavbhfWPmVqdpqpdf-l2p5U3w3HQZg=w526-h296";

const SCENES = [
  {
    tag: "PET OWNERS",
    color: "#7fb5c9", // sky
    headline: "Need a pet sitter? Find one nearby in minutes.",
    sub: "Search verified sitters and dog walkers close to home.",
    icon: Search,
    shot: true,
  },
  {
    tag: "TRUST & SAFETY",
    color: "#f2a93b", // marigold
    headline: "Every sitter is ID-verified and background-checked.",
    sub: "Vetting happens before you ever chat — book with confidence.",
    icon: ShieldCheck,
  },
  {
    tag: "PET SITTERS",
    color: "#e4694f", // clay
    headline: "Love animals? Get paid to walk and sit.",
    sub: "Set your rates, pick your jobs, build a client list.",
    icon: Heart,
  },
  {
    tag: "LIVE TRACKING",
    color: "#7fb5c9", // sky
    headline: "Follow every walk live with real-time GPS.",
    sub: "See the route, the pace, know your pet is safe.",
    icon: MapPin,
  },
  {
    tag: "SITTERS",
    color: "#f2a93b", // marigold
    headline: "Pet care you can trust.",
    sub: "Now live in South Africa, the US, UK, Canada & Australia.",
    icon: Star,
    shot: true,
  },
];

const SCENE_MS = 3600;

export default function SittersPromo() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % SCENES.length);
    }, SCENE_MS);
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const scene = SCENES[active];
  const Icon = scene.icon;

  return (
    <div className="sp-wrap">
      <style>{`
        .sp-wrap {
          --pine: #1f3a2e;
          --pine-deep: #142620;
          --meadow: #345c45;
          --marigold: #f2a93b;
          --clay: #e4694f;
          --sky: #7fb5c9;
          --chalk: #f5f1e6;
          --chalk-dim: rgba(245,241,230,0.72);
          font-family: 'Manrope', system-ui, sans-serif;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .sp-wrap * { box-sizing: border-box; }
        .sp-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 320px;
          border-radius: 22px;
          overflow: hidden;
          background:
            radial-gradient(120% 90% at 85% 0%, rgba(242,169,59,0.16), transparent 55%),
            radial-gradient(90% 70% at 0% 100%, rgba(127,181,201,0.12), transparent 60%),
            linear-gradient(155deg, var(--pine) 0%, var(--pine-deep) 100%);
          box-shadow: 0 24px 60px -20px rgba(15,30,22,0.55);
          display: flex;
          flex-direction: column;
          padding: clamp(16px, 3vw, 30px) clamp(18px, 4vw, 36px);
          color: var(--chalk);
        }
        .sp-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fredoka', sans-serif;
        }
        .sp-logo {
          width: 30px; height: 30px;
          border-radius: 50%;
          object-fit: cover;
          background: var(--meadow);
          flex-shrink: 0;
        }
        .sp-brandname {
          font-weight: 600;
          font-size: clamp(15px, 2vw, 18px);
          letter-spacing: 0.01em;
        }
        .sp-rating {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(11px, 1.5vw, 13px);
          color: var(--chalk-dim);
          white-space: nowrap;
        }
        .sp-rating svg { color: var(--marigold); }
        .sp-toggle { display: none; }
        .sp-toggle:hover { background: rgba(245,241,230,0.2); }
        .sp-toggle:focus-visible { outline: 2px solid var(--marigold); outline-offset: 2px; }

        .sp-body {
          flex: 1;
          display: flex;
          align-items: center;
          gap: clamp(12px, 3vw, 32px);
          min-height: 0;
        }
        .sp-scene {
          flex: 1 1 55%;
          min-width: 0;
          animation: sceneIn 0.6s cubic-bezier(.22,.61,.36,1) both;
        }
        @keyframes sceneIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sp-tag {
          display: inline-block;
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: clamp(10px, 1.4vw, 11.5px);
          letter-spacing: 0.09em;
          color: var(--pine-deep);
          background: var(--tag-color, var(--marigold));
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: clamp(8px, 2vw, 14px);
        }
        .sp-headline {
          font-family: 'Fredoka', sans-serif;
          font-weight: 600;
          font-size: clamp(19px, 3.4vw, 32px);
          line-height: 1.15;
          margin: 0 0 clamp(6px, 1.6vw, 12px) 0;
        }
        .sp-sub {
          font-size: clamp(12.5px, 1.8vw, 15.5px);
          line-height: 1.5;
          color: var(--chalk-dim);
          margin: 0;
          max-width: 46ch;
        }
        .sp-visual {
          flex: 1 1 45%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 0;
          height: 100%;
        }
        .sp-icon-badge {
          width: clamp(56px, 9vw, 92px);
          height: clamp(56px, 9vw, 92px);
          border-radius: 26% 74% 68% 32% / 40% 34% 66% 60%;
          background: rgba(245,241,230,0.08);
          border: 1px solid rgba(245,241,230,0.18);
          display: flex; align-items: center; justify-content: center;
          color: var(--marigold);
          animation: floaty 3s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .sp-shot {
          position: absolute;
          right: 4%;
          bottom: 6%;
          width: min(58%, 220px);
          border-radius: 10px;
          box-shadow: 0 14px 34px -10px rgba(0,0,0,0.55);
          border: 2px solid rgba(245,241,230,0.35);
          transform: rotate(4deg);
          display: none;
        }
        @media (min-width: 640px) {
          .sp-shot { display: block; }
          .sp-icon-badge { position: absolute; left: 6%; top: 8%; }
        }

        .sp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: clamp(10px, 2.5vw, 18px);
        }
        .sp-dots { display: flex; gap: 6px; }
        .sp-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(245,241,230,0.28);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .sp-dot.active { background: var(--marigold); transform: scale(1.3); }
        .sp-dot:focus-visible { outline: 2px solid var(--marigold); outline-offset: 3px; }

        .sp-cta-group { display: flex; align-items: center; gap: 10px; }
        .sp-ios {
          font-size: 10.5px;
          color: var(--chalk-dim);
          white-space: nowrap;
          display: none;
        }
        @media (min-width: 520px) { .sp-ios { display: inline; } }
        .sp-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--marigold);
          color: var(--pine-deep);
          font-weight: 700;
          font-size: clamp(12px, 1.8vw, 14px);
          padding: clamp(8px, 1.6vw, 11px) clamp(14px, 2.6vw, 20px);
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 20px -8px rgba(242,169,59,0.6);
        }
        .sp-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 26px -8px rgba(242,169,59,0.75); }
        .sp-cta:focus-visible { outline: 2px solid var(--chalk); outline-offset: 3px; }

        .sp-trail {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 34px;
          opacity: 0.55;
        }
        .sp-trail path {
          fill: none;
          stroke: var(--chalk);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 1 14;
          animation: trailFlow 5s linear infinite;
        }
        @keyframes trailFlow { to { stroke-dashoffset: -180; } }

        @media (prefers-reduced-motion: reduce) {
          .sp-scene { animation: none; }
          .sp-icon-badge { animation: none; }
          .sp-trail path { animation: none; }
          .sp-cta:hover { transform: none; }
        }
      `}</style>

      <div className="sp-frame" role="group" aria-label="Sitters app promo">
        <svg className="sp-trail" viewBox="0 0 800 34" preserveAspectRatio="none" aria-hidden="true">
          <path d="M -20,20 Q 80,4 180,20 T 380,20 T 580,20 T 820,20" />
        </svg>

        <div className="sp-header">
          <img
            src={ICON_URL}
            alt=""
            className="sp-logo"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <span className="sp-brandname">Sitters</span>
          <div className="sp-rating">
            <Star size={13} fill="currentColor" stroke="none" />
            5.0 · 11 reviews
          </div>
        </div>

        <div className="sp-body">
          <div className="sp-scene" aria-live="polite">
            <span className="sp-tag" style={{ "--tag-color": scene.color } as React.CSSProperties}>
              {scene.tag}
            </span>
            <h2 className="sp-headline">{scene.headline}</h2>
            <p className="sp-sub">{scene.sub}</p>
          </div>
          <div className="sp-visual">
            <div className="sp-icon-badge">
              <Icon size={30} strokeWidth={1.7} />
            </div>
            {scene.shot && (
              <img
                src={SHOT_URL}
                alt=""
                className="sp-shot"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            )}
          </div>
        </div>

        <div className="sp-footer">
          <div className="sp-dots">
            {SCENES.map((_, i) => (
              <button
                key={i}
                className={`sp-dot ${i === active ? "active" : ""}`}
                aria-label={`Show scene ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="sp-cta-group">
            <span className="sp-ios">iOS coming soon</span>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-cta"
            >
              <Download size={15} />
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
