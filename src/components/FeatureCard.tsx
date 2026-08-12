import type { ReactNode } from "react";
import Card from "./Card";
import Reveal from "./Reveal";

export default function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <Reveal margin="0px" delay={index * 0.1}>
      <Card hover className="h-full">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          {icon}
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{description}</p>
      </Card>
    </Reveal>
  );
}
