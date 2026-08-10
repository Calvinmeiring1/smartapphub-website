import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmartAppHub",
  url: "https://smartapphub.co.za",
  logo: "https://smartapphub.co.za/apple-touch-icon.png",
  description: "SmartAppHub builds Sitters, a trusted pet & house sitting marketplace.",
  sameAs: [
    "https://www.linkedin.com/company/smartapphub",
    "https://play.google.com/store/apps/details?id=com.smartapphub.thesitters"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "smartapphubdev@gmail.com"
    }
  ]
};

function CanonicalLink() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://smartapphub.co.za${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <StructuredData data={organizationSchema} />
      <CanonicalLink />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
