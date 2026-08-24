import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import About from "../components/About";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import SittersPromo from "../components/SittersPromo";
import SEO from "../components/SEO";

function SittersFlagshipSection() {
  return (
    <Section>
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl mb-12">
          Our flagship app
        </h2>
        <SittersPromo />
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="SmartAppHub | App Development & Graphic Design Studio"
        description="SmartAppHub is a boutique studio specializing in custom app development and graphic design. We build Sitters, alongside custom mobile apps and digital graphic design commissions."
      />
      <CompanyHero />
      <About />
      <Team />
      <WhyUs />
      <SittersFlagshipSection />
    </>
  );
}
