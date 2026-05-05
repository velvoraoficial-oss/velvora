// ============================================================
// VELVORA - Search & UI Functions
// ============================================================

const Search = {
  normalize(str) {
    return (str || '').toLowerCase().trim();
  },
  searchProducts(query) {
    const q = this.normalize(query);
    if (!q) return [];
    return PRODUCTS.filter(p =>
      this.normalize(p.name).includes(q) ||
      this.normalize(p.description).includes(q) ||
      this.normalize(p.shortDesc).includes(q) ||
      this.normalize(p.category).includes(q) ||
      this.normalize(p.subcategory).includes(q) ||
      (p.tags || []).some(t => this.normalize(t).includes(q))
    );
  },
  searchPosts(query) {
    const q = this.normalize(query);
    if (!q) return [];
    if (typeof POSTS === 'undefined') return [];
    return POSTS.filter(p =>
      this.normalize(p.title).includes(q) ||
      this.normalize(p.excerpt).includes(q) ||
      this.normalize(p.category).includes(q) ||
      (p.tags || []).some(t => this.normalize(t).includes(q))
    );
  },
  filterByCategory(products, category) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
  },
  filterByPrice(products, maxPrice) {
    if (!maxPrice) return products;
    return products.filter(p => p.price <= parseFloat(maxPrice));
  },
  filterByRating(products, minRating) {
    if (!minRating) return products;
    return products.filter(p => p.rating >= parseFloat(minRating));
  },
  sortProducts(products, sortBy) {
    const arr = [...products];
    switch (sortBy) {
      case 'price-asc':  return arr.sort((a, b) => a.price - b.price);
      case 'price-desc': return arr.sort((a, b) => b.price - a.price);
      case 'rating':     return arr.sort((a, b) => b.rating - a.rating);
      case 'name':       return arr.sort((a, b) => a.name.localeCompare(b.name));
      default:           return arr;
    }
  },
  getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
  },
  goToSearch(query) {
    if (query.trim()) {
      window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
    }
  },
  bindSearchForms() {
    document.querySelectorAll('[data-search-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('[data-search-input]');
        if (input) this.goToSearch(input.value);
      });
    });
    document.querySelectorAll('[data-search-input]').forEach(input => {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') this.goToSearch(input.value);
      });
    });
    document.querySelectorAll('[data-search-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.closest('[data-search-form]')?.querySelector('[data-search-input]') ||
                      document.querySelector('[data-search-input]');
        if (input) this.goToSearch(input.value);
      });
    });
  }
};

// ============================================================
// STAR RATING — REALISTIC AMAZON STYLE
// Uses exact decimal rating to show partial stars correctly
// 4.3 = 4 full stars + 1 partial (30% filled) star
// ============================================================
function buildStars(rating) {
  const r = parseFloat(rating) || 0;
  let html = '<span class="stars-wrap" style="display:inline-flex;align-items:center;gap:1px">';

  for (let i = 1; i <= 5; i++) {
    const fill = Math.min(1, Math.max(0, r - (i - 1)));
    const percent = Math.round(fill * 100);

    html += `
      <span style="position:relative;display:inline-block;width:14px;height:14px;overflow:hidden">
        <!-- Empty star background -->
        <svg width="14" height="14" viewBox="0 0 20 20" style="position:absolute;top:0;left:0">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="#E0E0E0"/>
        </svg>
        <!-- Filled star clipped to exact percentage -->
        <span style="position:absolute;top:0;left:0;width:${percent}%;overflow:hidden;display:block">
          <svg width="14" height="14" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="#FF9900"/>
          </svg>
        </span>
      </span>`;
  }

  html += '</span>';
  return html;
}

// ============================================================
// PRODUCT CARD BUILDER
// ============================================================
function buildProductCard(product, linkPrefix = '') {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const stars = buildStars(product.rating);
  const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
  const discountTag = discount ? `<span class="product-discount">-${discount}%</span>` : '';

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-image-wrap">
        <a href="${linkPrefix}product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        ${badge}
        ${discountTag}
        <div class="product-overlay">
          <a href="${linkPrefix}product.html?id=${product.id}" class="btn-quick-view">View Details</a>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category-tag">${product.subcategory}</span>
        <h3 class="product-name">
          <a href="${linkPrefix}product.html?id=${product.id}">${product.name}</a>
        </h3>
        <p class="product-short-desc">${product.shortDesc}</p>
        <div class="product-rating" style="display:flex;align-items:center;gap:6px;margin-bottom:10px">
          ${stars}
          <span style="font-size:.78rem;color:#FF9900;font-weight:700">${product.rating}</span>
          <span style="font-size:.75rem;color:#666">(${product.reviews.toLocaleString()} reviews)</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <a href="${product.affiliateLink}" target="_blank" rel="nofollow noopener sponsored" class="btn-buy">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9"/></svg>
          Buy on Amazon
        </a>
      </div>
    </div>
  `;
}

// ============================================================
// BLOG POST CARD BUILDER
// ============================================================
function buildPostCard(post, linkPrefix = '') {
  return `
    <article class="post-card">
      <div class="post-image-wrap">
        <a href="${linkPrefix}post.html?id=${post.id}">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
        </a>
        <span class="post-category-tag">${post.category}</span>
      </div>
      <div class="post-info">
        <div class="post-meta">
          <span>${post.author}</span>
          <span>•</span>
          <span>${formatDate(post.date)}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="post-title">
          <a href="${linkPrefix}post.html?id=${post.id}">${post.title}</a>
        </h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <a href="${linkPrefix}post.html?id=${post.id}" class="btn-read-more">Read More →</a>
      </div>
    </article>
  `;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Search.bindSearchForms();

  const menuBtn = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });
});
