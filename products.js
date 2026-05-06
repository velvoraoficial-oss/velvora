// ============================================================
// VELVORA - Products Data File
// ============================================================
// MULTI-COLOR SUPPORT:
// Each product can have multiple color variants
// Each color has its OWN affiliate link and pin link
// ============================================================

const PRODUCTS = [

  // ═══════════════════════════════════════════════════════════
  // WOMEN'S FASHION
  // ═══════════════════════════════════════════════════════════

  {
    id: "yl-celtic-knot-ring",
    name: "YL Celtic Knot Ring — 925 Sterling Silver Birthstone",
    category: "womens-fashion",
    subcategory: "Rings",
    price: 65.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 721,
    // Default image (first color)
    image: "images/ring-aquamarine.jpg",
    description: "This stunning YL Celtic Knot Ring is crafted from 925 sterling silver with rhodium plating for lasting brilliance. Features a round-cut created birthstone woven in an elegant braided infinity design. Symbolizes infinite vitality and eternal connection. Available in 12 birthstone colors and sizes 5-10. Comes in a beautiful YL jewelry box — perfect for gifting. Hypoallergenic and safe for daily wear.",
    shortDesc: "925 Sterling Silver Celtic knot infinity ring — available in 12 birthstone colors",
    // Default affiliate link (first color)
    affiliateLink: "https://amzn.to/4cQA7OP",
    // ─────────────────────────────────────────────────────
    // COLOR VARIANTS
    // Each color has: name, image, affiliateLink, pinLink
    // ─────────────────────────────────────────────────────
    colors: [
      {
        name: "Aquamarine (Mar)",
        hex: "#7FCDEE",
        image: "images/ring-aquamarine.jpg",
        affiliateLink: "https://amzn.to/4cQA7OP",
        pinLink: "https://pinterest.com/pin/YOUR-AQUAMARINE-PIN-ID"
      },
      {
        name: "Garnet (Jan)",
        hex: "#8B1A1A",
        image: "images/ring-garnet.jpg",
        affiliateLink: "https://amzn.to/GARNET-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-GARNET-PIN-ID"
      },
      {
        name: "Amethyst (Feb)",
        hex: "#9B59B6",
        image: "images/ring-amethyst.jpg",
        affiliateLink: "https://amzn.to/AMETHYST-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-AMETHYST-PIN-ID"
      },
      {
        name: "Zirconia (Apr)",
        hex: "#E8E8E8",
        image: "images/ring-zirconia.jpg",
        affiliateLink: "https://amzn.to/ZIRCONIA-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-ZIRCONIA-PIN-ID"
      },
      {
        name: "Emerald (May)",
        hex: "#2ECC71",
        image: "images/ring-emerald.jpg",
        affiliateLink: "https://amzn.to/EMERALD-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-EMERALD-PIN-ID"
      },
      {
        name: "Ruby (Jul)",
        hex: "#C0392B",
        image: "images/ring-ruby.jpg",
        affiliateLink: "https://amzn.to/RUBY-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-RUBY-PIN-ID"
      },
      {
        name: "Sapphire (Sep)",
        hex: "#2980B9",
        image: "images/ring-sapphire.jpg",
        affiliateLink: "https://amzn.to/SAPPHIRE-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-SAPPHIRE-PIN-ID"
      },
      {
        name: "Pink Tourmaline (Oct)",
        hex: "#FF69B4",
        image: "images/ring-pink.jpg",
        affiliateLink: "https://amzn.to/PINK-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-PINK-PIN-ID"
      },
      {
        name: "Tanzanite (Dec)",
        hex: "#4B0082",
        image: "images/ring-tanzanite.jpg",
        affiliateLink: "https://amzn.to/TANZANITE-LINK",
        pinLink: "https://pinterest.com/pin/YOUR-TANZANITE-PIN-ID"
      }
    ],
    tags: ["knuckle ring", "celtic ring", "silver ring", "birthstone ring", "infinity ring", "statement ring", "925 sterling silver", "gift for her"],
    featured: true,
    badge: "Trending 🔥",
    metaTitle: "YL Celtic Knot Sterling Silver Birthstone Ring | VELVORA",
    metaDesc: "Shop the YL Celtic Knot 925 Sterling Silver Ring in 12 birthstone colors at VELVORA. Available on Amazon with FREE returns."
  }

  // ─────────────────────────────────────────────────────────
  // ADD MORE WOMEN'S FASHION PRODUCTS BELOW
  // ─────────────────────────────────────────────────────────


  // ═══════════════════════════════════════════════════════════
  // MEN'S FASHION
  // ═══════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────
  // ADD MEN'S FASHION PRODUCTS BELOW
  // ─────────────────────────────────────────────────────────


  // ═══════════════════════════════════════════════════════════
  // BEAUTY & SKINCARE
  // ═══════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────
  // ADD BEAUTY PRODUCTS BELOW
  // ─────────────────────────────────────────────────────────

];

// ============================================================
// SUBCATEGORY DEFINITIONS
// ============================================================
const SUBCATEGORIES = {
  "womens-fashion": ["Rings","Tops","Bottoms","Skirts","Dresses","Knitwear","Accessories","Shoes","Bags"],
  "mens-fashion":   ["Shirts","Blazers","Trousers","Casual","Accessories","Shoes","Jackets","Suits"],
  "beauty-skincare":["Serums","Moisturizers","Makeup","Cleansers","Sunscreen","Lip Care","Eye Care","Hair Care"]
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================
function getProductsByCategory(cat) {
  return PRODUCTS.filter(p => p.category === cat);
}
function getProductsBySubcategory(cat, subcat) {
  return PRODUCTS.filter(p => p.category === cat && p.subcategory === subcat);
}
function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}
function getBestSellers() {
  return PRODUCTS.filter(p => p.featured).sort((a, b) => b.reviews - a.reviews);
}
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
function getRelatedProducts(id, limit = 3) {
  const product = getProductById(id);
  if (!product) return [];
  return PRODUCTS.filter(p => p.category === product.category && p.id !== id).slice(0, limit);
}
function getSubcategories(cat) {
  return SUBCATEGORIES[cat] || [];
}
