A faux terminal for hero shots, docs, and onboarding. Always dark.

```jsx
<Terminal
  promptLabel="ada@unicode"
  lines={[
    { text: 'npm create unicode@latest my-app' },
    { type: 'output', text: 'Scaffolding project in ./my-app …' },
    { type: 'success', text: '✓ Done. Run `cd my-app && uni dev`' },
  ]}
/>
```

- `lines` describe rows: `input` (with prompt) or `output | success | error | warning | comment`.
- A blinking cursor follows the last input line. `promptLabel` adds a green `user@host`.
