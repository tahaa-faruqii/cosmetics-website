// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// Do NOT modify component files — only edit this config.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Your Brand",
  logoAccent: ".",
  navLinks: [
    { label: "Products", href: "#products" },
    { label: "Palette", href: "#palette" },
    { label: "Philosophy", href: "#finale" },
  ],
  ctaText: "Shop Now",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "Bold",
  titleLine2: "Beauty ",
  subtitle: "Explore our collection and find exactly what you're looking for.",
  ctaText: "Explore Now",
  ctaHref: "/products",
  backgroundImage: "images/hero.jpg",
  gridRows: 6,
  gridCols: 8,
  pinkCells: [],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "Feature product",
  headingMain: "UNLEASH YOUR",
  headingAccent: "INNER FIRE",
  productName: "Velvet Matte Lipstick",
  description:
    "Experience intense color payoff with our long-lasting, hydrating formula. Enriched with vitamin E and jojoba oil for all-day comfort without drying.",
  price: "$29",
  features: [
    { value: "12H", label: "Long lasting" },
    { value: "100%", label: "Cruelty free" },
    { value: "Vegan", label: "Clean beauty" },
  ],
  colorSwatches: ["#ff73c3", "#c41e3a", "#8B0000", "#ffb6c1"],
  colorSwatchesLabel: "Available Shades",
  ctaText: "Add To Cart",
  productImage: "images/product.png",
  productImageAlt: "Color Collection",
  decorativeText: "Buy Now",
};

// ----------------------------------------------------------------------------
// Color Palette Section
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "color Collection",
  headingMain: "Find Your ",
  headingAccent: "Perfect Shade",
  colors: [
    {
      name: "Playful Pink",
      nameSecondary: "Bubblegum",
      color: "#ff73c3",
      description: "Sweet and flirty for everyday wear",
    },
    {
      name: "Deep Red",
      nameSecondary: "Crimson",
      color: "#c21833",
      description: "Classic elegance for any occasion",
    },
    {
      name: "Rich Plum",
      nameSecondary: "Berry",
      color: "#6a0d45",
      description: "Bold and mysterious evening look",
    },
    {
      name: "Sunset Glow",
      nameSecondary: "Coral",
      color: "#ff6f61",
      description: "Warm tones for summer vibes",
    },
    {
      name: "Dusty Pink",
      nameSecondary: "Rose",
      color: "#d8a7b1",
      description: "Soft romance for subtle beauty",
    },
    {
      name: "True Red",
      nameSecondary: "Ruby",
      color: "#e0115f",
      description: "Timeless confidence in every swipe",
    },
    {
      name: "Velvet Wine",
      nameSecondary: "Burgundy",
      color: "#800020",
      description: "Deep luxurious shade for bold glamour",
    },
    {
      name: "Mocha Nude",
      nameSecondary: "Latte",
      color: "#a47148",
      description: "Neutral elegance for a natural everyday look",
    },
  ],
  bottomText: "Click any shade to explore the full collection",
  decorativeText: "",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "Brand Philosophy",
  headingMain: "Beautiful without",
  headingAccent: "compromise",
  tagline:
    "We believe makeup should empower, not mask. Every product is crafted with clean ingredients, sustainable practices, and a commitment to celebrating your unique beauty. ",
  features: ["Cruelty-free", "Vegan", "Sustainable"],
  ctaText: "Join the movement",
  ctaHref: "#hero",
  image: "images/brand-portrait.jpg",
  imageAlt: "",
  decorativeText: "",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "Your Brand",
  logoAccent: ".",
  brandDescription:
    "Bold beauty for the fearless. Clean cosmetics that celebrate your unique expression.",
  socialLinks: [
    {
      platform: "instagram",
      href: "https://instagram.com/yourbrand",
      label: "Instagram",
    },
    {
      platform: "twitter",
      href: "https://twitter.com/yourbrand",
      label: "Twitter",
    },
    {
      platform: "youtube",
      href: "https://youtube.com/yourbrand",
      label: "YouTube",
    },
  ],
  linkSections: [
    {
      title: "Products",
      links: [
        "All Products",
        "New Arrivals",
        "Best Sellers",
        "Gift Sets",
        "Accessories",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "Shipping & Returns",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Sustainability"],
    },
  ],
  contact: {
    address: "123 Beauty Lane, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "xyz@gmail.com",
  },
  legalLinks: [],
  copyrightText: "DARE Beauty. All rights reserved.",
  decorativeText: "",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "",
  description: "",
  language: "",
};
