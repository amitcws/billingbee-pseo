import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { invoiceTemplates } from "@/data/templates";
import { locationsExtended, topLocations } from "@/data/locations-extended";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const revalidate = 86400;
export const dynamicParams = true;

// Pre-build top templates × top locations at build time
export async function generateStaticParams() {
  const params: { template: string; location: string }[] = [];
  for (const tmpl of invoiceTemplates) {
    for (const loc of topLocations) {
      params.push({ template: tmpl.slug, location: loc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string; location: string }>;
}): Promise<Metadata> {
  const { template, location } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  const loc = locationsExtended.find((l) => l.slug === location);
  if (!tmpl || !loc) return {};
  return {
    title: `Free ${tmpl.name} for ${loc.name} — PDF, Word & Google Docs | BillingBee`,
    description: `Download a free ${tmpl.name.toLowerCase()} for ${loc.name} businesses. ${loc.taxName} compliant (${loc.taxRate}), ${loc.currencySymbol} ${loc.currency} ready. PDF, Word and Google Docs formats.`,
    openGraph: {
      title: `Free ${tmpl.name} for ${loc.name} | BillingBee`,
      description: `${loc.taxName}-compliant invoice template for ${loc.name}. Free PDF, Word & Google Docs download.`,
    },
  };
}

export default async function TemplateLocationPage({
  params,
}: {
  params: Promise<{ template: string; location: string }>;
}) {
  const { template, location } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  const loc = locationsExtended.find((l) => l.slug === location);
  if (!tmpl || !loc) notFound();

  const otherLocations = locationsExtended
    .filter((l) => l.slug !== loc.slug && l.continent === loc.continent)
    .slice(0, 6);

  const otherTemplates = invoiceTemplates
    .filter((t) => t.slug !== tmpl.slug)
    .slice(0, 5);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/invoice-templates/${tmpl.slug}`} className="hover:text-slate-900 transition-colors">{tmpl.name}</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{loc.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}
            >
              {tmpl.category}
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
            >
              {loc.name}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            Free {tmpl.name} for {loc.name}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            A free, {loc.taxName}-compliant {tmpl.name.toLowerCase()} for businesses in {loc.name}.
            Pre-formatted for {loc.currencySymbol} {loc.currency} at {loc.taxRate} {loc.taxName}.
            Download in PDF, Word, or Google Docs — or use online instantly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://billingbee.co/register-now"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
            >
              Use online for free →
            </Link>
            <Link
              href={`/invoice-templates/${tmpl.slug}`}
              className="inline-flex items-center font-medium px-6 py-3 rounded-full transition-all hover:border-emerald-300"
              style={{ border: "1px solid #E2E8F0", color: "#334155" }}
            >
              View all formats
            </Link>
          </div>
        </div>

        {/* Local compliance stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Currency", value: `${loc.currencySymbol} ${loc.currency}` },
            { label: "Tax", value: loc.taxName },
            { label: "Tax Rate", value: loc.taxRate },
            { label: "Downloads", value: tmpl.downloadCount },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-4 text-center" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>{stat.label}</p>
              <p className="text-base font-black" style={{ color: "#0F172A" }}>{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Template preview + download */}
        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          {/* Preview */}
          <div>
            <div
              className="aspect-[3/4] rounded-2xl flex flex-col p-8"
              style={{ backgroundColor: `${tmpl.previewColor}08`, border: `2px solid ${tmpl.previewColor}30`, boxShadow: "0 10px 40px rgba(0,0,0,.08)" }}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xl font-black mb-1" style={{ color: tmpl.previewColor }}>INVOICE</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>#INV-2025-001</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: tmpl.previewColor }}>B</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>{loc.taxName} Reg. No.</div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <div className="h-2 rounded w-1/2" style={{ background: "#E2E8F0" }} />
                  <div className="h-2 rounded w-1/3" style={{ background: "#E2E8F0" }} />
                </div>
                <div className="pt-4 space-y-2" style={{ borderTop: "1px solid #E2E8F0" }}>
                  {[80, 100, 60, 90].map((w, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-2 rounded" style={{ width: `${w}%`, background: "#E2E8F0" }} />
                      <div className="h-2 rounded w-16 ml-4 shrink-0 text-right text-xs font-mono" style={{ background: "#CBD5E1" }} />
                    </div>
                  ))}
                </div>
                <div className="rounded-lg p-2 text-xs font-medium" style={{ background: `${tmpl.previewColor}12`, color: tmpl.previewColor }}>
                  {loc.taxName} ({loc.taxRate}): {loc.currencySymbol}0.00
                </div>
                <div className="pt-3 flex justify-between items-center" style={{ borderTop: "2px solid #CBD5E1" }}>
                  <div className="text-xs font-bold" style={{ color: "#64748B" }}>TOTAL ({loc.currency})</div>
                  <div className="h-3 rounded w-16" style={{ backgroundColor: tmpl.previewColor }} />
                </div>
              </div>
            </div>
            <p className="text-xs text-center mt-2" style={{ color: "#94A3B8" }}>
              {loc.taxName}-compliant · {loc.currencySymbol} {loc.currency} · {loc.name}
            </p>
          </div>

          {/* Download options */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
              Download your free {loc.name} invoice template
            </h2>
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>
              Pre-configured for {loc.taxName} at {loc.taxRate} and {loc.currencySymbol} {loc.currency}.
              All mandatory {loc.country} invoice fields included.
            </p>
            <div className="space-y-3 mb-8">
              {tmpl.formats.map((fmt) => (
                <Link
                  key={fmt}
                  href="https://billingbee.co/register-now"
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300 group"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {fmt === "PDF" ? "📄" : fmt.includes("Word") ? "📝" : fmt.includes("Google") ? "📊" : "📈"}
                    </span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>Download {fmt}</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>{loc.taxName} ready · {loc.currency} · {loc.name}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "#10B981" }}>Free →</span>
                </Link>
              ))}
            </div>

            {/* What's included */}
            <h3 className="font-bold mb-3" style={{ color: "#0F172A" }}>Includes required {loc.name} fields</h3>
            <div className="space-y-2">
              {[
                `${loc.taxName} number field`,
                `${loc.currency} (${loc.currencySymbol}) amount formatting`,
                `${loc.taxName} rate line (${loc.taxRate})`,
                `${loc.country} legal invoice requirements`,
                ...tmpl.fields.slice(0, 3),
              ].map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
                  <span style={{ color: "#10B981" }}>✓</span> {field}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best for */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>Who uses this template in {loc.name}</h2>
          <div className="flex flex-wrap gap-2">
            {tmpl.bestFor.map((b) => (
              <span key={b} className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: "rgba(16,185,129,0.10)", color: "#065F46", border: "1px solid rgba(16,185,129,0.20)" }}>
                {b}
              </span>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`Use this ${tmpl.name} online in ${loc.name}`}
          subtext={`${loc.taxName} calculated automatically. Send from anywhere. Get paid in ${loc.currency}.`}
          ctaLabel={`Start free in ${loc.name}`}
        />

        {/* Same template, other locations */}
        <section className="mt-14">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>
            {tmpl.name} for other {loc.continent} countries
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/invoice-templates/${tmpl.slug}/${l.slug}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                  {tmpl.name} — {l.name} ({l.currencySymbol})
                </span>
                <span className="text-sm font-medium" style={{ color: "#10B981" }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Other templates for this location */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>
            More free invoice templates for {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherTemplates.map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}/${loc.slug}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{t.name} — {loc.name}</span>
                <span className="text-sm font-medium" style={{ color: "#10B981" }}>Free →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
