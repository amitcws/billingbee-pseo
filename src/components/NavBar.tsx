import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-indigo-600">BillingBee</span>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">Beta</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/invoice-templates/freelance-invoice" className="hover:text-gray-900">Templates</Link>
          <Link href="/features/recurring-invoices" className="hover:text-gray-900">Features</Link>
          <Link href="/alternatives/freshbooks" className="hover:text-gray-900">Alternatives</Link>
          <Link href="/for/freelance-designers" className="hover:text-gray-900">By profession</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://billingbee.co/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
          <Link
            href="https://billingbee.co/signup"
            className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
