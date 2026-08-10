import { useEffect } from "react";
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
  "@type": "WebPage",
  name: "Sitters | SmartAppHub",
  url: "https://smartapphub.co.za/sitters",
  description: "Trusted pet & house sitting marketplace where verified sitters are matched with pet owners for secure, at-home care.",
  inLanguage: "en-US"
};

export default function Sitters() {
  useEffect(() => {
    document.title = "Sitters Trusted pet & house sitting | SmartAppHub";
  }, []);

  return (
    <>
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
