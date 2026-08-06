import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "./Container";
import Section from "./Section";

const faqs = [
  {
    question: "How do I become a sitter?",
    answer:
      "Download the app, create a profile, and complete ID verification. Once approved, you can start accepting booking requests from owners near you.",
  },
  {
    question: "How are payments handled?",
    answer:
      "All payments are processed securely in-app through PayFast. Owners pay when they book, and sitters are paid out automatically once a stay is completed.",
  },
  {
    question: "Are sitters verified?",
    answer:
      "Yes. Every sitter completes an identity verification check before their profile goes live, and their rating history is visible to owners.",
  },
  {
    question: "Can I book overnight stays?",
    answer:
      "Yes, you can book anything from a single walk to a multi-day overnight stay directly in the app, with clear pricing up front.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Frequently asked questions</h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-[var(--color-border)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/50">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="px-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
