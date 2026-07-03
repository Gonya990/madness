A single transient notification card. Presentational — your app stacks them in a fixed viewport and handles auto-dismiss.

```jsx
<Toast variant="success" title="Saved" onClose={dismiss} />
<Toast
  variant="danger"
  title="Deploy failed"
  action={{ label: 'View logs', onClick: openLogs }}
  onClose={dismiss}
>Exit code 1 in build step.</Toast>
```

- Variants: `neutral | success | danger | warning | info` (each picks a default icon).
- For persistent in-page messages use Alert instead.
