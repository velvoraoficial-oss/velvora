// ============================================================
// VELVORA - Products Data File
// ============================================================
// HOW TO ADD A NEW PRODUCT:
// 1. Copy any product object below
// 2. Paste it after the last product
// 3. Change all the fields
// 4. Save and upload to GitHub
// ============================================================

const PRODUCTS = [

  // ─────────────────────────────────────────────────────────
  // WOMEN'S FASHION — JEWELRY
  // ─────────────────────────────────────────────────────────
  {
    id: "silver-aquamarine-knuckle-ring",
    name: "Sterling Silver Braided Knuckle Ring with Blue Aquamarine",
    category: "womens-fashion",
    subcategory: "Accessories",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 5240,
    image: "https://velvoraoficial-oss.github.io/velvora/images/ring-aquamarine.jpg",
    description: "This stunning sterling silver braided infinity knuckle ring features brilliant blue aquamarine stones woven in an elegant braided design. Crafted from 925 sterling silver, it delivers luxury looks at an affordable price. The intricate infinity braid symbolizes eternal love and connection. Perfect for stacking, gifting or treating yourself. Available on Amazon with fast FREE Prime shipping.",
    shortDesc: "925 Sterling Silver braided knuckle ring with blue aquamarine stones",
    affiliateLink: "https://amzn.to/4cQA7OP",
    tags: ["knuckle ring", "silver ring", "aquamarine", "braided ring", "infinity ring", "stacking ring", "jewelry", "amazon finds", "gift for her"],
    featured: true,
    badge: "Trending 🔥",
    metaTitle: "Sterling Silver Braided Knuckle Ring — Blue Aquamarine | VELVORA",
    metaDesc: "Shop this stunning 925 sterling silver braided knuckle ring with blue aquamarine stones at VELVORA. Under $30 on Amazon with fast FREE shipping."
  }

  // ─────────────────────────────────────────────────────────
  // ADD MORE PRODUCTS BELOW THIS LINE
  // Copy the block above and paste here
  // ─────────────────────────────────────────────────────────

];

// ============================================================
// DO NOT EDIT BELOW THIS LINE
// ============================================================

function getProductsByCategory(cat) {
  return PRODUCTS.filter(p => p.category === cat);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getRelatedProducts(id, limit = 3) {
  const product = getProductById(id);
  if (!product) return [];
  return PRODUCTS.filter(p => p.category === product.category && p.id !== id).slice(0, limit);
}
