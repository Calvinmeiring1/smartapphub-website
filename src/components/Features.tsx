import { ShieldCheck, Lock, MessageCircle } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Verified sitters",
    description:
      "Every sitter completes ID verification before they can accept a booking, so you know exactly who's caring for your pet.",
  },
  {
    icon: <Lock size={20} />,
    title: "Secure booking",
    description:
      "Pay and book through the app with encrypted, secure payments — your card details are never shared with the sitter.",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "Stay connected",
    description:
      "Message your sitter directly and get photo updates while you're away, so you're never left wondering.",
  },
];

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Why owners choose Sitters
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Everything you need to feel confident leaving your pet in someone else's care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} index={i} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
