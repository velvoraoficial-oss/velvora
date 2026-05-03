// ============================================================
// VELVORA - Products Data File
// ============================================================
// HOW TO ADD A NEW PRODUCT:
// 1. Copy any product object below
// 2. Paste it after the last product in that category
// 3. Change the id, name, price, description, affiliateLink
// 4. Save and upload to GitHub
//
// HOW TO GET YOUR AMAZON AFFILIATE LINK:
// 1. Find the product on Amazon
// 2. Copy the product URL
// 3. Add ?tag=YOUR-ASSOCIATE-TAG at the end
// Example: https://www.amazon.com/dp/B08XYZ123?tag=velvora-20
// ============================================================

const PRODUCTS = [

  // ─────────────────────────────────────────────────────────
  // WOMEN'S FASHION
  // Copy this block to add more women's products
  // ─────────────────────────────────────────────────────────
  {
    id: "womens-sample-1",
    name: "Your Product Name Here",
    category: "womens-fashion",
    subcategory: "Tops",           // Options: Tops, Bottoms, Knitwear, Dresses, Accessories
    price: 49.99,                  // Current price
    originalPrice: 69.99,          // Original price (shows discount) — remove line if no discount
    rating: 4.8,                   // Rating out of 5
    reviews: 234,                  // Number of reviews
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b1a25?w=600&q=80",
    // ↑ Replace with your own image URL or upload to images/ folder and use: "images/product1.jpg"
    description: "Write a detailed description of this product here. Tell customers why they should buy it, what makes it special, and how it fits.",
    shortDesc: "Write a short one-line description here",
    affiliateLink: "https://www.amazon.com/dp/REPLACE-WITH-REAL-PRODUCT-ID?tag=REPLACE-WITH-YOUR-TAG",
    // ↑ IMPORTANT: Replace with your real Amazon affiliate link after you join Amazon Associates
    tags: ["women", "fashion", "top"],
    featured: true,
    badge: "Bestseller",           // Options: Bestseller, New Arrival, Top Rated, Sale, Editor's Pick
    metaTitle: "Your Product Name - Women's Fashion | VELVORA",
    metaDesc: "Shop Your Product Name at VELVORA. Fast US shipping on Amazon."
  },

  // ─────────────────────────────────────────────────────────
  // MEN'S FASHION
  // Copy this block to add more men's products
  // ─────────────────────────────────────────────────────────
  {
    id: "mens-sample-1",
    name: "Your Product Name Here",
    category: "mens-fashion",
    subcategory: "Blazers",        // Options: Blazers, Shirts, Trousers, Casual, Accessories
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    // ↑ Replace with your own image URL
    description: "Write a detailed description of this product here. Tell customers why they should buy it, what makes it special, and how it fits.",
    shortDesc: "Write a short one-line description here",
    affiliateLink: "https://www.amazon.com/dp/REPLACE-WITH-REAL-PRODUCT-ID?tag=REPLACE-WITH-YOUR-TAG",
    tags: ["men", "fashion", "blazer"],
    featured: true,
    badge: "Premium Pick",
    metaTitle: "Your Product Name - Men's Fashion | VELVORA",
    metaDesc: "Shop Your Product Name at VELVORA. Fast US shipping on Amazon."
  },

  // ─────────────────────────────────────────────────────────
  // BEAUTY & SKINCARE
  // Copy this block to add more beauty products
  // ─────────────────────────────────────────────────────────
  {
    id: "beauty-sample-1",
    name: "Your Product Name Here",
    category: "beauty-skincare",
    subcategory: "Serums",         // Options: Serums, Moisturizers, Makeup, Cleansers, Sunscreen
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviews: 1205,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38e7b?w=600&q=80",
    // ↑ Replace with your own image URL
    description: "Write a detailed description of this product here. Tell customers about the ingredients, benefits, and results they can expect.",
    shortDesc: "Write a short one-line description here",
    affiliateLink: "https://www.amazon.com/dp/REPLACE-WITH-REAL-PRODUCT-ID?tag=REPLACE-WITH-YOUR-TAG",
    tags: ["beauty", "skincare", "serum"],
    featured: true,
    badge: "Editor's Pick",
    metaTitle: "Your Product Name - Beauty & Skincare | VELVORA",
    metaDesc: "Shop Your Product Name at VELVORA. Fast US shipping on Amazon."
  }

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
