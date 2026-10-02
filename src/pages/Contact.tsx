import { Link } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import SEO from "../components/SEO";
import ContactLinks from "../components/ContactLinks";

export default function Contact() {
  return (
    <>
      <SEO title="Discuss Your Project | SmartAppHub" description="Contact Calvin for app and website development or Dominique for graphic design and wedding stationery. Based in Pretoria and working remotely with clients across South Africa." canonical="https://smartapphub.co.za/contact" />
      <Section className="pt-28 sm:pt-36">
        <Container>
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Discuss your project</h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">Based in Pretoria, we work remotely with clients across South Africa. Choose the service you need and speak directly with the person creating your work. We typically reply within 5 minutes.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <p className="text-sm text-[var(--color-accent)]">Calvin Meiring · Developer</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">App development</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">Android and iOS apps, backends, payments, UI/UX and ongoing support. Tell us what you want to build and who it is for.</p>
              <Link to="/commission#contact" className="my-6 inline-flex min-h-12 items-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white">Send an app project brief</Link>
              <ContactLinks />
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <p className="text-sm text-[var(--color-accent)]">Calvin Meiring · Developer</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">Website development</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">Business websites, landing pages and redesigns. Share your business, the pages you need and the goals for your site.</p>
              <Link to="/website-development#contact" className="my-6 inline-flex min-h-12 items-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white">Send a website brief</Link>
              <ContactLinks />
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <p className="text-sm text-[var(--color-accent)]">Dominique Meiring · Designer</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">Graphic design</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">Business graphics, social media assets, print-ready artwork and wedding stationery. Digital files supplied; printing excluded.</p>
              <Link to="/graphic-design#contact" className="my-6 inline-flex min-h-12 items-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white">Send a design project brief</Link>
              <ContactLinks design />
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-[var(--color-border)] p-6">
            <h2 className="font-display text-xl font-semibold text-white">Need help with Sitters or a mini app?</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">Email <a href="mailto:smartapphubdev@gmail.com?subject=Product%20support" className="break-all text-[var(--color-accent)] underline">smartapphubdev@gmail.com</a> with the app name and a description of the issue. You can also WhatsApp Calvin using the link above.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
