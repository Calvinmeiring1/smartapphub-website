import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import StudioServices from "../components/StudioServices";
import About from "../components/About";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import SittersPromo from "../components/SittersPromo";
import SEO from "../components/SEO";
import ScrollShowcase from "../components/ScrollShowcase";

function SittersFlagshipSection() {
  return (
    <Section>
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl mb-12 text-shimmer">
          Built by SmartAppHub: Sitters
        </h2>
        <SittersPromo />
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <SEO
        title="Software & Website Development in Pretoria | SmartAppHub"
        description="Pretoria-based software and design studio serving clients across South Africa. Custom Android and iOS apps, websites, business graphics and wedding stationery."
      />

      {/* Background Atmosphere */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="alive-drift pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      <CompanyHero />
      <ScrollShowcase />
      <StudioServices />
      <About />
      <Team />
      <WhyUs />
      <SittersFlagshipSection />
    </div>
  );
}
