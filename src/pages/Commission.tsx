import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CommissionHero from "../components/CommissionHero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import CommissionCTA from "../components/CommissionCTA";
import Section from "../components/Section";
import Container from "../components/Container";

const commissionSchema = {
  // ... (keeping schema as is)
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "App Development Commission",
  "provider": {
    "@type": "Organization",
    "name": "SmartAppHub"
  },
  "description": "Commission a custom native Android or iOS app. We build products from idea to App Store launch.",
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "serviceType": "Software Development"
};

const technologies = [
  { category: "Mobile", tools: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "React Native", "Flutter"] },
  { category: "Backend & Data", tools: ["Firebase", "Python", "SQL", "Cloud Functions", "Firestore"] },
  { category: "Design & UX", tools: ["Figma", "Adobe Creative Suite", "UX Prototyping"] },
];

function TechStackSection() {
  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Our Tech Stack
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              We leverage modern, industry-standard technologies to build scalable and maintainable applications. From native performance to cross-platform efficiency, we choose the right tool for your specific goal.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {technologies.map((tech) => (
              <div key={tech.category} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/50 p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  {tech.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {tech.tools.map((tool) => (
                    <li key={tool} className="text-sm text-white">{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function Commission() {
  return (
    <>
      <SEO
        title="Commission an App | Custom Mobile Development | SmartAppHub"
        description="Have an app idea? SmartAppHub builds custom native Android and iOS apps end to end. Get a professional, production-ready app for your business using Kotlin, Swift, Python, and SQL."
        canonical="https://smartapphub.co.za/commission"
      />
      <StructuredData data={commissionSchema} />
      <CommissionHero />
      <Services />
      <TechStackSection />
      <CaseStudies />
      <Process />
      <CommissionCTA />
    </>
  );
}
