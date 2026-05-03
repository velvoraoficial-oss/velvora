// ============================================================
// VELVORA - Products Data File
// To add a new product: copy any product object and edit fields
// To update price or link: find the product and edit the fields
// ============================================================

const PRODUCTS = [

  // ─── WOMEN'S FASHION ────────────────────────────────────────
  {
    id: "womens-silk-blouse",
    name: "Luxe Silk Wrap Blouse",
    category: "womens-fashion",
    subcategory: "Tops",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b1a25?w=600&q=80",
    description: "Elevate your everyday look with this sumptuously soft silk-feel wrap blouse. Featuring a flattering V-neckline and adjustable tie waist, it transitions effortlessly from boardroom to brunch. Available in multiple colorways.",
    shortDesc: "Elegant silk-feel wrap blouse with flattering V-neckline",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["blouse", "silk", "wrap", "office", "elegant"],
    featured: true,
    badge: "Bestseller",
    metaTitle: "Luxe Silk Wrap Blouse - Premium Women's Fashion | VELVORA",
    metaDesc: "Shop the Luxe Silk Wrap Blouse at VELVORA. Flattering V-neckline, adjustable waist. Perfect for office to evening. Free shipping on orders over $50."
  },
  {
    id: "womens-wide-leg-trousers",
    name: "High-Waist Wide Leg Trousers",
    category: "womens-fashion",
    subcategory: "Bottoms",
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    description: "These tailored wide-leg trousers command attention in every room. Cut from a premium stretch-crepe fabric, they offer a fluid silhouette with maximum comfort. The high waist elongates the figure beautifully.",
    shortDesc: "Tailored wide-leg trousers in premium stretch-crepe",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["trousers", "wide leg", "high waist", "tailored", "office"],
    featured: true,
    badge: "New Arrival",
    metaTitle: "High-Waist Wide Leg Trousers - Women's Fashion | VELVORA",
    metaDesc: "Premium wide-leg trousers at VELVORA. Tailored stretch-crepe fabric for all-day comfort and elegance. Shop now with fast US shipping."
  },
  {
    id: "womens-cashmere-cardigan",
    name: "Oversized Cashmere Blend Cardigan",
    category: "womens-fashion",
    subcategory: "Knitwear",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviews: 487,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    description: "Wrap yourself in pure luxury with this oversized cashmere-blend cardigan. The cozy dropped-shoulder silhouette pairs beautifully with everything from jeans to tailored trousers. An investment piece you'll reach for season after season.",
    shortDesc: "Cozy oversized cashmere-blend with dropped shoulders",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["cardigan", "cashmere", "knitwear", "cozy", "winter"],
    featured: true,
    badge: "Top Rated",
    metaTitle: "Oversized Cashmere Blend Cardigan - Luxury Knitwear | VELVORA",
    metaDesc: "The ultimate luxury cardigan at VELVORA. Cashmere-blend oversized fit. Perfect for every season. Shop women's premium knitwear today."
  },

  // ─── MEN'S FASHION ──────────────────────────────────────────
  {
    id: "mens-slim-blazer",
    name: "Italian Slim-Fit Wool Blazer",
    category: "mens-fashion",
    subcategory: "Blazers",
    price: 149.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviews: 196,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    description: "Command every room in this impeccably tailored Italian wool blazer. The slim silhouette features premium horn buttons, a chest welt pocket, and a half-canvas construction for a shape that holds all day. Dress it up or down effortlessly.",
    shortDesc: "Impeccably tailored Italian wool slim-fit blazer",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["blazer", "wool", "slim fit", "Italian", "formal"],
    featured: true,
    badge: "Premium Pick",
    metaTitle: "Italian Slim-Fit Wool Blazer - Men's Luxury Fashion | VELVORA",
    metaDesc: "Shop the Italian Slim-Fit Wool Blazer at VELVORA. Premium half-canvas construction, horn buttons. Elevate your wardrobe today."
  },
  {
    id: "mens-chino-trousers",
    name: "Stretch Performance Chinos",
    category: "mens-fashion",
    subcategory: "Trousers",
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 524,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    description: "The modern man's essential: these stretch performance chinos move with you through every demand of your day. Wrinkle-resistant fabric keeps you looking sharp from morning meetings to evening events. Available in 8 classic colorways.",
    shortDesc: "Wrinkle-resistant stretch chinos for all-day comfort",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["chinos", "stretch", "performance", "casual", "office"],
    featured: true,
    badge: "Bestseller",
    metaTitle: "Stretch Performance Chinos - Men's Fashion | VELVORA",
    metaDesc: "Premium stretch chinos at VELVORA. Wrinkle-resistant, all-day comfort. Available in 8 colors. Shop men's fashion with free US shipping."
  },
  {
    id: "mens-oxford-shirt",
    name: "Classic Oxford Button-Down Shirt",
    category: "mens-fashion",
    subcategory: "Shirts",
    price: 54.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 731,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    description: "A true wardrobe cornerstone. This classic Oxford shirt is crafted from a fine-weave cotton that softens with every wash while maintaining its crisp structure. The button-down collar sits perfectly whether worn open or with a tie.",
    shortDesc: "Fine-weave cotton Oxford with button-down collar",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["shirt", "oxford", "cotton", "classic", "button-down"],
    featured: false,
    badge: "Classic",
    metaTitle: "Classic Oxford Button-Down Shirt - Men's Essentials | VELVORA",
    metaDesc: "The perfect Oxford shirt at VELVORA. Fine-weave cotton, gets better with every wash. Shop men's classic shirts today."
  },

  // ─── BEAUTY & SKINCARE ──────────────────────────────────────
  {
    id: "beauty-vitamin-c-serum",
    name: "Radiance Vitamin C Brightening Serum",
    category: "beauty-skincare",
    subcategory: "Serums",
    price: 42.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 1243,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38e7b?w=600&q=80",
    description: "Transform your complexion with this dermatologist-approved 20% Vitamin C serum. Formulated with hyaluronic acid and ferulic acid for enhanced stability, it visibly reduces dark spots, fine lines, and uneven skin tone within 4 weeks.",
    shortDesc: "20% Vitamin C with hyaluronic acid for radiant skin",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["vitamin c", "serum", "brightening", "anti-aging", "skincare"],
    featured: true,
    badge: "Editor's Pick",
    metaTitle: "Radiance Vitamin C Brightening Serum - Skincare | VELVORA",
    metaDesc: "Shop the #1 rated Vitamin C serum at VELVORA. 20% concentration with hyaluronic acid. See visible results in 4 weeks. Free shipping over $50."
  },
  {
    id: "beauty-retinol-moisturizer",
    name: "Advanced Retinol Night Cream",
    category: "beauty-skincare",
    subcategory: "Moisturizers",
    price: 38.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    description: "Wake up to visibly younger-looking skin. This encapsulated retinol night cream delivers the age-defying benefits of retinol with minimal irritation. Niacinamide and peptides work synergistically to firm, smooth, and hydrate overnight.",
    shortDesc: "Encapsulated retinol with niacinamide for anti-aging",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["retinol", "night cream", "anti-aging", "moisturizer", "firming"],
    featured: true,
    badge: "Bestseller",
    metaTitle: "Advanced Retinol Night Cream - Anti-Aging Skincare | VELVORA",
    metaDesc: "The advanced retinol night cream at VELVORA. Encapsulated retinol + niacinamide + peptides. Wake up to younger-looking skin. Shop now."
  },
  {
    id: "beauty-rose-gold-palette",
    name: "Rose Gold Glow Eyeshadow Palette",
    category: "beauty-skincare",
    subcategory: "Makeup",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 2105,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    description: "12 stunning rose gold, champagne, and bronze shades ranging from ultra-matte to blinding metallic. Highly pigmented, long-wearing formula that blends like a dream. Perfect for everyday glam to a full-on editorial look.",
    shortDesc: "12 rose gold & bronze shades, highly pigmented formula",
    affiliateLink: "https://www.amazon.com/dp/PLACEHOLDER?tag=velvora-20",
    tags: ["eyeshadow", "palette", "rose gold", "makeup", "glam"],
    featured: true,
    badge: "Fan Favorite",
    metaTitle: "Rose Gold Glow Eyeshadow Palette - 12 Shades | VELVORA",
    metaDesc: "Shop the Rose Gold Glow Palette at VELVORA. 12 stunning metallic and matte shades. Highly pigmented, long-wearing. Your next makeup obsession."
  }

];

// Helper: get products by category
function getProductsByCategory(cat) {
  return PRODUCTS.filter(p => p.category === cat);
}

// Helper: get featured products
function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

// Helper: get product by id
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Helper: get related products (same category, different id)
function getRelatedProducts(id, limit = 3) {
  const product = getProductById(id);
  if (!product) return [];
  return PRODUCTS.filter(p => p.category === product.category && p.id !== id).slice(0, limit);
}
