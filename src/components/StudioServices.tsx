import { Link } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";

export default function StudioServices() {
  return (
    <Section>
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-white">Two crafts, one studio</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-display text-2xl font-semibold text-white">App and website development</h3>
            <p className="mt-4 text-[var(--color-text-muted)]">Custom websites and Android or iOS apps, from your first idea through design, development and launch support.</p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">See how we built Sitters, our own pet and house sitting marketplace.</p>
            <Link to="/commission#services" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)]">Explore development services →</Link>
          </Card>
          <Card>
            <h3 className="font-display text-2xl font-semibold text-white">Graphic and digital design</h3>
            <p className="mt-4 text-[var(--color-text-muted)]">Business graphics, social media assets, print-ready artwork and wedding stationery, tailored to your brief.</p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">Explore stationery and digital artwork designed by Dominique.</p>
            <Link to="/graphic-design#portfolio" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)]">Explore our design work →</Link>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
