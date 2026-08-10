import { useLiveStats } from "../hooks/useLiveStats";
import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import About from "../components/About";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import FeaturedAppCard from "../components/FeaturedAppCard";
import PhoneMockup from "../components/PhoneMockup";
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
  const { liveStats } = useLiveStats();

  return (
    <Section>
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
          Our flagship app
        </h2>
        <div className="mt-12">
          <FeaturedAppCard
            eyebrow="Live now"
            name="Sitters"
            description="Trusted pet & house sitting marketplace. Find verified sitters, book securely, and keep your pets comfortable at home while you're away."
            stats={[
              { value: liveStats.users, suffix: "+", label: "Users" },
              { value: liveStats.sitters, suffix: "+", label: "Sitters" },
              { value: liveStats.countries, label: "Countries" },
            ]}
            href="/sitters"
            visual={<PhoneMockup />}
          />
        </div>
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
