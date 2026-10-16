import { Link } from "react-router-dom";
import Container from "./Container";
import Section from "./Section";
import { sittersPayments } from "../data/sittersPayments";

export default function SittersPayments() {
  return (
    <Section id="payments">
      <Container className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-white">Booking payments and sitter settlement</h2>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <div><h3 className="font-display text-lg font-semibold text-white">Current payments</h3><p className="mt-2">{sittersPayments.current}</p></div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">Planned · Not yet enabled</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-white">Paystack direct split settlement</h3>
            <p className="mt-3">{sittersPayments.proposed}</p>
            <p className="mt-3">{sittersPayments.scope}</p>
            <p className="mt-3">{sittersPayments.subscriptions}</p>
            <p className="mt-3">{sittersPayments.refunds}</p>
          </div>
          <p>For cancellation windows and payment details, read our <Link to="/terms" className="text-[var(--color-accent)] underline">Terms of Service</Link>. For booking or refund support, email <a href="mailto:smartapphubdev@gmail.com" className="break-all text-[var(--color-accent)] underline">smartapphubdev@gmail.com</a> with your booking reference.</p>
        </div>
      </Container>
    </Section>
  );
}
