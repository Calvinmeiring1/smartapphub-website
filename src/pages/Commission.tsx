import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import CommissionHero from "../components/CommissionHero";
import Services from "../components/Services";
import Process from "../components/Process";
import CommissionCTA from "../components/CommissionCTA";

const commissionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "App Development Commission",
  "provider": {
    "@type": "Organization",
    "name": "SmartAppHub"
  },
  "description": "Commission a custom native Android or iOS app. We build products from idea to App Store launch.",
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "serviceType": "Software Development"
};

export default function Commission() {
  return (
    <>
      <SEO
        title="Commission an App | Custom Mobile Development | SmartAppHub"
        description="Have an app idea? SmartAppHub builds custom native Android and iOS apps end to end. Get a professional, production-ready app for your business."
        canonical="https://smartapphub.co.za/commission"
      />
      <StructuredData data={commissionSchema} />
      <CommissionHero />
      <Services />
      <Process />
      <CommissionCTA />
    </>
  );
}
