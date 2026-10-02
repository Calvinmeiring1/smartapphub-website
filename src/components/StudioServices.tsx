import { Link } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";

export default function StudioServices() {
  return (
    <Section>
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-white">Two crafts, one studio</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="font-display text-2xl font-semibold text-white">App development</h3>
            <p className="mt-4 text-[var(--color-text-muted)]">Custom Android or iOS apps, from your first idea through design, development and launch support.</p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">See how we built Sitters, our own pet and house sitting marketplace.</p>
            <Link to="/commission#services" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)]">Explore app development →</Link>
          </Card>
          <Card>
            <h3 className="font-display text-2xl font-semibold text-white">Website development</h3>
            <p className="mt-4 text-[var(--color-text-muted)]">Business websites, landing pages and redesigns with clear content, responsive layouts and an easy way to enquire.</p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">Work directly with Calvin, from your first brief to launch.</p>
            <Link to="/website-development" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)]">Explore website development →</Link>
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
