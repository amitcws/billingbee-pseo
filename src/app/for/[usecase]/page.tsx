import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { useCases } from "@/data/usecases";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return useCases.map((u) => ({ usecase: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ usecase: string }>;
}): Promise<Metadata> {
  const { usecase } = await params;
  const uc = useCases.find((u) => u.slug === usecase);
  if (!uc) return {};
  return {
    title: `${uc.headline} | BillingBee`,
    description: `${uc.description} Get paid faster with automated invoices, payment reminders, and online payments.`,
    openGraph: {
      title: uc.headline,
      description: uc.description,
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ usecase: string }>;
}) {
  const { usecase } = await params;
  const uc = useCases.find((u) => u.slug === usecase);
  if (!uc) notFound();

  const others = useCases.filter((u) => u.slug !== uc.slug).slice(0, 5);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-700 cursor-pointer">By Profession</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{uc.profession}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{uc.emoji}</span>
            <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
              {uc.industry}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
            {uc.headline}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">{uc.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="https://billingbee.co/signup"
              className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Start free — no card needed
            </Link>
            <Link
              href="/invoice-templates/freelance-invoice"
              className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl hover:border-gray-400 transition-colors"
            >
              View invoice templates
            </Link>
          </div>
        </div>

        {/* Pain points */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The billing problems {uc.profession} face
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {uc.painPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                <span className="text-red-400 text-lg mt-0.5">😤</span>
                <p className="text-sm text-gray-700">{pain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How BillingBee helps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How BillingBee solves this for {uc.profession}
          </h2>
          <p className="text-gray-500 mb-6">Built-in features that match the way {uc.profession.toLowerCase()} actually work.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {uc.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                <span className="text-indigo-600 font-bold text-lg mt-0.5">✓</span>
                <p className="text-sm text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typical usage stats */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left">
          <div className="flex-1">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Typical volume</p>
            <p className="text-3xl font-black text-indigo-600">{uc.avgInvoiceCount}</p>
          </div>
          <div className="w-px bg-gray-200 hidden sm:block self-stretch" />
          <div className="flex-1">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Industry</p>
            <p className="text-3xl font-black text-gray-900">{uc.industry}</p>
          </div>
          <div className="w-px bg-gray-200 hidden sm:block self-stretch" />
          <div className="flex-1">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Avg. time saved</p>
            <p className="text-3xl font-black text-emerald-600">3–6 hrs/mo</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <blockquote className="bg-white border-l-4 border-indigo-500 pl-6 py-4 rounded-r-2xl shadow-sm">
            <p className="text-lg text-gray-700 italic mb-4">&ldquo;{uc.testimonialQuote}&rdquo;</p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                {uc.testimonialName[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{uc.testimonialName}</p>
                <p className="text-sm text-gray-500">{uc.testimonialRole}</p>
              </div>
            </footer>
          </blockquote>
        </section>

        <CTABanner
          headline={`The invoicing tool built for ${uc.profession}`}
          subtext={`Join thousands of ${uc.profession.toLowerCase()} using BillingBee to invoice faster and get paid on time.`}
        />

        {/* Other professions */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Invoicing for other professions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((u) => (
              <Link
                key={u.slug}
                href={`/for/${u.slug}`}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <span className="text-xl">{u.emoji}</span>
                <span className="font-medium text-gray-900">{u.profession}</span>
                <span className="ml-auto text-indigo-600 text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
