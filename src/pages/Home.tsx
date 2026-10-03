import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import SelectedWork from "../components/SelectedWork";
import Team from "../components/Team";
import Button from "../components/Button";
import ContactLinks from "../components/ContactLinks";
import SEO from "../components/SEO";
import ScrollShowcase from "../components/ScrollShowcase";

function ProjectProcess() {
  return <Section><Container>
    <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">A clear path from idea to launch</h2>
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[["01", "Share your idea", "Tell us what you need, who it is for and what success looks like."], ["02", "Agree the scope", "We confirm the deliverables, quote, timeline and support before starting."], ["03", "Create and review", "See the work take shape and give feedback at agreed milestones."], ["04", "Launch and hand over", "We check the final work and agree the handover and next steps."]].map(([n,title,text]) => <div key={n}><span className="text-sm font-semibold text-[var(--color-accent)]">{n}</span><h3 className="mt-3 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{text}</p></div>)}
    </div>
  </Container></Section>;
}
function ProjectInvitation() {
  return <Section className="border-t border-[var(--color-border)]"><Container className="max-w-3xl text-center">
    <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">What would you like to build?</h2>
    <p className="mt-5 text-lg text-[var(--color-text-muted)]">Tell us about your app, website or design project. We’ll help you define the next step.</p>
    <div className="mt-7"><Button href="/contact">Discuss your project</Button></div>
    <div className="mt-5"><ContactLinks /></div>
  </Container></Section>;
}

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <SEO
        title="Software & Website Development in Pretoria | SmartAppHub"
        description="Pretoria-based software and design studio serving clients across South Africa. Custom Android and iOS apps, websites, business graphics and wedding stationery."
      />

      {/* Background Atmosphere */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="alive-drift pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      <CompanyHero />
      <ScrollShowcase />
      <SelectedWork />
      <ProjectProcess />
      <Team />
      <ProjectInvitation />
    </div>
  );
}
