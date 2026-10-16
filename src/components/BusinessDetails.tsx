import { business } from "../data/business";

export default function BusinessDetails() {
  return (
    <div className="mt-6 space-y-1 text-sm text-[var(--color-text-muted)]">
      <p className="font-medium text-white">{business.name}</p>
      <p>CIPC registration: {business.registrationNumber}</p>
      <p>Registered office: {business.registeredOffice}</p>
      <p>Business contact: <a className="break-all text-[var(--color-accent)] underline" href={`mailto:${business.email}`}>{business.email}</a></p>
    </div>
  );
}
