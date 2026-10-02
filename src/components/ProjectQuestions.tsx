import Container from "./Container";
import Section from "./Section";

const questions = [
  {
    question: "Do I need a finished specification?",
    answer: "Start with the problem you want to solve, who will use the app or website and the features that matter most. Discovery helps turn that idea into a practical project scope.",
  },
  {
    question: "Can we start with a smaller first version?",
    answer: "Yes. We can scope an MVP around your essential features, then discuss additional functionality as your business and users grow.",
  },
  {
    question: "How much will it cost, and how long will it take?",
    answer: "The app estimator gives a starting point for mobile app costs. Websites are quoted separately based on your pages, content and functionality. Your final quote and timeline depend on the platforms, features, integrations and design requirements agreed for your project.",
  },
  {
    question: "What should we agree before development starts?",
    answer: "Your project scope should cover deliverables, payment milestones, source-code ownership and handover, store submissions and support after launch. Hosting, store fees and third-party subscriptions should also be discussed so ongoing costs are clear.",
  },
];

export default function ProjectQuestions() {
  return (
    <Section>
      <Container className="max-w-4xl">
        <h2 className="font-display text-3xl font-semibold text-white">Before we build</h2>
        <div className="mt-8 space-y-4">
          {questions.map(({ question, answer }) => (
            <details key={question} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <summary className="cursor-pointer font-semibold text-white">{question}</summary>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
