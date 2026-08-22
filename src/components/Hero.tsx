import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import Badge from "./Badge";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const [countriesCount, setCountriesCount] = useState<number | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "stats", "public"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setCountriesCount(data.countries || 5);
      }
    });
    return unsub;
  }, []);

  return (
    <div className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Background atmosphere */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      <Container className="grid items-center gap-16 md:grid-cols-2 md:gap-8">
        <div className="animate-reveal">
          <Badge icon={<Sparkles size={12} />}>
            Now live in {countriesCount || 5} countries
          </Badge>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Trusted pet & house sitting,{" "}
            <span className="text-[var(--color-accent)]">made simple.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-muted)]">
            Find verified sitters, book securely, and keep your pets comfortable
            at home while you're away, across South Africa, the US, UK, Canada
            and Australia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#download" variant="primary">
              Download App
            </Button>
            <Button href="#how-it-works" variant="secondary" icon={<ArrowRight size={16} />}>
              See how it works
            </Button>
          </div>

          <p className="mt-6 text-xs text-[var(--color-text-faint)]">
            Free for pet owners · No booking fees hidden
          </p>
        </div>

        <PhoneMockup />
      </Container>
    </div>
  );
}
