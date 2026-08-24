import { Link } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Reveal margin="100px">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              A small studio, built deliberately
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--color-text-muted)]">
              SmartAppHub started as one developer building apps he wanted to
              exist from the code up. It's still small by design, but no
              longer solo: SmartAppHub is now run as a husband and wife studio
              from South Africa, pairing <Link to="/commission" className="text-white hover:text-[var(--color-accent)] transition-colors">custom app commissions</Link> with <Link to="/graphic-design" className="text-white hover:text-[var(--color-accent)] transition-colors">graphic design</Link>.
            </p>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 text-left">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">Our Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                We build tools that solve real-world gaps. Whether it's helping pet owners find trust through <Link to="/sitters" className="text-white hover:text-[var(--color-accent)]">Sitters</Link> or helping a business launch their first MVP, our goal is to ship software that feels intentional, secure, and permanent.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-white">How we work</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                We don't do "templates." Every project starts with a design-first approach, ensuring the brand identity and user experience are solid before a single line of code is written. We favor quality over quantity, taking on a limited number of commissions to ensure each gets our full focus.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
