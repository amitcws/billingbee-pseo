import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { invoiceTemplates } from "@/data/templates";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return invoiceTemplates.map((t) => ({ template: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}): Promise<Metadata> {
  const { template } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  if (!tmpl) return {};
  return {
    title: `Free ${tmpl.name} — Online Invoice Generator | BillingBee`,
    description: `Free online invoice generator. Use this ${tmpl.name.toLowerCase()} in BillingBee, send as PDF, Word, or Google Docs — no download needed. ${tmpl.description}`,
    openGraph: {
      title: `Free ${tmpl.name} | BillingBee`,
      description: tmpl.description,
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  if (!tmpl) notFound();

  const others = invoiceTemplates.filter((t) => t.slug !== tmpl.slug).slice(0, 6);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Invoice Templates</span>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{tmpl.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Template preview */}
          <div>
            <div
              className="aspect-[3/4] rounded-2xl flex flex-col p-8"
              style={{
                backgroundColor: `${tmpl.previewColor}08`,
                border: `2px solid ${tmpl.previewColor}30`,
                boxShadow: "0 10px 40px rgba(0,0,0,.10)",
              }}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xl font-black mb-1" style={{ color: tmpl.previewColor }}>INVOICE</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>#INV-2025-001</div>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: tmpl.previewColor }}>
                  B
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
                      <div className="h-2 rounded w-12 ml-4 shrink-0" style={{ background: "#CBD5E1" }} />
                    </div>
                  ))}
                </div>
                <div className="pt-4 flex justify-between items-center" style={{ borderTop: "2px solid #CBD5E1" }}>
                  <div className="h-3 rounded w-20" style={{ backgroundColor: `${tmpl.previewColor}40` }} />
                  <div className="h-3 rounded w-16" style={{ backgroundColor: tmpl.previewColor }} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs" style={{ color: "#94A3B8" }}>Preview — BillingBee {tmpl.name}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm" style={{ color: "#64748B" }}>{tmpl.downloadCount} downloads</span>
              <span className="text-sm font-medium" style={{ color: "#10B981" }}>★★★★★ Free</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <div
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: "#F1F5F9", color: "#475569" }}
            >
              {tmpl.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#0F172A" }}>
              Free {tmpl.name}
            </h1>
            <p className="text-lg mb-6" style={{ color: "#64748B" }}>{tmpl.description}</p>

            {/* Format buttons */}
            <div className="space-y-3 mb-8">
              {tmpl.formats.map((fmt) => (
                <Link
                  key={fmt}
                  href="https://billingbee.co/register-now"
                  className="flex items-center justify-between rounded-xl px-4 py-3 transition-all group hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {fmt === "PDF" ? "📄" : fmt.includes("Word") ? "📝" : fmt.includes("Google") ? "📊" : "📈"}
                    </span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>Use as {fmt} in BillingBee</p>
                      <p className="text-xs" style={{ color: "#64748B" }}>Free · No credit card needed</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "#10B981" }}>Use free →</span>
                </Link>
              ))}
            </div>

            {/* Or use online */}
            <div className="rounded-2xl p-5 text-white" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
              <p className="font-bold mb-1">Or use it online — faster & smarter</p>
              <p className="text-sm mb-3" style={{ color: "#94A3B8" }}>Fill in your details, send to clients, and get paid online. No downloads needed.</p>
              <Link
                href="https://billingbee.co/register-now"
                className="inline-flex items-center text-sm font-bold px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                style={{ background: "#10B981", color: "#fff" }}
              >
                Use online for free →
              </Link>
            </div>
          </div>
        </div>

        {/* What's included */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>What your invoice will include</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {tmpl.fields.map((field) => (
              <div key={field} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <span style={{ color: "#10B981" }}>✓</span>
                <span className="text-sm" style={{ color: "#334155" }}>{field}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best for */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>Best for</h2>
          <div className="flex flex-wrap gap-2">
            {tmpl.bestFor.map((b) => (
              <span
                key={b}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: "rgba(16,185,129,0.10)", color: "#065F46", border: "1px solid rgba(16,185,129,0.20)" }}
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Why BillingBee vs download */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            Static template vs BillingBee — what&apos;s the difference?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-6" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <h3 className="font-bold mb-4" style={{ color: "#475569" }}>📄 Static template</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#475569" }}>
                <li className="flex gap-2"><span className="text-amber-400">△</span> Edit manually in Word or Docs</li>
                <li className="flex gap-2"><span className="text-amber-400">△</span> No payment tracking</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> No auto-reminders</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> No online payment button</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> No client history</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.20)" }}>
              <h3 className="font-bold mb-4" style={{ color: "#065F46" }}>⚡ BillingBee (online)</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#064E3B" }}>
                <li className="flex gap-2"><span style={{ color: "#10B981" }}>✓</span> Fill out & send in 2 minutes</li>
                <li className="flex gap-2"><span style={{ color: "#10B981" }}>✓</span> Track paid vs outstanding</li>
                <li className="flex gap-2"><span style={{ color: "#10B981" }}>✓</span> Auto payment reminders</li>
                <li className="flex gap-2"><span style={{ color: "#10B981" }}>✓</span> Pay-now button in every invoice</li>
                <li className="flex gap-2"><span style={{ color: "#10B981" }}>✓</span> Full client history & reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <CTABanner
          headline={`Use this ${tmpl.name} online — faster than downloading`}
          subtext="Send professional invoices and collect payments in minutes. Your first 5 invoices are free."
          ctaLabel="Create your first invoice free"
        />

        {/* Other templates */}
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>More free invoice templates</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="font-medium text-sm" style={{ color: "#0F172A" }}>{t.name}</span>
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
