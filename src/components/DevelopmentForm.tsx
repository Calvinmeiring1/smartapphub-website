import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import ContactLinks from "./ContactLinks";
import Reveal from "./Reveal";
import { getDb } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

export default function DevelopmentForm({ estimateSummary = "", website = false, general = false }: { estimateSummary?: string; website?: boolean; general?: boolean }) {
  const defaultInterest = website ? "Website Development" : "New App Development";
  const interests = general ? ["New App Development", "Website Development", "Graphic Design", "Wedding Stationery", "Other"] : website ? ["Website Development", "Website Redesign", "Landing Page", "Website Maintenance", "Other"] : commissionInterests;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: defaultInterest,
    details: ""
  });

  const design = ["Graphic Design", "Wedding Stationery"].includes(formData.interest);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const db = await getDb();
      await addDoc(collection(db, design ? "design_inquiries" : "app_inquiries"), {
        ...formData,
        estimateSummary: formData.interest.startsWith("Website") ? "" : estimateSummary,
        status: "new",
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", interest: defaultInterest, details: "" });
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
          <h2 className="font-display text-3xl font-semibold text-white text-center text-shimmer">{general ? "Tell us about your project" : "Start your project"}</h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-center">
            {general ? "Choose your service and share a short brief." : website ? "Tell Calvin about your website." : "Tell Calvin about your app idea."} We typically reply within 5 minutes and will discuss your requirements before preparing a quote.
          </p>
        </Reveal>

        {estimateSummary && !formData.interest.startsWith("Website") && (
          <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="font-semibold text-white">Your estimate is included with this enquiry</h3>
            <p className="mt-3 whitespace-pre-line text-sm text-[var(--color-text-muted)]">{estimateSummary}</p>
          </div>
        )}
        <form aria-busy={isSubmitting} onSubmit={handleSubmit} className="mt-8 space-y-6">
          {submitError && <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">{submitError}</p>}
          {isSuccess ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center space-y-4 py-12 rounded-2xl border border-[var(--color-verified-soft)] bg-[var(--color-verified-soft)]/5 text-center">
                <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
                <h3 className="text-xl font-display font-bold text-white">Project Enquiry Sent!</h3>
                <p className="text-[var(--color-text-muted)] max-w-sm">
                  Thank you for reaching out. {design ? "Dominique" : "Calvin"} will review your details and get back to you. We typically reply within 5 minutes.
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
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
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
                    {interests.map(interest => (
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
                  placeholder={general ? "What would you like to create? Tell us your goals and any preferred launch date..." : website ? "Tell us about your business, pages and features you need, your preferred launch date, and any existing website..." : "Tell us about your app, your audience and the features you need..."}
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

                <ContactLinks design={design} />
              </div>
            </>
          )}
        </form>
      </Container>
    </Section>
  );
}

