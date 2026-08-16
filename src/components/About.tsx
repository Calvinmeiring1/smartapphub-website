import { Link } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section>
      <Container className="max-w-3xl text-center">
        <Reveal margin="100px">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            A small studio, built deliberately
          </h2>
          <p className="mt-6 leading-relaxed text-[var(--color-text-muted)]">
            SmartAppHub started as one developer building apps he wanted to
            exist from the code up. It's still small by design, but no
            longer solo: SmartAppHub is now run as a husband and wife studio
            from South Africa, pairing <Link to="/commission" className="text-white hover:text-[var(--color-accent)] transition-colors">custom app commissions</Link> with <Link to="/graphic-design" className="text-white hover:text-[var(--color-accent)] transition-colors">professional graphic design</Link>.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
            <Link to="/sitters" className="text-white hover:text-[var(--color-accent)] transition-colors">Sitters</Link> is our flagship product, but it's the first of several
            ideas in motion. We'd rather ship fewer things properly than
            everything at once.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
