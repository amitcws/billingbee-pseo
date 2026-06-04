import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import { allLocations as locationsExtended } from "@/data/locations-all";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

// Allow ISR for all 140+ extended locations
export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  // Pre-build detailed locations; extended locations generate on first request
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location)
    ?? locationsExtended.find((l) => l.slug === location);
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
  // Try full-detail locations first, fall back to extended (lighter) locations
  const loc = locations.find((l) => l.slug === location)
    ?? locationsExtended.find((l) => l.slug === location);
  if (!loc) notFound();

  // Type guard: check if this is a full Location (has detailed fields)
  const isFullLocation = "localCompliance" in loc;

  const others = locationsExtended.filter((l) => l.slug !== loc.slug).slice(0, 6);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>Invoicing software for {loc.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌍</span>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
            >
              {loc.country}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            Invoicing Software for {loc.name} Businesses
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "#64748B" }}>
            BillingBee is built for {loc.name}-based freelancers and small businesses.
            Full {loc.taxName} support, {loc.currency} invoicing, and local payment methods — out of the box.
          </p>
          <Link
            href="https://billingbee.co/register-now"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
            style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
          >
            Start free in {loc.name}
          </Link>
        </div>

        {/* At-a-glance */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Currency", value: `${loc.currencySymbol} ${loc.currency}` },
            { label: "Tax", value: loc.taxName },
            { label: "Tax Rate", value: loc.taxRate },
            { label: "Businesses", value: loc.businessCount },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-4 text-center" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>{stat.label}</p>
              <p className="text-lg font-black" style={{ color: "#0F172A" }}>{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Local compliance — full detail for detailed locations, generic for extended */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            {loc.taxName} & local compliance
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>
            BillingBee handles all the local requirements so your invoices are always compliant in {loc.name}.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {(isFullLocation && "localCompliance" in loc
              ? (loc as { localCompliance: string[] }).localCompliance
              : [
                  `${loc.taxName} number on invoices`,
                  `${loc.taxName} at ${loc.taxRate} calculated automatically`,
                  `${loc.country} invoice format compliance`,
                ]
            ).map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "#334155" }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Accepted payment methods in {loc.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {(isFullLocation && "paymentMethods" in loc
              ? (loc as { paymentMethods: string[] }).paymentMethods
              : ["Credit / debit card", "Bank transfer", "PayPal", "Stripe"]
            ).map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 bg-white rounded-xl px-4 py-2"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(0,0,0,.05)" }}
              >
                <span style={{ color: "#10B981" }}>✓</span>
                <span className="text-sm font-medium" style={{ color: "#334155" }}>{method}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            Everything you need to invoice in {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              `${loc.currency} (${loc.currencySymbol}) invoicing`,
              `${loc.taxName} calculation at ${loc.taxRate}`,
              `${loc.taxName} number on invoices`,
              "Multi-currency support for international clients",
              "Automatic payment reminders",
              "Online payment collection",
              "Client payment portal",
              "Recurring invoices",
              "PDF download for record-keeping",
              "Mobile invoicing from anywhere",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <span style={{ color: "#10B981" }}>✓</span>
                <span className="text-sm" style={{ color: "#334155" }}>{feature}</span>
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
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>Invoicing software for other regions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}/invoicing-software`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="font-medium text-sm" style={{ color: "#0F172A" }}>
                  Invoicing software for {l.name}
                </span>
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
