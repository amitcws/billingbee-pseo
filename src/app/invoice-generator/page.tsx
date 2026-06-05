import type { Metadata } from "next";
import Link from "next/link";
import { professions } from "@/data/professions";
import { invoiceTemplates } from "@/data/templates";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Free Online Invoice Generator — Create & Send Invoices | BillingBee",
  description:
    "Free online invoice generator. Create professional invoices in minutes, send as PDF or email, and get paid faster. No download needed — works entirely in your browser.",
  openGraph: {
    title: "Free Online Invoice Generator | BillingBee",
    description:
      "Create and send professional invoices for free. Works online — no software to install.",
  },
};

const steps = [
  {
    num: "1",
    title: "Fill in your details",
    desc: "Enter your business name, client info, services, and amounts.",
  },
  {
    num: "2",
    title: "Customise your invoice",
    desc: "Pick a template, add your logo, and set payment terms.",
  },
  {
    num: "3",
    title: "Send & get paid",
    desc: "Send by email as a PDF, share a payment link, and track when clients pay.",
  },
];

const benefits = [
  { icon: "⚡", title: "Instant generation", desc: "Your invoice is ready in under 2 minutes." },
  { icon: "📧", title: "Send by email or link", desc: "No printing, no downloads — send directly from BillingBee." },
  { icon: "💳", title: "Get paid online", desc: "Add a Pay Now button so clients pay by card or bank transfer." },
  { icon: "🔔", title: "Auto reminders", desc: "BillingBee chases late payments so you don't have to." },
  { icon: "🌍", title: "Multi-currency", desc: "Invoice international clients in USD, GBP, EUR, and more." },
  { icon: "🔄", title: "Recurring invoices", desc: "Set up repeating invoices for retainer clients — runs on autopilot." },
];

export default function InvoiceGeneratorPage() {
  const featuredProfessions = professions.slice(0, 12);
  const featuredTemplates = invoiceTemplates.slice(0, 4);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>Invoice Generator</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <span
            className="text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block"
            style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
          >
            Free · No download needed
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            Free Online<br />Invoice Generator
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            Create professional invoices in minutes, send as PDF or email, and get paid faster.
            No software to install — works entirely in your browser.
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
              href="/invoice-templates/simple-invoice"
              className="inline-flex items-center font-medium px-6 py-3 rounded-full transition-all hover:border-emerald-300"
              style={{ border: "1px solid #E2E8F0", color: "#334155" }}
            >
              Browse templates
            </Link>
          </div>
          <p className="text-sm mt-4" style={{ color: "#94A3B8" }}>
            Free plan available · No credit card needed · Cancel anytime
          </p>
        </div>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            How the invoice generator works
          </h2>
          <p className="mb-8" style={{ color: "#64748B" }}>
            Three steps from blank page to paid invoice.
          </p>
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

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Why use BillingBee as your invoice generator
          </h2>
          <p className="mb-8" style={{ color: "#64748B" }}>
            More than a generator — a complete invoicing tool, free to start.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4 rounded-xl p-4" style={{ border: "1px solid #E2E8F0" }}>
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>{b.title}</p>
                  <p className="text-sm" style={{ color: "#64748B" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Start with a free invoice template
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            Pick a template and generate your invoice in seconds.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {featuredTemplates.map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}`}
                className="flex items-center gap-4 rounded-xl px-4 py-3 transition-all hover:border-emerald-300 group"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: t.previewColor }} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{t.category}</p>
                </div>
                <span className="text-sm font-medium group-hover:underline" style={{ color: "#10B981" }}>
                  Use free →
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/invoice-templates/freelance-invoice"
            className="text-sm font-medium hover:underline"
            style={{ color: "#10B981" }}
          >
            View all invoice templates →
          </Link>
        </section>

        {/* By profession */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            Invoice generator by profession
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            Tailored for how you actually bill clients.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {featuredProfessions.map((p) => (
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

        <CTABanner
          headline="Generate your first invoice in 2 minutes"
          subtext="Free plan available. No credit card required. Join 50,000+ freelancers and businesses using BillingBee."
        />
      </main>
      <Footer />
    </>
  );
}
