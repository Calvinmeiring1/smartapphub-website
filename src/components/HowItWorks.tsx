import { Search, ListChecks, CalendarCheck, Sofa } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import ThreadLine from "./ThreadLine";

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
          <ThreadLine />

          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                y={16}
                margin="-60px"
                delay={i * 0.25}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-bg)] text-[var(--color-accent)]">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
