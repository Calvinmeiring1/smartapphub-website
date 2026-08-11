import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<string, string> = {
  primary:
    "bg-[var(--color-accent)] text-white hover:brightness-110 shadow-[0_0_0_1px_rgba(91,127,255,0.4)] hover:shadow-[0_0_24px_rgba(91,127,255,0.35)]",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] hover:border-white/20",
  ghost: "text-[var(--color-text-muted)] hover:text-white",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  download,
  target,
  rel,
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} download={download} target={target} rel={rel}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {icon}
    </button>
  );
}
