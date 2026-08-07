import { useInView } from "../hooks/useInView";

export default function ThreadLine() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, margin: "-100px" });

  return (
    <div ref={ref} className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-border)] md:block">
      <div
        className="h-px bg-[var(--color-accent)]"
        style={{
          width: inView ? "100%" : "0%",
          transition: "width 1.4s ease-in-out",
        }}
      />
    </div>
  );
}
