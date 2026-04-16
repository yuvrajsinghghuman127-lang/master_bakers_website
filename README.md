# Master Bakers — Official Website

A fully responsive, multi-page frontend website for **Master Bakers**, a bakery and casual dining outlet located at Hudson Lane, Delhi, established in 1992.

## 🌐 Live Demo
> Deploy to GitHub Pages — instructions below.

## 📁 File Structure

```
master-bakers/
├── index.html          # Homepage
├── menu.html           # Full menu with ordering
├── about.html          # About & story page
├── contact.html        # Contact & map page
├── css/
│   ├── style.css       # Global styles, navbar, footer
│   ├── home.css        # Homepage-specific styles
│   ├── menu.css        # Menu page styles
│   └── pages.css       # About & contact page styles
├── js/
│   ├── main.js         # Cart, order logic, navbar, animations
│   └── menu.js         # Menu data & dynamic rendering
└── README.md
```

## ✨ Features

- **QR-based ordering simulation** — customers scan a QR code and place orders digitally
- **Dynamic menu rendering** — all menu items driven by a JS data object (easy to update)
- **Category filtering & search** — filter by Bakery, Snacks, Beverages, Desserts
- **Cart system** — add items, view cart modal, place order with confirmation toast
- **Responsive design** — mobile-first, works on all screen sizes
- **Smooth animations** — scroll-triggered fade-ins, hover effects, marquee strip
- **Google Maps embed** — embedded map on contact page
- **Contact form** — with simulated submit confirmation

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#8b4513` (Brown) |
| Accent | `#c8882a` (Amber) |
| Gold | `#d4a243` |
| Background | `#faf6f0` (Off-white) |
| Fonts | Playfair Display + Lato + Dancing Script |

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `master-bakers`)
2. Upload all files maintaining the folder structure
3. Go to **Settings → Pages**
4. Set source to `main` branch, root folder `/`
5. Your site will be live at `https://yourusername.github.io/master-bakers/`

> **Important:** The homepage is named `index.html` so GitHub Pages serves it automatically.

## 📱 Business Details

| Field | Value |
|-------|-------|
| Name | Master Bakers |
| Location | Hudson Lane, Delhi |
| Established | 1992 |
| Phone | +91 87439 90330 |
| Instagram | [@masterbakers1992](https://www.instagram.com/masterbakers1992/) |
| Hours | Mon–Sun: 8 AM – 10 PM |

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5.3
- Google Fonts (Playfair Display, Lato, Dancing Script)
- Google Maps Embed API
- Unsplash (food photography)
