import { ADDRESS, CONTACT, OPENING_HOURS, SITE } from "./site";
import { MENU } from "./menu";

/** Map our hours into schema.org openingHoursSpecification entries. */
function openingHoursSpec() {
  return OPENING_HOURS.filter((d) => d.opens && d.closes).map((d) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${d.day}`,
    opens: d.opens,
    closes: d.closes,
  }));
}

/** Primary LocalBusiness (BarOrPub) entity for the whole site. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["BarOrPub", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phoneHref,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    priceRange: "€€",
    servesCuisine: ["Shisha", "Mocktails", "Snacks", "Kaffee"],
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.postalCode,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.geo.lat,
      longitude: ADDRESS.geo.lng,
    },
    openingHoursSpecification: openingHoursSpec(),
    sameAs: [CONTACT.instagramUrl],
  };
}

/** Parse "16,00 €" -> { price: "16.00", currency: "EUR" } */
function parsePrice(p: string) {
  const num = p.replace(/[^\d,]/g, "").replace(",", ".");
  return num;
}

/** schema.org Menu for the menu page. */
export function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `Karte – ${SITE.name}`,
    inLanguage: "de-DE",
    hasMenuSection: MENU.map((cat) => ({
      "@type": "MenuSection",
      name: cat.title,
      description: cat.blurb,
      hasMenuSection: cat.groups.map((g) => ({
        "@type": "MenuSection",
        name: g.title,
        hasMenuItem: g.items.map((it) => ({
          "@type": "MenuItem",
          name: it.name,
          ...(it.desc ? { description: it.desc } : {}),
          offers: {
            "@type": "Offer",
            price: parsePrice(it.price),
            priceCurrency: "EUR",
          },
        })),
      })),
    })),
  };
}

/** WebSite entity (helps with sitelinks / name in search). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "de-DE",
    publisher: { "@id": `${SITE.url}/#business` },
  };
}
