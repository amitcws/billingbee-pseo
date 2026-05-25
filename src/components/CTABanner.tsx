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
    <section
      className="rounded-2xl px-8 py-14 text-center text-white my-16"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
    >
      <div
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
        style={{ background: "rgba(16,185,129,0.15)", color: "#10B981", border: "1px solid rgba(16,185,129,0.25)" }}
      >
        Get started free
      </div>
      <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#fff", lineHeight: 1.2 }}>{headline}</h2>
      <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#94A3B8" }}>{subtext}</p>
      <Link
        href="https://billingbee.co/register-now"
        className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5"
        style={{
          background: "#10B981",
          boxShadow: "0 8px 28px rgba(16,185,129,0.35)",
        }}
      >
        {ctaLabel}
      </Link>
      <p className="text-sm mt-4" style={{ color: "#475569" }}>Free plan available · No credit card required · Cancel anytime</p>
    </section>
  );
}
