Paydos call-to-action button — silver is the brand, so the primary action is brushed chrome, never purple.

```jsx
<Button variant="primary" size="lg">Tisch reservieren</Button>
<Button variant="glass">Zur Karte</Button>
<Button variant="outline">Events</Button>
<Button variant="ghost" size="sm">Abbrechen</Button>
```

Variants: `primary` (chrome silver, dark ink label), `glass` (frosted translucent with backdrop blur, light label), `outline` (hairline border), `ghost` (text only). Sizes `sm | md | lg`. Labels render upper-case with wide tracking. Supports `iconLeft` / `iconRight`, `fullWidth`, `disabled`. No purple — keep purple for the occasional glow accent only.
