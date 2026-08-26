import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CommissionHero from "../components/CommissionHero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import Section from "../components/Section";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { ArrowRight, Loader2, CheckCircle2, Mail, Code, Terminal, Cpu, Database } from "lucide-react";
import { useState } from "react";
import { getDb } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

function CommissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "New App Development",
    details: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const db = await getDb();
      await addDoc(collection(db, "app_inquiries"), {
        ...formData,
        status: "new",
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", interest: "New App Development", details: "" });
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      alert(`Error: ${error.message || "Something went wrong"}. Please try again or use email/WhatsApp.`);
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
            Tell us about your app idea using the form below, or reach out directly.
          </p>
        </Reveal>

        <form onSubmit={handleSubmit} className="mt-16 space-y-12">
          {isSuccess ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center space-y-4 py-12 rounded-2xl border border-[var(--color-verified-soft)] bg-[var(--color-verified-soft)]/5 text-center">
                <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
                <h3 className="text-xl font-display font-bold text-white">Project Enquiry Sent!</h3>
                <p className="text-[var(--color-text-muted)] max-w-sm">
                  Thank you for reaching out. We'll review your details and get back to you shortly.
                </p>
                <button
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
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-white placeholder:text-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-white placeholder:text-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">I'm interested in</label>
                  <select
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer"
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
                <label className="block text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the app you want to build, the problems it solves, or your specific requirements..."
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-white placeholder:text-[var(--color-text-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
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

                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Or reach out via</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/27660554819"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] text-white hover:bg-[var(--color-surface-hover)] transition-colors"
                      title="WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                    <a
                      href="mailto:smartapphubdev@gmail.com?subject=App%20project%20enquiry"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] text-white hover:bg-[var(--color-surface-hover)] transition-colors"
                      title="Direct Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </Container>
    </Section>
  );
}

export default function Commission() {
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
      <CommissionForm />
    </div>
  );
}
