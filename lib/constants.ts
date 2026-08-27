// Productie-URL van de site (gebruikt voor canonical, sitemap, Open Graph en schema)
export const SITE_URL = "https://www.drfa.nl";

// Contact Information
export const CONTACT = {
  companyName: "DRFA",
  email: "info@drfa.nl",
  phone: "+31 6 40772472",
  phoneDisplay: "06-40772472",
  address: "Mina Krusemanstraat 34",
  postalCity: "3207 DE Spijkenisse",
  kvk: "88931102",
  btw: "NL004095208B97",
  whatsapp: "31640772472",
} as const;

// Social Links
export const SOCIALS = {
  instagram: "https://instagram.com/admindrfa",
  moneybirdExperts: "https://www.moneybird.nl/experts-label/",
  whatsappUrl: (message: string) =>
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,
} as const;

// Navigatie, pakketten en overige teksten staan in lib/translations.ts (NL + EN)

// Review type
export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  status: "pending" | "approved";
  photo?: string;
}
