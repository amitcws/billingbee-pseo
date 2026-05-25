export interface Feature {
  slug: string;
  name: string;
  headline: string;
  description: string;
  benefits: string[];
  useCases: string[];
  howItWorks: string[];
  relatedFeatures: string[];
}

export const features: Feature[] = [
  {
    slug: "recurring-invoices",
    name: "Recurring Invoice Software",
    headline: "Automate Recurring Invoices — Set Once, Get Paid Forever",
    description:
      "BillingBee's recurring invoice software automatically generates and sends invoices on your schedule — daily, weekly, monthly, or annually. No more manual work.",
    benefits: [
      "Never forget to send a monthly invoice again",
      "Consistent cash flow from automated billing",
      "Clients pay faster when invoices arrive on time",
      "Scales to hundreds of recurring clients effortlessly",
    ],
    useCases: ["Monthly retainers", "Subscription billing", "Ongoing service contracts", "Annual maintenance agreements"],
    howItWorks: [
      "Create your invoice template once with all services and pricing",
      "Set the billing frequency — weekly, monthly, quarterly, or custom",
      "Choose whether to auto-send or review before sending",
      "BillingBee handles everything — generation, delivery, and reminders",
    ],
    relatedFeatures: ["payment-reminders", "client-portal", "payment-links"],
  },
  {
    slug: "payment-reminders",
    name: "Automatic Payment Reminders",
    headline: "Automated Payment Reminders That Get You Paid Faster",
    description:
      "Stop chasing late payments manually. BillingBee automatically sends polite, professional payment reminders before and after the due date — so you get paid without the awkwardness.",
    benefits: [
      "Reduce average payment time by up to 30 days",
      "Eliminates awkward manual follow-ups",
      "Customise reminder tone and timing",
      "Automatically stops when payment is received",
    ],
    useCases: ["Overdue invoice follow-up", "Pre-due-date nudges", "Final notices before collections", "Thank-you messages after payment"],
    howItWorks: [
      "Set your reminder schedule (e.g., 3 days before, on due date, 7 days after)",
      "Customise the email templates with your voice",
      "BillingBee monitors every invoice and sends reminders automatically",
      "Reminders stop the moment payment is detected",
    ],
    relatedFeatures: ["recurring-invoices", "late-fees", "client-portal"],
  },
  {
    slug: "online-payment",
    name: "Online Payment Collection",
    headline: "Accept Online Payments — Cards, Bank Transfers & More",
    description:
      "Add a 'Pay Now' button to every invoice and let clients pay instantly by credit card, debit card, bank transfer, or PayPal. Get paid in hours, not weeks.",
    benefits: [
      "Clients pay in one click from their email",
      "Funds in your account within 1–2 business days",
      "20+ payment gateway integrations",
      "No merchant account setup required",
    ],
    useCases: ["Invoice payment collection", "Deposit collection", "One-click payment links", "International payments"],
    howItWorks: [
      "Connect your Stripe, PayPal, or bank account",
      "BillingBee adds a 'Pay Now' button to every invoice automatically",
      "Client clicks, enters their payment details, confirms",
      "Invoice marked paid instantly — no manual reconciliation",
    ],
    relatedFeatures: ["payment-reminders", "client-portal", "late-fees"],
  },
  {
    slug: "invoice-templates",
    name: "Professional Invoice Templates",
    headline: "Beautiful Invoice Templates That Make You Look Professional",
    description:
      "Choose from 30+ professionally designed invoice templates. Customise colours, fonts, and layout to match your brand. Your clients will notice the difference.",
    benefits: [
      "First impressions matter — beautiful invoices build trust",
      "Fully customisable to match your brand",
      "Logo upload, custom colours, and font selection",
      "PDF downloads that look perfect on any device",
    ],
    useCases: ["Brand-consistent billing", "Industry-specific layouts", "Multi-language invoices", "White-label invoicing"],
    howItWorks: [
      "Choose a template from the gallery",
      "Upload your logo and set your brand colours",
      "Add your business details, payment terms, and footer text",
      "Every invoice you send automatically uses your branded template",
    ],
    relatedFeatures: ["recurring-invoices", "client-portal", "online-payment"],
  },
  {
    slug: "time-tracking",
    name: "Time Tracking & Billable Hours",
    headline: "Track Time and Convert Hours to Invoices in One Click",
    description:
      "BillingBee's built-in time tracker records billable hours per client and project. When it's time to invoice, convert your time logs to a perfect invoice instantly.",
    benefits: [
      "Never miss a billable hour again",
      "One-click conversion from time log to invoice",
      "Detailed time reports for client transparency",
      "Track multiple clients and projects simultaneously",
    ],
    useCases: ["Hourly freelance billing", "Project-based time tracking", "Team hour logging", "Client time reports"],
    howItWorks: [
      "Start the timer when you begin a task, stop it when done",
      "Log which client and project the time belongs to",
      "At month end, select all unbilled time for a client",
      "BillingBee generates an itemised invoice with all hours and rates",
    ],
    relatedFeatures: ["recurring-invoices", "expense-tracking", "online-payment"],
  },
  {
    slug: "expense-tracking",
    name: "Expense Tracking & Billing",
    headline: "Track Expenses and Bill Clients for Reimbursables",
    description:
      "Log expenses, capture receipts on your phone, and add them to client invoices for reimbursement. Never leave money on the table from unbilled expenses.",
    benefits: [
      "Capture receipts with your phone camera",
      "Tag expenses to clients and projects",
      "Add expenses to invoices with one click",
      "See profitability per client after expenses",
    ],
    useCases: ["Travel and accommodation expenses", "Software subscriptions passed to clients", "Materials and supplies", "Subcontractor costs"],
    howItWorks: [
      "Log an expense and snap a photo of the receipt",
      "Tag it to a client, project, and category",
      "When invoicing, add selected expenses to the invoice",
      "Expenses appear as separate line items with receipts attached",
    ],
    relatedFeatures: ["time-tracking", "recurring-invoices", "online-payment"],
  },
  {
    slug: "client-portal",
    name: "Client Payment Portal",
    headline: "Give Clients Their Own Portal to View and Pay Invoices",
    description:
      "BillingBee's client portal gives your clients a secure, branded space to view all their invoices, download PDFs, and pay outstanding amounts — reducing your admin load.",
    benefits: [
      "Clients can pay without calling or emailing you",
      "Reduces payment queries by up to 70%",
      "Branded portal that reinforces your professionalism",
      "Full payment history in one place",
    ],
    useCases: ["Long-term client relationships", "Enterprise billing", "Reducing accounts receivable queries", "Self-service payment"],
    howItWorks: [
      "Invite clients to their portal with a single email",
      "Clients set a password and access their invoice history",
      "Outstanding invoices show a 'Pay Now' button",
      "You see real-time updates when clients view or pay invoices",
    ],
    relatedFeatures: ["online-payment", "payment-reminders", "recurring-invoices"],
  },
  {
    slug: "late-fees",
    name: "Automatic Late Fees",
    headline: "Automatically Charge Late Payment Fees",
    description:
      "Protect your cash flow by automatically applying late fees when invoices go overdue. BillingBee calculates and adds the fee to the invoice — no manual work required.",
    benefits: [
      "Incentivises on-time payment without confrontation",
      "Configured once, applied automatically",
      "Supports flat fees or percentage of invoice",
      "Clients are warned upfront in the invoice footer",
    ],
    useCases: ["Freelancer invoice protection", "Commercial contracts with late clauses", "Overdue B2B invoices", "Repeat late-payers"],
    howItWorks: [
      "Set your late fee policy — flat amount or percentage",
      "Add the policy to your invoice template footer",
      "When an invoice goes overdue, BillingBee generates a new invoice for the fee",
      "Notify the client with the updated total due",
    ],
    relatedFeatures: ["payment-reminders", "online-payment", "recurring-invoices"],
  },
  {
    slug: "multi-currency",
    name: "Multi-Currency Invoicing",
    headline: "Invoice International Clients in Their Local Currency",
    description:
      "Accept payment in 100+ currencies. Set different default currencies per client, and BillingBee handles conversion display and payment collection automatically.",
    benefits: [
      "Invoice in USD, GBP, EUR, and 100+ currencies",
      "Reduce friction for international clients",
      "Live exchange rates for accurate currency conversion",
      "Receive funds in your home currency",
    ],
    useCases: ["International freelancers", "Remote agencies", "Export businesses", "Global SaaS companies"],
    howItWorks: [
      "Set a default currency per client or per invoice",
      "BillingBee shows amounts in the client's preferred currency",
      "Clients pay in their currency — BillingBee converts at live rates",
      "Your earnings summary shows totals in your home currency",
    ],
    relatedFeatures: ["online-payment", "invoice-templates", "client-portal"],
  },
  {
    slug: "invoice-automation",
    name: "Invoice Automation",
    headline: "Automate Your Entire Invoicing Workflow End-to-End",
    description:
      "From invoice creation to payment reconciliation, BillingBee automates every step. Connect your tools, set your rules, and let the billing run itself.",
    benefits: [
      "Reduce invoicing admin by up to 80%",
      "Zero manual data entry with tool integrations",
      "Automated bookkeeping sync with Quickbooks and Xero",
      "Smart rules that adapt to your workflow",
    ],
    useCases: ["High-volume invoicing", "E-commerce order billing", "Subscription management", "Agency client billing"],
    howItWorks: [
      "Connect BillingBee to your CRM, project tool, or e-commerce platform",
      "Set rules: when X happens, create and send invoice Y",
      "BillingBee monitors triggers and fires invoices automatically",
      "All data syncs back to your accounting software in real time",
    ],
    relatedFeatures: ["recurring-invoices", "payment-reminders", "time-tracking"],
  },
];
