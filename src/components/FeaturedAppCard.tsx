import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Badge from "./Badge";

type FeaturedAppCardProps = {
  eyebrow: string;
  name: string;
  description: string;
  stats: { value: string; label: string }[];
  href: string;
  visual: ReactNode;
  reverse?: boolean;
};

export default function FeaturedAppCard({
  eyebrow,
  name,
  description,
  stats,
  href,
  visual,
  reverse = false,
}: FeaturedAppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden !p-0">
        <div
          className={`grid items-center gap-10 p-8 sm:p-12 md:grid-cols-2 md:gap-12 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <Badge tone="verified">{eyebrow}</Badge>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">{name}</h3>
            <p className="mt-3 max-w-md text-[var(--color-text-muted)]">{description}</p>

            <div className="mt-6 flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs text-[var(--color-text-faint)]">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to={href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-transform hover:translate-x-0.5"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex justify-center">{visual}</div>
        </div>
      </Card>
    </motion.div>
  );
}
