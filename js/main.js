/* ============================================================
   MASTER BAKERS — Main JavaScript
   ============================================================ */

// ── Cart State ───────────────────────────────────────────────
const cart = [];
let toastTimer = null;

// ── DOM Ready ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initOrderButtons();
  setActiveNav();
  initScrollAnimations();
});

// ── Navbar Scroll Behavior ────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // On inner pages (solid), always dark
  if (navbar.classList.contains('solid')) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── Hamburger ────────────────────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── Active Nav Link ───────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === filename || (filename === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Order Buttons ─────────────────────────────────────────────
function initOrderButtons() {
  document.querySelectorAll('[data-order]').forEach(btn => {
    btn.addEventListener('click', () => handleOrder(btn));
  });
}

function handleOrder(btn) {
  const itemName = btn.getAttribute('data-order') || 'Item';
  const itemPrice = btn.getAttribute('data-price') || '';

  // Add to cart
  const existing = cart.find(i => i.name === itemName);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name: itemName, price: itemPrice, qty: 1 });
  }

  // Button feedback
  const originalText = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.classList.add('added');
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = originalText;
    btn.classList.remove('added');
    btn.disabled = false;
  }, 1600);

  // Show toast
  showToast(itemName);

  // Show/update cart button
  updateCartBtn();
}

function showToast(itemName) {
  const toast = document.getElementById('order-toast');
  if (!toast) return;

  toast.innerHTML = `<strong>🛒 Added to Order!</strong>${itemName} has been added to your order.`;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function updateCartBtn() {
  const cartBtn = document.getElementById('cart-btn');
  const cartCount = document.getElementById('cart-count');
  if (!cartBtn || !cartCount) return;

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = totalQty;
  cartBtn.classList.add('visible');
}

// ── Cart Modal ─────────────────────────────────────────────────
function openCart() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add some items first.');
    return;
  }

  const total = cart.reduce((sum, i) => {
    const price = parseFloat(i.price.replace('₹', '')) || 0;
    return sum + price * i.qty;
  }, 0);

  const cartHtml = `
    <div id="cart-modal-overlay" onclick="closeCart()" style="
      position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9500;
      display:flex;align-items:flex-end;justify-content:center;
      animation:fadeIn .2s ease;
    ">
      <div onclick="event.stopPropagation()" style="
        background:#fff;border-radius:20px 20px 0 0;width:100%;max-width:540px;
        padding:2rem;max-height:80vh;overflow-y:auto;
        animation:slideUp .3s cubic-bezier(.34,1.56,.64,1);
      ">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.4rem;color:#2c1a0e;">Your Order</h3>
          <button onclick="closeCart()" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:#7a5c40;">×</button>
        </div>
        <div style="margin-bottom:1.5rem;">
          ${cart.map(item => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:.75rem 0;border-bottom:1px solid #ede0cc;">
              <div>
                <div style="font-weight:700;font-size:.95rem;color:#2c1a0e;">${item.name}</div>
                <div style="font-size:.82rem;color:#7a5c40;">Qty: ${item.qty}</div>
              </div>
              <div style="font-family:'Playfair Display',serif;color:#c8882a;font-weight:700;">${item.price}</div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 0;border-top:2px solid #ede0cc;margin-bottom:1.5rem;">
          <span style="font-weight:700;font-size:1rem;">Total</span>
          <span style="font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:#c8882a;">₹${total.toFixed(0)}</span>
        </div>
        <button onclick="placeOrder()" style="
          width:100%;background:linear-gradient(135deg,#8b4513,#c8882a);
          color:#fff;border:none;border-radius:50px;padding:1rem;
          font-family:'Lato',sans-serif;font-weight:700;font-size:1rem;
          cursor:pointer;letter-spacing:.06em;
        ">Place Order 🎉</button>
        <button onclick="closeCart()" style="
          width:100%;background:transparent;color:#7a5c40;border:none;
          padding:.75rem;font-family:'Lato',sans-serif;font-size:.9rem;
          cursor:pointer;margin-top:.5rem;
        ">Continue Browsing</button>
      </div>
    </div>
  `;

  const el = document.createElement('div');
  el.innerHTML = cartHtml;
  document.body.appendChild(el);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
    @keyframes slideUp { from { transform:translateY(100px) } to { transform:translateY(0) } }
  `;
  document.head.appendChild(style);
}

function closeCart() {
  const overlay = document.getElementById('cart-modal-overlay');
  if (overlay) overlay.parentElement.remove();
}

function placeOrder() {
  closeCart();
  cart.length = 0;

  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.classList.remove('visible');

  // Show success
  const toast = document.getElementById('order-toast');
  if (toast) {
    toast.innerHTML = `<strong>🎉 Order Placed Successfully!</strong>Your order has been sent to the kitchen. Sit back and relax!`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
  }
}

// ── Scroll Animations ─────────────────────────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll('.food-card, .menu-item, .value-card, .testimonial-card, .contact-info-card');

  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// ── Contact Form ──────────────────────────────────────────────
function submitContactForm(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('contact-submit');
  if (!btn) return;

  const original = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#22a447';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.disabled = false;
    document.getElementById('contact-form')?.reset();
  }, 3000);
}
