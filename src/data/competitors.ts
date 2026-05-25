export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  pricing: string;
  weaknesses: string[];
  billingbeeAdvantages: string[];
  targetAudience: string;
  rating: number;
  founded: number;
}

export const competitors: Competitor[] = [
  {
    slug: "freshbooks",
    name: "FreshBooks",
    tagline: "Popular cloud accounting for freelancers",
    pricing: "Starts at $17/month",
    weaknesses: [
      "Limited clients on lower plans",
      "No free plan",
      "Expensive as you scale",
      "Basic inventory management",
    ],
    billingbeeAdvantages: [
      "Unlimited clients on all plans",
      "Generous free tier to get started",
      "Flat pricing that scales fairly",
      "Built-in recurring invoices with auto-payment",
    ],
    targetAudience: "freelancers and service businesses",
    rating: 4.2,
    founded: 2003,
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    tagline: "The accounting giant for small businesses",
    pricing: "Starts at $30/month",
    weaknesses: [
      "Steep learning curve",
      "Overkill for simple invoicing needs",
      "Expensive monthly fees",
      "Slow and bloated interface",
    ],
    billingbeeAdvantages: [
      "Focused, clean invoicing experience",
      "5x cheaper for basic invoicing",
      "Get started in minutes, not days",
      "Mobile-first design that works everywhere",
    ],
    targetAudience: "small businesses and accountants",
    rating: 4.0,
    founded: 1983,
  },
  {
    slug: "wave",
    name: "Wave",
    tagline: "Free accounting software for small businesses",
    pricing: "Free (pay per transaction)",
    weaknesses: [
      "Limited customer support",
      "No inventory tracking",
      "Fewer integrations",
      "Basic reporting features",
    ],
    billingbeeAdvantages: [
      "Dedicated invoice management workflows",
      "Priority support on all plans",
      "100+ integrations with your favourite tools",
      "Advanced reporting and analytics",
    ],
    targetAudience: "micro-businesses and solopreneurs",
    rating: 4.1,
    founded: 2009,
  },
  {
    slug: "zoho-invoice",
    name: "Zoho Invoice",
    tagline: "Part of the Zoho ecosystem",
    pricing: "Free for up to 1000 invoices/year",
    weaknesses: [
      "Confusing Zoho ecosystem lock-in",
      "Clunky UI for non-Zoho users",
      "Limited customisation options",
      "Support quality varies",
    ],
    billingbeeAdvantages: [
      "Standalone product, no ecosystem required",
      "Beautiful, fully brandable invoice templates",
      "White-glove onboarding support",
      "Purpose-built invoice workflow",
    ],
    targetAudience: "businesses already in the Zoho ecosystem",
    rating: 4.3,
    founded: 2005,
  },
  {
    slug: "invoice-ninja",
    name: "Invoice Ninja",
    tagline: "Open-source invoicing for freelancers",
    pricing: "Free (self-hosted) / $10/month (cloud)",
    weaknesses: [
      "Technical setup required for self-hosted",
      "Dated UI design",
      "Limited payment gateway options",
      "Small support community",
    ],
    billingbeeAdvantages: [
      "No server setup required — works out of the box",
      "Modern, intuitive interface",
      "20+ built-in payment gateways",
      "Dedicated support team",
    ],
    targetAudience: "tech-savvy freelancers",
    rating: 4.0,
    founded: 2014,
  },
  {
    slug: "xero",
    name: "Xero",
    tagline: "Beautiful accounting software for small business",
    pricing: "Starts at $15/month",
    weaknesses: [
      "Full accounting suite — overkill for invoicing only",
      "Requires accountant to get full value",
      "Limited US payroll",
      "Per-user pricing adds up",
    ],
    billingbeeAdvantages: [
      "Zero accounting knowledge needed",
      "Instant setup, send your first invoice in 2 minutes",
      "Transparent flat pricing",
      "Built for invoicing, not tax returns",
    ],
    targetAudience: "accountants and bookkeepers",
    rating: 4.3,
    founded: 2006,
  },
  {
    slug: "harvest",
    name: "Harvest",
    tagline: "Time tracking and invoicing for teams",
    pricing: "Free (1 seat) / $12/seat/month",
    weaknesses: [
      "Per-seat pricing gets expensive for teams",
      "Limited invoice customization",
      "No recurring invoice automation",
      "Basic payment options",
    ],
    billingbeeAdvantages: [
      "Unlimited team members on all paid plans",
      "Pixel-perfect invoice branding",
      "Automated recurring invoices and payment reminders",
      "Stripe, PayPal, and 18 more payment gateways",
    ],
    targetAudience: "agencies and consulting teams",
    rating: 4.3,
    founded: 2006,
  },
  {
    slug: "stripe-invoicing",
    name: "Stripe Invoicing",
    tagline: "Developer-first invoicing by Stripe",
    pricing: "0.4% per paid invoice",
    weaknesses: [
      "Requires technical setup",
      "No built-in time tracking",
      "Percentage-based pricing costs more at scale",
      "Minimal UI for non-technical users",
    ],
    billingbeeAdvantages: [
      "No code required — visual editor",
      "Flat monthly pricing, not per-invoice fees",
      "Built-in time tracking and expense logging",
      "Client portal for easy payment",
    ],
    targetAudience: "developers and SaaS companies",
    rating: 4.4,
    founded: 2010,
  },
];
