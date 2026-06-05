import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { professions } from "@/data/professions";
import { invoiceTemplates } from "@/data/templates";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return professions.map((p) => ({ profession: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ profession: string }>;
}): Promise<Metadata> {
  const { profession } = await params;
  const prof = professions.find((p) => p.slug === profession);
  if (!prof) return {};
  return {
    title: `Free Invoice Generator for ${prof.namePlural} | BillingBee`,
    description: `Free online invoice generator for ${prof.namePlural.toLowerCase()}. Create and send professional invoices in minutes — built for ${prof.billingStyle} billing. No download needed.`,
    openGraph: {
      title: `Free Invoice Generator for ${prof.namePlural} | BillingBee`,
      description: `Generate and send invoices built for how ${prof.namePlural.toLowerCase()} charge clients. Free to start.`,
    },
  };
}

const billingStyleLabel: Record<string, string> = {
  hourly: "hourly billing",
  project: "project billing",
  retainer: "retainer billing",
  session: "per-session billing",
  daily: "day-rate billing",
};

const billingStyleDetail: Record<string, string> = {
  hourly: "hours worked and hourly rate",
  project: "project scope and fixed fee",
  retainer: "monthly retainer amount and period",
  session: "sessions delivered and per-session rate",
  daily: "days worked and day rate",
};

export default async function InvoiceGeneratorProfessionPage({
  params,
}: {
  params: Promise<{ profession: string }>;
}) {
  const { profession } = await params;
  const prof = professions.find((p) => p.slug === profession);
  if (!prof) notFound();

  const others = professions.filter((p) => p.slug !== prof.slug).slice(0, 6);
  const relatedTemplates = invoiceTemplates.slice(0, 3);

  const steps = [
    {
      num: "1",
      title: "Choose your template",
      desc: `Pick an invoice template built for ${prof.namePlural.toLowerCase()}.`,
    },
    {
      num: "2",
      title: "Fill in your details",
      desc: `Add your client info, ${billingStyleDetail[prof.billingStyle] ?? "services and amounts"}.`,
    },
    {
      num: "3",
      title: "Send & get paid",
      desc: "Send as PDF, share a payment link, and track when your client pays.",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/invoice-generator" className="hover:text-slate-900 transition-colors">Invoice Generator</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{prof.namePlural}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{prof.emoji}</span>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
            >
              Free invoice generator
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            Free Invoice Generator<br />for {prof.namePlural}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            Generate professional invoices built for {billingStyleLabel[prof.billingStyle] ?? "your billing style"}.
            Send as PDF, collect payment online, and stop chasing clients — all free.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://billingbee.co/register-now"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
            >
              Generate your first invoice free
            </Link>
            <Link
              href="/invoice-templates/freelance-invoice"
              className="inline-flex items-center font-medium px-6 py-3 rounded-full transition-all hover:border-emerald-300"
              style={{ border: "1px solid #E2E8F0", color: "#334155" }}
            >
              Browse templates
            </Link>
          </div>
          <p className="text-sm mt-4" style={{ color: "#94A3B8" }}>
            Free plan available · No credit card needed
          </p>
        </div>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0F172A" }}>
            How to generate an invoice as a {prof.name.toLowerCase()}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl p-6" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mb-4"
                  style={{ background: "#10B981", color: "#fff" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#0F172A" }}>{step.title}</h3>
                <p className="text-sm" style={{ color: "#64748B" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pain points */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            Billing problems {prof.namePlural.toLowerCase()} run into
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {prof.topPainPoints.map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
              >
                <span className="text-lg mt-0.5">😤</span>
                <p className="text-sm" style={{ color: "#334155" }}>{pain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Built for how {prof.namePlural.toLowerCase()} bill clients
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            The right tools for {billingStyleLabel[prof.billingStyle] ?? "your workflow"} — ready to go.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prof.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}
              >
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "#334155" }}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related templates */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Invoice templates for {prof.namePlural.toLowerCase()}
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            Start from a template and customise in seconds.
          </p>
          <div className="space-y-3">
            {relatedTemplates.map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}/for/${prof.slug}`}
                className="flex items-center gap-4 rounded-xl px-4 py-3 transition-all hover:border-emerald-300 group"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: t.previewColor }} />
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>
                    {t.name} for {prof.namePlural}
                  </p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{t.category}</p>
                </div>
                <span className="text-sm font-medium group-hover:underline" style={{ color: "#10B981" }}>
                  Use free →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`The invoice generator built for ${prof.namePlural}`}
          subtext={`Join thousands of ${prof.namePlural.toLowerCase()} using BillingBee to generate invoices faster and get paid on time.`}
        />

        {/* Other professions */}
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Invoice generators for other professions
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/invoice-generator/${p.slug}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="text-xl">{p.emoji}</span>
                <span className="font-medium text-sm" style={{ color: "#0F172A" }}>
                  Invoice Generator for {p.namePlural}
                </span>
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
