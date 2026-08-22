import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Container from "./Container";
import Section from "./Section";
import Button from "./Button";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

export default function DownloadCTA() {
  const [userCount, setUserCount] = useState<number | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "stats", "public"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setUserCount(data.users || 0);
      }
    });
    return unsub;
  }, []);

  return (
    <Section id="download">
      <Container>
        <Reveal
          margin="-80px"
          className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-[600px] -translate-x-1/2 bg-[var(--color-accent)]/10 blur-[100px]" />

          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Your pet deserves a sitter you can trust.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--color-text-muted)]">
            Join{" "}
            {userCount !== null ? (
              <AnimatedCounter value={userCount} suffix="+" />
            ) : (
              "our"
            )}{" "}
            owners and sitters already using Sitters across South Africa, the US, UK, Canada and Australia.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="https://play.google.com/store/apps/details?id=com.smartapphub.thesitters&pcampaignid=web_share" variant="primary">
              Download on Google Play
            </Button>
            <Button variant="secondary">Coming soon on App Store</Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
