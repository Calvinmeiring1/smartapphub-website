import SEO from "../components/SEO";
import SittersScreens from "../components/SittersScreens";
import SittersFilm from "../components/SittersFilm";
import SittersBackground from "../components/SittersBackground";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Countries from "../components/Countries";
import FAQ from "../components/FAQ";
import DownloadCTA from "../components/DownloadCTA";
import StructuredData from "../components/StructuredData";
import Testimonials from "../components/Testimonials";
import SafetyTrust from "../components/SafetyTrust";
import SittersPayments from "../components/SittersPayments";

const sittersSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sitters",
  "operatingSystem": "Android",
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
    <div className="relative isolate">
      <SittersBackground />
      <SEO
        title="Sitters — Trusted pet & house sitting | SmartAppHub"
        description="Find reliable pet sitters with Sitters for Android in South Africa, the US, UK, Canada and Australia. Sitters for iOS is coming soon."
        canonical="https://smartapphub.co.za/sitters"
      />
      <StructuredData data={sittersSchema} />
      <Hero />
      <Stats />
      <SittersFilm />
      <Features />
      <SittersScreens />
      <SafetyTrust />
      <SittersPayments />
      <HowItWorks />
      <Countries />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </div>
  );
}
