import { useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import StructuredData from "../components/StructuredData";

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | SmartAppHub",
  url: "https://smartapphub.co.za/privacy",
  description: "SmartAppHub Privacy Policy describing how Sitters collects, uses, and protects user information.",
  inLanguage: "en-US"
};

const sections = [
  {
    heading: "1. Who we are",
    body: "SMARTAPPHUB (PTY) LTD ('SmartAppHub', 'we', 'us') is a company registered in Gauteng, South Africa. We operate Sitters, a marketplace app that connects pet and house sitters ('Sitters') with pet and homeowners ('Owners'). This policy explains what personal information we collect through the Sitters app and website, why we collect it, and the choices you have.",
  },
  {
    heading: "2. Information we collect",
    body: "Account details you provide when you sign up, such as your name, email address, phone number and profile photo. Location data, used to show nearby sitters or bookings and only while you're using the relevant part of the app. Verification information from Sitters, including a government-issued ID, used solely to confirm identity before a profile goes live. Booking and payment metadata (dates, amounts, booking status), your card details are entered directly into PayFast and are never stored on our servers. Messages exchanged in-app between Owners and Sitters, and any photos shared during a booking. Device and usage information (app version, crash logs, general analytics) used to keep the app working reliably.",
  },
  {
    heading: "3. How we use your information",
    body: "We use your information to create and manage your account, match Owners with nearby verified Sitters, process bookings and payments, enable in-app messaging, verify Sitter identity for trust and safety, respond to support requests, and detect fraud or misuse of the platform. We do not sell your personal information to third parties.",
  },
  {
    heading: "4. Legal basis for processing",
    body: "As a South African company, we process personal information in line with the Protection of Personal Information Act (POPIA). We rely on your consent (for example, when you create a profile or enable location access), the necessity of processing to perform our contract with you (for example, completing a booking), and our legitimate interest in keeping the platform safe (for example, identity verification and fraud prevention).",
  },
  {
    heading: "5. Sharing & third parties",
    body: "We share information with the service providers that make Sitters work: PayFast, for payment processing (we never see or store your full card details), and Google Firebase, for authentication, our database, file storage and backend functions. Sitter names, photos, ratings and general location are visible to Owners as part of the marketplace, and vice versa. We may disclose information if required by law, or to protect the safety of a user or the public.",
  },
  {
    heading: "6. International data transfers",
    body: "Sitters is available in South Africa, the United States, the United Kingdom, Canada and Australia. Because we use Firebase, some of your information may be stored or processed on servers outside your home country. Where this happens, we rely on our providers' standard contractual and security safeguards to protect your information.",
  },
  {
    heading: "7. Data retention",
    body: "We keep your account and booking information for as long as your account is active, and for a reasonable period afterward to meet legal, accounting, or dispute-resolution obligations. Verification documents are retained only as long as needed to confirm eligibility to use the platform, after which they are deleted or anonymized.",
  },
  {
    heading: "8. Your rights",
    body: "You can access, correct, or request deletion of your personal information at any time from within the app, or by emailing us. South African users have the right to lodge a complaint with the Information Regulator. Depending on where you live, you may have similar rights under local law (for example, UK GDPR, Canada's PIPEDA, or Australia's Privacy Act), we honour these regardless of which jurisdiction you're in.",
  },
  {
    heading: "9. Children's privacy",
    body: "Sitters is intended for users aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe a minor has created an account, please contact us and we will remove it.",
  },
  {
    heading: "10. Security",
    body: "We use industry-standard safeguards, including encryption in transit, authenticated access, and Firebase's security infrastructure, to protect your information. No system is completely secure, and we encourage you to use a strong, unique password for your account.",
  },
  {
    heading: "11. Cookies & analytics",
    body: "Our website uses privacy-respecting analytics (Cloudflare Web Analytics) to understand overall traffic; this does not use tracking cookies or collect personally identifiable information.",
  },
  {
    heading: "12. Changes to this policy",
    body: "We may update this policy as Sitters grows. If we make material changes, we'll notify you in the app or by email before they take effect.",
  },
  {
    heading: "13. Contact us",
    body: "Questions about this policy, or requests relating to your personal information, can be sent to smartapphubdev@gmail.com.",
  },
];

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | SmartAppHub";
  }, []);

  return (
    <>
      <StructuredData data={privacySchema} />
      <Section className="pt-36">
        <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[var(--color-text-faint)]">Last updated: 6 August 2026</p>

        <div className="mt-10 space-y-8 text-[var(--color-text-muted)]">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-lg font-semibold text-white">{s.heading}</h2>
              <p className="mt-2 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
