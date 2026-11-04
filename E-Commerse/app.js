/**
 * VoltStore - E-Commerce Application State & Interactivity
 * Features:
 *  - Both Dark & Light Mode with System Brightness Detection & Persistence
 *  - Product Catalog (Audio, Laptops, Wearables, Gaming, Cameras)
 *  - Live Search, Category Filtering, Price & Rating Sorting
 *  - Persistent Shopping Cart with Free Shipping Meter & Discount Coupon
 *  - Product Quick View Modal with Gallery & Variant Pickers
 *  - Full Interactive Checkout Flow with Order Confirmation Receipt
 *  - Toast Notification System & Wishlist Management
 */

// ==========================================================================
// 1. PRODUCT CATALOG DATA
// ==========================================================================
const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    category: 'audio',
    brand: 'Sony',
    price: 349.99,
    originalPrice: 399.99,
    discount: '12% OFF',
    rating: 4.8,
    reviews: 1420,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    badgeType: 'sale',
    stock: 14,
    description: 'Industry-leading noise cancellation with two processors and 8 microphones. Up to 30-hour battery life with quick charging. Crystal clear hands-free calling with 4 beamforming microphones.',
    colors: ['#0f172a', '#e2e8f0', '#94a3b8']
  },
  {
    id: 'prod-2',
    title: 'Apple MacBook Pro 14" M3 Pro Chip (18GB, 512GB SSD)',
    category: 'computers',
    brand: 'Apple',
    price: 1849.00,
    originalPrice: 1999.00,
    discount: 'Save $150',
    rating: 4.9,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    badge: 'New Arrival',
    badgeType: 'new',
    stock: 7,
    description: 'Blazing-fast M3 Pro chip with 11-core CPU and 14-core GPU. Stunning Liquid Retina XDR display with 1,000 nits sustained brightness. Up to 18 hours of battery life.',
    colors: ['#1e293b', '#cbd5e1']
  },
  {
    id: 'prod-3',
    title: 'Apple Watch Ultra 2 GPS + Cellular 49mm Titanium',
    category: 'wearables',
    brand: 'Apple',
    price: 779.00,
    originalPrice: 799.00,
    discount: 'Popular',
    rating: 4.7,
    reviews: 640,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
    badge: 'Top Rated',
    badgeType: 'new',
    stock: 12,
    description: 'Rugged and capable 49mm corrosion-resistant titanium case. Brightest Always-On Retina display with 3000 nits. Precision dual-frequency GPS and up to 36 hours of battery life.',
    colors: ['#e2e8f0', '#fb923c', '#0284c7']
  },
  {
    id: 'prod-4',
    title: 'Sony Alpha 7 IV Full-Frame Mirrorless Camera (Body Only)',
    category: 'cameras',
    brand: 'Sony',
    price: 2298.00,
    originalPrice: 2499.00,
    discount: 'Special Offer',
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
    badge: 'Pro Gear',
    badgeType: 'sale',
    stock: 5,
    description: '33MP full-frame Exmor R back-illuminated CMOS sensor with BIONZ XR processing. 4K 60p 10-bit 4:2:2 recording and Real-time Eye AF for humans, animals, and birds.',
    colors: ['#0f172a']
  },
  {
    id: 'prod-5',
    title: 'PlayStation 5 DualSense Edge Wireless Controller',
    category: 'gaming',
    brand: 'Sony',
    price: 189.99,
    originalPrice: 199.99,
    discount: '5% OFF',
    rating: 4.6,
    reviews: 1120,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80',
    badge: 'Gaming Choice',
    badgeType: 'new',
    stock: 22,
    description: 'High-performance ultra-customizable controller with swappable stick modules, mappable rear buttons, tunable triggers, and slip-resistant inner grips.',
    colors: ['#ffffff', '#0f172a']
  },
  {
    id: 'prod-6',
    title: 'Keychron Q1 Pro Custom Wireless Mechanical Keyboard',
    category: 'gaming',
    brand: 'Keychron',
    price: 199.00,
    originalPrice: 219.00,
    discount: 'Trending',
    rating: 4.8,
    reviews: 730,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    badge: 'Enthusiast',
    badgeType: 'sale',
    stock: 9,
    description: 'Full CNC machined 6063 aluminum body with double-gasket design. Wireless Bluetooth 5.1 & wired Type-C connectivity. QMK/VIA programmable hot-swappable switches.',
    colors: ['#1e293b', '#64748b', '#ffffff']
  },
  {
    id: 'prod-7',
    title: 'Bose QuietComfort Ultra Earbuds with Spatial Audio',
    category: 'audio',
    brand: 'Bose',
    price: 279.00,
    originalPrice: 299.00,
    discount: 'Save $20',
    rating: 4.6,
    reviews: 940,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
    badge: 'Spatial Audio',
    badgeType: 'new',
    stock: 18,
    description: 'Breakthrough spatialized audio for more immersive listening. CustomTune technology personalized sound to your ears. Up to 6 hours of playtime and IPX4 sweat resistance.',
    colors: ['#0f172a', '#ffffff', '#cbd5e1']
  },
  {
    id: 'prod-8',
    title: 'DJI Mini 4 Pro Drone with DJI RC 2 Remote Controller',
    category: 'cameras',
    brand: 'DJI',
    price: 959.00,
    originalPrice: 1049.00,
    discount: '9% OFF',
    rating: 4.9,
    reviews: 680,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80',
    badge: 'Under 249g',
    badgeType: 'sale',
    stock: 8,
    description: 'Omnidirectional obstacle sensing. 4K/60fps HDR true vertical shooting. Up to 34 minutes flight time with flagship 20km FHD video transmission.',
    colors: ['#94a3b8']
  },
  {
    id: 'prod-9',
    title: 'Garmin Fenix 7 Pro Solar Multisport GPS Smartwatch',
    category: 'wearables',
    brand: 'Garmin',
    price: 749.99,
    originalPrice: 799.99,
    discount: 'Solar Powered',
    rating: 4.8,
    reviews: 490,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    badge: 'Endurance',
    badgeType: 'new',
    stock: 6,
    description: 'Solar charging power glass lens delivers up to 22 days of battery life in smartwatch mode. Built-in LED flashlight and multi-band GPS with SatIQ technology.',
    colors: ['#0f172a', '#475569']
  },
  {
    id: 'prod-10',
    title: 'Samsung Galaxy S24 Ultra 5G (512GB, Titanium Gray)',
    category: 'computers',
    brand: 'Samsung',
    price: 1299.99,
    originalPrice: 1419.99,
    discount: 'Save $120',
    rating: 4.7,
    reviews: 1350,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=80',
    badge: 'Galaxy AI',
    badgeType: 'sale',
    stock: 11,
    description: 'Galaxy AI features live call translate and Circle to Search. 200MP camera with Quad Telephoto system. Built-in S Pen and ultra-durable Titanium frame.',
    colors: ['#475569', '#1e293b', '#fef08a']
  },
  {
    id: 'prod-11',
    title: 'Marshall Stanmore III Wireless Bluetooth Speaker',
    category: 'audio',
    brand: 'Marshall',
    price: 379.99,
    originalPrice: 399.99,
    discount: 'Vintage Sound',
    rating: 4.7,
    reviews: 820,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    badge: 'Iconic Design',
    badgeType: 'new',
    stock: 15,
    description: 'Wider soundstage that delivers expansive Marshall home audio. Dynamic Loudness adjusts tonal balance. Bluetooth 5.2 and 3.5mm AUX / RCA inputs.',
    colors: ['#0f172a', '#f5f5f4', '#78350f']
  },
  {
    id: 'prod-12',
    title: 'LG UltraGear 27" OLED QHD 240Hz 0.03ms Gaming Monitor',
    category: 'gaming',
    brand: 'LG',
    price: 796.99,
    originalPrice: 999.99,
    discount: '20% OFF',
    rating: 4.8,
    reviews: 610,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
    badge: '240Hz OLED',
    badgeType: 'sale',
    stock: 4,
    description: 'World-class 240Hz refresh rate and 0.03ms (GtG) response time on an Anti-Glare OLED display with 1.5M:1 contrast ratio. NVIDIA G-SYNC & AMD FreeSync Premium Pro.',
    colors: ['#0f172a']
  }
];

// ==========================================================================
// 2. APPLICATION STATE
// ==========================================================================
const state = {
  theme: localStorage.getItem('voltstore_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  cart: JSON.parse(localStorage.getItem('voltstore_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('voltstore_wishlist') || '[]'),
  activeCategory: 'all',
  searchQuery: '',
  sortOrder: 'featured',
  activeCoupon: null, // e.g. { code: 'SAVE15', discountRate: 0.15 }
  currentQuickViewProduct: null
};

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initEventListeners();
});

// ==========================================================================
// 4. THEME CONTROLLER (Both Dark and Light Mode)
// ==========================================================================
function initTheme() {
  applyTheme(state.theme);

  const btnLight = document.getElementById('btnThemeLight');
  const btnDark = document.getElementById('btnThemeDark');

  if (btnLight) btnLight.addEventListener('click', () => applyTheme('light'));
  if (btnDark) btnDark.addEventListener('click', () => applyTheme('dark'));

  // Listen to OS brightness / theme changes if user hasn't overridden
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('voltstore_theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('voltstore_theme', theme);

  const btnLight = document.getElementById('btnThemeLight');
  const btnDark = document.getElementById('btnThemeDark');

  if (btnLight && btnDark) {
    if (theme === 'light') {
      btnLight.classList.add('active');
      btnDark.classList.remove('active');
    } else {
      btnDark.classList.add('active');
      btnLight.classList.remove('active');
    }
  }
}

// ==========================================================================
// 5. PRODUCT CATALOG RENDERING & FILTERING
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // 1. Filter by category & search query
  let filtered = PRODUCTS.filter((p) => {
    const matchCat = state.activeCategory === 'all' || p.category === state.activeCategory;
    const matchQuery = state.searchQuery === '' ||
      p.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  // 2. Sort results
  if (state.sortOrder === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortOrder === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortOrder === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortOrder === 'reviews') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  // Update counter
  const counter = document.getElementById('resultCount');
  if (counter) counter.textContent = `Showing ${filtered.length} products`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No matching products found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Try adjusting your search terms or clearing the filter.</p>
        <button class="hero-btn" onclick="resetFilters()" style="margin-top: 16px;">Reset Filters</button>
      </div>
    `;
    return;
  }

  // Generate cards
  grid.innerHTML = filtered.map((prod) => {
    const isWishlisted = state.wishlist.includes(prod.id);
    const badgeClass = prod.badgeType === 'sale' ? 'badge-sale' : 'badge-new';

    return `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-image-wrap" onclick="openProductModal('${prod.id}')">
          <img src="${prod.image}" alt="${prod.title}" class="product-image" loading="lazy">
          ${prod.badge ? `<span class="badge-tag ${badgeClass}">${prod.badge}</span>` : ''}
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${prod.id}')" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="product-info">
          <div>
            <div class="product-meta">${prod.brand} • ${prod.category}</div>
            <h3 class="product-title" onclick="openProductModal('${prod.id}')">${prod.title}</h3>
          </div>

          <div class="product-rating">
            <div class="stars">
              ${renderStars(prod.rating)}
            </div>
            <span>${prod.rating}</span>
            <span class="review-count">(${prod.reviews.toLocaleString()})</span>
          </div>

          <div class="product-price-row">
            <span class="price-current">$${prod.price.toFixed(2)}</span>
            ${prod.originalPrice ? `<span class="price-original">$${prod.originalPrice.toFixed(2)}</span>` : ''}
          </div>

          <button class="add-to-cart-btn" onclick="addToCart('${prod.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function renderStars(rating) {
  let starsHtml = '';
  const full = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      starsHtml += '★';
    } else {
      starsHtml += '☆';
    }
  }
  return starsHtml;
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortOrder = 'featured';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.category-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('data-category') === 'all');
  });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderProducts();
}

// ==========================================================================
// 6. SHOPPING CART ENGINE (Persistent, Calculations, Shipping Meter)
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.title.slice(0, 24)}..." to cart`, 'cart');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart', 'trash');
}

function updateCartQty(productId, delta) {
  const item = state.cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('voltstore_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-count-badge');
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach((b) => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Calculate financials
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountRate = state.activeCoupon ? state.activeCoupon.discountRate : 0;
  const discountAmount = subtotal * discountRate;
  const freeShippingThreshold = 100.0;
  const shippingFee = (subtotal > 0 && subtotal >= freeShippingThreshold) ? 0 : (subtotal > 0 ? 15.0 : 0);
  const tax = (subtotal - discountAmount) * 0.08; // 8% sales tax
  const total = Math.max(0, subtotal - discountAmount + shippingFee + tax);

  // Update Free Shipping Progress Meter
  const meterText = document.getElementById('shippingMeterText');
  const meterFill = document.getElementById('shippingMeterFill');
  if (meterText && meterFill) {
    if (subtotal >= freeShippingThreshold) {
      meterText.textContent = '🎉 You unlocked Free Express Shipping!';
      meterFill.style.width = '100%';
    } else {
      const remaining = freeShippingThreshold - subtotal;
      meterText.textContent = `Add $${remaining.toFixed(2)} more to qualify for Free Shipping!`;
      const pct = Math.min(100, (subtotal / freeShippingThreshold) * 100);
      meterFill.style.width = `${pct}%`;
    }
  }

  // Render items list
  const listEl = document.getElementById('cartItemsList');
  if (listEl) {
    if (state.cart.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 48px 12px; color: var(--text-muted);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; opacity: 0.5;">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 4px;">Your cart is empty</h4>
          <p style="font-size: 0.88rem;">Looks like you haven't added any gear yet.</p>
        </div>
      `;
    } else {
      listEl.innerHTML = state.cart.map((item) => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4>${item.title}</h4>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-qty-ctrls">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `).join('');
    }
  }

  // Update summary lines
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const taxEl = document.getElementById('cartTax');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (discountRow) {
    if (discountAmount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-$${discountAmount.toFixed(2)} (${state.activeCoupon.code})`;
    } else {
      discountRow.style.display = 'none';
    }
  }
  if (shippingEl) shippingEl.textContent = shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  if (checkoutBtn) {
    checkoutBtn.disabled = state.cart.length === 0;
    checkoutBtn.style.opacity = state.cart.length === 0 ? '0.5' : '1';
    checkoutBtn.style.cursor = state.cart.length === 0 ? 'not-allowed' : 'pointer';
  }
}

// ==========================================================================
// 7. COUPON LOGIC
// ==========================================================================
function applyCoupon() {
  const input = document.getElementById('couponInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'SAVE15') {
    state.activeCoupon = { code: 'SAVE15', discountRate: 0.15 };
    updateCartUI();
    showToast('Promo code applied: 15% OFF! 🎉', 'check');
    input.value = '';
  } else if (code === 'VOLT20') {
    state.activeCoupon = { code: 'VOLT20', discountRate: 0.20 };
    updateCartUI();
    showToast('VIP code applied: 20% OFF! 🚀', 'check');
    input.value = '';
  } else {
    showToast('Invalid promo code. Try "SAVE15"', 'alert');
  }
}

// ==========================================================================
// 8. WISHLIST MANAGEMENT
// ==========================================================================
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'heart');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to wishlist ❤️', 'heart');
  }

  localStorage.setItem('voltstore_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistCountBadge');
  if (badge) {
    badge.textContent = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }
}

// ==========================================================================
// 9. PRODUCT QUICK-VIEW MODAL
// ==========================================================================
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  state.currentQuickViewProduct = product;
  const modal = document.getElementById('productModal');
  if (!modal) return;

  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalBrand').textContent = product.brand;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalStars').innerHTML = renderStars(product.rating);
  document.getElementById('modalRatingText').textContent = `${product.rating} (${product.reviews} reviews)`;
  document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('modalOriginalPrice').textContent = product.originalPrice ? `$${product.originalPrice.toFixed(2)}` : '';
  document.getElementById('modalDesc').textContent = product.description;
  document.getElementById('modalQty').value = '1';

  // Render variant color pickers
  const variantsWrap = document.getElementById('modalVariants');
  if (variantsWrap) {
    variantsWrap.innerHTML = product.colors.map((c, i) => `
      <div class="variant-dot ${i === 0 ? 'active' : ''}" style="background-color: ${c};" onclick="selectVariant(this)"></div>
    `).join('');
  }

  modal.classList.add('active');
}

function selectVariant(element) {
  document.querySelectorAll('.variant-dot').forEach((d) => d.classList.remove('active'));
  element.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('active');
}

function addModalProductToCart() {
  if (!state.currentQuickViewProduct) return;
  const qtyInput = document.getElementById('modalQty');
  const qty = parseInt(qtyInput.value, 10) || 1;
  addToCart(state.currentQuickViewProduct.id, qty);
  closeProductModal();
}

// ==========================================================================
// 10. CHECKOUT MODAL & ORDER COMPLETION
// ==========================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) return;
  toggleCartDrawer(false);

  const modal = document.getElementById('checkoutModal');
  if (modal) {
    const totalEl = document.getElementById('checkoutOrderTotal');
    const currentTotal = document.getElementById('cartTotal').textContent;
    if (totalEl) totalEl.textContent = currentTotal;
    modal.classList.add('active');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('active');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('shipName').value.trim();
  const address = document.getElementById('shipAddress').value.trim();
  const email = document.getElementById('shipEmail').value.trim();

  if (!name || !address || !email) {
    showToast('Please fill out all shipping fields', 'alert');
    return;
  }

  const submitBtn = document.getElementById('btnPlaceOrder');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = `<span>Processing Order...</span>`;
  submitBtn.disabled = true;

  setTimeout(() => {
    // Generate Order ID & date
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const orderDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // Show Confirmation Receipt
    const modalContent = document.getElementById('checkoutModalContent');
    if (modalContent) {
      modalContent.innerHTML = `
        <div style="text-align: center; padding: 20px 10px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Order Placed Successfully!</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">Thank you, ${name}! Your order has been placed and will be delivered within 2-3 business days.</p>

          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px; text-align: left; margin-bottom: 24px;">
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px; font-size: 0.88rem;">
              <span style="color:var(--text-muted);">Order Number:</span>
              <strong style="font-family:var(--font-mono);">${orderId}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px; font-size: 0.88rem;">
              <span style="color:var(--text-muted);">Date:</span>
              <span>${orderDate}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px; font-size: 0.88rem;">
              <span style="color:var(--text-muted);">Shipping To:</span>
              <span>${address}</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size: 0.88rem; padding-top: 8px; border-top: 1px solid var(--border-color);">
              <span style="color:var(--text-muted);">Total Paid:</span>
              <strong style="color:var(--accent); font-size: 1.05rem;">${document.getElementById('checkoutOrderTotal').textContent}</strong>
            </div>
          </div>

          <button class="hero-btn" onclick="finishOrder()" style="width: 100%;">Continue Shopping</button>
        </div>
      `;
    }

    // Reset Cart
    state.cart = [];
    state.activeCoupon = null;
    saveCart();
    updateCartUI();
  }, 1200);
}

function finishOrder() {
  closeCheckoutModal();
  location.reload();
}

// ==========================================================================
// 11. CART DRAWER TOGGLE
// ==========================================================================
function toggleCartDrawer(open) {
  const overlay = document.getElementById('cartOverlay');
  if (!overlay) return;

  if (open) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 12. TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconSvg = '';
  if (type === 'cart') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
  } else if (type === 'heart') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ==========================================================================
// 13. EVENT LISTENERS SETUP
// ==========================================================================
function initEventListeners() {
  // Search input events (debounced)
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      if (clearSearchBtn) clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        renderProducts();
      }, 250);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderProducts();
    });
  }

  // Category Tabs
  document.querySelectorAll('.category-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.category-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.getAttribute('data-category');
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortOrder = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer open/close
  const cartBtn = document.getElementById('cartOpenBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');

  if (cartBtn) cartBtn.addEventListener('click', () => toggleCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) toggleCartDrawer(false);
    });
  }

  // Coupon
  const couponBtn = document.getElementById('couponApplyBtn');
  if (couponBtn) couponBtn.addEventListener('click', applyCoupon);

  // Checkout trigger
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);

  // Checkout form submit
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  // Modal close triggers
  const closeProdModal = document.getElementById('closeProductModalBtn');
  const prodModalBackdrop = document.getElementById('productModal');
  if (closeProdModal) closeProdModal.addEventListener('click', closeProductModal);
  if (prodModalBackdrop) {
    prodModalBackdrop.addEventListener('click', (e) => {
      if (e.target === prodModalBackdrop) closeProductModal();
    });
  }

  const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
  const checkoutModalBackdrop = document.getElementById('checkoutModal');
  if (closeCheckoutModalBtn) closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModalBackdrop) {
    checkoutModalBackdrop.addEventListener('click', (e) => {
      if (e.target === checkoutModalBackdrop) closeCheckoutModal();
    });
  }
}
