import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { competitors } from "@/data/competitors";
import { useCases } from "@/data/usecases";
import { invoiceTemplates } from "@/data/templates";
import { features } from "@/data/features";
import { locations } from "@/data/locations";

export const metadata = {
  title: "BillingBee — Professional Invoicing Software | Get Paid Faster",
  description:
    "Send professional invoices, automate payment reminders, and accept online payments. Used by 50,000+ freelancers and small businesses worldwide.",
};

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="px-4 sm:px-6 py-20 text-center" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #fff 100%)" }}>
          <div className="max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
            >
              50,000+ businesses trust BillingBee
            </div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight" style={{ color: "#0F172A" }}>
              Invoice faster.<br />
              <span style={{ background: "linear-gradient(120deg,#10B981,#34D399 55%,#6EE7B7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Get paid sooner.
              </span>
            </h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Professional invoicing software for freelancers and small businesses.
              Send invoices, automate reminders, and accept online payments — all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://billingbee.co/register-now"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5"
                style={{ background: "#10B981", boxShadow: "0 8px 28px rgba(16,185,129,0.35)" }}
              >
                Start for free
              </Link>
              <Link
                href="/invoice-templates/simple-invoice"
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full text-base transition-all border hover:border-emerald-300"
                style={{ borderColor: "#E2E8F0", color: "#334155" }}
              >
                Browse templates
              </Link>
            </div>
            <p className="text-sm mt-4" style={{ color: "#94A3B8" }}>Free plan available · No credit card needed · Cancel anytime</p>
          </div>
        </section>

        {/* Invoice Templates */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}>
              Free download
            </div>
            <h2 className="text-3xl font-extrabold" style={{ color: "#0F172A" }}>Free Invoice Templates</h2>
            <p className="mt-1" style={{ color: "#64748B" }}>Download in PDF, Word, or Google Docs — or use online with BillingBee.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {invoiceTemplates.slice(0, 6).map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}`}
                className="group border rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-400"
                style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-white text-lg"
                  style={{ backgroundColor: t.previewColor }}
                >
                  📄
                </div>
                <h3 className="font-bold mb-1 group-hover:text-emerald-600 transition-colors" style={{ color: "#0F172A" }}>{t.name}</h3>
                <p className="text-sm line-clamp-2" style={{ color: "#64748B" }}>{t.description}</p>
                <p className="text-xs font-medium mt-3" style={{ color: "#10B981" }}>{t.downloadCount} downloads</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/invoice-templates/freelance-invoice" className="font-semibold hover:underline" style={{ color: "#10B981" }}>
              View all {invoiceTemplates.length} templates →
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-16" style={{ background: "#F8FAFC" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}>
                Product
              </div>
              <h2 className="text-3xl font-extrabold" style={{ color: "#0F172A" }}>Features built for getting paid</h2>
              <p className="mt-2" style={{ color: "#64748B" }}>Everything you need, nothing you don&apos;t.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.slice(0, 6).map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="group bg-white border rounded-2xl p-5 transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}
                >
                  <h3 className="font-bold mb-2 group-hover:text-emerald-600 transition-colors" style={{ color: "#0F172A" }}>{f.name}</h3>
                  <p className="text-sm line-clamp-2" style={{ color: "#64748B" }}>{f.description}</p>
                  <p className="text-sm font-medium mt-3" style={{ color: "#10B981" }}>Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* By profession */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold" style={{ color: "#0F172A" }}>Invoicing by Profession</h2>
            <p className="mt-1" style={{ color: "#64748B" }}>Tailored for how you actually work.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/for/${uc.slug}`}
                className="flex items-center gap-3 border rounded-xl px-4 py-3 transition-all hover:border-emerald-300 group"
                style={{ borderColor: "#E2E8F0" }}
              >
                <span className="text-2xl">{uc.emoji}</span>
                <span className="font-medium text-sm" style={{ color: "#0F172A" }}>{uc.profession}</span>
                <span className="ml-auto text-sm font-medium" style={{ color: "#10B981" }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Alternatives */}
        <section className="py-16" style={{ background: "#F8FAFC" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold" style={{ color: "#0F172A" }}>BillingBee vs the competition</h2>
              <p className="mt-1" style={{ color: "#64748B" }}>Honest comparisons so you can make the right choice.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {competitors.map((c) => (
                <Link
                  key={c.slug}
                  href={`/alternatives/${c.slug}`}
                  className="bg-white border rounded-xl px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-emerald-300"
                  style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,.05)" }}
                >
                  <p className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>BillingBee vs {c.name}</p>
                  <p className="text-xs line-clamp-1" style={{ color: "#64748B" }}>{c.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold" style={{ color: "#0F172A" }}>Invoicing Software by Country</h2>
            <p className="mt-1" style={{ color: "#64748B" }}>Local tax compliance, currencies, and payment methods — everywhere.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}/invoicing-software`}
                className="flex items-center justify-between border rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ borderColor: "#E2E8F0" }}
              >
                <div>
                  <p className="font-medium text-sm" style={{ color: "#0F172A" }}>{l.name}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{l.currencySymbol} {l.currency} · {l.taxName}</p>
                </div>
                <span className="text-sm font-medium" style={{ color: "#10B981" }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
