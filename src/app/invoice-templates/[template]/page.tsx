import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { invoiceTemplates } from "@/data/templates";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export async function generateStaticParams() {
  return invoiceTemplates.map((t) => ({ template: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}): Promise<Metadata> {
  const { template } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  if (!tmpl) return {};
  return {
    title: `Free ${tmpl.name} — Download PDF, Word & Google Docs | BillingBee`,
    description: `Download a free ${tmpl.name.toLowerCase()}. Available in PDF, Word, and Google Docs. ${tmpl.description}`,
    openGraph: {
      title: `Free ${tmpl.name} | BillingBee`,
      description: tmpl.description,
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const tmpl = invoiceTemplates.find((t) => t.slug === template);
  if (!tmpl) notFound();

  const others = invoiceTemplates.filter((t) => t.slug !== tmpl.slug).slice(0, 6);

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-700 cursor-pointer">Invoice Templates</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{tmpl.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Template preview */}
          <div>
            <div
              className="aspect-[3/4] rounded-2xl border-2 border-gray-200 flex flex-col p-8 shadow-lg"
              style={{ backgroundColor: `${tmpl.previewColor}08`, borderColor: `${tmpl.previewColor}30` }}
            >
              {/* Mock invoice preview */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div
                    className="text-xl font-black mb-1"
                    style={{ color: tmpl.previewColor }}
                  >
                    INVOICE
                  </div>
                  <div className="text-xs text-gray-400">#INV-2025-001</div>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{ backgroundColor: tmpl.previewColor }}>
                  B
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded w-1/2" />
                  <div className="h-2 bg-gray-200 rounded w-1/3" />
                </div>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  {[80, 100, 60, 90].map((w, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-2 bg-gray-200 rounded" style={{ width: `${w}%` }} />
                      <div className="h-2 bg-gray-300 rounded w-12 ml-4 shrink-0" />
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-gray-300 pt-4 flex justify-between items-center">
                  <div className="h-3 rounded w-20" style={{ backgroundColor: `${tmpl.previewColor}40` }} />
                  <div className="h-3 rounded w-16 font-bold" style={{ backgroundColor: tmpl.previewColor }} />
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-400">Preview — BillingBee {tmpl.name}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-gray-500">{tmpl.downloadCount} downloads</span>
              <span className="text-sm font-medium text-emerald-600">★★★★★ Free</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {tmpl.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Free {tmpl.name}
            </h1>
            <p className="text-lg text-gray-500 mb-6">{tmpl.description}</p>

            {/* Download buttons */}
            <div className="space-y-3 mb-8">
              {tmpl.formats.map((fmt) => (
                <Link
                  key={fmt}
                  href="https://billingbee.co/signup"
                  className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {fmt === "PDF" ? "📄" : fmt.includes("Word") ? "📝" : fmt.includes("Google") ? "📊" : "📈"}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Download {fmt}</p>
                      <p className="text-xs text-gray-500">Free template · No sign-up required</p>
                    </div>
                  </div>
                  <span className="text-indigo-600 text-sm font-medium group-hover:underline">Download →</span>
                </Link>
              ))}
            </div>

            {/* Or use online */}
            <div className="bg-indigo-600 rounded-2xl p-4 text-white">
              <p className="font-bold mb-1">Or use it online — faster & smarter</p>
              <p className="text-indigo-200 text-sm mb-3">Fill in your details, send to clients, and get paid online. No downloads needed.</p>
              <Link
                href="https://billingbee.co/signup"
                className="inline-block bg-white text-indigo-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Use online for free →
              </Link>
            </div>
          </div>
        </div>

        {/* What's included */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s included in this template</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {tmpl.fields.map((field) => (
              <div key={field} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <span className="text-indigo-600">✓</span>
                <span className="text-sm text-gray-700">{field}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best for */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best for</h2>
          <div className="flex flex-wrap gap-2">
            {tmpl.bestFor.map((b) => (
              <span
                key={b}
                className="bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Why BillingBee vs download */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Static template vs BillingBee — what&apos;s the difference?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-4">📄 Static template</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-amber-400">△</span> Edit manually in Word or Docs</li>
                <li className="flex gap-2"><span className="text-amber-400">△</span> No payment tracking</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> No auto-reminders</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> No online payment button</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> No client history</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
              <h3 className="font-bold text-indigo-900 mb-4">⚡ BillingBee (online)</h3>
              <ul className="space-y-2 text-sm text-indigo-800">
                <li className="flex gap-2"><span className="text-indigo-600">✓</span> Fill out & send in 2 minutes</li>
                <li className="flex gap-2"><span className="text-indigo-600">✓</span> Track paid vs outstanding</li>
                <li className="flex gap-2"><span className="text-indigo-600">✓</span> Auto payment reminders</li>
                <li className="flex gap-2"><span className="text-indigo-600">✓</span> Pay-now button in every invoice</li>
                <li className="flex gap-2"><span className="text-indigo-600">✓</span> Full client history & reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <CTABanner
          headline={`Use this ${tmpl.name} online — faster than downloading`}
          subtext="Send professional invoices and collect payments in minutes. Your first 5 invoices are free."
          ctaLabel="Create your first invoice free"
        />

        {/* Other templates */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">More free invoice templates</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/invoice-templates/${t.slug}`}
                className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm">{t.name}</span>
                <span className="text-indigo-600 text-sm">Free →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
