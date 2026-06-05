import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BillingBee — Professional Invoicing Software",
    template: "%s | BillingBee",
  },
  description:
    "Professional invoicing software for freelancers and small businesses. Send invoices, automate reminders, and get paid faster.",
  metadataBase: new URL("https://billingbee.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
