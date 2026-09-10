import { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
import Reveal from "./Reveal";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "The Idea",
  afterLabel = "The Result"
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderProgress] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const progress = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderProgress(progress);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <Reveal>
      <div
        ref={containerRef}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] cursor-ew-resize select-none"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute bottom-6 right-8 rounded-full bg-black/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
          {afterLabel}
        </div>

        {/* Before Image (Foreground with Clip) */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover grayscale brightness-50"
            draggable={false}
          />
          <div className="absolute bottom-6 left-8 rounded-full bg-black/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/50 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95">
            <GripVertical size={20} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
