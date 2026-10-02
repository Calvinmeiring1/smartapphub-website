import { Code, Palette, Smartphone } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export default function CompanyHero() {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-24">
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
        <div className="mx-auto max-w-2xl animate-reveal">
          <div className="relative mx-auto mb-5 flex h-20 w-20 md:mb-10 md:h-32 md:w-32 items-center justify-center">
            {/* Decorative Rings */}
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-[var(--color-accent)]/30" />
            <div className="absolute inset-2 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-dotted border-white/10" />

            {/* The Logo Orb */}
            <div className="relative flex h-16 w-16 md:h-24 md:w-24 animate-logo items-center justify-center rounded-full border border-white/10 bg-[var(--color-surface)]/50 shadow-2xl backdrop-blur-sm md:backdrop-blur-md transition-transform duration-500 hover:scale-110">
              <img
                src="/logo-icon.png"
                alt="SmartAppHub"
                className="h-10 w-10 md:h-14 md:w-14 object-contain transition-transform duration-500 hover:rotate-12"
                fetchPriority="high"
              />
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Apps, websites and graphic design{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-white bg-clip-text text-transparent">
              for your business.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-muted)]">
            We're Calvin and Dominique, a South African studio building Android and iOS apps, websites, business graphics, digital assets and wedding stationery. Work directly with the people creating your project.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/commission" variant="primary">
              Discuss apps or a website
            </Button>
            <Button href="/graphic-design" variant="secondary">
              Explore design services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
