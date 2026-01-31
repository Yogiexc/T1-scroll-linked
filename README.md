# 🦅 T1 ESPORT | UNBREAKABLE LEGACY

![T1 Esport Banner](https://placehold.co/1200x600/000000/ea0a2a?text=T1+SCROLLYTELLING+EXPERIENCE)

> **"All roads lead to me."** - Faker

A high-performance **Scrollytelling Landing Page** dedicated to the legendary T1 Esports team. This project demonstrates advanced frontend techniques, blending **HTML5 Canvas image sequences** with **Framer Motion** interactions to create a cinematic web experience.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-12-ea0a2a?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

## ✨ key features

- **🎞️ Canvas-Based Scrollytelling**: Smooth 60fps playback of a 192-frame image sequence using a sticky canvas implementation.
- **🚀 Performance First**: Optimized asset loading with a custom preloader and `Lenis` smooth scrolling for a buttery feel.
- **💎 Premium UI/UX**:
  - **Text Reveal**: Split-character staggered animations.
  - **Bento Grid**: Interactive division cards with cursor-following border glow.
  - **Fullscreen Navbar**: Cinematic menu overlays with hover-mask effects.
  - **Stats Count-Up**: Dynamic number reveal on scroll.
  - **Awards Coverflow**: 3D swiper effect for the trophy case.
- **🌑 Dark Mode Aesthetic**: Deep blacks and T1 Red accents (`#EA0A2A`) for an immersive brand atmosphere.

## 🛠️ tech stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion (Framer Motion)](https://motion.dev/)
- **Scrolling**: [Lenis](https://lenis.studio/)
- **Carousel**: [Swiper](https://swiperjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Bebas Neue (Headings) & Manrope (Body) via `next/font`

## 🚀 getting started

Clone the repository and install dependencies to start your legacy.

### 1. Clone & Install
```bash
git clone https://github.com/Yogiexc/T1-scroll-linked.git
cd T1-scroll-linked
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the experience.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📂 project structure

```bash
.
├── 📁 app               # Next.js App Router
│   ├── layout.tsx       # Root layout with Fonts & Lenis
│   └── page.tsx         # Main composition
├── 📁 components        # UI Components
│   ├── SequenceScroll.tsx # 🟢 Core Canvas Logic
│   ├── DivisionSection.tsx # 🍱 Bento Grid
│   ├── Navbar.tsx        # 🍔 Fullscreen Menu
│   └── ...
├── 📁 public/sequence   # 🎞️ 192 Image Frames
└── 📁 lib               # Utilities (clsx, twMerge)
```

## 🎨 design philosophy

The design follows the **"Unkillable Demon King"** persona:
- **Bold Typography**: Massive *Bebas Neue* headers to assert dominance.
- **Negative Space**: Extensive use of black to let the content breathe.
- **Micro-Interactions**: Everything reacts to the user—hover states, scroll triggers, and mouse movements.

---
*Built with passion for esports and code.* 
**#T1WIN #T1Fighting** 🔴
