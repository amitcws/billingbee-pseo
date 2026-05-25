import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Templates</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/invoice-templates/freelance-invoice" className="hover:text-white transition-colors">Freelance Invoice</Link></li>
              <li><Link href="/invoice-templates/simple-invoice" className="hover:text-white transition-colors">Simple Invoice</Link></li>
              <li><Link href="/invoice-templates/hourly-invoice" className="hover:text-white transition-colors">Hourly Rate Invoice</Link></li>
              <li><Link href="/invoice-templates/invoice-with-tax" className="hover:text-white transition-colors">Invoice with Tax</Link></li>
              <li><Link href="/invoice-templates/recurring-invoice" className="hover:text-white transition-colors">Recurring Invoice</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/recurring-invoices" className="hover:text-white transition-colors">Recurring Invoices</Link></li>
              <li><Link href="/features/payment-reminders" className="hover:text-white transition-colors">Payment Reminders</Link></li>
              <li><Link href="/features/online-payment" className="hover:text-white transition-colors">Online Payments</Link></li>
              <li><Link href="/features/time-tracking" className="hover:text-white transition-colors">Time Tracking</Link></li>
              <li><Link href="/features/multi-currency" className="hover:text-white transition-colors">Multi-Currency</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Alternatives</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/alternatives/freshbooks" className="hover:text-white transition-colors">vs FreshBooks</Link></li>
              <li><Link href="/alternatives/quickbooks" className="hover:text-white transition-colors">vs QuickBooks</Link></li>
              <li><Link href="/alternatives/xero" className="hover:text-white transition-colors">vs Xero</Link></li>
              <li><Link href="/alternatives/wave" className="hover:text-white transition-colors">vs Wave</Link></li>
              <li><Link href="/alternatives/harvest" className="hover:text-white transition-colors">vs Harvest</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">By Profession</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for/freelance-designers" className="hover:text-white transition-colors">Freelance Designers</Link></li>
              <li><Link href="/for/freelance-developers" className="hover:text-white transition-colors">Freelance Developers</Link></li>
              <li><Link href="/for/consultants" className="hover:text-white transition-colors">Consultants</Link></li>
              <li><Link href="/for/photographers" className="hover:text-white transition-colors">Photographers</Link></li>
              <li><Link href="/for/lawyers" className="hover:text-white transition-colors">Lawyers</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-indigo-400 font-bold text-lg">BillingBee</p>
          <p>© {new Date().getFullYear()} BillingBee. Professional invoicing software for modern businesses.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
