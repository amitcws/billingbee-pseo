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
        <section className="bg-gradient-to-b from-indigo-50 to-white px-4 sm:px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-6">
              50,000+ businesses trust BillingBee
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Invoice faster.<br />
              <span className="text-indigo-600">Get paid sooner.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              Professional invoicing software for freelancers and small businesses.
              Send invoices, automate reminders, and accept online payments — all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://billingbee.co/signup"
                className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-700 transition-colors shadow-lg"
              >
                Start for free
              </Link>
              <Link
                href="/invoice-templates/simple-invoice"
                className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg hover:border-gray-300 transition-colors"
              >
                Browse templates
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">Free plan available · No credit card needed · Cancel anytime</p>
          </div>
        </section>

        {/* Invoice Templates */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Free Invoice Templates</h2>
              <p className="text-gray-500 mt-1">Download in PDF, Word, or Google Docs — or use online with BillingBee.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {invoiceTemplates.slice(0, 6).map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}`}
                className="group border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-white font-black"
                  style={{ backgroundColor: t.previewColor }}
                >
                  📄
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{t.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{t.description}</p>
                <p className="text-xs text-emerald-600 font-medium mt-3">{t.downloadCount} downloads</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/invoice-templates/freelance-invoice" className="text-indigo-600 font-semibold hover:underline">
              View all {invoiceTemplates.length} templates →
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900">Features built for getting paid</h2>
              <p className="text-gray-500 mt-2">Everything you need, nothing you don&apos;t.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.slice(0, 6).map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{f.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{f.description}</p>
                  <p className="text-indigo-600 text-sm font-medium mt-3">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* By profession */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900">Invoicing by Profession</h2>
            <p className="text-gray-500 mt-1">Tailored for how you actually work.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/for/${uc.slug}`}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <span className="text-2xl">{uc.emoji}</span>
                <span className="font-medium text-gray-900 text-sm">{uc.profession}</span>
                <span className="ml-auto text-indigo-600 text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Alternatives */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900">BillingBee vs the competition</h2>
              <p className="text-gray-500 mt-1">Honest comparisons so you can make the right choice.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {competitors.map((c) => (
                <Link
                  key={c.slug}
                  href={`/alternatives/${c.slug}`}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1">BillingBee vs {c.name}</p>
                  <p className="text-xs text-gray-500 line-clamp-1">{c.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900">Invoicing Software by Country</h2>
            <p className="text-gray-500 mt-1">Local tax compliance, currencies, and payment methods — everywhere.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}/invoicing-software`}
                className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900 text-sm">{l.name}</p>
                  <p className="text-xs text-gray-500">{l.currencySymbol} {l.currency} · {l.taxName}</p>
                </div>
                <span className="text-indigo-600 text-sm">→</span>
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
