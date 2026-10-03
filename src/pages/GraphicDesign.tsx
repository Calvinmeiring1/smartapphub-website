import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Container from "../components/Container";
import ContactLinks from "../components/ContactLinks";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Card from "../components/Card";
import PortfolioGallery from "../components/PortfolioGallery";
import BusinessDesignExamples from "../components/BusinessDesignExamples";
import { PenTool, Image as ImageIcon, FileText, ArrowRight, Loader2, CheckCircle2, Layers, Palette, Sparkles } from "lucide-react";
import { useState, useMemo } from "react";
import { getDb } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const graphicDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Graphic Design Services",
  "provider": {
    "@type": "Organization",
    "name": "SmartAppHub"
  },
  "description": "Graphic design services including custom stationery and digital assets.",
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "serviceType": "Graphic Design"
};

const services = [
  {
    icon: FileText,
    title: "Custom Stationery",
    description: "Business cards, letterheads and coordinated stationery that give your business a consistent identity."
  },
  {
    icon: PenTool,
    title: "Digital Assets",
    description: "Custom social media graphics, website assets, and digital posters tailored for your online presence."
  },
  {
    icon: ImageIcon,
    title: "Print-ready Artwork",
    description: "Posters, banners and marketing artwork supplied as digital files ready for your printer. Printing is not included."
  }
];

const weddingPackages = [
  {
    name: "Full Wedding Package",
    price: "R2300",
    description: "Our complete digital suite for the perfect wedding experience.",
    features: ["All 10 Digital Wedding Services", "2 Mini Wedding Apps", "Priority Support", "Direct consultation"],
    highlight: true
  },
  {
    name: "Mini App Package",
    price: "R1800",
    description: "The perfect balance of digital utility and beautiful stationery.",
    features: ["2 Mini Apps", "Save the Date cards", "Wedding Invitations", "RSVP Notice cards", "QR Code card", "Seating Chart", "Direct consultation"]
  },
  {
    name: "Mix & Match Package",
    price: "R1250",
    description: "Flexibility for modern couples who want a digital edge.",
    features: ["1 Mini App", "Choice of 5 Digital Services", "Direct consultation"]
  },
  {
    name: "Little Budget Package",
    price: "R850",
    description: "Essential stationery for a beautiful, simple celebration.",
    features: ["Choice of 4 Digital Services", "Direct consultation"]
  },
  {
    name: "Custom Package",
    price: "Quoted",
    description: "Tailored exactly to your needs and specific requirements.",
    features: ["Bespoke service selection", "Quotation provided based on services selected", "Direct consultation"]
  }
];

const weddingServices = [
  { name: "Save the date cards", price: "R150" },
  { name: "Personalized wedding invitations", price: "R450" },
  { name: "RSVP notice cards", price: "R150" },
  { name: "Seating charts", price: "R200" },
  { name: "Wedding Game posters", price: "R300" },
  { name: "Menu Designs", price: "R150" },
  { name: "Welcome Wedding Signs", price: "R150" },
  { name: "Vow note cards", price: "R200" },
  { name: "Speech cards", price: "R200" },
  { name: "QR code posters", price: "FREE", note: "with purchase of the VowVault app on buy a mini app page" }
];

export default function GraphicDesign() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    details: ""
  });

  const selectService = (interest: string, detailText?: string) => {
    setFormData(prev => ({
      ...prev,
      interest,
      details: detailText ? [prev.details, `I am interested in ${detailText}.`].filter(Boolean).join("\n\n") : prev.details
    }));

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate a field of glitter
  const sparkles = useMemo(() => {
    return Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: 2 + Math.random() * 6
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const db = await getDb();
      await addDoc(collection(db, "design_inquiries"), {
        ...formData,
        status: "new",
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", interest: "", details: "" });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setSubmitError("Your enquiry could not be sent. Your details are still here. Please try again or contact us via WhatsApp or email below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Graphic Design Services | Custom Wedding & Digital Design | SmartAppHub"
        description="SmartAppHub provides graphic design services, specializing in posters and custom wedding stationery. Based in South Africa."
        canonical="https://smartapphub.co.za/graphic-design"
      />
      <StructuredData data={graphicDesignSchema} />
      <Section className="relative overflow-hidden pt-36">
        {/* Background Atmosphere */}
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="alive-drift pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

        {/* Random Tiny Glitter Sparkles */}
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="pointer-events-none absolute animate-glitter text-white opacity-0"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          >
            <div
              className="bg-white rounded-full shadow-[0_0_8px_white]"
              style={{ width: s.size, height: s.size }}
            />
          </div>
        ))}

        {/* Floating Decorative Elements */}
        <div className="pointer-events-none absolute right-[5%] top-[10%] z-20 alive-float opacity-40 text-blue-500 lg:right-[10%] lg:top-[15%] lg:opacity-50">
          <Palette className="h-24 w-24 lg:h-32 lg:w-32" strokeWidth={1} />
        </div>
        <div className="pointer-events-none absolute left-[2%] top-[30%] z-20 alive-float opacity-30 text-white lg:left-[5%] lg:top-[40%] lg:opacity-40" style={{ animationDelay: '1s' }}>
          <Layers className="h-20 w-20 lg:h-28 lg:w-28" strokeWidth={1} />
        </div>
        <div className="pointer-events-none absolute right-[2%] top-[60%] z-20 alive-float opacity-10 text-[var(--color-accent)] lg:opacity-20" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-16 w-16 lg:h-24 lg:w-24" strokeWidth={0.5} />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Graphic <span className="bg-gradient-to-r from-[var(--color-accent)] to-white bg-clip-text text-transparent">Design</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
                Work directly with Dominique on business graphics, social media assets, print-ready artwork and wedding stationery. All designs are supplied as digital files; printing is not included.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#business-design" className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white">Explore business design</a>
            <a href="#wedding-stationery" className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-white">Explore wedding stationery</a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <a href="#business-design" className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">For your business</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">A consistent, confident identity.</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Business stationery, social graphics and print-ready artwork built around your brief.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">Business design <ArrowRight size={16} /></span>
            </a>
            <a href="#wedding-stationery" className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">For your celebration</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">Details that belong together.</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Invitations, seating charts and matching stationery. Explore Dominique’s work and wedding packages.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">Wedding stationery <ArrowRight size={16} /></span>
            </a>
          </div>
          <section id="business-design" className="mt-20 border-t border-[var(--color-border)] pt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Business design</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">Make every touchpoint feel like you.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">Work with Dominique on graphics that carry your identity across social media, stationery and marketing artwork. We agree the formats, delivery date and revision scope before starting.</p>
            <BusinessDesignExamples />
          <div id="services" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <Card
                  hover
                  className="h-full group"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-black">
                    <service.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
                  <button type="button" onClick={() => selectService(service.title)} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                    Enquire about {service.title.toLowerCase()} <ArrowRight size={14} />
                  </button>
                </Card>
              </Reveal>
            ))}
          </div>
          </section>
          <section id="wedding-stationery" className="mt-20 border-t border-[var(--color-border)] pt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Wedding stationery</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">Designed for your day.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-text-muted)]">A collection of invitations, seating charts and matching digital artwork created by Dominique. Explore the designs, then choose a package or request a custom brief.</p>
            <a href="#packages" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">View wedding packages <ArrowRight size={16} /></a>
          <PortfolioGallery />
          </section>

          <div id="packages" className="mt-24">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white text-shimmer">Wedding Packages</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">Digital stationery packages for your wedding. Mini apps refer to VowVault (photo sharing) and Weddara (wedding planning).</p>
            </Reveal>

            <p className="mt-4 text-sm text-[var(--color-text-muted)]">Before you book, we confirm your brief, file formats, delivery date and revision scope. Digital files only; printing is excluded. <a href="/buy-mini-app" className="text-[var(--color-accent)] underline">Explore the included mini apps</a>.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {weddingPackages.map((pkg, i) => (
                <Reveal key={pkg.name} delay={i * 0.1}>
                  <Card className={`flex h-full flex-col border-2 ${pkg.highlight ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)]/10' : 'border-[var(--color-border)]'}`}>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold text-white">{pkg.price}</span>
                      </div>
                      <p className="mt-4 text-sm text-[var(--color-text-muted)]">{pkg.description}</p>
                      <ul className="mt-6 space-y-3">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start text-xs text-[var(--color-text-muted)]">
                            <span className="mr-2 text-[var(--color-accent)]">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => selectService(pkg.name)}
                        className="mt-8 w-full rounded-full border border-[var(--color-border)] py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black active:scale-95"
                      >
                        Select Package
                      </button>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="individual-services" className="mt-24">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white text-shimmer">Individual Digital Wedding Services</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">A-la-carte options for specific digital wedding needs.</p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {weddingServices.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 p-5 transition-all hover:bg-[var(--color-bg)]/50 hover:border-[var(--color-accent)]/30 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">{item.name}</h4>
                        {item.note && <p className="text-[10px] text-[var(--color-accent)] mt-0.5 leading-tight">{item.note}</p>}
                      </div>
                      <span className="font-display font-semibold text-white">{item.price}</span>
                    </div>
                    <button
                      onClick={() => selectService("Other", item.name)}
                      className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] min-h-11 transition-all hover:text-white"
                    >
                      Enquire about this <ArrowRight size={10} />
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              Please note: All graphic design services and packages are provided in digital format only. At this time, we do not offer printing services.
            </p>
          </div>

          <div id="contact" className="mt-32 max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-white text-center">Start your project</h2>
              <p className="mt-4 text-[var(--color-text-muted)] text-center">
                Contact <strong>Dominique Meiring</strong> for business design or wedding stationery. We typically reply within 5 minutes.
              </p>
            </Reveal>

            <form aria-busy={isSubmitting} onSubmit={handleSubmit} className="mt-16 space-y-12">
              {submitError && <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">{submitError}</p>}
              {isSuccess ? (
                <Reveal>
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 rounded-2xl border border-[var(--color-verified-soft)] bg-[var(--color-verified-soft)]/5 text-center">
                    <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
                    <h3 className="text-xl font-display font-bold text-white">Enquiry Sent!</h3>
                    <p className="text-[var(--color-text-muted)] max-w-sm">
                      Thank you for reaching out. Dominique will review your brief and get back to you. We typically reply within 5 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 text-xs font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </Reveal>
              ) : (
                <>
                  <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
                    <div className="space-y-4">
                      <label htmlFor="design-name" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">Name</label>
                      <input
                        id="design-name"
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
                      <label htmlFor="design-email" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">Email</label>
                      <input
                        id="design-email"
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
                      <label htmlFor="design-interest" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">I'm interested in</label>
                      <select
                        id="design-interest"
                        name="interest"
                        required
                        className="w-full bg-transparent border-b border-white/25 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer"
                        value={formData.interest}
                        onChange={e => setFormData({ ...formData, interest: e.target.value })}
                      >
                        <option value="" disabled className="bg-[var(--color-bg)]">Select a service</option>
                        <option value="Business Branding" className="bg-[var(--color-bg)]">Business Branding</option>
                        <option value="Social Media Graphics" className="bg-[var(--color-bg)]">Social Media Graphics</option>
                        <option value="Print-ready Artwork" className="bg-[var(--color-bg)]">Print-ready Artwork</option>
                        {weddingPackages.map(p => <option key={p.name} value={p.name} className="bg-[var(--color-bg)]">{p.name}</option>)}
                        <option value="Custom Stationery" className="bg-[var(--color-bg)]">Custom Stationery</option>
                        <option value="Digital Assets" className="bg-[var(--color-bg)]">Digital Assets</option>
                        <option value="Other" className="bg-[var(--color-bg)]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="design-details" className="block text-xs font-bold tracking-[0.12em] text-[var(--color-text-muted)] uppercase">Tell me more about what you are looking for</label>
                    <textarea
                      id="design-details"
                      name="details"
                      rows={4}
                      placeholder="A few details about what you have in mind..."
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

                    <ContactLinks design />
                  </div>
                </>
              )}
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
