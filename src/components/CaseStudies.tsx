import { MapPin, ShieldCheck, CreditCard } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

const features = [
  { icon: MapPin, title: "Walk tracking", description: "Background location updates let owners follow walk progress in the app." },
  { icon: ShieldCheck, title: "Identity verification", description: "Selfie and document verification form part of the sitter onboarding journey." },
  { icon: CreditCard, title: "Booking and payments", description: "Booking, payment and sitter payout flows connect both sides of the marketplace." },
];
const decisions = [
  ["Separate user journeys", "Owners manage pets and post care requests; sitters handle their profiles and opportunities. Each role gets an interface built around its tasks."],
  ["Native mobile interfaces", "Android uses Kotlin and Jetpack Compose. The iOS version uses Swift and SwiftUI, with interfaces adapted to each platform."],
  ["Connected backend", "Firebase supports authentication and shared app data, connecting profiles, requests and bookings across the user journeys."],
];

export default function CaseStudies() {
  return (
    <Section id="case-studies" className="border-t border-[var(--color-border)]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge tone="verified">Our own product · Development case study</Badge>
          <h2 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">Sitters: building a pet and house sitting marketplace</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">From owner and sitter journeys to bookings, verification and payments, Sitters shows how Calvin brings the parts of a mobile product together.</p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <figure className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[#dff4f4] px-6 py-8"><img src="/work/sitters-booking.png" alt="Actual Sitters Android booking screen with three care services" width={1080} height={2340} loading="lazy" className="mx-auto w-full max-w-[260px] rounded-3xl border-[6px] border-[#142b30] shadow-xl" /><figcaption className="mx-auto mt-5 max-w-sm text-center text-sm text-[#294a50]">Actual Android app. The owner booking journey starts by choosing the type of care.</figcaption></figure>
          <div className="space-y-7">
            <div><h3 className="font-display text-2xl font-semibold text-white">The problem</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Owners need a way to arrange pet and house care, while sitters need to manage requests and bookings. The product brings these journeys into one app, with communication and verification built into the process.</p></div>
            <div><h3 className="font-display text-2xl font-semibold text-white">Calvin’s role</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Sitters is a SmartAppHub product, developed by Calvin. His work spans the app interface, native Android development, the iOS version, Firebase backend integration and store submission.</p></div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">What we built</h3>
              <ul className="mt-4 space-y-4">{features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]"><Icon size={18} aria-hidden="true" /></div><div><h4 className="font-semibold text-white">{title}</h4><p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{description}</p></div></li>
              ))}</ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{decisions.map(([title, text]) => <Card key={title}><h3 className="font-display text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p></Card>)}</div>
        <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-white">Launch status</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Android is available on Google Play. Sitters for iOS is built and awaiting App Store approval.</p>
          <a href="https://play.google.com/store/apps/details?id=com.smartapphub.thesitters" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-12 items-center text-sm font-semibold text-[var(--color-accent)] underline">View Sitters and its reviews on Google Play</a>
          <div className="mt-5 flex flex-wrap gap-3"><Button href="#contact">Discuss a similar app</Button><Button href="/sitters" variant="secondary">Explore Sitters features</Button></div>
        </div>
      </Container>
    </Section>
  );
}
