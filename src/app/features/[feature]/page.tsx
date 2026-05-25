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
  return {
    title: `${feat.name} | BillingBee`,
    description: feat.description,
    openGraph: {
      title: feat.headline,
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
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-700 cursor-pointer">Features</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{feat.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            BillingBee Feature
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            {feat.headline}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mb-8">{feat.description}</p>
          <Link
            href="https://billingbee.co/signup"
            className="inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Try it free →
          </Link>
        </div>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why it matters</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {feat.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                <span className="text-indigo-600 font-bold text-xl mt-0.5">✓</span>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How it works</h2>
          <div className="space-y-4">
            {feat.howItWorks.map((step, i) => (
              <div key={step} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common use cases</h2>
          <div className="flex flex-wrap gap-3">
            {feat.useCases.map((uc) => (
              <span
                key={uc}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200"
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Works great with</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {related.map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}`}
                  className="border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1">{f.name}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{f.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other features */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">More features</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {others.map((f) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className="border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <p className="font-medium text-gray-900 text-sm">{f.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
