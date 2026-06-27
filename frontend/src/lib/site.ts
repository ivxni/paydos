// ============================================================
//  Central site configuration — single source of truth for
//  business data (address, hours, contact, nav). Edit here.
// ============================================================

/**
 * Normalize a site URL: tolerate a missing protocol (e.g. "paydoslounge.de")
 * and strip trailing slashes, so a misconfigured env var can never crash the
 * build via `new URL()` in metadataBase.
 */
function normalizeSiteUrl(raw: string | undefined): string {
  const value = (raw ?? "").trim().replace(/\/+$/, "");
  if (!value) return "https://paydoslounge.de";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export const SITE = {
  name: "Paydos Lounge",
  legalName: "Paydos Shisha & Okey Lounge",
  shortName: "Paydos",
  tagline: "Shisha & Okey Lounge",
  description:
    "Shisha & Okey Lounge in Marbach am Neckar – handgepackter Tabak, italienischer Kaffee, hausgemachte Mocktails und eine Terrasse. Reservier deinen Tisch in unter einer Minute.",
  // Read at runtime where possible; NEXT_PUBLIC_ vars are inlined for the client.
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "de_DE",
} as const;

export const CONTACT = {
  // Display string (human) and raw (tel:/wa.me) form.
  // `||` (not `??`) so an empty env value falls back instead of breaking wa.me.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "491729910160",
  phoneDisplay: "0172 9910160",
  phoneHref: "+491729910160",
  email: "contact@paydoslounge.de",
  instagram: "paydoslounge",
  instagramUrl: "https://www.instagram.com/paydoslounge",
  googleReviewUrl: "https://g.page/r/CUYvX0fAzIGtEBM/review",
} as const;

export const ADDRESS = {
  street: "Grabenstraße 2",
  postalCode: "71672",
  city: "Marbach am Neckar",
  country: "DE",
  countryName: "Deutschland",
  // Used for the Google Maps embed + directions link.
  mapsQuery: "Paydos Lounge, Grabenstraße 2, 71672 Marbach am Neckar",
  // Approximate geo for structured data (Marbach am Neckar centre).
  geo: { lat: 48.9405, lng: 9.2606 },
} as const;

export type DayHours = {
  /** schema.org day name */
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /** German short label */
  label: string;
  /** null = closed */
  opens: string | null;
  closes: string | null;
};

// Ordered Mon→Sun for display.
export const OPENING_HOURS: DayHours[] = [
  { day: "Monday", label: "Montag", opens: null, closes: null },
  { day: "Tuesday", label: "Dienstag", opens: "18:00", closes: "00:00" },
  { day: "Wednesday", label: "Mittwoch", opens: "18:00", closes: "00:00" },
  { day: "Thursday", label: "Donnerstag", opens: "18:00", closes: "00:00" },
  { day: "Friday", label: "Freitag", opens: "18:00", closes: "03:00" },
  { day: "Saturday", label: "Samstag", opens: "15:00", closes: "03:00" },
  { day: "Sunday", label: "Sonntag", opens: "15:00", closes: "00:00" },
];

export const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/karte", label: "Karte" },
  { href: "/oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
