import { Mail } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CompanyHero() {
  return (
    <div className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      <Container className="text-center">
        <Reveal trigger="mount" y={16} className="mx-auto max-w-2xl">
          <img src="/logo-icon.png" alt="SmartAppHub" className="mx-auto h-20 w-20" />

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Building apps that solve{" "}
            <span className="text-[var(--color-accent)]">real-world problems.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-muted)]">
            SmartAppHub is a small, independent studio based in Pretoria, South
            Africa. We design and build focused apps end-to-end — starting
            with Sitters, our trusted pet & house sitting marketplace.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/sitters" variant="primary">
              Explore Sitters
            </Button>
            <Button href="mailto:smartapphubdev@gmail.com" variant="secondary" icon={<Mail size={16} />}>
              Get in touch
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
