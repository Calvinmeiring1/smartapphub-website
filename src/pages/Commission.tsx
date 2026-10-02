import DevelopmentForm from "../components/DevelopmentForm";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CommissionHero from "../components/CommissionHero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import AppEstimator from "../components/AppEstimator";
import ProjectQuestions from "../components/ProjectQuestions";
import Section from "../components/Section";
import Container from "../components/Container";
import { Code, Terminal, Cpu, Database } from "lucide-react";
import { useState, useCallback } from "react";

const commissionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom App Development",
  "provider": {
    "@type": "LocalBusiness",
    "name": "SmartAppHub",
    "image": "https://smartapphub.co.za/apple-touch-icon.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "South Africa",
      "addressLocality": "Pretoria",
      "addressRegion": "Gauteng"
    }
  },
  "description": "Native Android and iOS apps, from concept to launch.",
  "areaServed": [
    { "@type": "Country", "name": "South Africa" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United States" }
  ],
  "serviceType": "Software Development",
  "offers": {
    "@type": "Offer",
    "description": "Custom app development quotes available upon request."
  }
};

const technologies = [
  { category: "Mobile", tools: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "React Native", "Flutter"] },
  { category: "Backend & Data", tools: ["Firebase", "Python", "SQL", "Cloud Functions", "Firestore"] },
  { category: "Design & UX", tools: ["Figma", "Adobe Creative Suite", "UX Prototyping"] },
];

function TechStackSection() {
  const allTools = technologies.flatMap(t => t.tools);
  // Duplicate for seamless loop
  const displayTools = [...allTools, ...allTools, ...allTools];

  return (
    <Section className="border-t border-[var(--color-border)] overflow-hidden">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl text-shimmer">
            Our Tech Stack
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--color-text-muted)]">
            We leverage modern, industry-standard technologies to build scalable applications.
          </p>
        </div>
      </Container>

      <div className="mt-16 flex whitespace-nowrap overflow-hidden py-10">
        <div className="animate-marquee flex gap-12 items-center px-6">
          {displayTools.map((tool, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-6xl font-bold text-white/5 hover:text-[var(--color-accent)]/20 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function Commission() {
  const [estimateSummary, setEstimateSummary] = useState("");

  const handleEstimateChange = useCallback((total: number, summary: string) => {
    setEstimateSummary(summary ? `Estimated Price: R${total.toLocaleString()}\n\nSelections:\n${summary}` : "");
  }, []);

  return (
    <div className="relative min-h-screen">
      <SEO
        title="App Development in Pretoria | SmartAppHub"
        description="Custom Android and iOS app development from Pretoria, serving businesses across South Africa. Work directly with Calvin from idea to launch."
        canonical="https://smartapphub.co.za/commission"
      />
      <StructuredData data={commissionSchema} />

      {/* Background Logic Flow */}
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-20">
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent animate-scan" />
        <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent animate-scan" style={{ animationDelay: '3s', animationDuration: '12s' }} />
      </div>

      {/* Code Snippet Easter Egg */}
      <div className="pointer-events-none fixed inset-0 -z-20 flex items-center justify-center overflow-hidden animate-code select-none opacity-20">
        <pre className="text-[12vw] font-bold text-[var(--color-text-muted)] leading-none tracking-tighter opacity-20">
          {`fun build() {\n  val idea = get()\n  launch(idea)\n}`}
        </pre>
      </div>

      {/* Floating Engineering Icons */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <Code className="absolute left-[5%] top-[20%] text-[var(--color-accent)] opacity-10 alive-float h-24 w-24" strokeWidth={0.5} />
        <Terminal className="absolute right-[8%] top-[40%] text-white opacity-10 alive-float h-32 w-32" style={{ animationDelay: '2s' }} strokeWidth={0.5} />
        <Cpu className="absolute left-[10%] bottom-[15%] text-[var(--color-accent)] opacity-10 alive-float h-40 w-40" style={{ animationDelay: '4s' }} strokeWidth={0.5} />
        <Database className="absolute right-[5%] bottom-[10%] text-white opacity-5 alive-float h-28 w-28" style={{ animationDelay: '3s' }} strokeWidth={0.5} />
      </div>

      <CommissionHero />
      <Services />
      <TechStackSection />
      <CaseStudies />
      <Process />
      <AppEstimator onEstimateChange={handleEstimateChange} />
      <ProjectQuestions />
      <DevelopmentForm estimateSummary={estimateSummary} />
    </div>
  );
}
