import { ShieldCheck, Lock, UserCheck, Heart } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Reveal from "./Reveal";

const safetyPoints = [
  {
    icon: UserCheck,
    title: "ID Verification",
    description: "Every sitter completes a multi-step verification process, including government ID and selfie checks, before they can accept bookings."
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Transactions are encrypted and processed via PayFast. Funds are held securely and only released once the booking is completed."
  },
  {
    icon: ShieldCheck,
    title: "Verified Reviews",
    description: "Only owners who have completed a booking can leave a review, ensuring all feedback is authentic and based on real experiences."
  },
  {
    icon: Heart,
    title: "Support & Safety",
    description: "We actively monitor the platform and provide support to ensure a safe, reliable environment for every pet and homeowner."
  }
];

export default function SafetyTrust() {
  return (
    <Section id="safety" className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Safety is our top priority
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            We've built Sitters with trust at its core, so you can have peace of mind while you're away.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {safetyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.1}>
              <Card hover className="h-full border-dashed border-white/5 bg-transparent hover:border-white/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <point.icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {point.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-accent-soft)]/5 p-8 text-center sm:p-12">
           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] mb-6">
             <ShieldCheck size={32} />
           </div>
           <h3 className="font-display text-xl font-semibold text-white">Trust is earned, not given</h3>
           <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
             We understand that your pets are family and your home is your sanctuary. That's why we don't just provide a platform; we provide a community built on accountability and transparency.
           </p>
        </div>
      </Container>
    </Section>
  );
}
