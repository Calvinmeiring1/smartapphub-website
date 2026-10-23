import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";

const countries = [
  { flag: "🇿🇦", name: "South Africa" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
];

export default function Countries() {
  return (
    <Section id="countries">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Available in {countries.length} countries</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Sitters for iPhone and Android is available in these regions. Payment and sitter settlement availability depend on the country and provider. See our payment details for the proposed Paystack arrangement.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {countries.map((country, i) => (
            <Reveal
              key={country.name}
              margin="0px"
              scale={0.95}
              y={0}
              delay={i * 0.08}
              className="flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-5 py-3"
            >
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm font-medium text-white">{country.name}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
