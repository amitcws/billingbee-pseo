// Lightweight location type for combination pSEO pages (100K scale)
// Full Location type with compliance/payment details is in locations.ts
export interface LocationLight {
  slug: string;
  name: string;
  country: string;
  continent: string;
  currency: string;
  currencySymbol: string;
  taxName: string;
  taxRate: string;
  businessCount: string;
}

export const locationsExtended: LocationLight[] = [
  // ── Europe ────────────────────────────────────────────────────────────
  // Countries
  { slug: "united-kingdom", name: "United Kingdom", country: "United Kingdom", continent: "Europe", currency: "GBP", currencySymbol: "£", taxName: "VAT", taxRate: "20%", businessCount: "5.5M" },
  { slug: "germany", name: "Germany", country: "Germany", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "MwSt", taxRate: "19%", businessCount: "3.5M" },
  { slug: "france", name: "France", country: "France", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "TVA", taxRate: "20%", businessCount: "3.0M" },
  { slug: "netherlands", name: "Netherlands", country: "Netherlands", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "BTW", taxRate: "21%", businessCount: "2.0M" },
  { slug: "spain", name: "Spain", country: "Spain", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "21%", businessCount: "2.9M" },
  { slug: "italy", name: "Italy", country: "Italy", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "22%", businessCount: "3.7M" },
  { slug: "portugal", name: "Portugal", country: "Portugal", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "23%", businessCount: "1.1M" },
  { slug: "belgium", name: "Belgium", country: "Belgium", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "TVA/BTW", taxRate: "21%", businessCount: "1.0M" },
  { slug: "switzerland", name: "Switzerland", country: "Switzerland", continent: "Europe", currency: "CHF", currencySymbol: "CHF", taxName: "MWST/TVA", taxRate: "8.1%", businessCount: "600K" },
  { slug: "austria", name: "Austria", country: "Austria", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "MwSt", taxRate: "20%", businessCount: "500K" },
  { slug: "sweden", name: "Sweden", country: "Sweden", continent: "Europe", currency: "SEK", currencySymbol: "kr", taxName: "Moms", taxRate: "25%", businessCount: "1.1M" },
  { slug: "norway", name: "Norway", country: "Norway", continent: "Europe", currency: "NOK", currencySymbol: "kr", taxName: "MVA", taxRate: "25%", businessCount: "600K" },
  { slug: "denmark", name: "Denmark", country: "Denmark", continent: "Europe", currency: "DKK", currencySymbol: "kr", taxName: "Moms", taxRate: "25%", businessCount: "300K" },
  { slug: "finland", name: "Finland", country: "Finland", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "ALV", taxRate: "25.5%", businessCount: "300K" },
  { slug: "ireland", name: "Ireland", country: "Ireland", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "VAT", taxRate: "23%", businessCount: "280K" },
  { slug: "poland", name: "Poland", country: "Poland", continent: "Europe", currency: "PLN", currencySymbol: "zł", taxName: "VAT", taxRate: "23%", businessCount: "2.4M" },
  { slug: "czech-republic", name: "Czech Republic", country: "Czech Republic", continent: "Europe", currency: "CZK", currencySymbol: "Kč", taxName: "DPH", taxRate: "21%", businessCount: "1.1M" },
  { slug: "hungary", name: "Hungary", country: "Hungary", continent: "Europe", currency: "HUF", currencySymbol: "Ft", taxName: "ÁFA", taxRate: "27%", businessCount: "1.7M" },
  { slug: "romania", name: "Romania", country: "Romania", continent: "Europe", currency: "RON", currencySymbol: "lei", taxName: "TVA", taxRate: "19%", businessCount: "720K" },
  { slug: "greece", name: "Greece", country: "Greece", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "ΦΠΑ", taxRate: "24%", businessCount: "700K" },
  { slug: "turkey", name: "Turkey", country: "Turkey", continent: "Europe", currency: "TRY", currencySymbol: "₺", taxName: "KDV", taxRate: "20%", businessCount: "3.2M" },
  { slug: "ukraine", name: "Ukraine", country: "Ukraine", continent: "Europe", currency: "UAH", currencySymbol: "₴", taxName: "ПДВ", taxRate: "20%", businessCount: "1.9M" },
  { slug: "croatia", name: "Croatia", country: "Croatia", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "PDV", taxRate: "25%", businessCount: "200K" },
  { slug: "slovakia", name: "Slovakia", country: "Slovakia", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "DPH", taxRate: "20%", businessCount: "560K" },
  { slug: "bulgaria", name: "Bulgaria", country: "Bulgaria", continent: "Europe", currency: "BGN", currencySymbol: "lv", taxName: "ДДС", taxRate: "20%", businessCount: "430K" },
  { slug: "luxembourg", name: "Luxembourg", country: "Luxembourg", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "TVA", taxRate: "17%", businessCount: "80K" },
  { slug: "estonia", name: "Estonia", country: "Estonia", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "KM", taxRate: "22%", businessCount: "130K" },
  { slug: "latvia", name: "Latvia", country: "Latvia", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "PVN", taxRate: "21%", businessCount: "100K" },
  { slug: "lithuania", name: "Lithuania", country: "Lithuania", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "PVM", taxRate: "21%", businessCount: "160K" },
  { slug: "slovenia", name: "Slovenia", country: "Slovenia", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "DDV", taxRate: "22%", businessCount: "180K" },
  { slug: "serbia", name: "Serbia", country: "Serbia", continent: "Europe", currency: "RSD", currencySymbol: "din", taxName: "PDV", taxRate: "20%", businessCount: "310K" },
  { slug: "malta", name: "Malta", country: "Malta", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "VAT", taxRate: "18%", businessCount: "50K" },
  { slug: "cyprus", name: "Cyprus", country: "Cyprus", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "ΦΠΑ", taxRate: "19%", businessCount: "60K" },
  // European cities
  { slug: "london", name: "London", country: "United Kingdom", continent: "Europe", currency: "GBP", currencySymbol: "£", taxName: "VAT", taxRate: "20%", businessCount: "1.0M+" },
  { slug: "manchester", name: "Manchester", country: "United Kingdom", continent: "Europe", currency: "GBP", currencySymbol: "£", taxName: "VAT", taxRate: "20%", businessCount: "120K" },
  { slug: "berlin", name: "Berlin", country: "Germany", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "MwSt", taxRate: "19%", businessCount: "200K" },
  { slug: "munich", name: "Munich", country: "Germany", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "MwSt", taxRate: "19%", businessCount: "160K" },
  { slug: "paris", name: "Paris", country: "France", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "TVA", taxRate: "20%", businessCount: "400K" },
  { slug: "amsterdam", name: "Amsterdam", country: "Netherlands", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "BTW", taxRate: "21%", businessCount: "130K" },
  { slug: "barcelona", name: "Barcelona", country: "Spain", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "21%", businessCount: "200K" },
  { slug: "madrid", name: "Madrid", country: "Spain", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "21%", businessCount: "250K" },
  { slug: "milan", name: "Milan", country: "Italy", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "22%", businessCount: "300K" },
  { slug: "rome", name: "Rome", country: "Italy", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "22%", businessCount: "200K" },
  { slug: "zurich", name: "Zurich", country: "Switzerland", continent: "Europe", currency: "CHF", currencySymbol: "CHF", taxName: "MWST", taxRate: "8.1%", businessCount: "100K" },
  { slug: "vienna", name: "Vienna", country: "Austria", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "MwSt", taxRate: "20%", businessCount: "120K" },
  { slug: "stockholm", name: "Stockholm", country: "Sweden", continent: "Europe", currency: "SEK", currencySymbol: "kr", taxName: "Moms", taxRate: "25%", businessCount: "120K" },
  { slug: "oslo", name: "Oslo", country: "Norway", continent: "Europe", currency: "NOK", currencySymbol: "kr", taxName: "MVA", taxRate: "25%", businessCount: "80K" },
  { slug: "copenhagen", name: "Copenhagen", country: "Denmark", continent: "Europe", currency: "DKK", currencySymbol: "kr", taxName: "Moms", taxRate: "25%", businessCount: "80K" },
  { slug: "helsinki", name: "Helsinki", country: "Finland", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "ALV", taxRate: "25.5%", businessCount: "70K" },
  { slug: "dublin", name: "Dublin", country: "Ireland", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "VAT", taxRate: "23%", businessCount: "90K" },
  { slug: "warsaw", name: "Warsaw", country: "Poland", continent: "Europe", currency: "PLN", currencySymbol: "zł", taxName: "VAT", taxRate: "23%", businessCount: "180K" },
  { slug: "lisbon", name: "Lisbon", country: "Portugal", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "IVA", taxRate: "23%", businessCount: "100K" },
  { slug: "brussels", name: "Brussels", country: "Belgium", continent: "Europe", currency: "EUR", currencySymbol: "€", taxName: "TVA/BTW", taxRate: "21%", businessCount: "80K" },
  { slug: "istanbul", name: "Istanbul", country: "Turkey", continent: "Europe", currency: "TRY", currencySymbol: "₺", taxName: "KDV", taxRate: "20%", businessCount: "400K" },

  // ── North America ─────────────────────────────────────────────────────
  // Countries
  { slug: "united-states", name: "United States", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "varies", businessCount: "33M" },
  { slug: "canada", name: "Canada", country: "Canada", continent: "North America", currency: "CAD", currencySymbol: "C$", taxName: "GST/HST", taxRate: "5–15%", businessCount: "1.2M" },
  { slug: "mexico", name: "Mexico", country: "Mexico", continent: "North America", currency: "MXN", currencySymbol: "$", taxName: "IVA", taxRate: "16%", businessCount: "4.2M" },
  // US States
  { slug: "california", name: "California", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "7.25%+", businessCount: "4.2M" },
  { slug: "new-york", name: "New York", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "4%+", businessCount: "2.3M" },
  { slug: "texas", name: "Texas", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.25%+", businessCount: "3.1M" },
  { slug: "florida", name: "Florida", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6%+", businessCount: "2.8M" },
  { slug: "illinois", name: "Illinois", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.25%+", businessCount: "1.3M" },
  { slug: "washington-state", name: "Washington State", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.5%+", businessCount: "740K" },
  { slug: "massachusetts", name: "Massachusetts", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.25%", businessCount: "700K" },
  { slug: "colorado", name: "Colorado", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "2.9%+", businessCount: "700K" },
  // US Cities
  { slug: "new-york-city", name: "New York City", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "8.875%", businessCount: "230K" },
  { slug: "los-angeles", name: "Los Angeles", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "10.25%", businessCount: "250K" },
  { slug: "chicago", name: "Chicago", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "10.25%", businessCount: "150K" },
  { slug: "houston", name: "Houston", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "8.25%", businessCount: "120K" },
  { slug: "miami", name: "Miami", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "7%", businessCount: "100K" },
  { slug: "seattle", name: "Seattle", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "10.25%", businessCount: "80K" },
  { slug: "boston", name: "Boston", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "6.25%", businessCount: "70K" },
  { slug: "austin", name: "Austin", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "8.25%", businessCount: "90K" },
  { slug: "san-francisco", name: "San Francisco", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "8.625%", businessCount: "80K" },
  { slug: "denver", name: "Denver", country: "United States", continent: "North America", currency: "USD", currencySymbol: "$", taxName: "Sales Tax", taxRate: "8.81%", businessCount: "70K" },
  // Canadian cities
  { slug: "toronto", name: "Toronto", country: "Canada", continent: "North America", currency: "CAD", currencySymbol: "C$", taxName: "HST", taxRate: "13%", businessCount: "200K" },
  { slug: "vancouver", name: "Vancouver", country: "Canada", continent: "North America", currency: "CAD", currencySymbol: "C$", taxName: "GST+PST", taxRate: "12%", businessCount: "90K" },
  { slug: "montreal", name: "Montreal", country: "Canada", continent: "North America", currency: "CAD", currencySymbol: "C$", taxName: "GST+QST", taxRate: "14.975%", businessCount: "80K" },
  { slug: "calgary", name: "Calgary", country: "Canada", continent: "North America", currency: "CAD", currencySymbol: "C$", taxName: "GST", taxRate: "5%", businessCount: "60K" },

  // ── Asia-Pacific ──────────────────────────────────────────────────────
  { slug: "australia", name: "Australia", country: "Australia", continent: "Asia-Pacific", currency: "AUD", currencySymbol: "A$", taxName: "GST", taxRate: "10%", businessCount: "2.4M" },
  { slug: "india", name: "India", country: "India", continent: "Asia-Pacific", currency: "INR", currencySymbol: "₹", taxName: "GST", taxRate: "18%", businessCount: "63M" },
  { slug: "japan", name: "Japan", country: "Japan", continent: "Asia-Pacific", currency: "JPY", currencySymbol: "¥", taxName: "Consumption Tax", taxRate: "10%", businessCount: "3.8M" },
  { slug: "china", name: "China", country: "China", continent: "Asia-Pacific", currency: "CNY", currencySymbol: "¥", taxName: "VAT", taxRate: "13%", businessCount: "44M" },
  { slug: "singapore", name: "Singapore", country: "Singapore", continent: "Asia-Pacific", currency: "SGD", currencySymbol: "S$", taxName: "GST", taxRate: "9%", businessCount: "250K" },
  { slug: "south-korea", name: "South Korea", country: "South Korea", continent: "Asia-Pacific", currency: "KRW", currencySymbol: "₩", taxName: "VAT", taxRate: "10%", businessCount: "3.7M" },
  { slug: "new-zealand", name: "New Zealand", country: "New Zealand", continent: "Asia-Pacific", currency: "NZD", currencySymbol: "NZ$", taxName: "GST", taxRate: "15%", businessCount: "560K" },
  { slug: "indonesia", name: "Indonesia", country: "Indonesia", continent: "Asia-Pacific", currency: "IDR", currencySymbol: "Rp", taxName: "PPN", taxRate: "11%", businessCount: "64M" },
  { slug: "malaysia", name: "Malaysia", country: "Malaysia", continent: "Asia-Pacific", currency: "MYR", currencySymbol: "RM", taxName: "SST", taxRate: "6–10%", businessCount: "1.2M" },
  { slug: "thailand", name: "Thailand", country: "Thailand", continent: "Asia-Pacific", currency: "THB", currencySymbol: "฿", taxName: "VAT", taxRate: "7%", businessCount: "3.0M" },
  { slug: "philippines", name: "Philippines", country: "Philippines", continent: "Asia-Pacific", currency: "PHP", currencySymbol: "₱", taxName: "VAT", taxRate: "12%", businessCount: "1.0M" },
  { slug: "vietnam", name: "Vietnam", country: "Vietnam", continent: "Asia-Pacific", currency: "VND", currencySymbol: "₫", taxName: "VAT", taxRate: "10%", businessCount: "800K" },
  { slug: "bangladesh", name: "Bangladesh", country: "Bangladesh", continent: "Asia-Pacific", currency: "BDT", currencySymbol: "৳", taxName: "VAT", taxRate: "15%", businessCount: "7.8M" },
  { slug: "pakistan", name: "Pakistan", country: "Pakistan", continent: "Asia-Pacific", currency: "PKR", currencySymbol: "₨", taxName: "GST", taxRate: "17%", businessCount: "3.2M" },
  { slug: "sri-lanka", name: "Sri Lanka", country: "Sri Lanka", continent: "Asia-Pacific", currency: "LKR", currencySymbol: "Rs", taxName: "VAT", taxRate: "18%", businessCount: "1.0M" },
  { slug: "nepal", name: "Nepal", country: "Nepal", continent: "Asia-Pacific", currency: "NPR", currencySymbol: "Rs", taxName: "VAT", taxRate: "13%", businessCount: "920K" },
  { slug: "myanmar", name: "Myanmar", country: "Myanmar", continent: "Asia-Pacific", currency: "MMK", currencySymbol: "K", taxName: "Commercial Tax", taxRate: "5%", businessCount: "1.2M" },
  { slug: "hong-kong", name: "Hong Kong", country: "Hong Kong SAR", continent: "Asia-Pacific", currency: "HKD", currencySymbol: "HK$", taxName: "No VAT/GST", taxRate: "0%", businessCount: "340K" },
  { slug: "taiwan", name: "Taiwan", country: "Taiwan", continent: "Asia-Pacific", currency: "TWD", currencySymbol: "NT$", taxName: "VAT", taxRate: "5%", businessCount: "1.5M" },
  // APAC cities
  { slug: "sydney", name: "Sydney", country: "Australia", continent: "Asia-Pacific", currency: "AUD", currencySymbol: "A$", taxName: "GST", taxRate: "10%", businessCount: "500K" },
  { slug: "melbourne", name: "Melbourne", country: "Australia", continent: "Asia-Pacific", currency: "AUD", currencySymbol: "A$", taxName: "GST", taxRate: "10%", businessCount: "400K" },
  { slug: "brisbane", name: "Brisbane", country: "Australia", continent: "Asia-Pacific", currency: "AUD", currencySymbol: "A$", taxName: "GST", taxRate: "10%", businessCount: "200K" },
  { slug: "perth", name: "Perth", country: "Australia", continent: "Asia-Pacific", currency: "AUD", currencySymbol: "A$", taxName: "GST", taxRate: "10%", businessCount: "150K" },
  { slug: "mumbai", name: "Mumbai", country: "India", continent: "Asia-Pacific", currency: "INR", currencySymbol: "₹", taxName: "GST", taxRate: "18%", businessCount: "800K" },
  { slug: "delhi", name: "Delhi", country: "India", continent: "Asia-Pacific", currency: "INR", currencySymbol: "₹", taxName: "GST", taxRate: "18%", businessCount: "700K" },
  { slug: "bangalore", name: "Bangalore", country: "India", continent: "Asia-Pacific", currency: "INR", currencySymbol: "₹", taxName: "GST", taxRate: "18%", businessCount: "400K" },
  { slug: "hyderabad", name: "Hyderabad", country: "India", continent: "Asia-Pacific", currency: "INR", currencySymbol: "₹", taxName: "GST", taxRate: "18%", businessCount: "300K" },
  { slug: "chennai", name: "Chennai", country: "India", continent: "Asia-Pacific", currency: "INR", currencySymbol: "₹", taxName: "GST", taxRate: "18%", businessCount: "250K" },
  { slug: "tokyo", name: "Tokyo", country: "Japan", continent: "Asia-Pacific", currency: "JPY", currencySymbol: "¥", taxName: "Consumption Tax", taxRate: "10%", businessCount: "700K" },
  { slug: "osaka", name: "Osaka", country: "Japan", continent: "Asia-Pacific", currency: "JPY", currencySymbol: "¥", taxName: "Consumption Tax", taxRate: "10%", businessCount: "300K" },
  { slug: "kuala-lumpur", name: "Kuala Lumpur", country: "Malaysia", continent: "Asia-Pacific", currency: "MYR", currencySymbol: "RM", taxName: "SST", taxRate: "6–10%", businessCount: "200K" },
  { slug: "jakarta", name: "Jakarta", country: "Indonesia", continent: "Asia-Pacific", currency: "IDR", currencySymbol: "Rp", taxName: "PPN", taxRate: "11%", businessCount: "300K" },
  { slug: "bangkok", name: "Bangkok", country: "Thailand", continent: "Asia-Pacific", currency: "THB", currencySymbol: "฿", taxName: "VAT", taxRate: "7%", businessCount: "400K" },
  { slug: "manila", name: "Manila", country: "Philippines", continent: "Asia-Pacific", currency: "PHP", currencySymbol: "₱", taxName: "VAT", taxRate: "12%", businessCount: "200K" },
  { slug: "ho-chi-minh-city", name: "Ho Chi Minh City", country: "Vietnam", continent: "Asia-Pacific", currency: "VND", currencySymbol: "₫", taxName: "VAT", taxRate: "10%", businessCount: "200K" },
  { slug: "auckland", name: "Auckland", country: "New Zealand", continent: "Asia-Pacific", currency: "NZD", currencySymbol: "NZ$", taxName: "GST", taxRate: "15%", businessCount: "130K" },
  { slug: "seoul", name: "Seoul", country: "South Korea", continent: "Asia-Pacific", currency: "KRW", currencySymbol: "₩", taxName: "VAT", taxRate: "10%", businessCount: "500K" },
  { slug: "shanghai", name: "Shanghai", country: "China", continent: "Asia-Pacific", currency: "CNY", currencySymbol: "¥", taxName: "VAT", taxRate: "13%", businessCount: "700K" },
  { slug: "beijing", name: "Beijing", country: "China", continent: "Asia-Pacific", currency: "CNY", currencySymbol: "¥", taxName: "VAT", taxRate: "13%", businessCount: "600K" },

  // ── Middle East ───────────────────────────────────────────────────────
  { slug: "uae", name: "UAE", country: "UAE", continent: "Middle East", currency: "AED", currencySymbol: "د.إ", taxName: "VAT", taxRate: "5%", businessCount: "400K" },
  { slug: "saudi-arabia", name: "Saudi Arabia", country: "Saudi Arabia", continent: "Middle East", currency: "SAR", currencySymbol: "ر.س", taxName: "VAT", taxRate: "15%", businessCount: "1.2M" },
  { slug: "israel", name: "Israel", country: "Israel", continent: "Middle East", currency: "ILS", currencySymbol: "₪", taxName: "VAT", taxRate: "17%", businessCount: "560K" },
  { slug: "qatar", name: "Qatar", country: "Qatar", continent: "Middle East", currency: "QAR", currencySymbol: "ر.ق", taxName: "No VAT", taxRate: "0%", businessCount: "90K" },
  { slug: "kuwait", name: "Kuwait", country: "Kuwait", continent: "Middle East", currency: "KWD", currencySymbol: "د.ك", taxName: "No VAT", taxRate: "0%", businessCount: "80K" },
  { slug: "bahrain", name: "Bahrain", country: "Bahrain", continent: "Middle East", currency: "BHD", currencySymbol: "BD", taxName: "VAT", taxRate: "10%", businessCount: "60K" },
  { slug: "oman", name: "Oman", country: "Oman", continent: "Middle East", currency: "OMR", currencySymbol: "ر.ع", taxName: "VAT", taxRate: "5%", businessCount: "80K" },
  { slug: "jordan", name: "Jordan", country: "Jordan", continent: "Middle East", currency: "JOD", currencySymbol: "JD", taxName: "GST", taxRate: "16%", businessCount: "200K" },
  { slug: "egypt", name: "Egypt", country: "Egypt", continent: "Middle East", currency: "EGP", currencySymbol: "£", taxName: "VAT", taxRate: "14%", businessCount: "2.5M" },
  { slug: "lebanon", name: "Lebanon", country: "Lebanon", continent: "Middle East", currency: "LBP", currencySymbol: "ل.ل", taxName: "VAT", taxRate: "11%", businessCount: "120K" },
  // ME cities
  { slug: "dubai", name: "Dubai", country: "UAE", continent: "Middle East", currency: "AED", currencySymbol: "د.إ", taxName: "VAT", taxRate: "5%", businessCount: "250K" },
  { slug: "abu-dhabi", name: "Abu Dhabi", country: "UAE", continent: "Middle East", currency: "AED", currencySymbol: "د.إ", taxName: "VAT", taxRate: "5%", businessCount: "100K" },
  { slug: "riyadh", name: "Riyadh", country: "Saudi Arabia", continent: "Middle East", currency: "SAR", currencySymbol: "ر.س", taxName: "VAT", taxRate: "15%", businessCount: "300K" },
  { slug: "tel-aviv", name: "Tel Aviv", country: "Israel", continent: "Middle East", currency: "ILS", currencySymbol: "₪", taxName: "VAT", taxRate: "17%", businessCount: "150K" },
  { slug: "cairo", name: "Cairo", country: "Egypt", continent: "Middle East", currency: "EGP", currencySymbol: "£", taxName: "VAT", taxRate: "14%", businessCount: "400K" },
  { slug: "doha", name: "Doha", country: "Qatar", continent: "Middle East", currency: "QAR", currencySymbol: "ر.ق", taxName: "No VAT", taxRate: "0%", businessCount: "60K" },

  // ── Africa ────────────────────────────────────────────────────────────
  { slug: "south-africa", name: "South Africa", country: "South Africa", continent: "Africa", currency: "ZAR", currencySymbol: "R", taxName: "VAT", taxRate: "15%", businessCount: "2.1M" },
  { slug: "nigeria", name: "Nigeria", country: "Nigeria", continent: "Africa", currency: "NGN", currencySymbol: "₦", taxName: "VAT", taxRate: "7.5%", businessCount: "17.4M" },
  { slug: "kenya", name: "Kenya", country: "Kenya", continent: "Africa", currency: "KES", currencySymbol: "KSh", taxName: "VAT", taxRate: "16%", businessCount: "7.4M" },
  { slug: "ghana", name: "Ghana", country: "Ghana", continent: "Africa", currency: "GHS", currencySymbol: "₵", taxName: "VAT", taxRate: "15%", businessCount: "2.0M" },
  { slug: "tanzania", name: "Tanzania", country: "Tanzania", continent: "Africa", currency: "TZS", currencySymbol: "TSh", taxName: "VAT", taxRate: "18%", businessCount: "3.0M" },
  { slug: "ethiopia", name: "Ethiopia", country: "Ethiopia", continent: "Africa", currency: "ETB", currencySymbol: "Br", taxName: "VAT", taxRate: "15%", businessCount: "700K" },
  { slug: "uganda", name: "Uganda", country: "Uganda", continent: "Africa", currency: "UGX", currencySymbol: "USh", taxName: "VAT", taxRate: "18%", businessCount: "1.1M" },
  { slug: "morocco", name: "Morocco", country: "Morocco", continent: "Africa", currency: "MAD", currencySymbol: "MAD", taxName: "TVA", taxRate: "20%", businessCount: "700K" },
  { slug: "senegal", name: "Senegal", country: "Senegal", continent: "Africa", currency: "XOF", currencySymbol: "CFA", taxName: "TVA", taxRate: "18%", businessCount: "400K" },
  { slug: "zimbabwe", name: "Zimbabwe", country: "Zimbabwe", continent: "Africa", currency: "USD", currencySymbol: "$", taxName: "VAT", taxRate: "14.5%", businessCount: "400K" },
  // African cities
  { slug: "johannesburg", name: "Johannesburg", country: "South Africa", continent: "Africa", currency: "ZAR", currencySymbol: "R", taxName: "VAT", taxRate: "15%", businessCount: "300K" },
  { slug: "cape-town", name: "Cape Town", country: "South Africa", continent: "Africa", currency: "ZAR", currencySymbol: "R", taxName: "VAT", taxRate: "15%", businessCount: "200K" },
  { slug: "lagos", name: "Lagos", country: "Nigeria", continent: "Africa", currency: "NGN", currencySymbol: "₦", taxName: "VAT", taxRate: "7.5%", businessCount: "400K" },
  { slug: "nairobi", name: "Nairobi", country: "Kenya", continent: "Africa", currency: "KES", currencySymbol: "KSh", taxName: "VAT", taxRate: "16%", businessCount: "200K" },
  { slug: "accra", name: "Accra", country: "Ghana", continent: "Africa", currency: "GHS", currencySymbol: "₵", taxName: "VAT", taxRate: "15%", businessCount: "120K" },
  { slug: "casablanca", name: "Casablanca", country: "Morocco", continent: "Africa", currency: "MAD", currencySymbol: "MAD", taxName: "TVA", taxRate: "20%", businessCount: "200K" },

  // ── Latin America ─────────────────────────────────────────────────────
  { slug: "brazil", name: "Brazil", country: "Brazil", continent: "Latin America", currency: "BRL", currencySymbol: "R$", taxName: "ICMS/ISS", taxRate: "varies", businessCount: "19.4M" },
  { slug: "argentina", name: "Argentina", country: "Argentina", continent: "Latin America", currency: "ARS", currencySymbol: "$", taxName: "IVA", taxRate: "21%", businessCount: "2.1M" },
  { slug: "colombia", name: "Colombia", country: "Colombia", continent: "Latin America", currency: "COP", currencySymbol: "$", taxName: "IVA", taxRate: "19%", businessCount: "1.6M" },
  { slug: "chile", name: "Chile", country: "Chile", continent: "Latin America", currency: "CLP", currencySymbol: "$", taxName: "IVA", taxRate: "19%", businessCount: "1.0M" },
  { slug: "peru", name: "Peru", country: "Peru", continent: "Latin America", currency: "PEN", currencySymbol: "S/", taxName: "IGV", taxRate: "18%", businessCount: "2.3M" },
  { slug: "ecuador", name: "Ecuador", country: "Ecuador", continent: "Latin America", currency: "USD", currencySymbol: "$", taxName: "IVA", taxRate: "15%", businessCount: "900K" },
  { slug: "uruguay", name: "Uruguay", country: "Uruguay", continent: "Latin America", currency: "UYU", currencySymbol: "$", taxName: "IVA", taxRate: "22%", businessCount: "200K" },
  { slug: "costa-rica", name: "Costa Rica", country: "Costa Rica", continent: "Latin America", currency: "CRC", currencySymbol: "₡", taxName: "IVA", taxRate: "13%", businessCount: "200K" },
  { slug: "panama", name: "Panama", country: "Panama", continent: "Latin America", currency: "USD", currencySymbol: "$", taxName: "ITBMS", taxRate: "7%", businessCount: "300K" },
  // LatAm cities
  { slug: "sao-paulo", name: "São Paulo", country: "Brazil", continent: "Latin America", currency: "BRL", currencySymbol: "R$", taxName: "ISS/ICMS", taxRate: "varies", businessCount: "800K" },
  { slug: "buenos-aires", name: "Buenos Aires", country: "Argentina", continent: "Latin America", currency: "ARS", currencySymbol: "$", taxName: "IVA", taxRate: "21%", businessCount: "400K" },
  { slug: "bogota", name: "Bogotá", country: "Colombia", continent: "Latin America", currency: "COP", currencySymbol: "$", taxName: "IVA", taxRate: "19%", businessCount: "300K" },
  { slug: "santiago", name: "Santiago", country: "Chile", continent: "Latin America", currency: "CLP", currencySymbol: "$", taxName: "IVA", taxRate: "19%", businessCount: "250K" },
  { slug: "lima", name: "Lima", country: "Peru", continent: "Latin America", currency: "PEN", currencySymbol: "S/", taxName: "IGV", taxRate: "18%", businessCount: "300K" },
  { slug: "mexico-city", name: "Mexico City", country: "Mexico", continent: "Latin America", currency: "MXN", currencySymbol: "$", taxName: "IVA", taxRate: "16%", businessCount: "500K" },
  { slug: "rio-de-janeiro", name: "Rio de Janeiro", country: "Brazil", continent: "Latin America", currency: "BRL", currencySymbol: "R$", taxName: "ISS/ICMS", taxRate: "varies", businessCount: "300K" },
  { slug: "guadalajara", name: "Guadalajara", country: "Mexico", continent: "Latin America", currency: "MXN", currencySymbol: "$", taxName: "IVA", taxRate: "16%", businessCount: "200K" },
  { slug: "medellin", name: "Medellín", country: "Colombia", continent: "Latin America", currency: "COP", currencySymbol: "$", taxName: "IVA", taxRate: "19%", businessCount: "150K" },
];

// Top locations by business count — used for generateStaticParams pre-build
export const topLocations = locationsExtended
  .filter((l) =>
    [
      "united-states", "united-kingdom", "australia", "canada", "india",
      "germany", "france", "netherlands", "singapore", "new-zealand",
      "uae", "dubai", "south-africa", "ireland", "new-york", "california",
      "london", "sydney", "toronto", "toronto",
    ].includes(l.slug)
  );
