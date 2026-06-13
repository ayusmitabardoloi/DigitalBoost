# DigitalBoost 🚀

A modern, highly responsive landing page for a startup digital marketing agency, designed with a premium, clean, and interactive **Bento Grid Aesthetic**. 

---

## 📖 Table of Contents
- [Goal & Design (GD) Section](#-goal--design-gd-section)
- [✨ Features](#-features)
- [🛠️ Tech Stack & Architecture](#%EF%B8%8F-tech-stack--architecture)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [👤 Author](#-author)

---

## 🎨 Goal & Design (GD) Section

This section outlines the core design language, vision, and decisions that shape the **DigitalBoost** user experience.

### 1. Core Goal
The primary objective of DigitalBoost is to establish immediate brand credibility, engage visitors through dynamic and interactive features, and seamlessly convert users into marketing leads. 

### 2. Bento Grid Layout
The layout leverages the **Bento Grid methodology**—a modern UI trend inspired by Japanese lunchboxes where content is partitioned into distinct, rounded grid blocks.
- **Asymmetrical Layout**: Features varying column and row spans (`span-2-col`, `span-2-row`) to establish visual interest and clear information hierarchy.
- **Visual Contrast**: Combines text-only informational cards with image-heavy media blocks and dynamic interactive widgets.
- **Hover Micro-interactions**: Every bento block has a smooth lift (`translateY(-4px)`) and a subtle drop shadow upon hover, encouraging discovery and interaction.

### 3. Typography & Hierarchy
- **Font Family**: [Inter](https://fonts.google.com/specimen/Inter) — a premium, clean geometric sans-serif font designed for readability on computer screens.
- **Clamped Headings**: Hero typography utilizes CSS `clamp(32px, 5vw, 48px)` to ensure scaling is smooth across mobile, tablet, and ultra-wide screens.
- **Weights & Tracking**: Tight letter-spacing (`-0.02em`) on headings for an editorial feel, paired with highly legible body copy.

### 4. Harmonious Color Palette
A custom-curated, warm, and professional palette replaces standard generic primary colors:
- **Peach/Coral** (`#FAD4C0`): Primary accent color used for main buttons, hero headers, and highlighted states.
- **Muted Blue** (`#80A1C1`): Secondary brand color for deep contrast and tertiary headers.
- **Cream** (`#FFF5E6`): Warm, soft background for bento boxes to reduce eye strain compared to pure white.
- **Dark Charcoal** (`#111827`): Body ink color providing crisp contrast without the harshness of pure black.

---

## ✨ Features

- **Preloader Animation**: A smooth loading screen animation that vanishes once the page has fully loaded.
- **Responsive Bento Grid**: Beautiful grid structure that automatically collapses from 4-columns (desktop) down to 2-columns (tablet) and 1-column (mobile).
- **Interactive Stat Counters**: Numbers count up dynamically from 0 to their target when the user scrolls them into view.
- **Client-Side Form Validation**: Validates user inputs with instant feedback before submission.
- **Image placeholders**: Beautifully curated Unsplash visual assets to showcase teams and service capabilities.
- **Semantic HTML**: Fully accessible markup matching WCAG standards.

---

## 🛠️ Tech Stack & Architecture

DigitalBoost is built on a clean, modern web foundation without external frameworks to ensure maximum performance, instant load speeds, and pure compliance:
- **HTML5**: Structured semantically (`<header>`, `<main>`, `<section>`, `<footer>`).
- **CSS3**: Uses CSS Variables (`:root`), Flexbox, CSS Grid, and custom transitions/animations.
- **JavaScript (ES6+)**: Handles dynamic counter updates, preloader dismissal, and interactive form handling.

---

## 📁 Project Structure

```bash
DigitalBoost/
├── index.html     # Semantic HTML page structure
├── style.css      # Core styles, variables, grid system, and animations
├── script.js      # JS counter logic, loader trigger, and form handler
├── README.md      # General Documentation and Design Spec
├── DESIGN.md      # Secondary Design System spec sheet
├── prd.md         # Product Requirements Document
└── trd.md         # Technical Requirements Document
```

---

## 🚀 Getting Started

### Run Locally
To test the website locally, clone the repository and start a simple local server:

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/ayusmitabardoloi/DigitalBoost.git
   cd DigitalBoost
   ```

2. **Start a Local Server:**
   *Using Python (Recommended):*
   ```bash
   python -m http.server 8080
   ```
   *Using Node/npm:*
   ```bash
   npx http-server -p 8080
   ```

3. **Open Browser:**
   Go to [http://localhost:8080](http://localhost:8080) to view the live site.
