Status / category chips for the lounge UI.

```jsx
<Badge tone="accent">New</Badge>
<Badge tone="neutral">Vegan</Badge>
<Badge tone="success" solid>Open now</Badge>

<Tag active>Fruchtig</Tag>
<Tag>Minzig</Tag>

<OkeyTile value="01" />
<OkeyTile value="60" color="purple" />
```

`Badge` — tones `neutral | accent | success | warning | danger`, `solid` to fill. `Tag` — selectable pill, pass `active` + `onClick`. `OkeyTile` — chrome game-piece motif, `value` string, `color` tint, `size` sm/md/lg. Use OkeyTile sparingly as brand flavour.
