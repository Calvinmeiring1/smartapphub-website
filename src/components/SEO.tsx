import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

export default function SEO({
  title,
  description,
  canonical = "https://smartapphub.co.za/",
  ogType = "website"
}: SEOProps) {
  useEffect(() => {
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
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute("href", canonical);

  }, [title, description, canonical, ogType]);

  return null;
}
