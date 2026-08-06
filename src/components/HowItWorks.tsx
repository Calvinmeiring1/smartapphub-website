import { Search, ListChecks, CalendarCheck, Sofa } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";
import Section from "./Section";

const steps = [
  { icon: Search, title: "Search", description: "Tell us your dates and pet type." },
  { icon: ListChecks, title: "Choose", description: "Compare verified sitters nearby." },
  { icon: CalendarCheck, title: "Book", description: "Confirm and pay securely in-app." },
  { icon: Sofa, title: "Relax", description: "Get updates while you're away." },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-[var(--color-border)]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">How Sitters works</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">From search to relax, in four simple steps.</p>
        </div>

        <div className="relative mt-16">
          {/* Connecting thread — desktop only */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-border)] md:block">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-px bg-[var(--color-accent)]"
            />
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.25 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-bg)] text-[var(--color-accent)]">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
