import { Target, ShieldCheck, Rocket } from "lucide-react";
import Container from "./Container";
import Section from "./Section";

const values = [
  { icon: Target, title: "App & Design Studio", description: "Dedicated to Sitters, custom app commissions, and professional graphic design." },
  { icon: ShieldCheck, title: "Built to last", description: "Production infrastructure and secure backends — we don't build weekend projects." },
  { icon: Rocket, title: "Design-first focus", description: "Every app and commission is paired with professional branding and UX design." },
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
