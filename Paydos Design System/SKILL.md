---
name: paydos-design
description: Use this skill to generate well-branded interfaces and assets for Paydos — Shisha & Okey Lounge, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a dark, silver, high-class hookah-lounge brand.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Paydos · Shisha & Okey Lounge. Hospitality, not retail. Mood: black, silver, modern, minimal, expensive, calm.
- **Entry CSS:** link `styles.css` for all tokens + Google fonts.
- **Components:** load `_ds_bundle.js`, then `const { Button, Card, SectionHeading, Badge, Tag, OkeyTile, Input } = window.PaydosDesignSystem_45d525;` (Card is frosted glass; Button primary is silver.)
- **Non-negotiables:** near-black backgrounds; **frosted-glass surfaces** (translucent + backdrop blur) for cards, nav and chips; silver chrome gradient clipped on display serif headings; **primary buttons are chrome-silver, never purple**; purple (`--purple-500`) only as a rare atmospheric glow; German `du`-voice guest copy; UPPER-CASE tracked eyebrows; mono numerals with `€14,50` format; **no emoji, no bubbly radii, no cheap everywhere-gradients, no purple buttons.**
- **Fonts:** Cormorant Garamond (display serif), Jost (UI/body), Space Grotesk (numerals).
- **Logo:** `assets/paydos-logo-trim.png` on dark backgrounds only.

See `readme.md` for the full content + visual foundations.
