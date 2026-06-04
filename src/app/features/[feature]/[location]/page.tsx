import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { features } from "@/data/features";
import { allLocations as locationsExtended, topLocations } from "@/data/locations-all";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const params: { feature: string; location: string }[] = [];
  for (const feat of features) {
    for (const loc of topLocations) {
      params.push({ feature: feat.slug, location: loc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string; location: string }>;
}): Promise<Metadata> {
  const { feature, location } = await params;
  const feat = features.find((f) => f.slug === feature);
  const loc = locationsExtended.find((l) => l.slug === location);
  if (!feat || !loc) return {};
  return {
    title: `${feat.name} in ${loc.name} | BillingBee`,
    description: `${feat.description} Built for ${loc.name} businesses — ${loc.taxName} compliant and ${loc.currencySymbol} ${loc.currency} ready.`,
    openGraph: {
      title: `${feat.name} for ${loc.name} Businesses — BillingBee`,
      description: `How ${loc.name} freelancers and businesses use BillingBee's ${feat.name.toLowerCase()} to get paid faster.`,
    },
  };
}

export default async function FeatureLocationPage({
  params,
}: {
  params: Promise<{ feature: string; location: string }>;
}) {
  const { feature, location } = await params;
  const feat = features.find((f) => f.slug === feature);
  const loc = locationsExtended.find((l) => l.slug === location);
  if (!feat || !loc) notFound();

  const relatedFeatures = features.filter((f) => feat.relatedFeatures.includes(f.slug));
  const otherLocations = locationsExtended
    .filter((l) => l.slug !== loc.slug && l.continent === loc.continent)
    .slice(0, 6);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/features/${feat.slug}`} className="hover:text-slate-900 transition-colors">{feat.name}</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{loc.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}>
              {loc.name}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}>
              BillingBee Feature
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            {feat.name} for {loc.name} Businesses
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            {feat.description} Built for {loc.name} — fully compatible with {loc.taxName} at {loc.taxRate}
            and {loc.currencySymbol} {loc.currency} billing.
          </p>
          <Link
            href="https://billingbee.co/register-now"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
          >
            Start free in {loc.name} →
          </Link>
        </div>

        {/* Local context stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Currency", value: `${loc.currencySymbol} ${loc.currency}` },
            { label: "Tax", value: loc.taxName },
            { label: "Tax Rate", value: loc.taxRate },
            { label: "Businesses", value: loc.businessCount },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-4 text-center" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>{stat.label}</p>
              <p className="text-base font-black" style={{ color: "#0F172A" }}>{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Benefits with local context */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Why {loc.name} businesses use {feat.name.toLowerCase()}
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            With {loc.businessCount} businesses in {loc.name} navigating {loc.taxName} compliance and {loc.currency} invoicing,
            here&apos;s what makes {feat.name.toLowerCase()} especially valuable:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {feat.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="font-medium text-sm" style={{ color: "#334155" }}>{benefit}</p>
              </div>
            ))}
            <div className="flex items-start gap-3 rounded-xl p-4"
              style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
              <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
              <p className="font-medium text-sm" style={{ color: "#334155" }}>
                Full {loc.taxName} compliance at {loc.taxRate} built in
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl p-4"
              style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
              <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
              <p className="font-medium text-sm" style={{ color: "#334155" }}>
                Invoice in {loc.currencySymbol} {loc.currency} with live exchange rates
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>How it works in {loc.name}</h2>
          <div className="space-y-4">
            {feat.howItWorks.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-white rounded-xl p-5"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}>
                <div className="w-8 h-8 rounded-full text-white font-bold flex items-center justify-center shrink-0 text-sm"
                  style={{ background: "#10B981" }}>
                  {i + 1}
                </div>
                <p className="pt-0.5" style={{ color: "#334155" }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>Common use cases in {loc.name}</h2>
          <div className="flex flex-wrap gap-3">
            {feat.useCases.map((uc) => (
              <span key={uc} className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: "#F1F5F9", color: "#334155", border: "1px solid #E2E8F0" }}>
                {uc}
              </span>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`${feat.name} for ${loc.name} businesses`}
          subtext={`${loc.taxName} compliant, ${loc.currency} ready. Join ${loc.businessCount} ${loc.name} businesses getting paid faster.`}
          ctaLabel={`Start free in ${loc.name}`}
        />

        {/* Related features */}
        {relatedFeatures.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>More features for {loc.name} businesses</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {relatedFeatures.map((f) => (
                <Link key={f.slug} href={`/features/${f.slug}/${loc.slug}`}
                  className="rounded-xl p-4 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>{f.name}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>For {loc.name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Same feature, other locations */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>
            {feat.name} in other {loc.continent} countries
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherLocations.map((l) => (
              <Link key={l.slug} href={`/features/${feat.slug}/${l.slug}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}>
                <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{feat.name} — {l.name}</span>
                <span className="text-sm font-medium" style={{ color: "#10B981" }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
