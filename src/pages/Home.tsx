import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import About from "../components/About";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import SittersPromo from "../components/SittersPromo";
import StructuredData from "../components/StructuredData";
import SEO from "../components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SmartAppHub",
  "url": "https://smartapphub.co.za/",
  "logo": "https://smartapphub.co.za/logo-icon.png",
  "description": "SmartAppHub builds apps and marketplaces like Sitters to help businesses and communities launch faster.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "South Africa"
  },
  "sameAs": [
    "https://smartapphub.co.za/sitters"
  ]
};

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
        title="SmartAppHub | Building apps that solve real world problems"
        description="SmartAppHub builds focused apps and marketplaces like Sitters to help businesses and communities launch faster. Based in South Africa."
      />
      <StructuredData data={homeSchema} />
      <CompanyHero />
      <About />
      <Team />
      <WhyUs />
      <SittersFlagshipSection />
    </>
  );
}
