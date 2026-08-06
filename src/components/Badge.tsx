import type { ReactNode } from "react";

export default function Badge({
  children,
  icon,
  tone = "accent",
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: "accent" | "verified" | "neutral";
}) {
  const tones: Record<string, string> = {
    accent: "bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-[var(--color-accent)]/25",
    verified: "bg-[var(--color-verified-soft)] text-[var(--color-verified)] border-[var(--color-verified)]/25",
    neutral: "bg-white/5 text-[var(--color-text-muted)] border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}
