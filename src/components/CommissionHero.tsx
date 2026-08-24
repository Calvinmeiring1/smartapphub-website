import { Mail } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import Badge from "./Badge";
import Reveal from "./Reveal";

export default function CommissionHero() {
  return (
    <div className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      <Container className="text-center">
        <Reveal trigger="mount" y={16} className="mx-auto max-w-2xl">
          <Badge>Now taking on new projects</Badge>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Have an app idea?{" "}
            <span className="text-[var(--color-accent)]">Let's build it.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-muted)]">
            SmartAppHub builds native Android and iOS apps end to end,
            from a first idea to a real product on the App Store and Google
            Play. Same team that builds Sitters, working on your project.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href="#contact"
              variant="primary"
            >
              Get in touch
            </Button>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
