# Paydos — Design System

> **Paydos · Shisha & Okey Lounge.** A black-and-silver brand for a hookah lounge: dark, moody, expensive, calm. The night exhales here.

This repository is the single source of truth for designing anything Paydos — websites, menus, social posts, signage, decks. Link `styles.css` and you inherit the full token system; mount the components from the compiled bundle for ready-made, on-brand UI.

---

## 1 · Brand context

**Paydos** (Turkish for *the break / knocking-off time*) is a **Shisha & Okey Lounge** — a late-night room for hand-packed shisha, a short considered bar, and long tables of **Okey** (the Turkish tile game; the `01` / `60` tiles in the logo are game pieces). It is hospitality, not retail — design it like a **bar / gastronomy** brand, never an e-commerce shop.

The mood is **modern, minimal, high-class and expensive**. Black rooms, low warm light, silver detailing, a drift of purple smoke. Quiet and unhurried.

### Sources used to build this system
- **Logo / brand mark:** the supplied `Paydos — Shisha & Okey Lounge` chrome wordmark (`assets/paydos-logo.png`, trimmed copy `assets/paydos-logo-trim.png`).
- **Design repo referenced:** [`github.com/ivxni/paydos`](https://github.com/ivxni/paydos) — *attached but currently an empty repository (no commits at build time).* The system below was therefore derived from the logo and the brand brief. If/when the repo is populated, explore it to refine tokens and recreate real product screens with higher fidelity.
- **Brief notes:** black / dark-grey backgrounds; silver accent (ideally a chrome gradient); occasional purple accent; lounge photography; must look modern, clean and premium — *no AI-slop, no cheap gradients-everywhere look.*

---

## 2 · Content fundamentals — how Paydos writes

- **Language:** primarily **German** for guest-facing copy (the lounge is German-market), with Turkish brand/product names left intact (*Doppelapfel, Çay, Okey*). Keep German for menus, nav, CTAs.
- **Voice:** warm, calm, a little poetic — an invitation, not a sales pitch. *"Wo der Abend ausatmet."* ("Where the evening exhales.")
- **Person:** address the guest as **du** (informal), never **Sie**. Brand speaks as a quiet host: *"Sammel deine Crew, wir kümmern uns um Kohle und Karte."*
- **Casing:** Display headlines in **sentence case** (the serif does the drama, not capitals). **Eyebrows and labels are UPPER-CASE with wide tracking** — echoing the logo's `SHISHA & OKEY LOUNGE` sub-line. Buttons are upper-case, tracked.
- **Length:** short. One idea per line. Menus are a name, a price, one sentence of description — no paragraphs.
- **Numbers & prices:** European format with a comma — `€14,50`. Set in the mono face for alignment.
- **Emoji:** **never.** Not on-brand. The flavour comes from typography, the silver shine and the Okey-tile motif — not emoji or exclamation marks.
- **Examples of on-brand copy:**
  - Hero: *"Where the night exhales."* / *"Low light, hand-packed bowls and a long table of Okey."*
  - CTA: `Tisch reservieren` · `Zur Karte` · `Tisch sichern`
  - Menu line: *"Doppelapfel — der Klassiker. Langsam, rund, warm. €14,50"*
  - Events: *"Leg eine Partie ein. Mittwochs und freitags liegen die Steine bereit."*

---

## 3 · Visual foundations

### Colour
- **Backgrounds are near-black and cool-neutral** — `--ink-950 #060608` → `--ink-900 #0A0A0C` for the page, stepping up to `--ink-800/750/700` for surfaces. Elevation comes from a *lighter surface + hairline border + ambient shadow*, never from heavy drop shadows alone.
- **Silver is the brand neutral** — a metallic ramp `--silver-50 → 700`. Used for text, hairlines and the signature **chrome gradient** (`--gradient-silver`, a 176° band of `#FDFDFE → #898E97 → #6A6E76`) which is **clipped onto display headings** — this is the "expensive" move. Use it on big serif titles, sparingly.
- **Purple is the smoke accent — used rarely.** `--purple-500 #8B53D9` appears only as an *occasional glow* (a wisp of smoke far in a hero, the tint on an Okey tile) — **never on buttons, badges or primary UI.** Silver carries the brand; purple is a faint atmospheric accent at low opacity. If everything glows, nothing does.
- **Text** is soft white `--text-primary #ECEEF1` (never pure `#FFF`), down through `secondary / muted / faint`.

### Typography
- **Display — Cormorant Garamond.** High-contrast editorial serif, set large (40–112px), often in italic for the emotive line, frequently with the silver gradient clipped on. This carries the "expensive menu / fine hospitality" feel.
- **UI & body — Jost.** Geometric sans whose wide, even strokes echo the `PAYDOS` wordmark. Everything functional: nav, labels, prices, running text. Body 15px / 1.6.
- **Eyebrows & labels — Jost, upper-case, 0.32em tracking** (the sub-wordmark voice).
- **Numerals — Space Grotesk (mono)** for prices, Okey tiles, timers — tabular alignment.
- *Substitution note:* all three are Google Fonts (loaded in `tokens/typography.css`). The supplied logo wordmark itself is a custom chrome lettering — Jost is the closest living-text match, **not** the wordmark font. If you have the original wordmark typeface, send it and we'll add an `@font-face`.

### Spacing, radii, layout
- **4px base grid** (`--space-1…32`).
- **Restrained radii** — premium, not bubbly: chips/buttons ~6px, cards ~14px, full pills only for tags/badges. Sharp-leaning corners read as upscale.
- Content max-width ~1180px; generous vertical rhythm (sections breathe at 72–96px).

### Surfaces — frosted glass
- **Glassmorphism is the core surface language.** Cards, the nav bar, chips, the reservation form and floating labels are all **frosted glass**: a translucent dark fill (`--glass-fill`), a `backdrop-filter: blur()` (`--blur-md`), a hairline border (`--glass-border`) and a top inner highlight (`--glass-highlight`). Use the `.pd-glass` helper or the `Card` component. On hover, interactive glass brightens and lifts 3px.
- **Buttons:** the **primary action is brushed chrome-silver** (`--gradient-silver`, dark ink label) — never purple. The secondary is **frosted glass** (`Button variant="glass"`). Then `outline` and `ghost`. Active filter chips fill with the soft silver gradient.
- **Borders are hairlines** — low-alpha white or a silver line. No thick or coloured-left-border-only cards (that look is banned).
- **Shadows** are dark and ambient (`--shadow-sm…xl`) plus the glass shadow/highlight pair. The signature highlight is now a soft **silver** sheen (`--glow-silver`); purple glow is reserved for rare atmosphere.

### Imagery
- **Real lounge photography ships in `assets/`** — `lounge-bar.jpg` (the illuminated PAYDOS bar), `lounge-okey.jpg` (the Okey-table room), `lounge-purple.jpg` (the purple-lit gaming lounge). Moody, warm-and-purple low light, shot dark enough that white text sits on top comfortably.
- **Always darken for text:** lay a bottom-up protection gradient (`linear-gradient(180deg, rgba(6,6,8,0.05), rgba(6,6,8,0.72))`) over any photo before placing a label, exactly as the `PhotoFrame` does. Frame photos in the glass language — hairline border, glass shadow + highlight.
- The venue's own palette (near-black quilted walls, grey velvet chairs, purple LED, warm pendants) **is** the brand palette — these photos and the token system are the same world.

### Motion
- **Calm and short.** `--dur-base 220ms`, `--ease-out`. Fades and small translates (1–3px lifts), a glow swelling on hover. **No bounce, no spin, no infinite loops.** Press states: a 1px lift settles back; focus rings bloom the purple glow.

---

## 4 · Iconography

- **No bespoke icon set ships in the brand assets** (the empty repo offered none). The system is **deliberately icon-light** — Paydos leans on typography, the silver shine and the **Okey-tile motif** (`OkeyTile` component) rather than UI icons.
- **When icons are genuinely needed** (nav, contact, socials), use **[Lucide](https://lucide.dev)** via CDN — thin 1.5px stroke, rounded caps, which matches the refined hairline aesthetic. Tint them `--text-secondary`, accent with `--purple-400` only for active states. Keep them small and few.
- **Emoji / unicode icons: never.** They cheapen the brand.
- The **logo** is the primary graphic device — use `assets/paydos-logo-trim.png` on near-black backgrounds (the mark sits on black; it blends seamlessly on `--ink-950/900`). Keep clear space ≈ the cap-height of "PAYDOS" around it; don't place it on light fields without a dark plate.

---

## 5 · Index / manifest

**Foundations**
- `styles.css` — the entry point (consumers link this). `@import`s every token file below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`
- `guidelines/*.html` — specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`window.PaydosDesignSystem_45d525.*`)
- `components/buttons/` — **Button** (silver primary / glass / outline / ghost)
- `components/data-display/` — **Badge**, **Tag**, **OkeyTile**
- `components/forms/` — **Input**
- `components/layout/` — **Card**, **SectionHeading**

**UI kits**
- `ui_kits/website/` — the **Paydos lounge website**: interactive Home → Menü → Okey & Events → Reservierung (open `index.html`).

**Brand assets**
- `assets/paydos-logo.png` (full, 2048²) · `assets/paydos-logo-trim.png` (cropped for headers).

**Meta**
- `SKILL.md` — portable skill manifest for Claude Code.
- `_ds_bundle.js`, `_ds_manifest.json` — generated by the compiler (do not edit).

---

## 6 · Using it

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, SectionHeading, OkeyTile } = window.PaydosDesignSystem_45d525;
</script>
```

Then reach for tokens (`var(--gradient-silver)`, `var(--purple-500)`, `var(--space-6)`) for anything bespoke. Keep it dark, keep it quiet, let the silver and the smoke do the talking.
