import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
}

export default function CTABanner({
  headline = "Start sending professional invoices in minutes",
  subtext = "Join 50,000+ freelancers and businesses who use BillingBee to get paid faster.",
  ctaLabel = "Start free — no credit card needed",
}: CTABannerProps) {
  return (
    <section className="bg-indigo-600 rounded-2xl px-8 py-12 text-center text-white my-16">
      <h2 className="text-3xl font-bold mb-3">{headline}</h2>
      <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
      <Link
        href="https://billingbee.co/signup"
        className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-50 transition-colors shadow-lg"
      >
        {ctaLabel}
      </Link>
      <p className="text-indigo-200 text-sm mt-4">Free plan available · No credit card required · Cancel anytime</p>
    </section>
  );
}
