import { useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import StructuredData from "../components/StructuredData";

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service | SmartAppHub",
  url: "https://smartapphub.co.za/terms",
  description: "SmartAppHub Terms of Service for using the Sitters app and SmartAppHub marketplace.",
  inLanguage: "en-US"
};

const sections = [
  {
    heading: "1. Acceptance of these terms",
    body: "By creating an account or using the Sitters app, you agree to these Terms of Service and our Privacy Policy. If you don't agree, please don't use Sitters.",
  },
  {
    heading: "2. Eligibility",
    body: "You must be at least 18 years old and legally able to enter into a contract to use Sitters, whether as an Owner or a Sitter.",
  },
  {
    heading: "3. What Sitters is (and isn't)",
    body: "Sitters is a marketplace that connects independent pet and house sitters with owners who need one. SmartAppHub (PTY) LTD is not itself a pet-sitting service provider, does not employ Sitters, and is not a party to the arrangement made between an Owner and a Sitter, we provide the platform that makes finding, booking, and paying for that arrangement easier and safer.",
  },
  {
    heading: "4. Accounts & verification",
    body: "You're responsible for keeping your account credentials secure and for the accuracy of the information on your profile. Sitters must complete identity verification before their profile is visible to Owners. We may suspend or remove a profile that fails verification or provides false information.",
  },
  {
    heading: "5. Bookings, cancellations & refunds",
    body: "A booking is confirmed once payment is completed in-app. Our default cancellation policy is: a full refund if cancelled more than 48 hours before the booking start time, a 50% refund if cancelled between 24 to 48 hours before, and no refund inside 24 hours. [SmartAppHub note: confirm these thresholds match your intended policy before launch, they can be edited here at any time.]",
  },
  {
    heading: "6. Payments & fees",
    body: "Payments are processed securely through PayFast. Sitters may charge a service fee on top of the sitter's rate, shown clearly at checkout before you confirm a booking. Sitter payouts are released once a booking is marked complete.",
  },
  {
    heading: "7. Your responsibilities",
    body: "Owners agree to provide accurate information about their pets or home and any relevant care instructions. Sitters agree to provide the care described in a booking and to treat the Owner's pets, home and belongings with reasonable care. Both parties agree to communicate honestly and promptly through the app.",
  },
  {
    heading: "8. Prohibited conduct",
    body: "You may not use Sitters to harass or discriminate against another user, circumvent in-app payments to avoid fees, misrepresent your identity or qualifications, or use the platform for any unlawful purpose. We may suspend or terminate accounts that violate this section.",
  },
  {
    heading: "9. Reviews & ratings",
    body: "Owners and Sitters may leave honest reviews of one another after a completed booking. Reviews must be truthful and may not contain abusive, defamatory, or unlawful content. We may remove reviews that violate this policy.",
  },
  {
    heading: "10. Disclaimers",
    body: "Sitters helps you find and connect with sitters, but we don't guarantee the conduct, reliability, or quality of care provided by any Sitter, or the accuracy of information provided by any Owner. Bookings are made at each user's own discretion and, where relevant, own risk.",
  },
  {
    heading: "11. Limitation of liability",
    body: "To the fullest extent permitted by law, SmartAppHub (PTY) LTD is not liable for any indirect, incidental, or consequential damages arising from your use of Sitters, or for the acts or omissions of any Owner or Sitter. Our total liability for any claim relating to the platform is limited to the fees you paid to us in the 3 months before the claim arose.",
  },
  {
    heading: "12. Indemnification",
    body: "You agree to indemnify SmartAppHub (PTY) LTD against claims, damages, or expenses arising from your breach of these terms, your use of the platform, or your interactions with another user.",
  },
  {
    heading: "13. Suspension & termination",
    body: "You may delete your account at any time from within the app. We may suspend or terminate an account that violates these terms, poses a safety risk, or is inactive for an extended period.",
  },
  {
    heading: "14. Governing law & disputes",
    body: "These terms are governed by the laws of South Africa. Any dispute arising from these terms or your use of Sitters will be subject to the jurisdiction of the courts of Gauteng, South Africa, without prejudice to any mandatory consumer protection rights you may have in your own country.",
  },
  {
    heading: "15. Changes to these terms",
    body: "We may update these terms as Sitters evolves. If we make material changes, we'll notify you in the app or by email before they take effect. Continued use of Sitters after changes take effect means you accept the updated terms.",
  },
  {
    heading: "16. Contact us",
    body: "Questions about these terms can be sent to smartapphubdev@gmail.com.",
  },
];

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | SmartAppHub";
  }, []);

  return (
    <>
      <StructuredData data={termsSchema} />
      <Section className="pt-36">
        <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Terms of Service</h1>
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
