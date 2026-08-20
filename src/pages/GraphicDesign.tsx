import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Container from "../components/Container";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Card from "../components/Card";
import { Palette, PenTool, Image as ImageIcon, FileText } from "lucide-react";

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
    icon: Palette,
    title: "Brand Identity",
    description: "Complete branding packages including logo design, color palettes, and typography that make your business stand out."
  },
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

export default function GraphicDesign() {
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

          <div className="mt-20 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/50 p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-white">Start a design project</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Looking for something specific? We take on a limited number of design commissions each month.
            </p>
            <div className="mt-8">
              <a
                href="mailto:smartapphubdev@gmail.com?subject=Graphic Design Inquiry"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Get in touch
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
