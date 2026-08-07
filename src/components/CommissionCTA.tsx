import { Mail } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CommissionCTA() {
  return (
    <Section id="contact">
      <Container>
        <Reveal
          margin="-80px"
          className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-[600px] -translate-x-1/2 bg-[var(--color-accent)]/10 blur-[100px]" />

          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to build something?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--color-text-muted)]">
            Send a quick note about your idea and we'll get back to you to
            set up a discovery call.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href="mailto:smartapphubdev@gmail.com?subject=App%20project%20enquiry"
              variant="primary"
              icon={<Mail size={16} />}
            >
              smartapphubdev@gmail.com
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
