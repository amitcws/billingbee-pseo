import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { features } from "@/data/features";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return features.map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}): Promise<Metadata> {
  const { feature } = await params;
  const feat = features.find((f) => f.slug === feature);
  if (!feat) return {};

  const seoTitles: Record<string, string> = {
    "recurring-invoices": "Recurring Billing Software — Automate Your Invoices | BillingBee",
    "payment-reminders": "Invoice Reminder Software — Automated Payment Reminders | BillingBee",
    "time-tracking": "Time Tracking & Invoicing Software for Freelancers | BillingBee",
    "invoice-templates": "Free Invoice Templates — Professional & Customisable | BillingBee",
    "online-payment": "Free Online Invoice Payments — Accept Cards & Bank Transfers | BillingBee",
  };

  const seoDescriptions: Record<string, string> = {
    "recurring-invoices": `Recurring billing software that automates your invoices. Set a schedule once and BillingBee sends invoices automatically — weekly, monthly, or annually. ${feat.description}`,
    "payment-reminders": `Invoice reminder software that chases late payments for you. BillingBee automatically sends payment reminders before and after the due date. ${feat.description}`,
    "time-tracking": `Time tracking and invoicing software built for freelancers. Track billable hours per project and convert them to invoices in one click. ${feat.description}`,
    "invoice-templates": `Free invoice templates for every business type. Professional, customisable, and ready to send in minutes. ${feat.description}`,
    "online-payment": `Free online invoice payments. Add a Pay Now button to every invoice and get paid by card, bank transfer, or PayPal. ${feat.description}`,
  };

  return {
    title: seoTitles[feature] ?? `${feat.name} | BillingBee`,
    description: seoDescriptions[feature] ?? feat.description,
    openGraph: {
      title: seoTitles[feature] ?? feat.headline,
      description: feat.description,
    },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature } = await params;
  const feat = features.find((f) => f.slug === feature);
  if (!feat) notFound();

  const related = features.filter((f) => feat.relatedFeatures.includes(f.slug));
  const others = features.filter(
    (f) => f.slug !== feat.slug && !feat.relatedFeatures.includes(f.slug)
  ).slice(0, 3);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Features</span>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{feat.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
          >
            BillingBee Feature
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            {feat.headline}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>{feat.description}</p>
          <Link
            href="https://billingbee.co/register-now"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
          >
            Try it free →
          </Link>
        </div>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Why it matters</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {feat.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-xl mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="font-medium" style={{ color: "#334155" }}>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>How it works</h2>
          <div className="space-y-4">
            {feat.howItWorks.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-white rounded-xl p-5" style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}>
                <div
                  className="w-8 h-8 rounded-full text-white font-bold flex items-center justify-center shrink-0 text-sm"
                  style={{ background: "#10B981" }}
                >
                  {i + 1}
                </div>
                <p className="pt-0.5" style={{ color: "#334155" }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>Common use cases</h2>
          <div className="flex flex-wrap gap-3">
            {feat.useCases.map((uc) => (
              <span
                key={uc}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: "#F1F5F9", color: "#334155", border: "1px solid #E2E8F0" }}
              >
                {uc}
              </span>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`Start using ${feat.name} today`}
          subtext="Set up in minutes. No credit card required. Cancel anytime."
        />

        {/* Related features */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>Works great with</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {related.map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="rounded-xl p-4 transition-all hover:border-emerald-300"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <p className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>{f.name}</p>
                  <p className="text-xs line-clamp-2" style={{ color: "#64748B" }}>{f.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other features */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>More features</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {others.map((f) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className="rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <p className="font-medium text-sm" style={{ color: "#0F172A" }}>{f.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
