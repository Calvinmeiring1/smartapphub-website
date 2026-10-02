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
import ContactLinks from "../components/ContactLinks";
import Reveal from "../components/Reveal";
import { ArrowRight, Loader2, CheckCircle2, Code, Terminal, Cpu, Database } from "lucide-react";
import { useState, useCallback } from "react";
import { getDb } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const commissionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Mobile App Development",
  "provider": {
    "@type": "LocalBusiness",
    "name": "SmartAppHub",
    "image": "https://smartapphub.co.za/apple-touch-icon.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "South Africa"
    }
  },
  "description": "Professional custom native Android (Kotlin) and iOS (Swift) application development. We build scalable mobile solutions from concept to launch.",
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

const commissionInterests = [
  "New App Development",
  "Android App (Kotlin)",
  "iOS App (Swift)",
  "Cross-platform App",
  "Backend & API Development",
  "App Design & UI/UX",
  "Maintenance & Updates",
  "Other"
];

function CommissionForm({ estimateSummary }: { estimateSummary: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "New App Development",
    details: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const db = await getDb();
      await addDoc(collection(db, "app_inquiries"), {
        ...formData,
        estimateSummary,
        status: "new",
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", interest: "New App Development", details: "" });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setSubmitError("Your enquiry could not be sent. Your details are still here. Please try again or contact us via WhatsApp or email below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="border-t border-[var(--color-border)]">
      <Container className="max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-white text-center text-shimmer">Start your project</h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-center">
            Tell Calvin about your app idea. We typically reply within 5 minutes and will discuss your requirements before preparing a quote.
          </p>
        </Reveal>

        {estimateSummary && (
          <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="font-semibold text-white">Your estimate is included with this enquiry</h3>
            <p className="mt-3 whitespace-pre-line text-sm text-[var(--color-text-muted)]">{estimateSummary}</p>
          </div>
        )}
        <form aria-busy={isSubmitting} onSubmit={handleSubmit} className="mt-16 space-y-12">
          {submitError && <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">{submitError}</p>}
          {isSuccess ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center space-y-4 py-12 rounded-2xl border border-[var(--color-verified-soft)] bg-[var(--color-verified-soft)]/5 text-center">
                <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
                <h3 className="text-xl font-display font-bold text-white">Project Enquiry Sent!</h3>
                <p className="text-[var(--color-text-muted)] max-w-sm">
                  Thank you for reaching out. Calvin will review your details and get back to you. We typically reply within 5 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-xs font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            </Reveal>
          ) : (
            <>
              <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
                <div className="space-y-4">
                  <label htmlFor="app-name" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">Name</label>
                  <input
                    id="app-name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="app-email" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">Email</label>
                  <input
                    id="app-email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="app-interest" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">I'm interested in</label>
                  <select
                    id="app-interest"
                    name="interest"
                    className="w-full bg-transparent border-b border-white/25 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer"
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                  >
                    {commissionInterests.map(interest => (
                      <option key={interest} value={interest} className="bg-[var(--color-bg)]">
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="app-details" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">Project Details</label>
                <textarea
                  id="app-details"
                  name="details"
                  rows={4}
                  placeholder="Tell us about the app you want to build, the problems it solves, or your specific requirements..."
                  className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <p className="text-sm text-[var(--color-text-muted)]">We use your details to respond to your enquiry. <a href="/privacy#website-enquiries" className="text-[var(--color-accent)] underline">Privacy information</a></p>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 rounded-sm bg-[#f2eadd] px-10 py-4 text-[10px] font-bold tracking-[0.2em] text-black uppercase transition-all hover:bg-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <ContactLinks />
              </div>
            </>
          )}
        </form>
      </Container>
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
        title="Commission an App | Custom Mobile Development | SmartAppHub"
        description="Have an app idea? SmartAppHub builds custom native Android and iOS apps end to end. Get a professional, production-ready app for your business using Kotlin, Swift, Python, and SQL."
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
      <CommissionForm estimateSummary={estimateSummary} />
    </div>
  );
}
