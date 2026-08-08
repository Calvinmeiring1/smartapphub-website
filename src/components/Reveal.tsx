import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  trigger?: "view" | "mount";
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  margin?: string;
};

export default function Reveal({
  children,
  className = "",
  trigger = "view",
  delay = 0,
  y = 20,
  x = 0,
  scale,
  margin,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, margin });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (trigger !== "mount") return;
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [trigger]);

  const active = trigger === "mount" ? mounted : inView;
  const fromTransform = `translate(${x}px, ${y}px)${scale !== undefined ? ` scale(${scale})` : ""}`;
  const toTransform = `translate(0, 0)${scale !== undefined ? " scale(1)" : ""}`;

  return (
    <div
      ref={trigger === "view" ? ref : undefined}
      className={className}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? toTransform : fromTransform,
        transition: `opacity 0.45s ease-out ${delay}s, transform 0.45s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
