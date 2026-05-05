// ============================================================
// VELVORA - Products Data File
// Last Updated: 2025
// ============================================================
// HOW TO ADD A NEW PRODUCT:
// 1. Copy any product object below
// 2. Paste it after the last product in that category
// 3. Fill in all fields with real Amazon product details
// 4. Set featured: true to show on homepage
// ============================================================

const PRODUCTS = [

  // ═══════════════════════════════════════════════════════════
  // WOMEN'S FASHION
  // Subcategories: Rings, Tops, Bottoms, Skirts, Dresses,
  //                Knitwear, Accessories, Shoes, Bags
  // ═══════════════════════════════════════════════════════════

  {
    id: "silver-aquamarine-knuckle-ring",
    name: "YL Celtic Knot Ring — 925 Sterling Silver with Blue Aquamarine",
    category: "womens-fashion",
    subcategory: "Rings",
    price: 65.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 721,
    image: "images/ring-aquamarine.jpg",
    description: "This stunning YL Celtic Knot Ring is crafted from 925 sterling silver with rhodium plating for lasting brilliance. Featuring a round-cut created aquamarine birthstone, it symbolizes infinite vitality and eternal connection. The intricate twisted knot infinity design makes it a true statement piece for any occasion. Available in sizes 5 through 10 and comes beautifully packaged in a YL jewelry box — perfect for gifting. Hypoallergenic and safe for daily wear.",
    shortDesc: "925 Sterling Silver Celtic knot infinity ring with blue aquamarine birthstone",
    affiliateLink: "https://amzn.to/4cQA7OP",
    tags: ["knuckle ring", "celtic ring", "silver ring", "aquamarine", "birthstone ring", "infinity ring", "statement ring", "925 sterling silver", "gift for her", "jewelry"],
    featured: true,
    badge: "Trending 🔥",
    metaTitle: "YL Celtic Knot Sterling Silver Ring with Aquamarine | VELVORA",
    metaDesc: "Shop the YL Celtic Knot 925 Sterling Silver Ring with blue aquamarine at VELVORA. Statement jewelry for women available on Amazon with FREE returns."
  },

  // ─────────────────────────────────────────────────────────
  // ADD MORE WOMEN'S FASHION PRODUCTS BELOW
  // ─────────────────────────────────────────────────────────


  // ═══════════════════════════════════════════════════════════
  // MEN'S FASHION
  // Subcategories: Shirts, Blazers, Trousers, Casual,
  //                Accessories, Shoes, Jackets, Suits
  // ═══════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────
  // ADD MEN'S FASHION PRODUCTS BELOW
  // ─────────────────────────────────────────────────────────


  // ═══════════════════════════════════════════════════════════
  // BEAUTY & SKINCARE
  // Subcategories: Serums, Moisturizers, Makeup, Cleansers,
  //                Sunscreen, Lip Care, Eye Care, Hair Care
  // ═══════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────
  // ADD BEAUTY PRODUCTS BELOW
  // ─────────────────────────────────────────────────────────

];

// ============================================================
// SUBCATEGORY DEFINITIONS
// ============================================================

const SUBCATEGORIES = {
  "womens-fashion": [
    "Rings",
    "Tops",
    "Bottoms",
    "Skirts",
    "Dresses",
    "Knitwear",
    "Accessories",
    "Shoes",
    "Bags"
  ],
  "mens-fashion": [
    "Shirts",
    "Blazers",
    "Trousers",
    "Casual",
    "Accessories",
    "Shoes",
    "Jackets",
    "Suits"
  ],
  "beauty-skincare": [
    "Serums",
    "Moisturizers",
    "Makeup",
    "Cleansers",
    "Sunscreen",
    "Lip Care",
    "Eye Care",
    "Hair Care"
  ]
};

// ============================================================
// HELPER FUNCTIONS — DO NOT EDIT
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
  return PRODUCTS.filter(p => p.featured)
    .sort((a, b) => b.reviews - a.reviews);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getRelatedProducts(id, limit = 3) {
  const product = getProductById(id);
  if (!product) return [];
  return PRODUCTS
    .filter(p => p.category === product.category && p.id !== id)
    .slice(0, limit);
}

function getSubcategories(cat) {
  return SUBCATEGORIES[cat] || [];
}
