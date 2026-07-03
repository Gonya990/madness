The UniCode logo — mark, wordmark, or the full lockup. Use in headers, nav, footers, splash screens, decks.

```jsx
<Logo />                         {/* full lockup */}
<Logo variant="mark" size={32}/> {/* squircle mark only */}
<Logo variant="wordmark" />      {/* "UniCode" wordmark only */}
```

- The mark is always coral; the wordmark's "Uni" follows `--color-text` (so it works on light & dark), "Code" stays coral.
- `size` is the mark height in px; the wordmark scales from it.
- ⚠️ Placeholder mark — swap for the official asset when it exists.
