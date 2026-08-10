import { useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import StructuredData from "../components/StructuredData";

const graphicDesignSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Graphic Design | SmartAppHub",
  url: "https://smartapphub.co.za/graphic-design",
  description: "Graphic design services from SmartAppHub, coming soon for brands and projects that need polished visual identity and UI design.",
  inLanguage: "en-US"
};

export default function GraphicDesign() {
  useEffect(() => {
    document.title = "Graphic Design | SmartAppHub";
  }, []);

  return (
    <>
      <StructuredData data={graphicDesignSchema} />
      <Section className="pt-36">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Graphic Design</h1>
          <p className="mt-6 text-lg text-[var(--color-text-muted)]">Coming soon</p>
        </Container>
      </Section>
    </>
  );
}
