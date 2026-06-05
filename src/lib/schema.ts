export const BASE_URL = "https://billingbee.co";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BillingBee",
  url: BASE_URL,
  logo: `${BASE_URL}/uploads/super_admin_settings/558/billinbee_logo.png`,
  description:
    "Professional invoicing software for freelancers and small businesses. Send invoices, automate reminders, and get paid faster.",
};

export const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BillingBee",
  url: BASE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BillingBee Invoice Generator",
  url: `${BASE_URL}/register-now`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
