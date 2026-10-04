import { useEffect, useRef, useState } from "react";
import { MousePointer2, Pause, Play } from "lucide-react";

export default function WebsiteWorkPreview() {
  const frame = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (frame.current) observer.observe(frame.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frame} className="website-work-preview h-64 bg-[#10131d] p-4" data-playing={visible && !paused}>
      <div className="mx-auto max-w-[300px] overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] shadow-xl">
        <div aria-hidden="true" className="flex h-6 items-center gap-1.5 bg-[#20232d] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b68]" /><span className="h-1.5 w-1.5 rounded-full bg-[#e8b849]" /><span className="h-1.5 w-1.5 rounded-full bg-[#62bf7c]" />
          <span className="ml-2 truncate text-[9px] text-white/60">smartapphub.co.za</span>
        </div>
        <div className="website-work-screen relative aspect-video overflow-hidden" role="img" aria-label="Animated preview of the real SmartAppHub website: opening website services and visiting the enquiry form">
          {["home", "website", "contact"].map((page, i) => <img key={page} src={`/work/website-preview-${page}.webp`} alt="" aria-hidden="true" width={1280} height={720} loading="lazy" className={`website-work-frame website-work-frame-${i} absolute inset-0 h-full w-full`} />)}
          <MousePointer2 aria-hidden="true" className="website-work-cursor pointer-events-none absolute h-4 w-4 fill-white text-[#182039] drop-shadow-md" />
          <span aria-hidden="true" className="website-work-click pointer-events-none absolute h-6 w-6 rounded-full border-2 border-[#93a9ff]" />
        </div>
      </div>
      <div className="mx-auto mt-2 flex max-w-[300px] items-center justify-between gap-2">
        <span className="text-[10px] text-white/55">Homepage → Services → Enquiry</span>
        <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play website preview" : "Pause website preview"} className="website-work-control inline-flex min-h-6 items-center gap-1 rounded px-1.5 text-[10px] text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-white">
          {paused ? <Play size={10} aria-hidden="true" /> : <Pause size={10} aria-hidden="true" />}{paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
