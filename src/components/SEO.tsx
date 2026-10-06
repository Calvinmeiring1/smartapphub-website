import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MetadataContext } from "./PageMetadata";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

export default function SEO({
  title,
  description,
  canonical: suppliedCanonical,
  ogType = "website"
}: SEOProps) {
  const { pathname } = useLocation();
  const canonical = suppliedCanonical ?? `https://smartapphub.co.za${pathname}`;
  const metadata = useContext(MetadataContext);
  if (metadata) metadata.current = { title, description, canonical, ogType };
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Update title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) ogTypeTag.setAttribute("content", ogType);

    // Update Canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonical);
    } else {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      canonicalTag.setAttribute("href", canonical);
      document.head.appendChild(canonicalTag);
    }

  }, [title, description, canonical, ogType]);

  return null;
}
