import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function SittersBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [preference, setPreference] = useState("checking");

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }).connection;
    const update = () => {
      setPreference(motion.matches ? "reduced-motion" : connection?.saveData ? "save-data" : "normal");
      setAllowed(!motion.matches && !connection?.saveData);
    };
    update();
    motion.addEventListener("change", update);
    connection?.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const sync = () => {
      const player = video.current;
      if (!player) return;
      const story = document.querySelector<HTMLVideoElement>("#sitters-film video");
      const storyPlaying = story && !story.paused && !story.ended;
      if (paused || document.hidden || storyPlaying) player.pause();
      else void player.play().catch(() => setPaused(true));
    };
    const storyPlayback = (event: Event) => {
      if (!(event.target instanceof HTMLVideoElement) || !event.target.closest("#sitters-film")) return;
      sync();
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    for (const event of ["play", "pause", "ended"]) document.addEventListener(event, storyPlayback, true);
    return () => {
      document.removeEventListener("visibilitychange", sync);
      for (const event of ["play", "pause", "ended"]) document.removeEventListener(event, storyPlayback, true);
    };
  }, [allowed, paused]);

  return (
    <>
      <div aria-hidden="true" data-background-preference={preference} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
        <img src="/media/sitters-intro-poster.webp" alt="" className="absolute inset-0 h-full w-full object-cover object-[60%_center]" />
        {allowed && !failed && <video ref={video} muted loop playsInline preload="metadata"
          poster="/media/sitters-intro-poster.webp" onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]">
          <source src="/media/sitters-background.mp4" type="video/mp4" />
        </video>}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />
      </div>
      {!failed && <button type="button" onClick={() => {
        if (!allowed) { setAllowed(true); setPaused(false); }
        else setPaused(!paused);
      }}
        aria-label={!allowed || paused ? "Play background animation" : "Pause background animation"}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/85 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        {!allowed || paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        {!allowed || paused ? "Play animation" : "Pause animation"}
      </button>}
    </>
  );
}
