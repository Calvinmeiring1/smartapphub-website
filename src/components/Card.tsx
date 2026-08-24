import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-sm p-8 transition-all duration-300 ${
        hover ? "hover:-translate-y-2 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface-hover)]/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
