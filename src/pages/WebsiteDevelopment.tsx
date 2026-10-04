import { Link } from "react-router-dom";
import { Globe, Smartphone, Check, MessageCircle, ArrowRight } from "lucide-react";
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
      <div className="relative overflow-hidden border-b border-[var(--color-border)] bg-gradient-to-br from-[var(--color-accent-soft)] via-transparent to-transparent pb-16 pt-28 sm:pb-24 sm:pt-36">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold tracking-widest text-[var(--color-accent)]"><Globe size={14} aria-hidden="true" /> WEBSITE DESIGN & DEVELOPMENT</p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">Your business.<br /><span className="text-[var(--color-accent)]">A better first impression.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">A custom website that tells your story, showcases your services and makes it easy for customers to get in touch.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="#contact">Let’s build your website <ArrowRight size={18} aria-hidden="true" /></Button><Button href="#website-example" variant="secondary">Explore our work</Button></div>
            <p className="mt-6 text-sm text-[var(--color-text-muted)]">Work directly with Calvin · Pretoria & across South Africa</p>
          </div>
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[var(--color-surface)] shadow-2xl shadow-black/30">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="ml-3 text-xs text-[var(--color-text-muted)]">smartapphub.co.za</span></div>
              <a href="#website-example" aria-label="Explore the SmartAppHub website case study"><img src="/work/website-preview-home.webp" alt="The real SmartAppHub website, designed and built by Calvin" width={1280} height={720} className="block h-auto w-full" /></a>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-4"><div><p className="text-sm font-semibold text-white">Our own website. Our own work.</p><p className="mt-1 text-xs text-[var(--color-text-muted)]">Design, development & a direct enquiry journey</p></div><Globe className="shrink-0 text-[var(--color-accent)]" size={22} aria-hidden="true" /></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-[var(--color-text-muted)]">{["Mobile-friendly", "Search foundations", "Clear enquiries"].map(label => <span key={label} className="rounded-lg border border-[var(--color-border)] px-2 py-3">{label}</span>)}</div>
          </div>
        </Container>
      </div>
      <Section id="services"><Container>
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-semibold tracking-widest text-[var(--color-accent)]">START FRESH. OR START AGAIN.</p><h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">A website that fits your next step.</h2></div><p className="max-w-sm leading-relaxed text-[var(--color-text-muted)]">From a focused landing page to a complete business website, we shape the build around your brief.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({icon: Icon,title,text},i)=><Card key={title}><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-soft)]"><Icon className="text-[var(--color-accent)]" size={23} aria-hidden="true" /></span><span className="text-xs text-[var(--color-text-muted)]">0{i+1}</span></div><h3 className="mt-6 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p></Card>)}</div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-text-muted)]">{["Layouts for phones, tablets & desktops", "Page titles, metadata & sitemap", "A clear path to contact"].map(label=><span key={label} className="inline-flex items-center gap-2"><Check size={16} className="text-[var(--color-accent)]" aria-hidden="true" />{label}</span>)}</div>
      </Container></Section>
      <Section id="website-example" className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[var(--color-accent)]">WEBSITE CASE STUDY · OUR STUDIO</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">See the thinking behind the build.</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">Designed and built by Calvin, our studio website helps visitors explore app development, website services and graphic design, then contact the right person about their project.</p>
          </div>
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_180px]">
            <figure className="min-w-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <figcaption className="border-b border-[var(--color-border)] px-5 py-3 text-sm text-[var(--color-text-muted)]">Desktop · SmartAppHub homepage</figcaption>
              <a href="/work/smartapphub-desktop.png" target="_blank" rel="noopener noreferrer" aria-label="View full desktop screenshot of SmartAppHub"><img src="/work/smartapphub-desktop.png" alt="Actual SmartAppHub desktop homepage with service navigation and project enquiry button" width={1440} height={990} loading="lazy" className="block h-auto w-full" /></a>
            </figure>
            <figure className="mx-auto w-full max-w-[180px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <figcaption className="border-b border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-muted)]">Mobile · Same website</figcaption>
              <a href="/work/smartapphub-mobile.png" target="_blank" rel="noopener noreferrer" aria-label="View full mobile screenshot of SmartAppHub"><img src="/work/smartapphub-mobile.png" alt="Actual SmartAppHub mobile homepage with menu button and vertically stacked enquiry buttons" width={390} height={844} loading="lazy" className="block h-auto w-full" /></a>
            </figure>
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">Screenshots of the website we built. Select either image to view it at full size.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Clear service navigation", "Dedicated pages explain each service, helping visitors find the right information before they enquire."],
              ["Work visitors can explore", "Design galleries and the Sitters case study show the studio’s work, alongside information about who creates it."],
              ["A direct enquiry journey", "Project forms, email and WhatsApp give customers a clear way to reach Calvin or Dominique. Page metadata and a sitemap support search discovery."],
            ].map(([title, text]) => <Card key={title}><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p></Card>)}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4"><Button href="#contact">Discuss your website</Button><Link to="/" className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">Explore SmartAppHub <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </Container>
      </Section>
      <Section id="process"><Container><h2 className="font-display text-3xl font-semibold text-white">From your brief to your website</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[["01","Tell us what you need","Share your business, audience, pages and goals."],["02","Agree the scope","Confirm the features, content, quote and timeline."],["03","Build and review","Review the design and build against the agreed brief."],["04","Launch and hand over","Check the site, arrange launch and confirm ongoing support."]].map(([number,title,text])=><div key={number} className="border-t border-[var(--color-border)] pt-6"><span className="text-sm font-bold text-[var(--color-accent)]">{number}</span><h3 className="mt-3 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p></div>)}</div></Container></Section>
      <Section><Container className="max-w-4xl"><p className="mb-3 text-xs font-semibold tracking-widest text-[var(--color-accent)]">THE PRACTICAL DETAILS</p><h2 className="font-display text-3xl font-semibold text-white">Before we start</h2><div className="mt-8 space-y-4">{questions.map(([question,answer])=><details key={question} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"><summary className="cursor-pointer font-semibold text-white">{question}</summary><p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{answer}</p></details>)}</div></Container></Section>
      <DevelopmentForm website />
    </>
  );
}
