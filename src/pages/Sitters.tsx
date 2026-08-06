import { useEffect } from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Countries from "../components/Countries";
import FAQ from "../components/FAQ";
import DownloadCTA from "../components/DownloadCTA";

export default function Sitters() {
  useEffect(() => {
    document.title = "Sitters — Trusted pet & house sitting | SmartAppHub";
  }, []);

  return (
    <>
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
