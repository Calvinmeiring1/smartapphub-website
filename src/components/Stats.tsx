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

const defaultStats: Stat[] = [
  { id: "users", value: 15000, suffix: "+", label: "Users" },
  { id: "sitters", value: 450, suffix: "+", label: "Verified sitters" },
  { id: "countries", value: 25, suffix: "", label: "Countries" },
];

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>(defaultStats);

  useEffect(() => {
    console.log("Stats: Connecting to Firestore...");
    const unsub = onSnapshot(doc(db, "stats", "public"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        console.log("Stats: Received data:", data);
        setStats([
          { id: "users", value: data.users || defaultStats[0].value, suffix: "+", label: "Users" },
          { id: "sitters", value: data.sitters || defaultStats[1].value, suffix: "+", label: "Verified sitters" },
          { id: "countries", value: data.countries || defaultStats[2].value, suffix: "", label: "Countries" },
        ]);
      } else {
        console.warn("Stats: stats/public document does not exist in Firestore.");
      }
    }, (error) => {
      console.error("Stats: Firestore error:", error);
    });
    return unsub;
  }, []);

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
