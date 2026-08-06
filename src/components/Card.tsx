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
      className={`rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-sm p-8 ${
        hover ? "transition-colors duration-300 hover:border-white/15 hover:bg-[var(--color-surface-hover)]/80" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
