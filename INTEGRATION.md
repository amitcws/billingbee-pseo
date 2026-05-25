# pSEO Integration Guide
## Connecting the pSEO site with billingbee.co

---

## 1. What Was Built

A programmatic SEO engine built in **Next.js 15** (App Router, TypeScript, Tailwind CSS) that generates **58 fully static landing pages** across five keyword clusters. Every page uses BillingBee's exact design system (Inter font, `#10B981` green, `#0F172A` dark, pill buttons) sourced directly from the live site's CSS.

### Page Inventory

| Route pattern | Count | Example | Target keyword |
|---|---|---|---|
| `/invoice-templates/[template]` | 12 | `/invoice-templates/freelance-invoice` | "free freelance invoice template" |
| `/alternatives/[slug]` | 8 | `/alternatives/freshbooks` | "billingbee vs freshbooks" |
| `/for/[usecase]` | 10 | `/for/freelance-designers` | "invoicing software for freelance designers" |
| `/features/[feature]` | 10 | `/features/recurring-invoices` | "recurring invoice software" |
| `/[location]/invoicing-software` | 14 | `/united-kingdom/invoicing-software` | "invoicing software for UK businesses" |
| `/` (homepage) | 1 | — | Hub page linking all clusters |
| **Total** | **55 cluster pages + 1 hub** | | |

All CTAs already point to `billingbee.co/register-now` and `billingbee.co/login-now`.

### Tech Stack

- **Framework**: Next.js 15.x with App Router
- **Rendering**: 100% static (`generateStaticParams` on every route — no server needed at runtime)
- **Styles**: Tailwind CSS v4 + BillingBee CSS custom properties
- **Font**: Inter via `next/font/google`
- **Data**: TypeScript files in `src/data/` — add entries to generate new pages automatically

---

## 2. Current billingbee.co Infrastructure

| Property | Value |
|---|---|
| Server | nginx/1.18.0 on Ubuntu |
| Host | AWS (`3.225.62.119`) |
| Backend | Laravel (PHP) — confirmed by XSRF-TOKEN / session cookies |
| CDN | None currently in front |
| SSL | Yes (HSTS enabled) |

---

## 3. Integration Options

### Option A — Subdirectory via nginx reverse proxy ✅ Recommended

Serve the pSEO site from `billingbee.co/invoice-templates/`, `/alternatives/`, etc. by deploying it to **Vercel** and adding nginx `location` blocks that proxy those paths.

**Why this is best for SEO:**
- All pages sit on the main `billingbee.co` domain — they inherit its domain authority
- Internal links from the pSEO pages to `/register-now` are same-domain
- Google treats them as part of the same site

**Effort:** Medium (one-time nginx config change + Vercel deploy)

---

### Option B — Subdomain (`seo.billingbee.co`)

Deploy to Vercel and point a CNAME at it.

**Tradeoff:** Simpler to set up, but subdomains are treated as separate sites by Google. Pages get zero benefit from billingbee.co's existing domain authority.

**Effort:** Low

---

### Option C — Self-host on the existing AWS server

Run the Next.js app as a Node.js process on the same EC2 instance, proxy via nginx.

**Tradeoff:** No additional infrastructure cost, but adds operational complexity (process management, Node.js version, memory).

**Effort:** High

---

## 4. Recommended Implementation Plan (Option A)

### Step 1 — Deploy to Vercel

```bash
# From the project root
npm install -g vercel
vercel --prod
```

Vercel will assign a URL like `billingbee-pseo.vercel.app`. Note it — you'll need it for nginx.

Set one environment variable in Vercel dashboard if needed:
```
NEXT_PUBLIC_SITE_URL=https://www.billingbee.co
```

---

### Step 2 — Update nginx on the AWS server

Add the following `location` blocks to `/etc/nginx/sites-available/billingbee.co` (inside the existing `server` block for `billingbee.co`):

```nginx
# pSEO routes — proxied to Vercel
location ~ ^/(invoice-templates|alternatives|for|features)(/.*)?$ {
    proxy_pass https://billingbee-pseo.vercel.app;
    proxy_set_header Host billingbee-pseo.vercel.app;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_ssl_server_name on;
}

# Location pages: /[country]/invoicing-software
# List every location slug explicitly to avoid conflicting with Laravel routes
location ~ ^/(united-states|california|new-york|texas|united-kingdom|london|germany|france|netherlands|spain|australia|india|singapore|canada)/invoicing-software$ {
    proxy_pass https://billingbee-pseo.vercel.app;
    proxy_set_header Host billingbee-pseo.vercel.app;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_ssl_server_name on;
}

# pSEO static assets (_next/*)
location /_next/ {
    proxy_pass https://billingbee-pseo.vercel.app;
    proxy_set_header Host billingbee-pseo.vercel.app;
    proxy_ssl_server_name on;
    proxy_cache_valid 200 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

Test and reload:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

### Step 3 — Verify routes

```bash
# Should return 200 from Next.js (check response body for BillingBee nav)
curl -I https://www.billingbee.co/invoice-templates/freelance-invoice
curl -I https://www.billingbee.co/alternatives/freshbooks
curl -I https://www.billingbee.co/for/freelance-designers
curl -I https://www.billingbee.co/features/recurring-invoices
curl -I https://www.billingbee.co/united-kingdom/invoicing-software
```

---

### Step 4 — Submit to Google Search Console

1. Add a sitemap — add `src/app/sitemap.ts` (see section 6 below)
2. In Google Search Console → Sitemaps → submit `https://www.billingbee.co/sitemap.xml`
3. Request indexing for the top 5–10 highest-priority URLs manually

---

## 5. Expanding the Page Count

All content lives in TypeScript data files. Adding pages is as simple as adding objects to the arrays — no templates to write.

| File | What to add |
|---|---|
| `src/data/competitors.ts` | New competitor object → new `/alternatives/[slug]` page |
| `src/data/usecases.ts` | New profession object → new `/for/[usecase]` page |
| `src/data/locations.ts` | New location object → new `/[location]/invoicing-software` page |
| `src/data/templates.ts` | New template object → new `/invoice-templates/[template]` page |
| `src/data/features.ts` | New feature object → new `/features/[feature]` page |

After any data change: `npm run build` then `vercel --prod` to redeploy.

**Quick wins to add next:**
- 20+ more location pages (every EU country, US states, APAC cities)
- More competitor alternatives (Bonsai, HoneyBook, Dubsado, PayPal Invoicing)
- More profession use-cases (real estate agents, tutors, musicians, event planners)
- "Free [X] invoice template" for every industry (construction, medical, legal)

---

## 6. Sitemap (add before launch)

Create `src/app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";
import { competitors } from "@/data/competitors";
import { useCases } from "@/data/usecases";
import { invoiceTemplates } from "@/data/templates";
import { features } from "@/data/features";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.billingbee.co";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...invoiceTemplates.map((t) => ({
      url: `${base}/invoice-templates/${t.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.9,
    })),
    ...competitors.map((c) => ({
      url: `${base}/alternatives/${c.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
    })),
    ...useCases.map((u) => ({
      url: `${base}/for/${u.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
    })),
    ...features.map((f) => ({
      url: `${base}/features/${f.slug}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
    })),
    ...locations.map((l) => ({
      url: `${base}/${l.slug}/invoicing-software`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
    })),
  ];
}
```

---

## 7. Internal Linking from billingbee.co → pSEO Pages

Add links from the main site to the pSEO pages to pass authority and help Google discover them faster:

| Location on billingbee.co | Suggested link |
|---|---|
| Footer | "Invoice Templates" → `/invoice-templates/freelance-invoice` |
| Footer | "Invoicing by Country" → `/united-states/invoicing-software` |
| Pricing page | "vs FreshBooks" → `/alternatives/freshbooks` |
| Blog posts | Contextual links to relevant feature and template pages |
| Free invoice generator page | "Download templates" → `/invoice-templates/simple-invoice` |

---

## 8. Analytics & Monitoring

Since the pages will serve from `billingbee.co`, any existing Google Analytics or GA4 tag on the main site will **not** fire on the pSEO pages — Next.js serves its own HTML.

Add GA4 to the pSEO site in `src/app/layout.tsx`:

```tsx
// Add after <body> opening tag
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}</Script>
```

Use the **same GA4 property ID** as billingbee.co so all traffic appears in one dashboard.

---

## 9. Launch Checklist

- [ ] `npm run build` passes with 0 errors
- [ ] `src/app/sitemap.ts` added and tested at `/sitemap.xml`
- [ ] Deployed to Vercel, custom domain verified
- [ ] nginx `location` blocks added and `nginx -t` passes
- [ ] All 5 route patterns return HTTP 200 via `curl`
- [ ] BillingBee logo loads correctly (external image from billingbee.co)
- [ ] "Start free" and "Sign in" links resolve to correct billingbee.co URLs
- [ ] GA4 tag fires on pSEO pages
- [ ] Sitemap submitted to Google Search Console
- [ ] Top 10 URLs manually submitted for indexing

---

## 10. Repository Structure Reference

```
pseo/
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Hub homepage
│   │   ├── layout.tsx                        # Root layout (Inter font, metadata)
│   │   ├── globals.css                       # BillingBee design tokens
│   │   ├── alternatives/[slug]/page.tsx      # Competitor comparison pages
│   │   ├── for/[usecase]/page.tsx            # Profession use-case pages
│   │   ├── invoice-templates/[template]/     # Invoice template pages
│   │   ├── features/[feature]/page.tsx       # Feature deep-dive pages
│   │   └── [location]/invoicing-software/   # Geo-targeted pages
│   ├── components/
│   │   ├── NavBar.tsx                        # Shared nav (BillingBee logo)
│   │   ├── Footer.tsx                        # Dark footer (#0F172A)
│   │   └── CTABanner.tsx                     # Green CTA section
│   └── data/
│       ├── competitors.ts                    # 8 competitors
│       ├── usecases.ts                       # 10 professions
│       ├── locations.ts                      # 14 locations
│       ├── templates.ts                      # 12 invoice templates
│       └── features.ts                       # 10 features
├── .claude/launch.json                       # Dev server config
└── INTEGRATION.md                            # This file
```
