// Additional locations batch 3 — ~65 more entries to push total over 500
import type { LocationLight } from "./locations-extended";

export const locationsAdditional3: LocationLight[] = [
  // ── More US states ────────────────────────────────────────────────────
  { slug: "ohio", name: "Ohio", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "5.75%+", businessCount: "950K" },
  { slug: "georgia", name: "Georgia", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "4%+", businessCount: "1.1M" },
  { slug: "north-carolina", name: "North Carolina", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "4.75%+", businessCount: "900K" },
  { slug: "michigan", name: "Michigan", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6%", businessCount: "850K" },
  { slug: "pennsylvania", name: "Pennsylvania", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6%+", businessCount: "1.1M" },
  { slug: "virginia", name: "Virginia", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "5.3%+", businessCount: "770K" },
  { slug: "new-jersey", name: "New Jersey", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.625%", businessCount: "800K" },
  { slug: "arizona", name: "Arizona", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "5.6%+", businessCount: "680K" },
  { slug: "nevada", name: "Nevada", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.85%+", businessCount: "300K" },
  { slug: "oregon", name: "Oregon", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "No Sales Tax", taxRate: "0%", businessCount: "380K" },

  // ── More European countries ───────────────────────────────────────────
  { slug: "belarus", name: "Belarus", country: "Belarus", continent: "Europe", currency: "BYN", currencySymbol: "Br", taxName: "VAT", taxRate: "20%", businessCount: "250K" },
  { slug: "moldova", name: "Moldova", country: "Moldova", continent: "Europe", currency: "MDL", currencySymbol: "L", taxName: "TVA", taxRate: "20%", businessCount: "120K" },
  { slug: "armenia", name: "Armenia", country: "Armenia", continent: "Europe", currency: "AMD", currencySymbol: "֏", taxName: "VAT", taxRate: "20%", businessCount: "90K" },
  { slug: "georgia-country", name: "Georgia (Country)", country: "Georgia", continent: "Europe", currency: "GEL", currencySymbol: "₾", taxName: "VAT", taxRate: "18%", businessCount: "120K" },
  { slug: "azerbaijan", name: "Azerbaijan", country: "Azerbaijan", continent: "Europe", currency: "AZN", currencySymbol: "₼", taxName: "ƏDV", taxRate: "18%", businessCount: "150K" },
  { slug: "kazakhstan", name: "Kazakhstan", country: "Kazakhstan", continent: "Asia-Pacific", currency: "KZT", currencySymbol: "₸", taxName: "VAT", taxRate: "12%", businessCount: "600K" },
  { slug: "uzbekistan", name: "Uzbekistan", country: "Uzbekistan", continent: "Asia-Pacific", currency: "UZS", currencySymbol: "so'm", taxName: "VAT", taxRate: "12%", businessCount: "400K" },

  // ── More APAC countries ───────────────────────────────────────────────
  { slug: "bhutan", name: "Bhutan", country: "Bhutan", continent: "Asia-Pacific", currency: "BTN", currencySymbol: "Nu", taxName: "GST", taxRate: "7%", businessCount: "20K" },
  { slug: "maldives", name: "Maldives", country: "Maldives", continent: "Asia-Pacific", currency: "MVR", currencySymbol: "Rf", taxName: "GST", taxRate: "8%", businessCount: "10K" },
  { slug: "timor-leste", name: "Timor-Leste", country: "Timor-Leste", continent: "Asia-Pacific", currency: "USD", currencySymbol: "$", taxName: "Service Tax", taxRate: "2.5%", businessCount: "15K" },
  { slug: "solomon-islands", name: "Solomon Islands", country: "Solomon Islands", continent: "Asia-Pacific", currency: "SBD", currencySymbol: "SI$", taxName: "GST", taxRate: "10%", businessCount: "5K" },
  { slug: "vanuatu", name: "Vanuatu", country: "Vanuatu", continent: "Asia-Pacific", currency: "VUV", currencySymbol: "VT", taxName: "VAT", taxRate: "15%", businessCount: "8K" },
  { slug: "samoa", name: "Samoa", country: "Samoa", continent: "Asia-Pacific", currency: "WST", currencySymbol: "T", taxName: "VAT", taxRate: "15%", businessCount: "5K" },

  // ── More African countries ────────────────────────────────────────────
  { slug: "botswana", name: "Botswana", country: "Botswana", continent: "Africa", currency: "BWP", currencySymbol: "P", taxName: "VAT", taxRate: "14%", businessCount: "70K" },
  { slug: "namibia", name: "Namibia", country: "Namibia", continent: "Africa", currency: "NAD", currencySymbol: "N$", taxName: "VAT", taxRate: "15%", businessCount: "60K" },
  { slug: "lesotho", name: "Lesotho", country: "Lesotho", continent: "Africa", currency: "LSL", currencySymbol: "L", taxName: "VAT", taxRate: "15%", businessCount: "20K" },
  { slug: "eswatini", name: "Eswatini", country: "Eswatini", continent: "Africa", currency: "SZL", currencySymbol: "L", taxName: "VAT", taxRate: "15%", businessCount: "20K" },
  { slug: "malawi", name: "Malawi", country: "Malawi", continent: "Africa", currency: "MWK", currencySymbol: "MK", taxName: "VAT", taxRate: "16.5%", businessCount: "80K" },
  { slug: "niger", name: "Niger", country: "Niger", continent: "Africa", currency: "XOF", currencySymbol: "CFA", taxName: "TVA", taxRate: "19%", businessCount: "100K" },
  { slug: "burkina-faso", name: "Burkina Faso", country: "Burkina Faso", continent: "Africa", currency: "XOF", currencySymbol: "CFA", taxName: "TVA", taxRate: "18%", businessCount: "100K" },
  { slug: "guinea", name: "Guinea", country: "Guinea", continent: "Africa", currency: "GNF", currencySymbol: "FG", taxName: "TVA", taxRate: "18%", businessCount: "80K" },
  { slug: "sierra-leone", name: "Sierra Leone", country: "Sierra Leone", continent: "Africa", currency: "SLL", currencySymbol: "Le", taxName: "GST", taxRate: "15%", businessCount: "60K" },
  { slug: "liberia", name: "Liberia", country: "Liberia", continent: "Africa", currency: "LRD", currencySymbol: "L$", taxName: "GST", taxRate: "10%", businessCount: "40K" },
  { slug: "togo", name: "Togo", country: "Togo", continent: "Africa", currency: "XOF", currencySymbol: "CFA", taxName: "TVA", taxRate: "18%", businessCount: "70K" },
  { slug: "benin", name: "Benin", country: "Benin", continent: "Africa", currency: "XOF", currencySymbol: "CFA", taxName: "TVA", taxRate: "18%", businessCount: "70K" },
  { slug: "gabon", name: "Gabon", country: "Gabon", continent: "Africa", currency: "XAF", currencySymbol: "FCFA", taxName: "TVA", taxRate: "18%", businessCount: "40K" },
  { slug: "congo", name: "DR Congo", country: "DR Congo", continent: "Africa", currency: "CDF", currencySymbol: "FC", taxName: "TVA", taxRate: "16%", businessCount: "500K" },
  { slug: "congo-republic", name: "Republic of Congo", country: "Congo", continent: "Africa", currency: "XAF", currencySymbol: "FCFA", taxName: "TVA", taxRate: "18%", businessCount: "60K" },
  { slug: "central-african-republic", name: "Central African Republic", country: "CAR", continent: "Africa", currency: "XAF", currencySymbol: "FCFA", taxName: "TVA", taxRate: "19%", businessCount: "20K" },
  { slug: "chad", name: "Chad", country: "Chad", continent: "Africa", currency: "XAF", currencySymbol: "FCFA", taxName: "TVA", taxRate: "18%", businessCount: "50K" },
  { slug: "mauritius", name: "Mauritius", country: "Mauritius", continent: "Africa", currency: "MUR", currencySymbol: "Rs", taxName: "VAT", taxRate: "15%", businessCount: "60K" },
  { slug: "cape-verde", name: "Cape Verde", country: "Cape Verde", continent: "Africa", currency: "CVE", currencySymbol: "Esc", taxName: "IVA", taxRate: "15%", businessCount: "15K" },
  { slug: "gambia", name: "Gambia", country: "Gambia", continent: "Africa", currency: "GMD", currencySymbol: "D", taxName: "VAT", taxRate: "15%", businessCount: "20K" },
  { slug: "equatorial-guinea", name: "Equatorial Guinea", country: "Equatorial Guinea", continent: "Africa", currency: "XAF", currencySymbol: "FCFA", taxName: "VAT", taxRate: "15%", businessCount: "20K" },
  { slug: "djibouti", name: "Djibouti", country: "Djibouti", continent: "Africa", currency: "DJF", currencySymbol: "Fdj", taxName: "VAT", taxRate: "10%", businessCount: "15K" },
  { slug: "eritrea", name: "Eritrea", country: "Eritrea", continent: "Africa", currency: "ERN", currencySymbol: "Nfk", taxName: "Sales Tax", taxRate: "varies", businessCount: "20K" },
  { slug: "somalia", name: "Somalia", country: "Somalia", continent: "Africa", currency: "SOS", currencySymbol: "Sh", taxName: "Sales Tax", taxRate: "varies", businessCount: "50K" },
  { slug: "comoros", name: "Comoros", country: "Comoros", continent: "Africa", currency: "KMF", currencySymbol: "CF", taxName: "TVA", taxRate: "10%", businessCount: "10K" },
  { slug: "seychelles", name: "Seychelles", country: "Seychelles", continent: "Africa", currency: "SCR", currencySymbol: "Re", taxName: "GST", taxRate: "15%", businessCount: "8K" },
  { slug: "sao-tome-principe", name: "São Tomé & Príncipe", country: "São Tomé", continent: "Africa", currency: "STN", currencySymbol: "Db", taxName: "IVA", taxRate: "15%", businessCount: "5K" },

  // ── More Middle East ──────────────────────────────────────────────────
  { slug: "syria", name: "Syria", country: "Syria", continent: "Middle East", currency: "SYP", currencySymbol: "£", taxName: "VAT", taxRate: "10%", businessCount: "100K" },
  { slug: "yemen", name: "Yemen", country: "Yemen", continent: "Middle East", currency: "YER", currencySymbol: "﷼", taxName: "GST", taxRate: "5%", businessCount: "100K" },
  { slug: "afghanistan", name: "Afghanistan", country: "Afghanistan", continent: "Asia-Pacific", currency: "AFN", currencySymbol: "؋", taxName: "BRT", taxRate: "2–10%", businessCount: "200K" },

  // ── More LatAm ────────────────────────────────────────────────────────
  { slug: "belize", name: "Belize", country: "Belize", continent: "Latin America", currency: "BZD", currencySymbol: "BZ$", taxName: "GST", taxRate: "12.5%", businessCount: "15K" },
  { slug: "haiti", name: "Haiti", country: "Haiti", continent: "Latin America", currency: "HTG", currencySymbol: "G", taxName: "TVA", taxRate: "10%", businessCount: "100K" },
  { slug: "cuba", name: "Cuba", country: "Cuba", continent: "Latin America", currency: "CUP", currencySymbol: "$", taxName: "Various", taxRate: "varies", businessCount: "100K" },
  { slug: "guyana", name: "Guyana", country: "Guyana", continent: "Latin America", currency: "GYD", currencySymbol: "G$", taxName: "VAT", taxRate: "14%", businessCount: "30K" },
  { slug: "suriname", name: "Suriname", country: "Suriname", continent: "Latin America", currency: "SRD", currencySymbol: "Sr$", taxName: "OB", taxRate: "10%", businessCount: "20K" },
  { slug: "french-guiana", name: "French Guiana", country: "France", continent: "Latin America", currency: "EUR", currencySymbol: "€", taxName: "TVA", taxRate: "8.5%", businessCount: "10K" },
  { slug: "puerto-rico", name: "Puerto Rico", country: "United States", continent: "Latin America", currency: "USD", currencySymbol: "$", taxName: "SUT", taxRate: "10.5%", businessCount: "60K" },

  // ── Additional cities ─────────────────────────────────────────────────
  { slug: "cape-town-sa", name: "Cape Town", country: "South Africa", continent: "Africa", currency: "ZAR", currencySymbol: "R", taxName: "VAT", taxRate: "15%", businessCount: "180K" },
  { slug: "alexandria", name: "Alexandria", country: "Egypt", continent: "Middle East", currency: "EGP", currencySymbol: "£", taxName: "VAT", taxRate: "14%", businessCount: "200K" },
  { slug: "guadalajara-mx", name: "Guadalajara", country: "Mexico", continent: "Latin America", currency: "MXN", currencySymbol: "$", taxName: "IVA", taxRate: "16%", businessCount: "200K" },
  { slug: "karachi", name: "Karachi", country: "Pakistan", continent: "Asia-Pacific", currency: "PKR", currencySymbol: "₨", taxName: "GST", taxRate: "17%", businessCount: "400K" },
  { slug: "lahore", name: "Lahore", country: "Pakistan", continent: "Asia-Pacific", currency: "PKR", currencySymbol: "₨", taxName: "GST", taxRate: "17%", businessCount: "280K" },
  { slug: "dhaka-city", name: "Dhaka", country: "Bangladesh", continent: "Asia-Pacific", currency: "BDT", currencySymbol: "৳", taxName: "VAT", taxRate: "15%", businessCount: "400K" },
  { slug: "colombo-city", name: "Colombo", country: "Sri Lanka", continent: "Asia-Pacific", currency: "LKR", currencySymbol: "Rs", taxName: "VAT", taxRate: "18%", businessCount: "120K" },
  { slug: "minsk", name: "Minsk", country: "Belarus", continent: "Europe", currency: "BYN", currencySymbol: "Br", taxName: "VAT", taxRate: "20%", businessCount: "100K" },
  { slug: "almaty", name: "Almaty", country: "Kazakhstan", continent: "Asia-Pacific", currency: "KZT", currencySymbol: "₸", taxName: "VAT", taxRate: "12%", businessCount: "200K" },
  { slug: "tashkent", name: "Tashkent", country: "Uzbekistan", continent: "Asia-Pacific", currency: "UZS", currencySymbol: "so'm", taxName: "VAT", taxRate: "12%", businessCount: "200K" },
];
