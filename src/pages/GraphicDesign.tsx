import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Container from "../components/Container";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Card from "../components/Card";
import { Palette, PenTool, Image as ImageIcon, FileText, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const graphicDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Graphic Design Services",
  "provider": {
    "@type": "Organization",
    "name": "SmartAppHub"
  },
  "description": "Professional graphic design services including branding, custom stationery, and digital assets.",
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
    description: "Bespoke wedding invitations, letterheads, and business cards designed to leave a lasting impression."
  },
  {
    icon: PenTool,
    title: "Digital Assets",
    description: "Custom social media graphics, website assets, and digital posters tailored for your online presence."
  },
  {
    icon: ImageIcon,
    title: "Print Media",
    description: "High-quality designs for physical posters, banners, and marketing materials ready for professional printing."
  }
];

const weddingPackages = [
  {
    name: "Full Wedding Package",
    price: "R2300",
    description: "Our complete digital suite for the perfect wedding experience.",
    features: ["All 10 Digital Wedding Services", "2 Custom Wedding Apps", "Priority Support", "Direct consultation"],
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
    features: ["1 Custom App", "Choice of 5 Digital Services", "Direct consultation"]
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Full Wedding Package",
    details: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "design_inquiries"), {
        ...formData,
        status: "new",
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", interest: "Full Wedding Package", details: "" });
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      alert(`Error: ${error.message || "Something went wrong"}. Please try again or use WhatsApp.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Graphic Design Services | Branding & Custom Design | SmartAppHub"
        description="SmartAppHub provides professional graphic design services, specializing in branding, posters, and custom wedding stationery. Based in South Africa."
        canonical="https://smartapphub.co.za/graphic-design"
      />
      <StructuredData data={graphicDesignSchema} />
      <Section className="pt-36">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Graphic Design</h1>
            <p className="mt-6 text-lg text-[var(--color-text-muted)]">
              We pair software engineering with professional design to create cohesive, beautiful experiences. From your first logo to your wedding day stationery, we handle the creative details so you don't have to.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <Card hover className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <service.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{service.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-24">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white">Wedding Packages</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">Bundled digital solutions to make your wedding planning seamless and affordable.</p>
            </Reveal>

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
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white">Individual Digital Wedding Services</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">A-la-carte options for specific digital wedding needs.</p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {weddingServices.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <div className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 p-5 transition-colors hover:bg-[var(--color-bg)]/50">
                    <div>
                      <h4 className="font-medium text-white">{item.name}</h4>
                      {item.note && <p className="text-xs text-[var(--color-accent)] mt-0.5">{item.note}</p>}
                    </div>
                    <span className="font-display font-semibold text-white">{item.price}</span>
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

          <div className="mt-32 max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-white text-center">Start your project</h2>
              <p className="mt-4 text-[var(--color-text-muted)] text-center">
                Contact <strong>Dominique Meiring</strong> using the form below or via WhatsApp.
              </p>
            </Reveal>

            <form onSubmit={handleSubmit} className="mt-16 space-y-12">
              {isSuccess ? (
                <Reveal>
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 rounded-2xl border border-[var(--color-verified-soft)] bg-[var(--color-verified-soft)]/5 text-center">
                    <CheckCircle2 size={48} className="text-[var(--color-verified)]" />
                    <h3 className="text-xl font-display font-bold text-white">Enquiry Sent!</h3>
                    <p className="text-[var(--color-text-muted)] max-w-sm">
                      Thank you for reaching out. Dominique will get back to you as soon as possible.
                    </p>
                    <button
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
                        {weddingPackages.map(p => <option key={p.name} value={p.name} className="bg-[var(--color-bg)]">{p.name}</option>)}
                        <option value="Custom Stationery" className="bg-[var(--color-bg)]">Custom Stationery</option>
                        <option value="Brand Identity" className="bg-[var(--color-bg)]">Brand Identity</option>
                        <option value="Digital Assets" className="bg-[var(--color-bg)]">Digital Assets</option>
                        <option value="Other" className="bg-[var(--color-bg)]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Tell me more about what you are looking for</label>
                    <textarea
                      rows={4}
                      placeholder="A few details about what you have in mind..."
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

                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">Or reach out via</span>
                      <a
                        href="https://wa.me/27662070280"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] text-white hover:bg-[var(--color-surface-hover)] transition-colors"
                        title="WhatsApp"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </a>
                    </div>
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
