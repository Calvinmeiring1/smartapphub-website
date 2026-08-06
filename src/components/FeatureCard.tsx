import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="h-full">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          {icon}
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{description}</p>
      </Card>
    </motion.div>
  );
}
