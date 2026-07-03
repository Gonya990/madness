UniCode's icon primitive — a Lucide glyph rendered inline; use it anywhere the UI needs an icon.

```jsx
<Icon name="play" size={18} />
<Icon name="git-branch" size={16} color="var(--color-text-secondary)" />
```

- `name` is the kebab-case Lucide id (browse at lucide.dev/icons).
- The host page must load the Lucide UMD script from CDN once (see README → Iconography). Without it, icons render empty.
- Default stroke is `2`; UniCode uses `1.75`–`2` for most UI, `2.25` for emphasis.
- Inherits `currentColor` by default, so it tints with surrounding text.
