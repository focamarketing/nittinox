import siteRaw from "@/content/site.json";

export type TrustIcon = "truck" | "globe" | "card" | "chat";

export interface WhatsappConfig {
  phone: string;
  displayPhone: string;
}

export interface Hero {
  eyebrow: string;
  headline1: string;
  headline2: string;
  headlineAccent: string;
  copy: string;
  ctaPrimary: string;
  ctaSecondary: string;
  waMessage: string;
}

export interface TrustItem {
  title: string;
  subtitle: string;
  icon: TrustIcon;
}

export interface Category {
  slug: string;
  name: string;
  subtitle: string;
  waMessage: string;
}

export interface BestSeller {
  category: string;
  name: string;
  price: string;
  priceFrom: string | null;
  waMessage: string;
}

export interface InstitutionalStat {
  value: string;
  label: string;
}

export interface Testimonial {
  eyebrow: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export interface Institutional {
  eyebrow: string;
  headline1: string;
  headline2: string;
  copy: string;
  stats: InstitutionalStat[];
  ctaLabel: string;
  ctaWaMessage: string;
  testimonial: Testimonial;
}

export interface Launch {
  category: string;
  name: string;
  price: string;
  waMessage: string;
}

export interface CtaBanner {
  eyebrow: string;
  headline1: string;
  headline2: string;
  copy: string;
  ctaLabel: string;
  footnote: string;
  waMessage: string;
}

export interface FooterContact {
  whatsappLabel: string;
  phoneLabel: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Footer {
  tagline: string;
  payments: string[];
  shipping: string[];
  categoryLinks: string[];
  supportLinks: FooterLink[];
  contact: FooterContact;
  social: FooterLink[];
  legal: string;
}

export interface SiteContent {
  whatsapp: WhatsappConfig;
  hero: Hero;
  trustItems: TrustItem[];
  categories: Category[];
  bestSellers: BestSeller[];
  institutional: Institutional;
  launches: Launch[];
  launchesAllWaMessage: string;
  ctaBanner: CtaBanner;
  footer: Footer;
}

export const site = siteRaw as SiteContent;
