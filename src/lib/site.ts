// Centralized site data — Bungee Jump Insurance

export const SITE = {
  name: "Bungee Jump Insurance",
  legalName: "Bungee Jump Insurance (by Contractors Choice Agency)",
  domain: "bungeejumpinsurance.com",
  url: "https://bungeejumpinsurance.com",
  tagline: "Insurance for Bungee Jump Operators & Extreme Sports Venues",
  description:
    "Specialized commercial insurance for bungee jump operators and extreme sports venues — general liability, accident & medical payments, commercial property, workers' compensation, umbrella, and equipment breakdown. Purpose-built programs for bungee jumping operations. Licensed all 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Bungee Jump",
  brandSub: "Insurance",
  tagline: "Insurance for Bungee Jump Operators & Extreme Sports Venues",
  subTagline: "GL, accident coverage, commercial property, workers comp, and umbrella for bungee jump operators",
  nicheShort: "bungee jump operator",
  nicheShortCap: "Bungee Jump Operator",
  nichePlural: "bungee jump operators",
  nichePluralCap: "Bungee Jump Operators",
  operator: "bungee jump venue",
  operatorCap: "Bungee Jump Venue",
  industry: "bungee jumping",
  industryCap: "Bungee Jumping",
  audience: "bungee jump operators",
  audienceCap: "Bungee Jump Operators",
  ownerTitle: "bungee jump operator",
  regionPill: "Theme Parks · Adventure Venues · Nationwide",
  ctaMain: "Get a Bungee Jump Operator Quote",
  ctaSecondary: "Talk to an Agent",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Participant injury, premises & completed operations",
    description:
      "Core protection for bungee jump operators — covers third-party bodily injury and property damage arising from your bungee jumping operations, including spectator injuries, premises liability, and completed operations. Built for the specific risk profile of extreme sports operators.",
    icon: "ShieldCheck",
    keywords: ["bungee jump general liability", "extreme sports GL insurance", "bungee operator liability", "adventure venue general liability"],
  },
  {
    slug: "accident-insurance",
    title: "Accident & Medical Payments Insurance",
    short: "No-fault coverage for participant injuries",
    description:
      "Participant accident coverage and medical payments for bungee jump guests regardless of fault — covers emergency medical expenses, hospital care, and accidental death benefits. Satisfies venue and land-owner requirements for participant accident coverage.",
    icon: "Heart",
    keywords: ["bungee jump accident insurance", "participant accident coverage", "extreme sports medical payments", "bungee participant injury coverage"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "Jump towers, platforms & venue improvements",
    description:
      "Coverage for your bungee jump structure, jump platform, control stations, fencing, ticketing booths, and all site improvements. Protects against fire, vandalism, windstorm, and structural damage to your venue's physical assets.",
    icon: "Building2",
    keywords: ["bungee jump property insurance", "adventure venue commercial property", "jump tower insurance", "bungee crane property coverage"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Jump masters, rigging crews & ground staff",
    description:
      "Coverage for the unique injury patterns of bungee jump crew — jump masters, rigging technicians, ground crew, and customer service staff. Includes proper class codes for extreme sports operations and covers altitude-related, equipment-handling, and operational injuries.",
    icon: "HardHat",
    keywords: ["bungee jump workers compensation", "extreme sports workers comp", "jump master workers comp", "adventure venue employee coverage"],
  },
  {
    slug: "umbrella",
    title: "Umbrella / Excess Liability",
    short: "High-limit coverage for major venue contracts",
    description:
      "Bungee jump operators working at fairs, festivals, amusement parks, and permanent venues often face land-owner requirements for $5M to $10M combined liability limits. Umbrella provides those limits above your primary GL and auto — essential for major venue contracts.",
    icon: "Umbrella",
    keywords: ["bungee jump umbrella insurance", "extreme sports excess liability", "adventure venue umbrella coverage", "bungee operator high limit liability"],
  },
  {
    slug: "equipment-breakdown",
    title: "Equipment Breakdown Insurance",
    short: "Winches, brakes & control systems",
    description:
      "Covers mechanical and electrical failure of your bungee jump system — winches, braking mechanisms, control panels, harness equipment, and safety systems. Includes business interruption from covered equipment breakdown so a mechanical failure doesn't shut down your operation.",
    icon: "Wrench",
    keywords: ["bungee jump equipment breakdown", "bungee system mechanical failure insurance", "adventure equipment breakdown coverage", "bungee crane breakdown insurance"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Los Angeles · San Francisco · San Diego",
    metaTitle: "Bungee Jump Insurance California | CA Extreme Sports Operator Coverage",
    metaDescription: "California bungee jump operator insurance — GL, accident coverage, commercial property, and workers comp for CA bungee jumping venues and extreme sports operations.",
    h1: "Bungee Jump Insurance in California",
    intro: "California's adventure tourism market — theme parks, coastal entertainment venues, and extreme sports facilities — makes it one of the most active markets for bungee jump operators. From Los Angeles to San Diego and the Bay Area, California venues require specialized liability programs built for bungee jumping risk. We write programs for California bungee jump operators and extreme sports venues.",
    blurb: "Theme parks, coastal adventure venues, and extreme sports attractions across California. GL, accident insurance, and umbrella programs for CA bungee jump operators.",
  },
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Dallas · Houston · San Antonio",
    metaTitle: "Bungee Jump Insurance Texas | TX Extreme Sports Venue Coverage",
    metaDescription: "Texas bungee jump operator insurance — GL, accident coverage, commercial property, and umbrella for TX bungee jumping venues and extreme sports operators.",
    h1: "Bungee Jump Insurance in Texas",
    intro: "Texas's large fairs, festivals, theme parks, and entertainment venues create strong demand for bungee jump operators and extreme sports attractions. The State Fair of Texas and regional events across the state require properly structured insurance programs for bungee jumping operations. We write programs for Texas bungee jump operators.",
    blurb: "State fairs, county fairs, and festival circuits across Texas. Specialty GL, accident insurance, and umbrella for TX bungee jump operators.",
  },
  {
    slug: "florida",
    name: "Florida",
    state: "FL",
    region: "Orlando · Miami · Tampa",
    metaTitle: "Bungee Jump Insurance Florida | FL Extreme Sports Operator Coverage",
    metaDescription: "Florida bungee jump operator insurance — GL, accident coverage, commercial property, and workers comp for FL bungee jumping venues and theme park operators.",
    h1: "Bungee Jump Insurance in Florida",
    intro: "Florida's tourism-driven economy — theme parks, beach entertainment venues, and adventure attractions — makes it a major market for bungee jump operators. Orlando's attraction density and Miami's entertainment scene create consistent demand for extreme sports liability programs. We write programs for Florida bungee jump and adventure sports operators.",
    blurb: "Theme parks, beach entertainment, and adventure attractions across Florida. GL, accident insurance, and commercial property for FL bungee jump operators.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    state: "NV",
    region: "Las Vegas · Reno · Henderson",
    metaTitle: "Bungee Jump Insurance Nevada | Las Vegas Extreme Sports Coverage",
    metaDescription: "Nevada bungee jump operator insurance — GL, accident coverage, commercial property, and umbrella for Las Vegas and NV bungee jumping and extreme sports venues.",
    h1: "Bungee Jump Insurance in Nevada",
    intro: "Las Vegas's entertainment and adventure tourism scene — including rooftop experiences, outdoor adventures, and extreme sports attractions — creates strong demand for bungee jump insurance programs. Nevada venues, including resort-adjacent operations and standalone attractions, need specialty liability coverage. We write programs for Nevada bungee jump operators.",
    blurb: "Las Vegas entertainment venues and adventure attractions. High-limit umbrella and specialty GL programs for NV bungee jump operators.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    state: "CO",
    region: "Denver · Colorado Springs · Pueblo",
    metaTitle: "Bungee Jump Insurance Colorado | CO Adventure Sports Operator Coverage",
    metaDescription: "Colorado bungee jump operator insurance — GL, accident coverage, equipment breakdown, and umbrella for CO extreme sports venues and adventure tourism operators.",
    h1: "Bungee Jump Insurance in Colorado",
    intro: "Colorado's outdoor adventure economy — ski resorts, adventure parks, and extreme sports venues — creates natural demand for bungee jump operations and specialty liability programs. Front Range venues and mountain adventure attractions need properly structured coverage. We write programs for Colorado bungee jump and adventure sports operators.",
    blurb: "Ski resorts, adventure parks, and extreme sports venues across Colorado. GL, accident insurance, and equipment breakdown for CO bungee jump operators.",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    region: "New York City · Long Island · Upstate",
    metaTitle: "Bungee Jump Insurance New York | NY Extreme Sports Operator Coverage",
    metaDescription: "New York bungee jump operator insurance — GL, accident coverage, commercial property, and umbrella for NY bungee jumping venues and extreme sports operators.",
    h1: "Bungee Jump Insurance in New York",
    intro: "New York's entertainment market — fairs, festivals, amusement parks, and adventure attractions across the state — creates demand for bungee jump operators. New York's liability environment and venue contract requirements make specialty insurance critical for extreme sports operations. We write programs for New York bungee jump operators.",
    blurb: "Amusement parks, fairs, and festivals across New York. Specialty GL, accident insurance, and high-limit umbrella for NY bungee jump operators.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    state: "GA",
    region: "Atlanta · Savannah · Augusta",
    metaTitle: "Bungee Jump Insurance Georgia | GA Extreme Sports Venue Coverage",
    metaDescription: "Georgia bungee jump operator insurance — GL, accident coverage, commercial property, and workers comp for GA bungee jumping venues and extreme sports operators.",
    h1: "Bungee Jump Insurance in Georgia",
    intro: "Georgia's growing adventure tourism sector — Six Flags, county fairs, festivals, and entertainment venues across Atlanta and statewide — creates consistent demand for bungee jump operators. We write specialty insurance programs for Georgia bungee jump and extreme sports venue operators.",
    blurb: "Theme parks, county fairs, and festivals across Georgia. GL, accident insurance, and workers comp for GA bungee jump and extreme sports operators.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    state: "IL",
    region: "Chicago · Springfield · Peoria",
    metaTitle: "Bungee Jump Insurance Illinois | IL Extreme Sports Operator Coverage",
    metaDescription: "Illinois bungee jump operator insurance — GL, accident coverage, commercial property, and umbrella for IL bungee jumping venues and extreme sports operators.",
    h1: "Bungee Jump Insurance in Illinois",
    intro: "Illinois's entertainment venues — county fairs, festivals, amusement attractions, and adventure parks across Chicago and downstate — create demand for bungee jump operators with proper specialty insurance. We write programs for Illinois bungee jump operators and extreme sports venues.",
    blurb: "County fairs, festivals, and amusement attractions across Illinois. Specialty GL, accident insurance, and umbrella for IL bungee jump operators.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Extreme sports specialists", icon: "Zap" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "ShieldCheck" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = { facebook: "", instagram: "", linkedin: "", twitter: "" } as const;

export const STATS = [
  { value: 200, suffix: "+", label: "Extreme sports operators insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring adventure venues", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "We operate a mobile bungee crane system at fairs and festivals across five states. The participant accident coverage and umbrella limits we got through Contractors Choice are exactly what major venues require. They understood our mobile operation — most agents don't even know where to start with bungee jump risk.",
    name: "Travis M.",
    role: "Owner, Extreme Air Bungee",
    location: "Texas",
  },
  {
    quote: "After a harness malfunction injured a participant, the GL claim could have ended our business. Our policy through CCA responded exactly as written — covered the medical costs and legal defense. The equipment breakdown rider covered our crane repairs while we were shut down for inspection.",
    name: "Sandra K.",
    role: "Operations Director, AdrenalineJump LLC",
    location: "Florida",
  },
  {
    quote: "We have a permanent bungee tower at our adventure park. Getting the right mix of GL, accident insurance, and property coverage was a puzzle until CCA put together a package that satisfied both our land-owner and our lender. 15-minute quote and they had the binder the same week.",
    name: "Derek R.",
    role: "General Manager, Summit Adventure Park",
    location: "Colorado",
  },
] as const;
