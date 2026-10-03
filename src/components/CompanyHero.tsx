import { Code, Palette, Smartphone } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export default function CompanyHero() {
  return (
    <div className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="alive-drift pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />

      {/* Floating Decorative Elements */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] z-10 alive-float opacity-10 text-[var(--color-accent)] lg:opacity-20">
        <Code size={100} strokeWidth={0.5} />
      </div>
      <div className="pointer-events-none absolute right-[5%] top-[25%] z-10 alive-float opacity-10 text-white lg:opacity-20" style={{ animationDelay: '2s' }}>
        <Palette size={120} strokeWidth={0.5} />
      </div>
      <div className="pointer-events-none absolute left-[50%] bottom-[10%] -translate-x-1/2 z-10 alive-float opacity-5 text-[var(--color-accent)]" style={{ animationDelay: '4s' }}>
        <Smartphone size={80} strokeWidth={0.5} />
      </div>

      <Container className="relative z-20 text-center">
        <div className="mx-auto max-w-3xl animate-reveal">
          <div className="relative mx-auto mb-5 h-16 w-16 md:h-20 md:w-20">
            <div aria-hidden="true" className="absolute -inset-2 rounded-[30px] border border-[var(--color-accent)]/15 md:-inset-3 md:rounded-[40px]" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[24px] border border-white/15 bg-[#080d16] shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:rounded-[32px]">
              {/* The source has generous padding; scale its visible mark inside the frame. */}
              <img
                src="/logo-icon.png"
                alt="SmartAppHub"
                width={1024}
                height={1024}
                className="h-full w-full scale-[1.9] object-contain"
                fetchPriority="high"
              />
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Apps, websites and graphic design{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-white bg-clip-text text-transparent">
              for your business.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Work directly with Calvin and Dominique on your next app, website or design. Based in Pretoria, creating for businesses across South Africa.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Discuss your project
            </Button>
            <Button href="#selected-work" variant="secondary">
              View our work
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
