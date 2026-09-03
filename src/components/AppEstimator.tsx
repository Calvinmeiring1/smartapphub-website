import { useState, useMemo } from "react";
import {
  Smartphone,
  Globe,
  Users,
  Database,
  CreditCard,
  MapPin,
  Bell,
  Zap,
  ChevronRight,
  ChevronLeft,
  Layout,
  Layers,
  Sparkles,
  Calculator
} from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";

interface Option {
  id: string;
  label: string;
  description: string;
  price: number;
  icon: any;
}

interface Step {
  id: string;
  title: string;
  type: "single" | "multi";
  options: Option[];
}

const steps: Step[] = [
  {
    id: "platform",
    title: "Choose your platforms",
    type: "multi",
    options: [
      { id: "android", label: "Android", description: "Native Kotlin app", price: 8000, icon: Smartphone },
      { id: "ios", label: "iOS", description: "Native Swift app", price: 9000, icon: Smartphone },
      { id: "web", label: "Web", description: "React Web Application", price: 7000, icon: Globe },
    ]
  },
  {
    id: "users",
    title: "User Management",
    type: "single",
    options: [
      { id: "none", label: "None", description: "No user accounts needed", price: 0, icon: Users },
      { id: "basic", label: "Basic Auth", description: "Email & Password login", price: 3000, icon: Users },
      { id: "social", label: "Social & Profile", description: "Google/Facebook + User Profiles", price: 5500, icon: Users },
    ]
  },
  {
    id: "data",
    title: "Data & Infrastructure",
    type: "single",
    options: [
      { id: "simple", label: "Simple Cloud", description: "Store basic info in cloud", price: 3000, icon: Database },
      { id: "complex", label: "Real-time & Sync", description: "Live updates & offline support", price: 7000, icon: Zap },
      { id: "marketplace", label: "Admin & Dashboard", description: "Full back-office to manage data", price: 12000, icon: Layers },
    ]
  },
  {
    id: "features",
    title: "Key Features",
    type: "multi",
    options: [
      { id: "payments", label: "Payments", description: "PayFast, Stripe or In-App Purchases", price: 5000, icon: CreditCard },
      { id: "maps", label: "Maps & Location", description: "GPS tracking and map integration", price: 4500, icon: MapPin },
      { id: "notifications", label: "Push Notifications", description: "FCM / Alerts for users", price: 3000, icon: Bell },
      { id: "ai", label: "AI Integration", description: "ChatGPT, Image Rec or ML", price: 8000, icon: Sparkles },
    ]
  },
  {
    id: "design",
    title: "Design Complexity",
    type: "single",
    options: [
      { id: "standard", label: "Standard", description: "Clean, professional UI", price: 2000, icon: Layout },
      { id: "premium", label: "Premium UI/UX", description: "Custom icons, advanced layouts", price: 6000, icon: Layout },
      { id: "luxury", label: "Custom Animations", description: "Bespoke feel with smooth motions", price: 12000, icon: Sparkles },
    ]
  }
];

export default function AppEstimator({ onEstimateChange }: { onEstimateChange?: (total: number, summary: string) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  const toggleOption = (stepId: string, optionId: string, type: "single" | "multi") => {
    setSelections(prev => {
      const current = prev[stepId] || [];
      const newSelections = { ...prev };

      if (type === "single") {
        newSelections[stepId] = [optionId];
      } else {
        if (current.includes(optionId)) {
          newSelections[stepId] = current.filter(id => id !== optionId);
        } else {
          newSelections[stepId] = [...current, optionId];
        }
      }

      // Calculate new total and summary for the callback
      let newTotal = 0;
      let summaryParts: string[] = [];

      Object.entries(newSelections).forEach(([sId, selectedIds]) => {
        const step = steps.find(s => s.id === sId);
        const labels: string[] = [];
        selectedIds.forEach(id => {
          const option = step?.options.find(o => o.id === id);
          if (option) {
            newTotal += option.price;
            labels.push(option.label);
          }
        });
        if (labels.length > 0) {
          summaryParts.push(`${step?.title}: ${labels.join(", ")}`);
        }
      });

      if (onEstimateChange) {
        onEstimateChange(newTotal, summaryParts.join("\n"));
      }

      return newSelections;
    });
  };

  const totalPrice = useMemo(() => {
    let total = 0;
    Object.entries(selections).forEach(([stepId, selectedIds]) => {
      const step = steps.find(s => s.id === stepId);
      selectedIds.forEach(id => {
        const option = step?.options.find(o => o.id === id);
        if (option) total += option.price;
      });
    });
    return total;
  }, [selections]);

  const progress = ((currentStep + 1) / steps.length) * 100;
  const currentStepData = steps[currentStep];

  return (
    <Section id="estimator" className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30">
      <Container className="max-w-5xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-white text-shimmer">Cost Estimator</h2>
            <p className="mt-4 text-[var(--color-text-muted)] mx-auto max-w-2xl">
              Get an instant ballpark estimate for your project. This helps us understand the scope before we talk.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Wizard */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-1 w-full bg-[var(--color-border)] overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-[var(--color-accent)] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="min-h-[400px]">
              <h3 className="text-xl font-display font-medium text-white mb-8 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-black">
                  {currentStep + 1}
                </span>
                {currentStepData.title}
                <span className="text-xs font-normal text-[var(--color-text-faint)] ml-auto">
                  {currentStepData.type === "multi" ? "Select one or more" : "Select one"}
                </span>
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {currentStepData.options.map(option => {
                  const isSelected = (selections[currentStepData.id] || []).includes(option.id);
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(currentStepData.id, option.id, currentStepData.type)}
                      className={`group relative flex flex-col gap-3 rounded-xl border p-6 text-left transition-all hover:shadow-2xl ${
                        isSelected
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                          : "border-[var(--color-border)] bg-transparent hover:border-[var(--color-text-faint)]"
                      }`}
                    >
                      <div className={`h-10 w-10 flex items-center justify-center rounded-lg transition-colors ${
                        isSelected ? "bg-[var(--color-accent)] text-black" : "bg-[var(--color-surface)] text-white group-hover:bg-[var(--color-accent)]/10"
                      }`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-white">{option.label}</div>
                        <div className="text-sm text-[var(--color-text-muted)] mt-1">{option.description}</div>
                      </div>
                      {isSelected && (
                        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-[var(--color-border)]">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(s => s - 1)}
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors disabled:opacity-0"
              >
                <ChevronLeft size={18} /> Previous
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(s => s + 1)}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold tracking-widest text-black uppercase transition-all hover:bg-[var(--color-accent)]"
                >
                  Next <ChevronRight size={18} />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-2.5 text-xs font-bold tracking-widest text-black uppercase transition-all hover:bg-white"
                >
                  Start Project <Calculator size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-8 backdrop-blur-sm">
              <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-2">
                Estimate Summary
              </h3>

              <div className="space-y-6">
                {steps.map(step => {
                  const selectedOptions = (selections[step.id] || []).map(id => step.options.find(o => o.id === id)).filter(Boolean);
                  if (selectedOptions.length === 0) return null;

                  return (
                    <div key={step.id}>
                      <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-faint)] uppercase mb-2">
                        {step.title}
                      </div>
                      <div className="space-y-1">
                        {selectedOptions.map(opt => (
                          <div key={opt!.id} className="flex justify-between text-sm">
                            <span className="text-white">{opt!.label}</span>
                            <span className="text-[var(--color-text-muted)]">R{opt!.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <div className="flex items-end justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">Estimated Cost</span>
                  <span className="text-2xl font-display font-bold text-[var(--color-accent)]">
                    R{totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="mt-4 text-[10px] text-[var(--color-text-faint)] italic leading-relaxed">
                  * This is a ballpark estimate. Final pricing depends on specific technical requirements and complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
