A small hover/focus tooltip. Wrap one trigger element.

```jsx
<Tooltip label="Run (⌘↵)">
  <IconButton icon="play" label="Run" variant="primary" />
</Tooltip>
<Tooltip label="Copy link" placement="bottom">
  <IconButton icon="link" label="Copy link" />
</Tooltip>
```

- Best for short, supplementary hints — never essential information.
- Placements: `top | bottom | left | right`. Opens on hover and keyboard focus.
