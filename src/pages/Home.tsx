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
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl mb-12 text-shimmer">
          Our flagship app
        </h2>
        <SittersPromo />
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <SEO
        title="SmartAppHub | App Development & Graphic Design Studio"
        description="SmartAppHub is a boutique studio specializing in custom app development and graphic design. We build Sitters, alongside custom mobile apps and digital graphic design commissions."
      />

      {/* Background Atmosphere */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="alive-drift pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      <CompanyHero />
      <About />
      <Team />
      <WhyUs />
      <SittersFlagshipSection />
    </div>
  );
}
