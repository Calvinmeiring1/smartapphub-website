import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  className = "",
  duration = 1200
}: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
