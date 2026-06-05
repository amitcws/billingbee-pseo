import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { invoiceTemplates } from "@/data/templates";
import { professions, topProfessions } from "@/data/professions";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const params: { template: string; profession: string }[] = [];
  for (const tmpl of invoiceTemplates) {
    for (const prof of topProfessions) {
      params.push({ template: tmpl.slug, profession: prof.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string; profession: string }>;
}): Promise<Metadata> {
  const { template, profession } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  const prof = professions.find((p) => p.slug === profession);
  if (!tmpl || !prof) return {};
  return {
    title: `Free ${tmpl.name} for ${prof.namePlural} — Use Online as PDF, Word & More | BillingBee`,
    description: `Use this free ${tmpl.name.toLowerCase()} for ${prof.namePlural} in BillingBee. Includes the right fields for ${prof.billingStyle} billing. Send as PDF, Word, or Google Docs — no download needed.`,
    openGraph: {
      title: `Free ${tmpl.name} for ${prof.namePlural} | BillingBee`,
      description: `Professional invoice template built for how ${prof.namePlural.toLowerCase()} bill their clients.`,
    },
  };
}

export default async function TemplateProfessionPage({
  params,
}: {
  params: Promise<{ template: string; profession: string }>;
}) {
  const { template, profession } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  const prof = professions.find((p) => p.slug === profession);
  if (!tmpl || !prof) notFound();

  const relatedProfessions = professions
    .filter((p) => p.slug !== prof.slug && p.industry === prof.industry)
    .slice(0, 5);

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
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: "#F1F5F9", color: "#475569", border: "1px solid #E2E8F0" }}>
              {prof.billingStyle} billing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            Free {tmpl.name} for {prof.namePlural}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            A professional invoice template designed for {prof.namePlural.toLowerCase()} who bill {prof.billingStyle === "hourly" ? "by the hour" : prof.billingStyle === "project" ? "per project" : prof.billingStyle === "retainer" ? "on retainer" : "per session"}.
            Use free in BillingBee — send as PDF, Word, or Google Docs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://billingbee.co/register-now"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
            >
              Use online for free →
            </Link>
          </div>
        </div>

        {/* Template preview + download */}
        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          {/* Preview */}
          <div>
            <div className="aspect-[3/4] rounded-2xl flex flex-col p-8"
              style={{ backgroundColor: `${tmpl.previewColor}08`, border: `2px solid ${tmpl.previewColor}30`, boxShadow: "0 10px 40px rgba(0,0,0,.08)" }}>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xl font-black mb-1" style={{ color: tmpl.previewColor }}>INVOICE</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>#INV-2025-001</div>
                  <div className="text-xs mt-1 font-semibold" style={{ color: tmpl.previewColor }}>{prof.namePlural}</div>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: tmpl.previewColor }}>
                  {prof.emoji}
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="text-xs font-semibold" style={{ color: tmpl.previewColor }}>
                  {prof.billingStyle === "hourly" ? "Time & Materials" : prof.billingStyle === "project" ? "Project Services" : prof.billingStyle === "retainer" ? "Monthly Retainer" : "Session Fees"}
                </div>
                <div className="space-y-2" style={{ borderTop: "1px solid #E2E8F0", paddingTop: "12px" }}>
                  {[80, 100, 60, 90].map((w, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-2 rounded" style={{ width: `${w}%`, background: "#E2E8F0" }} />
                      <div className="h-2 rounded w-12 ml-4 shrink-0" style={{ background: "#CBD5E1" }} />
                    </div>
                  ))}
                </div>
                <div className="pt-3 flex justify-between items-center" style={{ borderTop: "2px solid #CBD5E1" }}>
                  <div className="h-3 rounded w-20" style={{ backgroundColor: `${tmpl.previewColor}40` }} />
                  <div className="h-3 rounded w-16" style={{ backgroundColor: tmpl.previewColor }} />
                </div>
              </div>
            </div>
            <p className="text-xs text-center mt-2" style={{ color: "#94A3B8" }}>
              Built for {prof.namePlural} · {prof.billingStyle} billing
            </p>
          </div>

          {/* Formats */}
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>Use free in BillingBee</h2>
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>
              Pre-configured with the right line items for how {prof.namePlural.toLowerCase()} charge clients. No credit card needed.
            </p>
            <div className="space-y-3 mb-8">
              {tmpl.formats.map((fmt) => (
                <Link key={fmt} href="https://billingbee.co/register-now"
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300 group"
                  style={{ border: "1px solid #E2E8F0" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{fmt === "PDF" ? "📄" : fmt.includes("Word") ? "📝" : fmt.includes("Google") ? "📊" : "📈"}</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>Use as {fmt} in BillingBee</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>For {prof.namePlural} · Free · No credit card needed</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "#10B981" }}>Use free →</span>
                </Link>
              ))}
            </div>
            <div className="rounded-2xl p-5 text-white" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
              <p className="font-bold mb-1">Or use it online — smarter for {prof.namePlural}</p>
              <p className="text-sm mb-3" style={{ color: "#94A3B8" }}>Auto-reminders, online payment, and {prof.billingStyle} billing built in.</p>
              <Link href="https://billingbee.co/register-now"
                className="inline-flex items-center text-sm font-bold px-4 py-2 rounded-full"
                style={{ background: "#10B981", color: "#fff" }}>
                Try free →
              </Link>
            </div>
          </div>
        </div>

        {/* Why this template for this profession */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            Why {prof.namePlural} choose this template
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {prof.keyFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "#334155" }}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pain points solved */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>Billing problems this solves for {prof.namePlural}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {prof.topPainPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <span style={{ color: "#10B981" }}>→</span>
                <p className="text-sm" style={{ color: "#334155" }}>{pain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>What&apos;s included</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {tmpl.fields.map((field) => (
              <div key={field} className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <span style={{ color: "#10B981" }}>✓</span>
                <span className="text-sm" style={{ color: "#334155" }}>{field}</span>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`Invoice smarter as a ${prof.name}`}
          subtext={`BillingBee is built for how ${prof.namePlural.toLowerCase()} bill — ${prof.billingStyle} rates, auto-reminders, and online payment.`}
        />

        {/* Related: same template, other professions */}
        {relatedProfessions.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>
              {tmpl.name} for other {prof.industry} professionals
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedProfessions.map((p) => (
                <Link key={p.slug} href={`/invoice-templates/${tmpl.slug}/for/${p.slug}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}>
                  <span>{p.emoji}</span>
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{tmpl.name} for {p.namePlural}</span>
                  <span className="ml-auto text-sm font-medium" style={{ color: "#10B981" }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other templates for this profession */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>More templates for {prof.namePlural}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherTemplates.map((t) => (
              <Link key={t.slug} href={`/invoice-templates/${t.slug}/for/${prof.slug}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}>
                <span className="text-sm font-medium" style={{ color: "#0F172A" }}>{t.name} for {prof.namePlural}</span>
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
