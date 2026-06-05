import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { competitors } from "@/data/competitors";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { softwareAppSchema, breadcrumbSchema, BASE_URL } from "@/lib/schema";

export async function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const competitor = competitors.find((c) => c.slug === slug);
  if (!competitor) return {};
  return {
    title: `BillingBee vs ${competitor.name}: Which is Better in ${new Date().getFullYear()}?`,
    description: `Honest comparison of BillingBee vs ${competitor.name}. See pricing, features, and why ${competitor.targetAudience} are switching to BillingBee.`,
    openGraph: {
      title: `BillingBee vs ${competitor.name} — Full Comparison`,
      description: `Is BillingBee better than ${competitor.name}? Compare pricing, features, and find the best invoicing software for your business.`,
    },
  };
}

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competitor = competitors.find((c) => c.slug === slug);
  if (!competitor) notFound();

  const others = competitors.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <>
      <JsonLd data={[
        softwareAppSchema,
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Alternatives", url: `${BASE_URL}/alternatives/freshbooks` },
          { name: `BillingBee vs ${competitor.name}`, url: `${BASE_URL}/alternatives/${competitor.slug}` },
        ]),
      ]} />
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>Alternatives</span>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>BillingBee vs {competitor.name}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
          >
            {new Date().getFullYear()} Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#0F172A" }}>
            BillingBee vs {competitor.name}
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            Which invoicing software is actually better for {competitor.targetAudience}?
            We break down pricing, features, and the honest trade-offs.
          </p>
        </div>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl p-6" style={{ background: "rgba(16,185,129,0.06)", border: "2px solid #10B981" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black" style={{ background: "#10B981" }}>B</div>
              <div>
                <p className="font-bold" style={{ color: "#0F172A" }}>BillingBee</p>
                <p className="text-sm" style={{ color: "#64748B" }}>Best for focused invoicing</p>
              </div>
              <span className="ml-auto text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#10B981" }}>Our pick</span>
            </div>
            <ul className="space-y-2">
              {competitor.billingbeeAdvantages.map((adv) => (
                <li key={adv} className="flex items-start gap-2 text-sm" style={{ color: "#334155" }}>
                  <span className="font-bold mt-0.5" style={{ color: "#10B981" }}>✓</span>
                  {adv}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6" style={{ border: "1px solid #E2E8F0", background: "#F8FAFC" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black" style={{ background: "#E2E8F0", color: "#475569" }}>
                {competitor.name[0]}
              </div>
              <div>
                <p className="font-bold" style={{ color: "#0F172A" }}>{competitor.name}</p>
                <p className="text-sm" style={{ color: "#64748B" }}>{competitor.tagline}</p>
              </div>
              <span className="ml-auto text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#E2E8F0", color: "#475569" }}>
                ★ {competitor.rating}
              </span>
            </div>
            <ul className="space-y-2">
              {competitor.weaknesses.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Pricing Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  <th className="text-left p-4 font-semibold" style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}>Plan</th>
                  <th className="text-left p-4 font-semibold" style={{ border: "1px solid #E2E8F0", color: "#10B981" }}>BillingBee</th>
                  <th className="text-left p-4 font-semibold" style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}>{competitor.name}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Free tier", "✓ Free forever plan", "Varies"],
                  ["Starting price", "$9/month", competitor.pricing],
                  ["Clients limit", "Unlimited on all plans", "Limited on lower tiers"],
                  ["Recurring invoices", "✓ Included", "Paid plans only"],
                ].map(([plan, bb, comp], i) => (
                  <tr key={plan} style={{ background: i % 2 === 1 ? "#F8FAFC" : "#fff" }}>
                    <td className="p-4 font-medium" style={{ border: "1px solid #E2E8F0", color: "#334155" }}>{plan}</td>
                    <td className="p-4 font-medium" style={{ border: "1px solid #E2E8F0", color: "#10B981" }}>{bb}</td>
                    <td className="p-4" style={{ border: "1px solid #E2E8F0", color: "#64748B" }}>{comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  <th className="text-left p-4 font-semibold" style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}>Feature</th>
                  <th className="text-center p-4 font-semibold" style={{ border: "1px solid #E2E8F0", color: "#10B981" }}>BillingBee</th>
                  <th className="text-center p-4 font-semibold" style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}>{competitor.name}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Recurring invoices", true, "partial"],
                  ["Automatic payment reminders", true, true],
                  ["Online payment collection", true, true],
                  ["Time tracking", true, "partial"],
                  ["Client portal", true, false],
                  ["Expense tracking", true, true],
                  ["Multi-currency", true, "partial"],
                  ["Invoice templates (30+)", true, "partial"],
                  ["Mobile app", true, true],
                  ["Accountant access", true, true],
                ].map(([feature, billingbee, comp], i) => (
                  <tr key={String(feature)} style={{ background: i % 2 === 1 ? "#F8FAFC" : "#fff" }}>
                    <td className="p-4 font-medium" style={{ border: "1px solid #E2E8F0", color: "#334155" }}>{feature}</td>
                    <td className="p-4 text-center" style={{ border: "1px solid #E2E8F0" }}>
                      {billingbee === true ? <span className="text-lg" style={{ color: "#10B981" }}>✓</span> : <span className="text-gray-300 text-lg">—</span>}
                    </td>
                    <td className="p-4 text-center" style={{ border: "1px solid #E2E8F0" }}>
                      {comp === true ? <span className="text-lg" style={{ color: "#10B981" }}>✓</span>
                        : comp === "partial" ? <span className="text-sm text-amber-500">Partial</span>
                        : <span className="text-red-400 text-lg">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should choose what */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Who Should Use Each?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.20)" }}>
              <h3 className="font-bold mb-3" style={{ color: "#065F46" }}>Choose BillingBee if you…</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#064E3B" }}>
                <li>✓ Want focused invoicing without accounting bloat</li>
                <li>✓ Need unlimited clients from day one</li>
                <li>✓ Want to automate your entire billing workflow</li>
                <li>✓ Value a clean, modern interface</li>
                <li>✓ Want fair, predictable pricing</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <h3 className="font-bold mb-3" style={{ color: "#0F172A" }}>Choose {competitor.name} if you…</h3>
              <ul className="space-y-2 text-sm" style={{ color: "#475569" }}>
                <li>→ Already use {competitor.name} and don&apos;t want to switch</li>
                <li>→ Need full-featured accounting, not just invoicing</li>
                <li>→ Have an established workflow built around {competitor.name}</li>
                <li>→ Are already paying for a bundle that includes it</li>
              </ul>
            </div>
          </div>
        </section>

        <CTABanner
          headline={`Ready to switch from ${competitor.name}?`}
          subtext={`Join thousands who made the switch. Import your data from ${competitor.name} in minutes.`}
          ctaLabel="Try BillingBee free"
        />

        {/* Other comparisons */}
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>More Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/alternatives/${c.slug}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="font-medium" style={{ color: "#0F172A" }}>BillingBee vs {c.name}</span>
                <span className="text-sm font-medium" style={{ color: "#10B981" }}>Compare →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
