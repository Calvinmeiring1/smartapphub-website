import { ArrowRight, MapPin, ShieldCheck, CreditCard } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Reveal from "./Reveal";
import Badge from "./Badge";
import PhoneMockup from "./PhoneMockup";

const features = [
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Built a robust background location service that shares walk progress live with pet owners."
  },
  {
    icon: ShieldCheck,
    title: "Identity Verification",
    description: "Integrated secure selfie and document verification to ensure community trust."
  },
  {
    icon: CreditCard,
    title: "Secure Marketplace",
    description: "Handled complex payment flows and automated sitter payouts via secure payment gateways."
  }
];

export default function CaseStudies() {
  return (
    <Section id="case-studies" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Badge tone="verified">Featured Case Study</Badge>
          <h2 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">
            Sitters: From Concept to Global Launch
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Our flagship product demonstrates our ability to build complex, high-performance applications that users trust.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-4 py-8 sm:px-8">
            <PhoneMockup />
          </div>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-white">The Challenge</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  Building a two-sided marketplace for pet care requires more than just a list of names. It requires a system that handles real-time safety, international payment regulations, and deep trust through verified identities.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={0.2 + (i * 0.1)}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <feature.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="pt-4">
                <a
                  href="/sitters"
                  className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[var(--color-accent)] uppercase hover:text-white transition-colors"
                >
                  View Full Product Details
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
            <Card className="text-center py-10">
                <p className="font-display text-3xl font-bold text-white">5.0</p>
                <a href="https://play.google.com/store/apps/details?id=com.smartapphub.thesitters" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs uppercase tracking-widest text-[var(--color-text-muted)] underline">Google Play Rating</a>
            </Card>
            <Card className="text-center py-10">
                <p className="font-display text-3xl font-bold text-white">5</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-2">Countries Live</p>
            </Card>
            <Card className="text-center py-10">
                <p className="font-display text-3xl font-bold text-white">100%</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-2">Native Kotlin</p>
            </Card>
        </div>
      </Container>
    </Section>
  );
}
