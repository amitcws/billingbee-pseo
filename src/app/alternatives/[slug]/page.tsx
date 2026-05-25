import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { competitors } from "@/data/competitors";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

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
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/alternatives" className="hover:text-gray-700">Alternatives</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">BillingBee vs {competitor.name}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {new Date().getFullYear()} Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            BillingBee vs {competitor.name}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Which invoicing software is actually better for {competitor.targetAudience}?
            We break down pricing, features, and the honest trade-offs.
          </p>
        </div>

        {/* Quick verdict */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="border-2 border-indigo-500 rounded-2xl p-6 bg-indigo-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black">B</div>
              <div>
                <p className="font-bold text-gray-900">BillingBee</p>
                <p className="text-sm text-gray-500">Best for focused invoicing</p>
              </div>
              <span className="ml-auto bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">Our pick</span>
            </div>
            <ul className="space-y-2">
              {competitor.billingbeeAdvantages.map((adv) => (
                <li key={adv} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                  {adv}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-xl flex items-center justify-center text-gray-700 font-black">
                {competitor.name[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900">{competitor.name}</p>
                <p className="text-sm text-gray-500">{competitor.tagline}</p>
              </div>
              <span className="ml-auto bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                ★ {competitor.rating}
              </span>
            </div>
            <ul className="space-y-2">
              {competitor.weaknesses.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border border-gray-200 font-semibold">Plan</th>
                  <th className="text-left p-4 border border-gray-200 font-semibold text-indigo-600">BillingBee</th>
                  <th className="text-left p-4 border border-gray-200 font-semibold">{competitor.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 font-medium">Free tier</td>
                  <td className="p-4 border border-gray-200 text-indigo-700 font-medium">✓ Free forever plan</td>
                  <td className="p-4 border border-gray-200 text-gray-500">Varies</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-gray-200 font-medium">Starting price</td>
                  <td className="p-4 border border-gray-200 text-indigo-700 font-medium">$9/month</td>
                  <td className="p-4 border border-gray-200">{competitor.pricing}</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 font-medium">Clients limit</td>
                  <td className="p-4 border border-gray-200 text-indigo-700 font-medium">Unlimited on all plans</td>
                  <td className="p-4 border border-gray-200 text-gray-500">Limited on lower tiers</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-gray-200 font-medium">Recurring invoices</td>
                  <td className="p-4 border border-gray-200 text-indigo-700 font-medium">✓ Included</td>
                  <td className="p-4 border border-gray-200 text-gray-500">Paid plans only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-center p-4 border border-gray-200 font-semibold text-indigo-600">BillingBee</th>
                  <th className="text-center p-4 border border-gray-200 font-semibold">{competitor.name}</th>
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
                ].map(([feature, billingbee, comp]) => (
                  <tr key={String(feature)} className="even:bg-gray-50">
                    <td className="p-4 border border-gray-200 font-medium">{feature}</td>
                    <td className="p-4 border border-gray-200 text-center">
                      {billingbee === true ? (
                        <span className="text-green-600 text-lg">✓</span>
                      ) : (
                        <span className="text-gray-300 text-lg">—</span>
                      )}
                    </td>
                    <td className="p-4 border border-gray-200 text-center">
                      {comp === true ? (
                        <span className="text-green-600 text-lg">✓</span>
                      ) : comp === "partial" ? (
                        <span className="text-amber-500 text-sm">Partial</span>
                      ) : (
                        <span className="text-red-400 text-lg">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should choose what */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Use Each?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-3">Choose BillingBee if you…</h3>
              <ul className="space-y-2 text-sm text-indigo-800">
                <li>✓ Want focused invoicing without accounting bloat</li>
                <li>✓ Need unlimited clients from day one</li>
                <li>✓ Want to automate your entire billing workflow</li>
                <li>✓ Value a clean, modern interface</li>
                <li>✓ Want fair, predictable pricing</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Choose {competitor.name} if you…</h3>
              <ul className="space-y-2 text-sm text-gray-600">
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">More Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/alternatives/${c.slug}`}
                className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <span className="font-medium text-gray-900">BillingBee vs {c.name}</span>
                <span className="text-indigo-600 text-sm">Compare →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
