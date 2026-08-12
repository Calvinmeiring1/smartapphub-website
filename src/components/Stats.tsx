import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Container from "./Container";
import AnimatedCounter from "./AnimatedCounter";

type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export default function Stats() {
  const [stats, setStats] = useState<Stat[] | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "stats", "public"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setStats([
          { id: "users", value: data.users || 0, suffix: "+", label: "Users" },
          { id: "sitters", value: data.sitters || 0, suffix: "+", label: "Verified sitters" },
          { id: "countries", value: data.countries || 0, suffix: "", label: "Countries" },
        ]);
      }
    });
    return unsub;
  }, []);

  if (!stats) return null;

  return (
    <Container>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 bg-[var(--color-bg)] py-8 text-center">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className="font-display text-4xl font-semibold text-white sm:text-5xl"
            />
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
