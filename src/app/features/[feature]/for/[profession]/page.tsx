import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { features } from "@/data/features";
import { professions, topProfessions } from "@/data/professions";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const params: { feature: string; profession: string }[] = [];
  for (const feat of features) {
    for (const prof of topProfessions) {
      params.push({ feature: feat.slug, profession: prof.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string; profession: string }>;
}): Promise<Metadata> {
  const { feature, profession } = await params;
  const feat = features.find((f) => f.slug === feature);
  const prof = professions.find((p) => p.slug === profession);
  if (!feat || !prof) return {};
  return {
    title: `${feat.name} for ${prof.namePlural} | BillingBee`,
    description: `${feat.description} See how BillingBee's ${feat.name.toLowerCase()} is built for how ${prof.namePlural.toLowerCase()} bill their clients.`,
    openGraph: {
      title: `${feat.name} for ${prof.namePlural} — BillingBee`,
      description: `How ${prof.namePlural.toLowerCase()} use BillingBee's ${feat.name.toLowerCase()} to get paid faster.`,
    },
  };
}

export default async function FeatureProfessionPage({
  params,
}: {
  params: Promise<{ feature: string; profession: string }>;
}) {
  const { feature, profession } = await params;
  const feat = features.find((f) => f.slug === feature);
  const prof = professions.find((p) => p.slug === profession);
  if (!feat || !prof) notFound();

  const relatedFeatures = features.filter((f) => feat.relatedFeatures.includes(f.slug));
  const otherProfessions = professions
    .filter((p) => p.slug !== prof.slug && p.industry === prof.industry)
    .slice(0, 5);

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
          <span style={{ color: "#0F172A" }}>For {prof.namePlural}</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-4xl">{prof.emoji}</span>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}>
              {prof.industry}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            {feat.name} for {prof.namePlural}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            {feat.description} Here&apos;s how {prof.namePlural.toLowerCase()} use it to spend less time on admin and more time doing billable work.
          </p>
          <Link
            href="https://billingbee.co/register-now"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
          >
            Try free →
          </Link>
        </div>

        {/* How it helps this profession specifically */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Why {prof.namePlural} need {feat.name.toLowerCase()}
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            {prof.namePlural} typically send {prof.avgInvoiceCount} and bill on a {prof.billingStyle} basis.
            Here&apos;s what makes {feat.name.toLowerCase()} especially valuable for this workflow:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {feat.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="font-medium text-sm" style={{ color: "#334155" }}>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>How it works for {prof.namePlural}</h2>
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

        {/* Profession-specific pain points this solves */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Billing pain points this solves for {prof.namePlural}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {prof.topPainPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-3 rounded-xl px-4 py-3"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <span style={{ color: "#10B981" }}>→</span>
                <p className="text-sm" style={{ color: "#334155" }}>{pain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>Common use cases</h2>
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
          headline={`Start using ${feat.name} as a ${prof.name}`}
          subtext={`Built for ${prof.billingStyle} billing. ${prof.namePlural} send ${prof.avgInvoiceCount} on average — BillingBee handles it all.`}
        />

        {/* Related features */}
        {relatedFeatures.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>Features that work great together for {prof.namePlural}</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {relatedFeatures.map((f) => (
                <Link key={f.slug} href={`/features/${f.slug}/for/${prof.slug}`}
                  className="rounded-xl p-4 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>{f.name}</p>
                  <p className="text-xs line-clamp-2" style={{ color: "#64748B" }}>For {prof.namePlural}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other professions */}
        {otherProfessions.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>{feat.name} for other {prof.industry} professionals</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {otherProfessions.map((p) => (
                <Link key={p.slug} href={`/features/${feat.slug}/for/${p.slug}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}>
                  <span>{p.emoji}</span>
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{feat.name} for {p.namePlural}</span>
                  <span className="ml-auto text-sm font-medium" style={{ color: "#10B981" }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
