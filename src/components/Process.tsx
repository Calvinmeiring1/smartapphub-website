import { MessageSquare, FileText, Hammer, Rocket } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import ThreadLine from "./ThreadLine";

const steps = [
  { icon: MessageSquare, title: "Discovery call", description: "We talk through your idea, goals, and budget." },
  { icon: FileText, title: "Proposal & quote", description: "A clear scope, timeline, and fixed quote before work starts." },
  { icon: Hammer, title: "Build", description: "Regular check-ins as your app comes together, phase by phase." },
  { icon: Rocket, title: "Launch & support", description: "Your app goes live, with support for updates after." },
];

export default function Process() {
  return (
    <Section id="process" className="border-y border-[var(--color-border)]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">From first email to a live app, in four stages.</p>
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
                className="group relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-bg)] text-[var(--color-accent)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent)] group-hover:shadow-[0_0_20px_rgba(91,127,255,0.3)]">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white transition-colors group-hover:text-[var(--color-accent)]">{step.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
