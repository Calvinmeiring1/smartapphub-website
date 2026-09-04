import {
  MessageSquare,
  FileText,
  Hammer,
  Rocket,
  Layout,
  ShieldCheck,
  Code,
  CheckCircle2
} from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { useEffect, useState, useRef } from "react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description: "We dive deep into your app idea. We define the user journey, tech requirements, and business goals to ensure we're building the right solution.",
    tags: ["Project Mapping", "Feasibility", "MVP Definition"]
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Our design phase focuses on high-fidelity prototypes. You'll see exactly how your app looks and feels before a single line of code is written.",
    tags: ["Figma Prototyping", "Visual Identity", "User Flow"]
  },
  {
    icon: Code,
    title: "Agile Development",
    description: "We build your app in sprints using native Kotlin or Swift. You get regular builds to test on your own device as the project progresses.",
    tags: ["Native Coding", "Firebase Integration", "API Dev"]
  },
  {
    icon: ShieldCheck,
    title: "Testing & QA",
    description: "Rigorous testing across multiple devices. We squash bugs and optimize performance to ensure a butter-smooth user experience.",
    tags: ["Beta Testing", "Performance Fixes", "Security Audit"]
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    description: "We handle the App Store and Play Store submissions. Once live, we provide ongoing support to scale your app to thousands of users.",
    tags: ["Store Submission", "Maintenance", "Analytics"]
  },
];

function VerticalTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the container is scrolled through
      // Start tracking when top of container reaches middle of screen
      // End tracking when bottom reaches middle of screen
      const start = windowHeight / 2;
      const end = rect.height + start;
      const current = start - rect.top;

      const progress = Math.min(Math.max(current / rect.height, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative mt-24 max-w-4xl mx-auto">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[var(--color-border)]">
        <div
          className="w-full bg-gradient-to-b from-[var(--color-accent)] to-blue-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(91,127,255,0.5)]"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="space-y-24 relative">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          const isActive = scrollProgress > (i / steps.length);

          return (
            <div key={step.title} className="relative">
              {/* Timeline Dot */}
              <div
                className={`absolute left-4 md:left-1/2 top-0 z-10 h-8 w-8 -translate-x-1/2 flex items-center justify-center rounded-full border-4 border-[var(--color-bg)] transition-all duration-500 ${
                  isActive ? "bg-[var(--color-accent)] scale-110 shadow-[0_0_20px_rgba(91,127,255,0.4)]" : "bg-[var(--color-surface)]"
                }`}
              >
                {isActive ? <CheckCircle2 size={14} className="text-black" /> : <div className="h-2 w-2 rounded-full bg-[var(--color-border)]" />}
              </div>

              {/* Content Card */}
              <div className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:block w-1/2" /> {/* Spacer */}

                <Reveal
                  x={isEven ? 40 : -40}
                  delay={0.1}
                  className="w-full md:w-1/2 pl-12 md:pl-0"
                >
                  <div className={`group rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)] ${isActive ? "border-[var(--color-accent)]/30 ring-1 ring-[var(--color-accent)]/10" : ""}`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-6 transition-colors ${isActive ? "bg-[var(--color-accent)] text-black" : "bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]"}`}>
                      <step.icon size={24} />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      <span className="text-[var(--color-accent)] mr-2 opacity-50">0{i + 1}.</span>
                      {step.title}
                    </h3>

                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {step.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-[var(--color-border)] bg-black/20 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-faint)] group-hover:text-[var(--color-text-muted)] group-hover:border-[var(--color-text-faint)] transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <Section id="process" className="border-y border-[var(--color-border)] overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl text-shimmer">Our Roadmap</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              A boutique development experience tailored to your vision. We don't just write code; we partner with you to launch success stories.
            </p>
          </Reveal>
        </div>

        <VerticalTimeline />

        <div className="mt-32 text-center">
           <Reveal delay={0.5}>
              <div className="inline-flex flex-col items-center gap-4">
                 <p className="text-sm font-medium text-[var(--color-text-faint)] uppercase tracking-[0.3em]">Ready to start the journey?</p>
                 <a
                   href="#contact"
                   className="group relative inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-xs font-bold tracking-[0.2em] text-black uppercase transition-all hover:bg-[var(--color-accent)] hover:text-white"
                 >
                    Get your quote
                    <Rocket size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                 </a>
              </div>
           </Reveal>
        </div>
      </Container>
    </Section>
  );
}