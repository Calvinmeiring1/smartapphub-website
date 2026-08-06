import { useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import About from "../components/About";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import FeaturedAppCard from "../components/FeaturedAppCard";
import PhoneMockup from "../components/PhoneMockup";

export default function Home() {
  useEffect(() => {
    document.title = "SmartAppHub — Building apps that solve real-world problems";
  }, []);

  return (
    <>
      <CompanyHero />
      <About />
      <Team />
      <WhyUs />
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
                { value: "427+", label: "Users" },
                { value: "144+", label: "Sitters" },
                { value: "5", label: "Countries" },
              ]}
              href="/sitters"
              visual={<PhoneMockup />}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
