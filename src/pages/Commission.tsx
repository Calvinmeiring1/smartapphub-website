import { useEffect } from "react";
import CommissionHero from "../components/CommissionHero";
import Services from "../components/Services";
import Process from "../components/Process";
import CommissionCTA from "../components/CommissionCTA";
import StructuredData from "../components/StructuredData";

const commissionSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commission an App | SmartAppHub",
  url: "https://smartapphub.co.za/commission",
  description: "Commission a custom app from SmartAppHub and get a tailored development process, from proposal to launch.",
  inLanguage: "en-US"
};

export default function Commission() {
  useEffect(() => {
    document.title = "Commission an App | SmartAppHub";
  }, []);

  return (
    <>
      <StructuredData data={commissionSchema} />
      <CommissionHero />
      <Services />
      <Process />
      <CommissionCTA />
    </>
  );
}
