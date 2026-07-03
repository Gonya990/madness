An inline callout for contextual, persistent messages (errors, tips, status). For transient pop-ups use Toast.

```jsx
<Alert variant="success" title="Deploy complete">Your app is live at uni.dev/acme.</Alert>
<Alert variant="danger" title="Build failed" onClose={dismiss}>
  Module not found: <code>react-dom</code>.
</Alert>
<Alert variant="warning">You're approaching your compute limit.</Alert>
```

- Variants: `info | success | warning | danger | neutral`. Each picks a default Lucide icon (override via `icon`, hide with `icon={null}`).
- `onClose` renders a dismiss button.
