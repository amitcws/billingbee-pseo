import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { useCases } from "@/data/usecases";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { softwareAppSchema, breadcrumbSchema, BASE_URL } from "@/lib/schema";

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
    title: `Free Invoicing Software for ${uc.profession} | BillingBee`,
    description: `Free invoicing software for ${uc.profession.toLowerCase()}. Send invoices, automate payment reminders, and get paid online — no credit card needed. ${uc.description}`,
    openGraph: {
      title: `Free Invoicing Software for ${uc.profession} | BillingBee`,
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
      <JsonLd data={[
        softwareAppSchema,
        breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "By Profession", url: `${BASE_URL}/for/freelance-designers` },
          { name: uc.profession, url: `${BASE_URL}/for/${uc.slug}` },
        ]),
      ]} />
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "#64748B" }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span>By Profession</span>
          <span className="mx-2">/</span>
          <span style={{ color: "#0F172A" }}>{uc.profession}</span>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{uc.emoji}</span>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.20)" }}
            >
              {uc.industry}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight" style={{ color: "#0F172A" }}>
            {uc.headline}
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: "#64748B" }}>{uc.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="https://billingbee.co/register-now"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ background: "#10B981", boxShadow: "0 4px 16px rgba(16,185,129,0.30)" }}
            >
              Start free — no card needed
            </Link>
            <Link
              href="/invoice-templates/freelance-invoice"
              className="inline-flex items-center font-medium px-6 py-3 rounded-full transition-all hover:border-emerald-300"
              style={{ border: "1px solid #E2E8F0", color: "#334155" }}
            >
              View invoice templates
            </Link>
          </div>
        </div>

        {/* Pain points */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            The billing problems {uc.profession} face
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {uc.painPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                <span className="text-lg mt-0.5">😤</span>
                <p className="text-sm" style={{ color: "#334155" }}>{pain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How BillingBee helps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>
            How BillingBee solves this for {uc.profession}
          </h2>
          <p className="mb-6" style={{ color: "#64748B" }}>Built-in features that match the way {uc.profession.toLowerCase()} actually work.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {uc.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <span className="font-bold text-lg mt-0.5" style={{ color: "#10B981" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "#334155" }}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typical usage stats */}
        <section className="rounded-2xl p-8 mb-16 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>Typical volume</p>
            <p className="text-3xl font-black" style={{ color: "#10B981" }}>{uc.avgInvoiceCount}</p>
          </div>
          <div className="w-px hidden sm:block self-stretch" style={{ background: "#E2E8F0" }} />
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>Industry</p>
            <p className="text-3xl font-black" style={{ color: "#0F172A" }}>{uc.industry}</p>
          </div>
          <div className="w-px hidden sm:block self-stretch" style={{ background: "#E2E8F0" }} />
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: "#64748B" }}>Avg. time saved</p>
            <p className="text-3xl font-black" style={{ color: "#10B981" }}>3–6 hrs/mo</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <blockquote className="bg-white pl-6 py-4 rounded-r-2xl shadow-sm" style={{ borderLeft: "4px solid #10B981" }}>
            <p className="text-lg italic mb-4" style={{ color: "#334155" }}>&ldquo;{uc.testimonialQuote}&rdquo;</p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ background: "rgba(16,185,129,0.12)", color: "#10B981" }}>
                {uc.testimonialName[0]}
              </div>
              <div>
                <p className="font-semibold" style={{ color: "#0F172A" }}>{uc.testimonialName}</p>
                <p className="text-sm" style={{ color: "#64748B" }}>{uc.testimonialRole}</p>
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
          <h2 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>Invoicing for other professions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((u) => (
              <Link
                key={u.slug}
                href={`/for/${u.slug}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:border-emerald-300"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <span className="text-xl">{u.emoji}</span>
                <span className="font-medium" style={{ color: "#0F172A" }}>{u.profession}</span>
                <span className="ml-auto text-sm font-medium" style={{ color: "#10B981" }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
