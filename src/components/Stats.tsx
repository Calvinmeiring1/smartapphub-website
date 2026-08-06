import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "./Container";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 427, suffix: "+", label: "Users" },
  { value: 144, suffix: "+", label: "Verified sitters" },
  { value: 5, suffix: "", label: "Countries" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-white sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 bg-[var(--color-bg)] py-8 text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-sm text-[var(--color-text-muted)]">{stat.label}</span>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center gap-1 bg-[var(--color-bg)] py-8 text-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-verified)] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-verified)]" />
          </span>
          <span className="mt-1.5 text-sm text-[var(--color-text-muted)]">Growing every day</span>
        </div>
      </div>
    </Container>
  );
}
