import { Target, ShieldCheck, Rocket } from "lucide-react";
import Container from "./Container";
import Section from "./Section";

const values = [
  { icon: Target, title: "Apps, websites & design", description: "One studio for your software, website and visual communication." },
  { icon: ShieldCheck, title: "Built to last", description: "Clear scope, careful implementation and support agreed before we start." },
  { icon: Rocket, title: "Design-first focus", description: "We plan the layout and user experience around the people using your product." },
];

export default function WhyUs() {
  return (
    <Section className="border-y border-[var(--color-border)]">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="text-center sm:text-left">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] sm:mx-0">
                <v.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{v.title}</h3>
              <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{v.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
