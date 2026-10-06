import { createContext } from "react";
export type PageMetadata = { title: string; description: string; canonical: string; ogType: string };
export const MetadataContext = createContext<{ current?: PageMetadata } | null>(null);
