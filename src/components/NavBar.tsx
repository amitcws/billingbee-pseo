import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="border-b border-slate-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://billingbee.co/uploads/super_admin_settings/558/billinbee_logo.png"
            alt="BillingBee"
            width={140}
            height={36}
            className="h-8 w-auto"
            unoptimized
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/invoice-templates/freelance-invoice" className="hover:text-slate-900 transition-colors">Templates</Link>
          <Link href="/features/recurring-invoices" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link href="/alternatives/freshbooks" className="hover:text-slate-900 transition-colors">Alternatives</Link>
          <Link href="/for/freelance-designers" className="hover:text-slate-900 transition-colors">By profession</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="https://billingbee.co/login-now"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-full hover:bg-slate-100"
          >
            Sign in
          </Link>
          <Link
            href="https://billingbee.co/register-now"
            className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-600 transition-colors shadow-sm"
            style={{ boxShadow: "0 4px 14px rgba(16,185,129,0.30)" }}
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
