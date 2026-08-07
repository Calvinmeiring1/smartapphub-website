import { Smartphone, Apple, Database, CreditCard, Sparkles, LifeBuoy } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Reveal from "./Reveal";

const services = [
  {
    icon: Smartphone,
    title: "Android apps",
    description: "Native Android apps built with Kotlin and Jetpack Compose, from first prototype to a published Play Store listing.",
  },
  {
    icon: Apple,
    title: "iOS apps",
    description: "Swift & SwiftUI apps for iPhone — including porting an existing Android app to iOS, done for Sitters.",
  },
  {
    icon: Database,
    title: "Backend & infrastructure",
    description: "Firebase-powered backends: Firestore, Authentication, Storage, and Cloud Functions, built to scale with real users.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Secure in-app payment integration for South African businesses, including PayFast.",
  },
  {
    icon: Sparkles,
    title: "AI-powered features",
    description: "Smart search, recommendations, or image recognition using Google's Gemini API.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    description: "Bug fixes, updates, and new features after launch — not just a one-time build and goodbye.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">What we build</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            The same stack and craftsmanship behind Sitters, applied to your project.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} margin="-60px" delay={(i % 3) * 0.1}>
              <Card hover className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <service.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
