
---

# 🍕 Studio Zero – Restaurant “Story” Template

A modular **Astro 5 + Tailwind 4** theme for restaurant and pizzeria websites, inspired by the **HTML5 UP “Story”** layout.
Built for Studio Zero’s template library, this version includes all key sections (Hero, Spotlights, Ordering Strip, Menu, Gallery, Contact, Footer) with simple brand customization via global variables.

---

<p align="center">
  <img src="public/images/demo-preview.jpg" width="600" alt="Restaurant Story Template preview">
</p>

<p align="center">
  <strong>Studio Zero Ø</strong><br/>
  Modern websites for small businesses — where ideas go live.
</p>

---

## 🚀 Tech Stack

* [Astro 5](https://astro.build)
* [Tailwind CSS 4](https://tailwindcss.com)
* [@tailwindcss/vite](https://tailwindcss.com/docs/installation)
* TypeScript support
* Modular component system for reuse across Studio Zero templates

---

## 🧱 Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── logos/          # Slice, DoorDash, etc.
│   │   └── menu/           # Category photos
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI modules
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── OrderingStrip.astro
│   │   ├── Spotlight.astro
│   │   ├── MenuItemsGrid.astro
│   │   ├── HighlightsGrid.astro
│   │   ├── GalleryGrid.astro
│   │   └── ContactForm.astro
│   ├── config/
│   │   ├── site.ts         # Business info, hours, ordering links, etc.
│   │   └── theme.ts        # Brand colors, fonts, layout tokens
│   ├── lib/
│   │   └── lightbox.js
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧩 Key Features

* **Full-height Hero** with dual-column layout and CTA buttons
* **Sticky Header** with smooth in-page scrolling (auto-offset)
* **Ordering Strip** with service logos and phone link
* **Spotlights** (alternating image + text layout)
* **Dynamic Menu Grid** (Story-style “Items” section)

  * Supports item descriptions, prices, and dietary badges:

    * **GF** = Gluten-Free
    * **V** = Vegan
    * **VG** = Vegetarian
    * **🌶** = Spicy (1–3 levels)
* **Gallery Grid** with responsive lightbox
* **Contact Form** (Netlify-ready)
* **Global Theme Tokens** in `theme.ts`
* **Smooth anchor offsets** for sticky nav

---

## ⚙️ Setup

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev
# → open http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🧾 Customization

* Update **business info, hours, and menu** in `src/config/site.ts`
* Adjust **colors or fonts** in `src/config/theme.ts`
* Add / remove sections in `src/pages/index.astro`
* Place all assets under `public/images/`

---

## 🪄 Deployment

Optimized for [**Netlify**](https://netlify.com).
Just connect your repo or deploy the `dist/` folder manually:

```bash
npm run build
```

---

## 🧰 Studio Zero Template Notes

This project follows Studio Zero’s modular template standards:

* Each section is a drop-in module.
* Global theme tokens ensure fast re-branding per client.
* Designed for tiered offerings (Starter / Small Biz / Pro).

---

## 📄 License

© Studio Zero — All Rights Reserved.
For use in Studio Zero client projects only.
Not for resale or open-distribution.

---

## 🪪 Attribution

Original concept inspired by [HTML5 UP – Story](https://html5up.net/story).
Rebuilt from scratch with Astro + Tailwind by **Studio Zero Ø**.

````

---

## 📁 `.gitignore`

```gitignore
# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build output
dist/
.astro/
.vite/
.cache/
.vercel/
.netlify/

# Environment & local settings
.env
.env.*
.DS_Store

# Logs
*.log
logs/
*.tmp

# Editors & system files
.vscode/
.idea/
Thumbs.db

# Mac
.DS_Store

# Local test data or scratch files
tmp/
*.local.*

# Optional: ignore Netlify or deployment artifacts
netlify.toml
````

---

✅ **How to use:**

1. Copy the `README.md` text above directly into your repo.
2. Save the `.gitignore` file at project root (same level as `package.json`).
3. Commit both. GitHub will render the README perfectly formatted.

Would you like me to include a short “Demo Preview” section at the top with the deployed Netlify link once it’s live (similar to your starter-kit README)?
