import { Link } from "react-router-dom";
import { Globe, Smartphone, Search, MessageCircle, ArrowRight } from "lucide-react";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import SEO from "../components/SEO";
import DevelopmentForm from "../components/DevelopmentForm";

const services = [
  { icon: Globe, title: "Business websites", text: "A clear home for your services, your work and the information customers need before contacting you." },
  { icon: ArrowRight, title: "Landing pages", text: "A focused page for a product, service or campaign, with a clear next step for your visitors." },
  { icon: Smartphone, title: "Website redesigns", text: "Refresh an existing site with clearer content, a layout that works on phones and a simpler enquiry journey." },
  { icon: MessageCircle, title: "Enquiry flows", text: "Help customers reach you through contact forms, email and WhatsApp, with the integrations agreed for your project." },
];
const questions = [
  ["How much does a website cost?", "We quote each website based on its pages, design, content and functionality. Send your brief for a tailored quote. The app cost estimator is for applications, not business websites."],
  ["Do I need my content ready?", "Bring your business details, logo and any existing text or images. We will agree who supplies each item and whether you need additional design or content work before starting."],
  ["What about domains, hosting and maintenance?", "We agree the domain, hosting setup and any ongoing support before the build. Hosting, domain renewals and paid services are identified separately in your quote."],
  ["What will I receive?", "Your quote will set out the pages, features, revision scope, launch support and handover arrangements. We also agree how you will make future updates and who controls the domain and hosting accounts."],
  ["Can you work with me outside Pretoria?", "Yes. We are based in Pretoria and work remotely with clients across South Africa. Share your requirements by email, WhatsApp or the form below."],
];

export default function WebsiteDevelopment() {
  return (
    <>
      <SEO title="Website Development in Pretoria & South Africa | SmartAppHub" description="Custom business websites, landing pages and website redesigns. Work directly with Calvin in Pretoria, serving clients across South Africa. Request a tailored quote." canonical="https://smartapphub.co.za/website-development" />
      <div className="relative overflow-hidden border-b border-[var(--color-border)] bg-gradient-to-b from-[var(--color-accent-soft)] to-transparent pb-16 pt-28 sm:pt-36">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-[var(--color-accent)]">WEBSITE DEVELOPMENT · PRETORIA & SOUTH AFRICA</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">A website that makes your business easy to understand.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">Work directly with Calvin on a custom business website, landing page or redesign. Give customers a clear view of what you offer and an easy way to enquire.</p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">Based in Pretoria. Working remotely with clients across South Africa.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="#contact">Discuss your website</Button><Button href="#website-example" variant="secondary">See a website example</Button></div>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <Globe size={32} className="text-[var(--color-accent)]" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-white">Built around your customer</h2>
            <div className="mt-6 space-y-5">
              {[ [Smartphone, "Works across screen sizes", "Layouts designed for phones, tablets and desktop browsers."], [Search, "Search foundations", "Clear page titles, descriptions, internal links and a sitemap to help search engines understand your site."], [MessageCircle, "A clear path to contact", "Service information and enquiry options that help visitors take the next step."] ].map(([Icon, title, text]) => { const FeatureIcon = Icon as typeof Globe; return <div key={String(title)} className="flex gap-3"><FeatureIcon size={20} className="mt-1 shrink-0 text-[var(--color-accent)]" aria-hidden="true" /><div><h3 className="font-semibold text-white">{String(title)}</h3><p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{String(text)}</p></div></div>; })}
            </div>
          </div>
        </Container>
      </div>
      <Section id="services"><Container><h2 className="font-display text-3xl font-semibold text-white">What can we build for you?</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{services.map(({icon: Icon,title,text})=><Card key={title}><Icon className="text-[var(--color-accent)]" size={24} aria-hidden="true" /><h3 className="mt-4 text-xl font-semibold text-white">{title}</h3><p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{text}</p></Card>)}</div></Container></Section>
      <Section id="website-example" className="border-y border-[var(--color-border)]"><Container className="grid gap-8 lg:grid-cols-2">
        <div><p className="text-sm font-semibold text-[var(--color-accent)]">WEBSITE EXAMPLE</p><h2 className="mt-3 font-display text-3xl font-semibold text-white">SmartAppHub</h2><p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">Our own studio website brings app development, website services and graphic design into one clear journey. Explore it to see Calvin’s website work in practice.</p><ul className="mt-5 space-y-3 text-sm text-[var(--color-text-muted)]"><li>Layouts for phones, tablets and desktop screens</li><li>Dedicated service pages and project enquiry forms</li><li>Portfolio galleries and an illustrative app preview</li><li>Page metadata, sitemap and search setup</li></ul><Link to="/" className="mt-6 inline-flex min-h-12 items-center gap-2 font-semibold text-[var(--color-accent)]">Explore SmartAppHub <ArrowRight size={17} /></Link></div>
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]"><div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface)] p-4"><span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" /><span className="text-xs text-[var(--color-text-muted)]">smartapphub.co.za · Studio website</span></div><div className="p-6 sm:p-10"><img src="/logo-icon.png" alt="SmartAppHub" className="h-12 w-12 object-contain" /><p className="mt-6 font-display text-3xl font-semibold leading-tight text-white">Apps, websites and graphic design for your business.</p><p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)]">A Pretoria-based studio serving clients across South Africa.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{["Apps", "Websites", "Design"].map(label=><span key={label} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm font-semibold text-white">{label}</span>)}</div></div></div>
      </Container></Section>
      <Section id="process"><Container><h2 className="font-display text-3xl font-semibold text-white">From your brief to your website</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[["01","Tell us what you need","Share your business, audience, pages and goals."],["02","Agree the scope","Confirm the features, content, quote and timeline."],["03","Build and review","Review the design and build against the agreed brief."],["04","Launch and hand over","Check the site, arrange launch and confirm ongoing support."]].map(([number,title,text])=><div key={number}><span className="text-sm font-bold text-[var(--color-accent)]">{number}</span><h3 className="mt-3 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p></div>)}</div></Container></Section>
      <Section><Container className="max-w-4xl"><h2 className="font-display text-3xl font-semibold text-white">Before we start</h2><div className="mt-8 space-y-4">{questions.map(([question,answer])=><details key={question} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"><summary className="cursor-pointer font-semibold text-white">{question}</summary><p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{answer}</p></details>)}</div></Container></Section>
      <DevelopmentForm website />
    </>
  );
}
