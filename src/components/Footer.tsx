import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 mt-20" style={{ backgroundColor: "#0F172A", color: "#94A3B8" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Templates</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/invoice-templates/freelance-invoice" className="hover:text-white transition-colors">Freelance Invoice</Link></li>
              <li><Link href="/invoice-templates/simple-invoice" className="hover:text-white transition-colors">Simple Invoice</Link></li>
              <li><Link href="/invoice-templates/hourly-invoice" className="hover:text-white transition-colors">Hourly Rate Invoice</Link></li>
              <li><Link href="/invoice-templates/invoice-with-tax" className="hover:text-white transition-colors">Invoice with Tax</Link></li>
              <li><Link href="/invoice-templates/recurring-invoice" className="hover:text-white transition-colors">Recurring Invoice</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/recurring-invoices" className="hover:text-white transition-colors">Recurring Invoices</Link></li>
              <li><Link href="/features/payment-reminders" className="hover:text-white transition-colors">Payment Reminders</Link></li>
              <li><Link href="/features/online-payment" className="hover:text-white transition-colors">Online Payments</Link></li>
              <li><Link href="/features/time-tracking" className="hover:text-white transition-colors">Time Tracking</Link></li>
              <li><Link href="/features/multi-currency" className="hover:text-white transition-colors">Multi-Currency</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">AI Invoicing</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/ai-invoicing" className="hover:text-white transition-colors">AI Billing Software</Link></li>
              <li><Link href="/invoice-generator" className="hover:text-white transition-colors">Invoice Generator</Link></li>
              <li><Link href="/features/invoice-automation" className="hover:text-white transition-colors">Invoice Automation</Link></li>
              <li><Link href="/features/expense-tracking" className="hover:text-white transition-colors">Expense Tracking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Alternatives</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/alternatives/freshbooks" className="hover:text-white transition-colors">vs FreshBooks</Link></li>
              <li><Link href="/alternatives/quickbooks" className="hover:text-white transition-colors">vs QuickBooks</Link></li>
              <li><Link href="/alternatives/xero" className="hover:text-white transition-colors">vs Xero</Link></li>
              <li><Link href="/alternatives/wave" className="hover:text-white transition-colors">vs Wave</Link></li>
              <li><Link href="/alternatives/harvest" className="hover:text-white transition-colors">vs Harvest</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">By Profession</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for/freelance-designers" className="hover:text-white transition-colors">Freelance Designers</Link></li>
              <li><Link href="/for/freelance-developers" className="hover:text-white transition-colors">Freelance Developers</Link></li>
              <li><Link href="/for/consultants" className="hover:text-white transition-colors">Consultants</Link></li>
              <li><Link href="/for/photographers" className="hover:text-white transition-colors">Photographers</Link></li>
              <li><Link href="/for/lawyers" className="hover:text-white transition-colors">Lawyers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">By Country</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/united-states/invoicing-software" className="hover:text-white transition-colors">United States</Link></li>
              <li><Link href="/united-kingdom/invoicing-software" className="hover:text-white transition-colors">United Kingdom</Link></li>
              <li><Link href="/australia/invoicing-software" className="hover:text-white transition-colors">Australia</Link></li>
              <li><Link href="/canada/invoicing-software" className="hover:text-white transition-colors">Canada</Link></li>
              <li><Link href="/germany/invoicing-software" className="hover:text-white transition-colors">Germany</Link></li>
            </ul>
          </div>
        </div>
        {/* NVIDIA Inception */}
        <div className="flex items-center gap-4 mb-8 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <Image
            src="https://www.billingbee.co/assets/images/nvidia.png"
            alt="NVIDIA Inception Program Member"
            width={120}
            height={40}
            className="h-10 w-auto"
            unoptimized
          />
          <p className="text-sm" style={{ color: "#64748B" }}>
            BillingBee is a proud member of the NVIDIA Inception Program.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Image
            src="https://billingbee.co/uploads/super_admin_settings/558/billinbee_logo.png"
            alt="BillingBee"
            width={120}
            height={30}
            className="h-7 w-auto brightness-0 invert"
            unoptimized
          />
          <p style={{ color: "#64748B" }}>© {new Date().getFullYear()} BillingBee. Professional invoicing software for modern businesses.</p>
          <div className="flex gap-4">
            <Link href="https://billingbee.co/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="https://billingbee.co/terms-service" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
