import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  if (!loc) return {};
  return {
    title: `Best Invoicing Software for ${loc.name} Businesses | BillingBee`,
    description: `Invoicing software built for ${loc.name}. Supports ${loc.taxName} (${loc.taxRate}), ${loc.currency}, and local payment methods. Start free today.`,
    openGraph: {
      title: `Invoicing Software for ${loc.name} | BillingBee`,
      description: `Professional invoicing for ${loc.name} businesses. ${loc.taxName} compliant, ${loc.currency} support, and more.`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  if (!loc) notFound();

  const others = locations.filter((l) => l.slug !== loc.slug).slice(0, 6);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Invoicing software for {loc.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌍</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              {loc.country}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Invoicing Software for {loc.name} Businesses
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mb-8">
            BillingBee is built for {loc.name}-based freelancers and small businesses.
            Full {loc.taxName} support, {loc.currency} invoicing, and local payment methods — out of the box.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://billingbee.co/signup"
              className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Start free in {loc.name}
            </Link>
          </div>
        </div>

        {/* At-a-glance */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Currency", value: `${loc.currencySymbol} ${loc.currency}` },
            { label: "Tax", value: loc.taxName },
            { label: "Tax Rate", value: loc.taxRate },
            { label: "Businesses", value: loc.businessCount },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">{stat.label}</p>
              <p className="text-lg font-black text-gray-900">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Local compliance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {loc.taxName} & local compliance
          </h2>
          <p className="text-gray-500 mb-6">
            BillingBee handles all the local requirements so your invoices are always compliant in {loc.name}.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {loc.localCompliance.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                <span className="text-indigo-600 font-bold text-lg mt-0.5">✓</span>
                <p className="text-sm text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Accepted payment methods in {loc.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {loc.paymentMethods.map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm"
              >
                <span className="text-green-500">✓</span>
                <span className="text-sm font-medium text-gray-700">{method}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Everything you need to invoice in {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              `${loc.currency} (${loc.currencySymbol}) invoicing`,
              `${loc.taxName} calculation at ${loc.taxRate}`,
              `${loc.taxName} number on invoices`,
              "Multi-currency support for international clients",
              `${loc.language} invoice templates`,
              "Automatic payment reminders",
              "Online payment collection",
              "Client payment portal",
              "Recurring invoices",
              "PDF download for record-keeping",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-gray-50">
                <span className="text-indigo-600">✓</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          headline={`The invoicing tool built for ${loc.name}`}
          subtext={`${loc.taxName} compliant, ${loc.currency} ready, and trusted by thousands of ${loc.name} businesses.`}
          ctaLabel={`Start free in ${loc.name}`}
        />

        {/* Other locations */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Invoicing software for other regions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}/invoicing-software`}
                className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm">
                  Invoicing software for {l.name}
                </span>
                <span className="text-indigo-600 text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
