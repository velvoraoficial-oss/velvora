// ============================================================
// VELVORA - Blog Posts Data File
// To add a new post: copy any post object and edit the fields
// ============================================================

const POSTS = [
  {
    id: "timeless-wardrobe-essentials",
    title: "10 Timeless Wardrobe Essentials Every Woman Needs in 2025",
    category: "Women's Fashion",
    excerpt: "Building a capsule wardrobe doesn't have to be complicated. These ten investment pieces will elevate every outfit and stand the test of time.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    author: "VELVORA Editorial",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["fashion", "wardrobe", "essentials", "women", "style"],
    url: "blog/timeless-wardrobe-essentials.html"
  },
  {
    id: "mens-suit-guide",
    title: "The Ultimate Men's Suit Guide for 2025",
    category: "Men's Fashion",
    excerpt: "Whether you're dressing for a job interview or a wedding, this guide will help you find the perfect suit and wear it with confidence.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    author: "VELVORA Editorial",
    date: "2025-01-12",
    readTime: "10 min read",
    tags: ["mens fashion", "suit", "formal", "style guide"],
    url: "blog/mens-suit-guide.html"
  },
  {
    id: "morning-skincare-routine",
    title: "5-Step Morning Skincare Routine That Actually Works",
    category: "Beauty & Skincare",
    excerpt: "Start your day right with this dermatologist-approved morning skincare routine. Simple, effective and budget-friendly.",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38e7b?w=600&q=80",
    author: "VELVORA Editorial",
    date: "2025-01-10",
    readTime: "6 min read",
    tags: ["skincare", "morning routine", "beauty", "serum", "moisturizer"],
    url: "blog/skincare-routine.html"
  },
  {
    id: "amazon-fashion-finds",
    title: "Best Amazon Fashion Finds Under $50",
    category: "Style Tips",
    excerpt: "You don't need to spend a fortune to look amazing. These top-rated Amazon fashion picks deliver serious style at incredible prices.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
    author: "VELVORA Editorial",
    date: "2025-01-08",
    readTime: "7 min read",
    tags: ["amazon", "budget fashion", "affordable", "style tips"],
    url: "blog/amazon-fashion-finds.html"
  },
  {
    id: "spring-trends-2025",
    title: "Spring 2025 Fashion Trends You Need to Know",
    category: "Trends",
    excerpt: "From bold florals to relaxed silhouettes, here are the biggest fashion trends taking over Spring 2025 — all shoppable on Amazon.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    author: "VELVORA Editorial",
    date: "2025-01-05",
    readTime: "5 min read",
    tags: ["trends", "spring 2025", "fashion", "seasonal"],
    url: "blog/spring-trends.html"
  },
  {
    id: "night-skincare-routine",
    title: "Night Skincare Routine for Glowing Skin",
    category: "Beauty & Skincare",
    excerpt: "Your skin repairs itself while you sleep. Make the most of it with this effective nighttime skincare routine using Amazon's best picks.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    author: "VELVORA Editorial",
    date: "2025-01-03",
    readTime: "6 min read",
    tags: ["skincare", "night routine", "retinol", "beauty", "anti-aging"],
    url: "blog/night-skincare-routine.html"
  }
];

// Helper: get all posts
function getAllPosts() {
  return POSTS;
}

// Helper: get post by id
function getPostById(id) {
  return POSTS.find(p => p.id === id);
}

// Helper: get posts by category
function getPostsByCategory(category) {
  return POSTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

// Helper: get recent posts
function getRecentPosts(limit = 3) {
  return POSTS.slice(0, limit);
}
