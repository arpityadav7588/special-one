# Nº 09 · The Night Garden

> *“I prefer red, mostly black — other colors are also fine, but mostly, I don’t like white. I love flowers, especially roses, lilies, and tulips.”*

A bespoke nocturnal keepsake, interactive 3D botanical gift, and ceremonial countdown to **November 9, 2026**.

---

## The Concept

*The Night Garden* is a private, artisanal web experience crafted in obsidian black, lacquer crimson, and warm ivory. It replaces generic birthday cards with a tactile, procedural world built around personal memories and aesthetic preferences.

## Structure & Experiences

| Page | Role | Details |
| :--- | :--- | :--- |
| **[`index.html`](index.html)** | **The Gift Box & Bouquet** | The main stage. An interactive 3D lacquer box holding handcrafted blooms, falling petals, handwritten keepsake receipt, and background audio. |
| **[`album.html`](album.html)** | **The Camera Roll (Locked)** | A ceremonial photo & memory book sealed with virtual wax. Unlocks automatically at midnight on November 9, 2026 (or via the preview seal). |
| **[`wish.html`](wish.html)** | **Wishes in the Dark** | A constellation wish wall where guests can whisper wishes before midnight, stored securely in `localStorage`. |
| **[`timer.html`](timer.html)** | **Midnight Countdown** | A dedicated 3D countdown clock ticking toward the birthday milestone with orbit controls and tactile physics. |
| **[`box.html`](box.html)** | **The Empty Box** | A minimalist standalone study in red lacquer, satin ribbon, and spatial emptiness. |
| **[`theme.css`](theme.css)** | **Design System** | Single source of truth for color tokens, typography, architectural hairlines, and film grain. |
| **[`404.html`](404.html)** | **Night Garden Fallback** | Dark themed missing-route handler with automatic 4-second redirect to the gift box. |

---

## Design System

- **Palette**: Deep obsidian (`#090207`), vintage crimson vermilion (`#9e2230`), and warm champagne bronze gold (`#d4b483`).
- **Botanical Motif System**: Cohesive line-art silhouettes (rose, tulip, lily) across `motifs.js` providing subtle texture without clutter.
- **Typography**: Editorial serif (*Cormorant Garamond*), structural monospace (*Space Mono*), and human touch (*Karla*, *Caveat*).
- **Textures**: Hairline borders (`1px`), subtle film grain, and nocturnal vignette. Zero generic glassmorphism or floating rainbow gradients.
- **Corner Radii**: Architectural `2px` precision.

---

## Technical Architecture

- **No Build Steps**: Zero npm scripts, bundlers, or toolchains. Pure HTML5, Vanilla CSS, and modern ES modules.
- **Graphics**: Hardware-accelerated WebGL rendered with Three.js (via CDN import maps) and 2D HTML5 canvas particle engines.
- **Privacy & Storage**: 100% client-side `localStorage` vault for wishes and unlocked state. Zero trackers, zero cookies, zero external telemetry.
- **Deployment**: Static drop-in. Ready immediately for GitHub Pages, Netlify, Cloudflare Pages, or static hosting.
