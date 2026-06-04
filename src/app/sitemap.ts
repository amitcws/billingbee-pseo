import type { MetadataRoute } from "next";
import { competitors } from "@/data/competitors";
import { useCases } from "@/data/usecases";
import { invoiceTemplates } from "@/data/templates";
import { features } from "@/data/features";
import { locations } from "@/data/locations";
import { locationsExtended } from "@/data/locations-extended";
import { professions } from "@/data/professions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.billingbee.co";
  const now = new Date();

  // Profession × Location combo pages (~20,000 pages)
  // Sitemap includes all combinations for Google discoverability
  const comboProfLoc = locationsExtended.flatMap((loc) =>
    professions.map((prof) => ({
      url: `${base}/${loc.slug}/invoicing-software-for/${prof.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    // Hub
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Single-dimension pages (high priority)
    ...invoiceTemplates.map((t) => ({
      url: `${base}/invoice-templates/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...competitors.map((c) => ({
      url: `${base}/alternatives/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...useCases.map((u) => ({
      url: `${base}/for/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...features.map((f) => ({
      url: `${base}/features/${f.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locations.map((l) => ({
      url: `${base}/${l.slug}/invoicing-software`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Extended location hub pages
    ...locationsExtended
      .filter((l) => !locations.find((orig) => orig.slug === l.slug))
      .map((l) => ({
        url: `${base}/${l.slug}/invoicing-software`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.65,
      })),

    // Combination pages (bulk — lower individual priority, high aggregate value)
    ...comboProfLoc,
  ];
}
