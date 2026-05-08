// ============================================================
// VELVORA - Search & UI Functions
// ============================================================

var Search = {
  normalize(str) { return (str||'').toLowerCase().trim(); },
  searchProducts(query) {
    const q=this.normalize(query); if(!q) return [];
    return PRODUCTS.filter(p=>
      this.normalize(p.name).includes(q)||this.normalize(p.description).includes(q)||
      this.normalize(p.shortDesc).includes(q)||this.normalize(p.category).includes(q)||
      this.normalize(p.subcategory).includes(q)||(p.tags||[]).some(t=>this.normalize(t).includes(q))
    );
  },
  searchPosts(query) {
    const q=this.normalize(query); if(!q) return [];
    if(typeof POSTS==='undefined') return [];
    return POSTS.filter(p=>
      this.normalize(p.title).includes(q)||this.normalize(p.excerpt).includes(q)||
      this.normalize(p.category).includes(q)||(p.tags||[]).some(t=>this.normalize(t).includes(q))
    );
  },
  filterByCategory(products,category) {
    if(!category||category==='all') return products;
    return products.filter(p=>p.category===category);
  },
  filterByPrice(products,maxPrice) {
    if(!maxPrice) return products;
    return products.filter(p=>p.price<=parseFloat(maxPrice));
  },
  filterByRating(products,minRating) {
    if(!minRating) return products;
    return products.filter(p=>p.rating>=parseFloat(minRating));
  },
  sortProducts(products,sortBy) {
    const arr=[...products];
    switch(sortBy){
      case 'price-asc': return arr.sort((a,b)=>a.price-b.price);
      case 'price-desc': return arr.sort((a,b)=>b.price-a.price);
      case 'rating': return arr.sort((a,b)=>b.rating-a.rating);
      case 'name': return arr.sort((a,b)=>a.name.localeCompare(b.name));
      default: return arr;
    }
  },
  getParam(name) { return new URLSearchParams(window.location.search).get(name)||''; },
  goToSearch(query) {
    if(query.trim()) window.location.href=`search.html?q=${encodeURIComponent(query.trim())}`;
  },
  bindSearchForms() {
    document.querySelectorAll('[data-search-input]').forEach(input=>{
      input.addEventListener('keydown',e=>{ if(e.key==='Enter') this.goToSearch(input.value); });
    });
    document.querySelectorAll('[data-search-btn]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const input=document.querySelector('[data-search-input]');
        if(input) this.goToSearch(input.value);
      });
    });
  }
};

// ============================================================
// STAR RATING — FIXED SINGLE ROW, EXACT PERCENTAGE FILL
// Only 5 stars, no duplicates, Amazon orange style
// ============================================================
function buildStars(rating) {
  const r = Math.min(5, Math.max(0, parseFloat(rating)||0));
  const starPath = "M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78z";
  let html = '<span style="display:inline-flex;align-items:center;gap:1px;line-height:1">';
  for(let i=1;i<=5;i++){
    const fill = Math.round(Math.min(1,Math.max(0,r-(i-1)))*100);
    const uid = 'sg'+Math.random().toString(36).slice(2,7)+'_'+i;
    html += `<svg width="13" height="13" viewBox="0 0 20 20" style="display:block;flex-shrink:0">
      <defs>
        <linearGradient id="${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${fill}%" stop-color="#FF9900"/>
          <stop offset="${fill}%" stop-color="#E0E0E0"/>
        </linearGradient>
      </defs>
      <path d="${starPath}" fill="url(#${uid})" stroke="none"/>
    </svg>`;
  }
  html += '</span>';
  return html;
}

// ============================================================
// PRODUCT CARD BUILDER
// ============================================================
function buildProductCard(product, linkPrefix='') {
  const discount = product.originalPrice
    ? Math.round((1-product.price/product.originalPrice)*100) : null;
  const stars = buildStars(product.rating);
  const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
  const discountTag = discount ? `<span class="product-discount">-${discount}%</span>` : '';

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-image-wrap">
        <a href="${linkPrefix}product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        ${badge}${discountTag}
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
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px">
          ${stars}
          <span style="font-size:.78rem;font-weight:700;color:#FF9900">${product.rating}</span>
          <span style="font-size:.72rem;color:#888">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice?`<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>`:''}
        </div>
        <a href="${product.affiliateLink}" target="_blank" rel="nofollow noopener sponsored" class="btn-buy">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9"/></svg>
          Buy on Amazon
        </a>
      </div>
    </div>`;
}

function buildPostCard(post,linkPrefix='') {
  return `<article class="post-card">
    <div class="post-image-wrap">
      <a href="${linkPrefix}post.html?id=${post.id}">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </a>
      <span class="post-category-tag">${post.category}</span>
    </div>
    <div class="post-info">
      <div class="post-meta"><span>${post.author}</span><span>•</span><span>${formatDate(post.date)}</span></div>
      <h3 class="post-title"><a href="${linkPrefix}post.html?id=${post.id}">${post.title}</a></h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <a href="${linkPrefix}post.html?id=${post.id}" class="btn-read-more">Read More →</a>
    </div>
  </article>`;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
}

document.addEventListener('DOMContentLoaded',()=>{
  Search.bindSearchForms();
  const menuBtn=document.getElementById('menuToggle');
  const mobileNav=document.getElementById('mobileNav');
  if(menuBtn&&mobileNav) menuBtn.addEventListener('click',()=>mobileNav.classList.toggle('open'));
  window.addEventListener('scroll',()=>{
    const nav=document.querySelector('.navbar');
    if(nav) nav.classList.toggle('scrolled',window.scrollY>20);
  });
});
