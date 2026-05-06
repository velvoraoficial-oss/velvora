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
  // ADD MORE WOMEN'S FASHION PRODUCTS BELOW{
    id: "yl-celtic-knot-ring",
    name: "YL Celtic Knot Ring — 925 Sterling Silver Birthstone",
    category: "womens-fashion",
    subcategory: "Rings",
    price: 65.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 721,
    image: "images/ring-citrine-nov.jpg",
    description: "This stunning YL Celtic Knot Ring is crafted from 925 sterling silver with rhodium plating for lasting brilliance. Features a round-cut created birthstone woven in an elegant braided infinity design. Symbolizes infinite vitality and eternal connection. Available in 12 birthstone colors and sizes 5-10. Comes in a beautiful YL jewelry box — perfect for gifting. Hypoallergenic and safe for daily wear.",
    shortDesc: "925 Sterling Silver Celtic knot infinity ring — available in 12 birthstone colors",
    affiliateLink: "https://amzn.to/48JBkFi",
    colors: [
      {
        name: "Citrine (Nov)",
        hex: "#F4A460",
        image: "images/ring-citrine-nov.jpg",
        affiliateLink: "https://amzn.to/48JBkFi",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Zirconia Gold (Apr)",
        hex: "#FFD700",
        image: "images/ring-zirconia-gold.jpg",
        affiliateLink: "https://amzn.to/4tiHVhc",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Amethyst (Feb)",
        hex: "#9B59B6",
        image: "images/ring-amethyst-feb.jpg",
        affiliateLink: "https://amzn.to/3R3H0DV",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Zirconia Rose Gold (Apr)",
        hex: "#E0A899",
        image: "images/ring-zirconia-rose.jpg",
        affiliateLink: "https://amzn.to/42hO2Yg",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Emerald (May)",
        hex: "#50C878",
        image: "images/ring-emerald-may.jpg",
        affiliateLink: "https://amzn.to/4tN7IPI",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Zirconia Silver (Apr)",
        hex: "#E8E8E8",
        image: "images/ring-zirconia-apr.jpg",
        affiliateLink: "https://amzn.to/3QS68xx",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Alexandrite (Jun)",
        hex: "#7851A9",
        image: "images/ring-alexandrite-jun.jpg",
        affiliateLink: "https://amzn.to/4epBBkm",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Ruby (Jul)",
        hex: "#E0115F",
        image: "images/ring-ruby-jul.jpg",
        affiliateLink: "https://amzn.to/4d6cH6P",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Topaz (Nov)",
        hex: "#FFBF00",
        image: "images/ring-topaz-nov.jpg",
        affiliateLink: "https://amzn.to/3PruaPr",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Peridot (Aug)",
        hex: "#E6E200",
        image: "images/ring-peridot-aug.jpg",
        affiliateLink: "https://amzn.to/4nicORM",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Tanzanite (Dec)",
        hex: "#4B0082",
        image: "images/ring-tanzanite-dec.jpg",
        affiliateLink: "https://amzn.to/4dcLAY3",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Sapphire (Sep)",
        hex: "#0F52BA",
        image: "images/ring-sapphire-sep.jpg",
        affiliateLink: "https://amzn.to/4eZm8rq",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      },
      {
        name: "Pink Tourmaline (Oct)",
        hex: "#FF69B4",
        image: "images/ring-pink-oct.jpg",
        affiliateLink: "https://amzn.to/42PANxY",
        pinLink: "https://velvoraoficial-oss.github.io/velvora/product.html?id=yl-celtic-knot-ring"
      }
    ],
    tags: ["knuckle ring", "celtic ring", "silver ring", "birthstone ring", "infinity ring", "statement ring", "925 sterling silver", "gift for her"],
    featured: true,
    badge: "Trending 🔥",
    metaTitle: "YL Celtic Knot Sterling Silver Birthstone Ring | VELVORA",
    metaDesc: "Shop the YL Celtic Knot 925 Sterling Silver Ring in 12 birthstone colors at VELVORA. Available on Amazon with FREE returns."
  },
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
