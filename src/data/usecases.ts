export interface UseCase {
  slug: string;
  profession: string;
  emoji: string;
  headline: string;
  description: string;
  painPoints: string[];
  features: string[];
  testimonialName: string;
  testimonialRole: string;
  testimonialQuote: string;
  avgInvoiceCount: string;
  industry: string;
}

export const useCases: UseCase[] = [
  {
    slug: "freelance-designers",
    profession: "Freelance Designers",
    emoji: "🎨",
    headline: "Invoicing Software for Freelance Designers",
    description:
      "Stop chasing payments and start focusing on your craft. BillingBee helps freelance graphic designers, UI/UX designers, and illustrators get paid faster with beautiful, branded invoices.",
    painPoints: [
      "Clients delaying payment on completed projects",
      "Creating professional invoices takes too long",
      "Tracking which invoices are paid vs overdue",
      "Handling multiple currencies for international clients",
    ],
    features: [
      "Brandable invoice templates that match your portfolio",
      "Auto payment reminders so you never chase clients",
      "Multi-currency support for global clients",
      "Project-based invoicing with milestone tracking",
    ],
    testimonialName: "Sarah Chen",
    testimonialRole: "Freelance Brand Designer",
    testimonialQuote:
      "I used to spend 2 hours a week on invoicing. BillingBee cut that to 10 minutes and my average payment time dropped from 45 days to 12.",
    avgInvoiceCount: "8–15 invoices/month",
    industry: "Design",
  },
  {
    slug: "freelance-developers",
    profession: "Freelance Developers",
    emoji: "💻",
    headline: "Invoicing Software for Freelance Developers",
    description:
      "Whether you bill hourly or by project, BillingBee makes it easy for freelance developers and software engineers to invoice clients, track time, and get paid on time.",
    painPoints: [
      "Converting tracked hours into accurate invoices",
      "Scope creep and change request billing",
      "Late payments disrupting cash flow",
      "Managing invoices across multiple clients",
    ],
    features: [
      "Built-in time tracker that converts to invoices in one click",
      "Itemised line items for hours, tasks, and expenses",
      "Automatic late payment fees",
      "Client portal for transparent billing history",
    ],
    testimonialName: "Marcus Rivera",
    testimonialRole: "Full-Stack Freelancer",
    testimonialQuote:
      "The time tracker to invoice flow is seamless. I log hours in BillingBee and my invoice is ready to send — no spreadsheets, no mistakes.",
    avgInvoiceCount: "5–20 invoices/month",
    industry: "Technology",
  },
  {
    slug: "consultants",
    profession: "Consultants",
    emoji: "📊",
    headline: "Invoicing Software for Consultants",
    description:
      "Management, strategy, and business consultants trust BillingBee to handle retainer billing, milestone invoices, and expense tracking — so you can focus on delivering value.",
    painPoints: [
      "Complex retainer and milestone billing structures",
      "Tracking billable expenses across engagements",
      "Professional presentation to enterprise clients",
      "Managing multiple concurrent engagements",
    ],
    features: [
      "Retainer and milestone invoice templates",
      "Expense capture with receipt scanning",
      "Custom payment terms (Net 30, Net 60, on receipt)",
      "PDF invoices with your letterhead",
    ],
    testimonialName: "David Park",
    testimonialRole: "Strategy Consultant",
    testimonialQuote:
      "My clients are Fortune 500 companies — my invoices need to look the part. BillingBee's professional templates have eliminated invoice disputes entirely.",
    avgInvoiceCount: "10–30 invoices/month",
    industry: "Consulting",
  },
  {
    slug: "photographers",
    profession: "Photographers",
    emoji: "📷",
    headline: "Invoicing Software for Photographers",
    description:
      "From wedding photographers to commercial studios, BillingBee helps photographers collect deposits, send final invoices, and manage payment schedules effortlessly.",
    painPoints: [
      "Collecting deposit upfront before shoots",
      "Sending balance invoices after delivery",
      "Managing packages and add-on pricing",
      "Tracking outstanding payments across events",
    ],
    features: [
      "Split invoicing for deposit + balance payments",
      "Package pricing with optional add-ons",
      "Online payment via card, bank transfer, or PayPal",
      "Automatic payment receipts for clients",
    ],
    testimonialName: "Jenna Williams",
    testimonialRole: "Wedding Photographer",
    testimonialQuote:
      "Split invoicing is a game-changer. Deposit collected automatically, balance invoice sent after delivery — I haven't had a single late payment in a year.",
    avgInvoiceCount: "15–30 invoices/month",
    industry: "Photography",
  },
  {
    slug: "agencies",
    profession: "Marketing Agencies",
    emoji: "📣",
    headline: "Invoicing Software for Marketing Agencies",
    description:
      "Run a tighter billing operation for your agency. BillingBee helps marketing agencies manage client retainers, campaign invoices, and multi-project billing at scale.",
    painPoints: [
      "Billing multiple clients for different service tiers",
      "Tracking retainer usage across accounts",
      "Consolidating expenses per client",
      "Automating monthly recurring invoices",
    ],
    features: [
      "Automated monthly retainer invoicing",
      "Multi-project tracking per client",
      "Team member access with role permissions",
      "Revenue reporting by client and campaign",
    ],
    testimonialName: "Priya Nair",
    testimonialRole: "Founder, Bloom Digital Agency",
    testimonialQuote:
      "We went from manually sending 40 invoices a month to BillingBee handling everything automatically. It saved us 6 hours of admin work every month.",
    avgInvoiceCount: "30–80 invoices/month",
    industry: "Marketing",
  },
  {
    slug: "lawyers",
    profession: "Lawyers & Law Firms",
    emoji: "⚖️",
    headline: "Invoicing Software for Lawyers & Law Firms",
    description:
      "Bill clients accurately for time and services. BillingBee helps attorneys and small law firms manage billable hours, retainer balances, and matter-based invoicing.",
    painPoints: [
      "Accurate 6-minute increment time tracking",
      "Retainer balance management",
      "Itemised billing for different matter types",
      "Compliance with client billing requirements",
    ],
    features: [
      "Precise time tracking in 0.1-hour increments",
      "Retainer management with trust accounting notes",
      "Matter-based invoicing with LEDES-style line items",
      "Password-protected client invoice portal",
    ],
    testimonialName: "James Thornton",
    testimonialRole: "Partner, Thornton & Associates",
    testimonialQuote:
      "Finally an invoicing tool that understands how lawyers bill. The time precision and matter-based organisation make our billing process airtight.",
    avgInvoiceCount: "20–60 invoices/month",
    industry: "Legal",
  },
  {
    slug: "accountants",
    profession: "Accountants & Bookkeepers",
    emoji: "🧾",
    headline: "Invoicing Software for Accountants & Bookkeepers",
    description:
      "Bill your own clients for accounting services while keeping your finances clean. BillingBee is the invoicing tool built for accounting professionals who know what good billing looks like.",
    painPoints: [
      "Billing clients for tax season vs ongoing bookkeeping",
      "Managing recurring monthly bookkeeping retainers",
      "Expense billing for software subscriptions passed to clients",
      "Tracking write-offs and adjustments",
    ],
    features: [
      "Recurring invoice automation for monthly retainers",
      "Pass-through expense billing",
      "Credit notes and invoice adjustments",
      "Quickbooks/Xero export for your own records",
    ],
    testimonialName: "Lisa Hoffman",
    testimonialRole: "CPA, Hoffman Tax Solutions",
    testimonialQuote:
      "I recommend BillingBee to all my small business clients — and I use it myself. The recurring invoice automation alone saves me an hour every month.",
    avgInvoiceCount: "20–50 invoices/month",
    industry: "Accounting",
  },
  {
    slug: "contractors",
    profession: "Contractors & Tradespeople",
    emoji: "🔨",
    headline: "Invoicing Software for Contractors & Tradespeople",
    description:
      "Send professional invoices from any job site. BillingBee helps plumbers, electricians, builders, and tradespeople invoice clients on mobile and get paid faster.",
    painPoints: [
      "Creating invoices on the go, not back at a desk",
      "Including materials, labour, and callout fees",
      "Getting paid faster after job completion",
      "Looking professional compared to handwritten invoices",
    ],
    features: [
      "Mobile app — invoice from any job site",
      "Labour + materials + expenses in one invoice",
      "Tap-to-pay links sent via SMS or WhatsApp",
      "Quote to invoice conversion",
    ],
    testimonialName: "Tom Bradley",
    testimonialRole: "Independent Electrician",
    testimonialQuote:
      "I invoice on my phone before I even leave the driveway. Clients pay within hours now instead of weeks. Best £10 I spend every month.",
    avgInvoiceCount: "20–60 invoices/month",
    industry: "Trades",
  },
  {
    slug: "coaches",
    profession: "Coaches & Therapists",
    emoji: "🧠",
    headline: "Invoicing Software for Coaches & Therapists",
    description:
      "Focus on your clients, not your admin. BillingBee helps life coaches, business coaches, therapists, and counsellors manage session billing, packages, and recurring payments.",
    painPoints: [
      "Billing for individual sessions vs packages",
      "Collecting payment before or after sessions",
      "Managing prepaid session credits",
      "HIPAA-considerate billing communications",
    ],
    features: [
      "Session package invoicing with credit tracking",
      "Subscription billing for ongoing coaching programmes",
      "Discreet invoice descriptions for sensitive services",
      "Automated payment collection before sessions",
    ],
    testimonialName: "Rachel Moore",
    testimonialRole: "Executive Business Coach",
    testimonialQuote:
      "The package credit system is perfect for my 12-session coaching programmes. Clients know exactly where they stand, and I get paid upfront every time.",
    avgInvoiceCount: "15–40 invoices/month",
    industry: "Wellness & Coaching",
  },
  {
    slug: "virtual-assistants",
    profession: "Virtual Assistants",
    emoji: "🖥️",
    headline: "Invoicing Software for Virtual Assistants",
    description:
      "Get paid for every hour you work. BillingBee helps virtual assistants track time across multiple clients, bundle tasks into clean invoices, and automate recurring billing.",
    painPoints: [
      "Tracking hours across multiple clients simultaneously",
      "Billing different rates for different task types",
      "Sending monthly invoices on time every time",
      "Looking professional as a solo operator",
    ],
    features: [
      "Multi-client time tracking dashboard",
      "Different billing rates per task type or client",
      "Auto-generated monthly invoices from time logs",
      "Professional invoice templates to impress clients",
    ],
    testimonialName: "Amanda Cole",
    testimonialRole: "Virtual Assistant, 8 clients",
    testimonialQuote:
      "I used to spend Sunday evenings piecing together invoices from time logs. Now BillingBee does it automatically — I just hit send.",
    avgInvoiceCount: "8–20 invoices/month",
    industry: "Administrative",
  },
];
