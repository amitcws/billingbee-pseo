import type { MetadataRoute } from "next";
import { competitors } from "@/data/competitors";
import { useCases } from "@/data/usecases";
import { invoiceTemplates } from "@/data/templates";
import { features } from "@/data/features";
import { locations } from "@/data/locations";
import { allLocations as locationsExtended } from "@/data/locations-all";
import { professions } from "@/data/professions";

const base = "https://www.billingbee.co";
const CHUNK_SIZE = 10_000;
const TOTAL_SITEMAPS = 10;

function buildAllUrls(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── High-priority single pages ────────────────────────────────────────
  const high: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Invoice generator (new)
    {
      url: `${base}/invoice-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Invoice templates
    ...invoiceTemplates.map((t) => ({
      url: `${base}/invoice-templates/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Alternatives
    ...competitors.map((c) => ({
      url: `${base}/alternatives/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Use cases / by profession
    ...useCases.map((u) => ({
      url: `${base}/for/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Features
    ...features.map((f) => ({
      url: `${base}/features/${f.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Invoice generator by profession (new)
    ...professions.map((p) => ({
      url: `${base}/invoice-generator/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Location hub pages
    ...locations.map((l) => ({
      url: `${base}/${l.slug}/invoicing-software`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locationsExtended
      .filter((l) => !locations.find((orig) => orig.slug === l.slug))
      .map((l) => ({
        url: `${base}/${l.slug}/invoicing-software`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.65,
      })),
  ];

  // ── Combination clusters ───────────────────────────────────────────────

  // Profession × Location (~14,000 pages)
  const comboProfLoc = locationsExtended.flatMap((loc) =>
    professions.map((prof) => ({
      url: `${base}/${loc.slug}/invoicing-software-for/${prof.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Template × Location (~1,680 pages)
  const comboTmplLoc = locationsExtended.flatMap((loc) =>
    invoiceTemplates.map((tmpl) => ({
      url: `${base}/invoice-templates/${tmpl.slug}/${loc.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Template × Profession (~1,200 pages)
  const comboTmplProf = professions.flatMap((prof) =>
    invoiceTemplates.map((tmpl) => ({
      url: `${base}/invoice-templates/${tmpl.slug}/for/${prof.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Feature × Profession (~4,000 pages)
  const comboFeatProf = professions.flatMap((prof) =>
    features.map((feat) => ({
      url: `${base}/features/${feat.slug}/for/${prof.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Feature × Location (~5,600 pages)
  const comboFeatLoc = locationsExtended.flatMap((loc) =>
    features.map((feat) => ({
      url: `${base}/features/${feat.slug}/${loc.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...high,
    ...comboProfLoc,
    ...comboTmplLoc,
    ...comboTmplProf,
    ...comboFeatProf,
    ...comboFeatLoc,
  ];
}

// Next.js v16: generateSitemaps produces 10 shards → /sitemap/[id].xml
// Root /sitemap.xml becomes a sitemap index automatically.
export function generateSitemaps() {
  return Array.from({ length: TOTAL_SITEMAPS }, (_, i) => ({ id: i }));
}

// v16: `id` is a Promise<string>
export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;
  const index = parseInt(id, 10);
  const all = buildAllUrls();
  const start = index * CHUNK_SIZE;
  return all.slice(start, start + CHUNK_SIZE);
}
