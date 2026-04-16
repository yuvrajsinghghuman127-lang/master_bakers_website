/* ============================================================
   MASTER BAKERS — Menu Data & Rendering
   ============================================================ */

const menuData = {
  bakery: {
    icon: '🥐',
    title: 'Bakery Items',
    items: [
      {
        name: 'Butter Croissant',
        desc: 'Flaky, golden layers with rich butter — baked fresh every morning.',
        price: 60,
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Chocolate Brownie',
        desc: 'Dense, fudgy chocolate brownie with a crackly crust top.',
        price: 80,
        img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Cinnamon Roll',
        desc: 'Soft swirled roll loaded with cinnamon sugar and cream cheese glaze.',
        price: 90,
        img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Blueberry Muffin',
        desc: 'Plump fresh blueberries in a tender, domed muffin with sugar crust.',
        price: 70,
        img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Garlic Bread Loaf',
        desc: 'Crusty sourdough loaf slathered in herb-garlic butter, baked to perfection.',
        price: 120,
        img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Danish Pastry',
        desc: 'Laminated dough with a sweet cream cheese and fruit jam filling.',
        price: 95,
        img: 'https://images.unsplash.com/photo-1558401391-7899b1271ebb?w=400&q=80',
        veg: true,
        bestseller: true
      }
    ]
  },
  snacks: {
    icon: '🥪',
    title: 'Snacks & Bites',
    items: [
      {
        name: 'Club Sandwich',
        desc: 'Triple-decker with chicken, lettuce, tomato, and mayo on toasted bread.',
        price: 180,
        img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
        veg: false,
        bestseller: true
      },
      {
        name: 'Veg Grilled Sandwich',
        desc: 'Crispy grilled sandwich loaded with seasonal veggies and mint chutney.',
        price: 130,
        img: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Cheese Loaded Fries',
        desc: 'Crispy golden fries topped with melted cheddar and jalapeños.',
        price: 150,
        img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Chicken Tikka Wrap',
        desc: 'Spiced grilled chicken tikka rolled in a soft wheat tortilla with raita.',
        price: 200,
        img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
        veg: false,
        bestseller: true
      },
      {
        name: 'Peri Peri Nachos',
        desc: 'Crunchy tortilla chips with peri peri spice, salsa, and sour cream.',
        price: 160,
        img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Paneer Kathi Roll',
        desc: 'Soft paratha filled with spiced paneer, onions, and green chutney.',
        price: 170,
        img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
        veg: true,
        bestseller: false
      }
    ]
  },
  beverages: {
    icon: '☕',
    title: 'Beverages',
    items: [
      {
        name: 'Classic Cappuccino',
        desc: 'Rich espresso with velvety steamed milk and thick frothy foam.',
        price: 120,
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Cold Coffee',
        desc: 'Chilled coffee blended with milk, sugar, and a scoop of vanilla ice cream.',
        price: 140,
        img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Masala Chai',
        desc: 'Traditional Indian spiced tea brewed with ginger, cardamom, and tulsi.',
        price: 60,
        img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Strawberry Milkshake',
        desc: 'Fresh strawberries blended with cold milk and topped with whipped cream.',
        price: 160,
        img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Lemon Iced Tea',
        desc: 'Refreshingly chilled black tea with fresh lemon juice and mint leaves.',
        price: 100,
        img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Hot Chocolate',
        desc: 'Rich Belgian chocolate melted into steaming hot milk with marshmallows.',
        price: 150,
        img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80',
        veg: true,
        bestseller: true
      }
    ]
  },
  desserts: {
    icon: '🍰',
    title: 'Desserts & Cakes',
    items: [
      {
        name: 'Chocolate Truffle Cake',
        desc: 'Layers of moist chocolate sponge with silky truffle ganache frosting.',
        price: 250,
        img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Belgian Waffle',
        desc: 'Crispy outside, fluffy inside, topped with maple syrup and fresh berries.',
        price: 180,
        img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Tiramisu',
        desc: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.',
        price: 200,
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'Gulab Jamun (2 pcs)',
        desc: 'Soft milk-solid dumplings soaked in rose-cardamom sugar syrup.',
        price: 80,
        img: 'https://images.unsplash.com/photo-1666557516116-a6e04e4b3ee9?w=400&q=80',
        veg: true,
        bestseller: false
      },
      {
        name: 'New York Cheesecake',
        desc: 'Dense, creamy classic cheesecake on a buttery graham cracker crust.',
        price: 220,
        img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
        veg: true,
        bestseller: true
      },
      {
        name: 'Caramel Custard',
        desc: 'Silky smooth baked custard with a dark caramel sauce poured on top.',
        price: 120,
        img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80',
        veg: true,
        bestseller: false
      }
    ]
  }
};

// ── Render ────────────────────────────────────────────────────
function renderMenu(filter = 'all', query = '') {
  const container = document.getElementById('menu-container');
  if (!container) return;

  container.innerHTML = '';
  let hasResults = false;

  Object.entries(menuData).forEach(([key, category]) => {
    if (filter !== 'all' && filter !== key) return;

    const filtered = category.items.filter(item => {
      if (!query) return true;
      return item.name.toLowerCase().includes(query.toLowerCase()) ||
             item.desc.toLowerCase().includes(query.toLowerCase());
    });

    if (filtered.length === 0) return;
    hasResults = true;

    const section = document.createElement('div');
    section.className = 'menu-category';
    section.setAttribute('data-category', key);

    section.innerHTML = `
      <div class="menu-category-header">
        <div class="cat-icon">${category.icon}</div>
        <h2>${category.title}</h2>
        <span class="item-count">${filtered.length} items</span>
      </div>
      <div class="menu-grid">
        ${filtered.map(item => `
          <div class="menu-item">
            <div class="menu-item-img">
              <img src="${item.img}" alt="${item.name}" loading="lazy">
              <div class="veg-badge ${item.veg ? 'veg' : 'nonveg'}"></div>
              ${item.bestseller ? '<span class="bestseller-ribbon">⭐ Bestseller</span>' : ''}
            </div>
            <div class="menu-item-body">
              <h3>${item.name}</h3>
              <p>${item.desc}</p>
              <div class="menu-item-footer">
                <span class="menu-price">₹${item.price}</span>
                <button class="menu-order-btn"
                  data-order="${item.name}"
                  data-price="₹${item.price}"
                  onclick="handleOrder(this)">
                  + Order
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(section);
  });

  if (!hasResults) {
    container.innerHTML = `
      <div class="no-results">
        <div class="emoji">🔍</div>
        <h3>No items found</h3>
        <p>Try a different search term or browse all categories.</p>
      </div>
    `;
  }

  // Re-init scroll animations
  initScrollAnimations();
}

// ── Filter Logic ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const query = document.getElementById('menu-search')?.value || '';
      renderMenu(btn.getAttribute('data-filter'), query);
    });
  });

  // Search
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        renderMenu(activeFilter, searchInput.value);
      }, 250);
    });
  }
});
