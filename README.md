# AgroSage — AI Farming App for Nigeria

**AgroSage** is a full-featured AI-powered farming platform built for Nigerian farmers by **BB Farms & Bluestone Ranch**.

---

## 🌐 Website

Marketing website for the AgroSage mobile app, built with:

- **Vite 8** + **React 19**
- **Tailwind CSS v4**
- **Lucide React** icons

---

## 🚀 Deploy to Vercel

### Option 1 — Deploy via GitHub

1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects settings from `vercel.json`
5. Click **Deploy**

### Option 2 — Deploy via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

---

## 🛠️ Local Development

```bash
bun install
bun run dev
```

Visit: http://localhost:5173

---

## 🏗️ Build for Production

```bash
bun run build
```

Output will be in the `dist/` folder.

---

## 📁 Project Structure

```
web/
├── public/          # Static assets
├── src/
│   ├── App.tsx      # Main website (all sections)
│   ├── main.tsx     # React entry point
│   └── index.css    # Global styles (Tailwind v4)
├── index.html       # HTML entry point
├── vite.config.ts   # Vite + Tailwind config
├── vercel.json      # Vercel deployment config
└── package.json
```

---

## 🌟 Website Sections

| Section | Description |
|---|---|
| Navbar | Logo, nav links, Download CTA |
| Hero | Headline, app store buttons, phone mockup |
| Features | Weather, Market, Flock Tracker, AI Chat, Ranch, Support |
| Bluestone Ranch | Goat farming & cattle rearing showcase |
| How It Works | 3-step onboarding flow |
| Market Preview | Live Nigerian market prices |
| Schedule Preview | 8-week broiler feed schedule |
| AI Demo | Interactive AI chat demo |
| Testimonials | Farmer reviews |
| Download | App Store & Google Play CTAs |
| Support Chat | Floating AI-powered support widget |

---

## 🐄 About

- **BB Farms** — Poultry farming (broilers, layers, cockerels, turkeys)
- **Bluestone Ranch** — Goat farming & cattle rearing
- **Support**: support@agrosage.ng

---

## 📜 License

© 2026 AgroSage Nigeria · BB Farms & Bluestone Ranch. All rights reserved.
