import { useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";

export default function GraphicDesign() {
  useEffect(() => {
    document.title = "Graphic Design | SmartAppHub";
  }, []);

  return (
    <Section className="pt-36">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Graphic Design</h1>
        <p className="mt-6 text-lg text-[var(--color-text-muted)]">Coming soon</p>
      </Container>
    </Section>
  );
}
