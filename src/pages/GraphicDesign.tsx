import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Container from "../components/Container";
import Section from "../components/Section";

const graphicDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Graphic Design Services",
  "provider": {
    "@type": "Organization",
    "name": "SmartAppHub"
  },
  "description": "Professional graphic design services including branding, custom stationery, and digital assets.",
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "serviceType": "Graphic Design"
};

export default function GraphicDesign() {
  return (
    <>
      <SEO
        title="Graphic Design Services | Branding & Custom Design | SmartAppHub"
        description="SmartAppHub provides professional graphic design services, specializing in branding, posters, and custom wedding stationery. Based in South Africa."
        canonical="https://smartapphub.co.za/graphic-design"
      />
      <StructuredData data={graphicDesignSchema} />
      <Section className="pt-36">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Graphic Design</h1>
          <p className="mt-6 text-lg text-[var(--color-text-muted)]">Coming soon: A showcase of our branding and design work, including custom stationery and posters.</p>
        </Container>
      </Section>
    </>
  );
}
