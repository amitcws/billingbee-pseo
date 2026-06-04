import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { locationsExtended, topLocations } from "@/data/locations-extended";
import { professions, topProfessions } from "@/data/professions";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

// ISR: revalidate once per day — pages generated on first request, then cached
export const revalidate = 86400;

// Allow on-demand generation for all ~20,000 combinations not pre-built at build time
export const dynamicParams = true;

// Pre-build only top professions × top locations (~400 pages) at build time
// The remaining ~19,600 are generated on first request via ISR
export async function generateStaticParams() {
  const params: { location: string; profession: string }[] = [];
  for (const loc of topLocations) {
    for (const prof of topProfessions) {
      params.push({ location: loc.slug, profession: prof.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string; profession: string }>;
}): Promise<Metadata> {
  const { location, profession } = await params;
  const loc = locationsExtended.find((l) => l.slug === location);
  const prof = professions.find((p) => p.slug === profession);
  if (!loc || !prof) return {};

  return {
    title: `Best Invoicing Software for ${prof.namePlural} in ${loc.name} | BillingBee`,
    description: `BillingBee is the #1 invoicing software for ${prof.namePlural} in ${loc.name}. ${loc.taxName} compliant, ${loc.currencySymbol} ${loc.currency} invoicing, and features built for ${prof.industry.toLowerCase()} professionals.`,
    openGraph: {
      title: `Invoicing Software for ${prof.namePlural} in ${loc.name}`,
      description: `Send professional invoices, automate payment reminders, and get paid faster. Built for ${prof.namePlural} in ${loc.name}.`,
    },
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ location: string; profession: string }>;
}) {
  const { location, profession } = await params;

  const loc = locationsExtended.find((l) => l.slug === location);
  const prof = professions.find((p) => p.slug === profession);

  if (!loc || !prof) notFound();

  // Related pages for internal linking
  const relatedLocations = locationsExtended
    .filter((l) => l.slug !== loc.slug && l.continent === loc.continent)
    .slice(0, 5);

  const relatedProfessions = professions
    .filter((p) => p.slug !== prof.slug && p.industry === prof.industry)
    .slice(0, 5);

  const otherProfessions = professions
    .filter((p) => p.slug !== prof.slug && p.industry !== prof.industry)
    .slice(0, 4);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${loc.slug}/invoicing-software`} className="hover:text-slate-900 transition-colors">
            {loc.name}
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{prof.namePlural}</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-4xl">{prof.emoji}</span>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
            >
              {prof.industry}
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}
            >
              {loc.name}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            Invoicing Software for {prof.namePlural} in {loc.name}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            BillingBee is built for {prof.namePlural} working in {loc.name}.
            Send professional {loc.currencySymbol} {loc.currency} invoices, stay {loc.taxName} compliant,
            and get paid faster — without the admin headache.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://billingbee.co/register-now"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
            >
              Start free in {loc.name} →
            </Link>
            <Link
              href={`/${loc.slug}/invoicing-software`}
              className="inline-flex items-center font-medium px-6 py-3 rounded-full transition-all hover:border-emerald-300"
              style={{ border: "1px solid #E2E8F0", color: "#334155" }}
            >
              All {loc.name} features
            </Link>
          </div>
        </div>

        {/* Local + profession at-a-glance stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Currency", value: `${loc.currencySymbol} ${loc.currency}` },
            { label: "Tax", value: loc.taxName },
            { label: "Tax Rate", value: loc.taxRate },
            { label: "Avg. Invoices", value: prof.avgInvoiceCount },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-4 text-center" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>{stat.label}</p>
              <p className="text-lg font-black" style={{ color: "#0F172A" }}>{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Pain points */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            The billing problems {prof.namePlural} in {loc.name} face
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            Working in {loc.name} means dealing with {loc.taxName} at {loc.taxRate}, {loc.currency} billing,
            and clients who expect professional invoices. Here&apos;s what makes it hard:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prof.topPainPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                <span className="text-lg mt-0.5">😤</span>
                <p className="text-sm" style={{ color: "#334155" }}>{pain}</p>
              </div>
            ))}
            <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
              <span className="text-lg mt-0.5">😤</span>
              <p className="text-sm" style={{ color: "#334155" }}>{loc.taxName} compliance on every invoice</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
              <span className="text-lg mt-0.5">😤</span>
              <p className="text-sm" style={{ color: "#334155" }}>Managing {loc.currency} invoices for {loc.businessCount} local businesses</p>
            </div>
          </div>
        </section>

        {/* How BillingBee solves it */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            How BillingBee solves this for {prof.namePlural} in {loc.name}
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            Features that match the way {prof.namePlural.toLowerCase()} actually work — with full {loc.taxName} compliance built in.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prof.keyFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "#334155" }}>{feature}</p>
              </div>
            ))}
            <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
              <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
              <p className="text-sm font-medium" style={{ color: "#334155" }}>Automatic {loc.taxName} at {loc.taxRate} on every invoice</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
              <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
              <p className="text-sm font-medium" style={{ color: "#334155" }}>Invoice in {loc.currencySymbol} {loc.currency} with live exchange rates</p>
            </div>
          </div>
        </section>

        {/* Billing style callout */}
        <section className="rounded-2xl p-8 mb-14 flex flex-col sm:flex-row gap-8 items-center" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <div className="text-5xl shrink-0">{prof.emoji}</div>
          <div>
            <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: "#64748B" }}>
              Built for {prof.billingStyle} billing
            </p>
            <h3 className="text-xl font-black mb-2" style={{ color: "#0F172A" }}>
              {prof.namePlural} in {loc.name} typically send {prof.avgInvoiceCount}
            </h3>
            <p className="text-sm" style={{ color: "#64748B" }}>
              BillingBee handles {prof.billingStyle} billing natively — no workarounds needed.
              Every invoice is {loc.taxName} compliant and denominated in {loc.currency} ({loc.currencySymbol}).
            </p>
          </div>
        </section>

        <CTABanner
          headline={`The invoicing tool built for ${prof.namePlural} in ${loc.name}`}
          subtext={`${loc.taxName} compliant, ${loc.currency} ready, and designed for how ${prof.namePlural.toLowerCase()} bill their clients.`}
          ctaLabel={`Start free in ${loc.name}`}
        />

        {/* Related: same profession, other locations */}
        {relatedLocations.length > 0 && (
          <section className="mt-14">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0F172A" }}>
              {prof.namePlural} invoicing in other {loc.continent} countries
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedLocations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/${l.slug}/invoicing-software-for/${prof.slug}`}
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                    {prof.namePlural} in {l.name}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#10B981" }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related: same location, other professions in same industry */}
        {relatedProfessions.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0F172A" }}>
              Other {prof.industry} professionals in {loc.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedProfessions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${loc.slug}/invoicing-software-for/${p.slug}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <span>{p.emoji}</span>
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{p.namePlural} in {loc.name}</span>
                  <span className="ml-auto text-sm font-medium" style={{ color: "#10B981" }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cross-link: other professions in this location */}
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: "#0F172A" }}>
            More professions using BillingBee in {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherProfessions.map((p) => (
              <Link
                key={p.slug}
                href={`/${loc.slug}/invoicing-software-for/${p.slug}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span>{p.emoji}</span>
                <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{p.namePlural}</span>
                <span className="ml-auto text-sm font-medium" style={{ color: "#10B981" }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
