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
        title="SmartAppHub — App Development Studio | Sitters, Custom Apps & Design"
        description="SmartAppHub is a boutique app development studio. We build Sitters, alongside custom app development and graphic design commissions."
      />
      <CompanyHero />
      <About />
      <Team />
      <WhyUs />
      <SittersFlagshipSection />
    </>
  );
}
