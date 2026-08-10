import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Countries from "../components/Countries";
import FAQ from "../components/FAQ";
import DownloadCTA from "../components/DownloadCTA";
import StructuredData from "../components/StructuredData";

const sittersSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sitters",
  "operatingSystem": "Android, iOS",
  "applicationCategory": "LifestyleApplication",
  "description": "Trusted pet & house sitting marketplace. Find verified sitters, book securely, and keep your pets comfortable at home while you're away.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function Sitters() {
  return (
    <>
      <SEO
        title="Sitters — Trusted pet & house sitting | SmartAppHub"
        description="Find reliable pet sitters, book securely, and keep your pets comfortable at home while you're away. Now live in 5 countries."
        canonical="https://smartapphub.co.za/sitters"
      />
      <StructuredData data={sittersSchema} />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Countries />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
