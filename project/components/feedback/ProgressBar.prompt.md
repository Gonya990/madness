A slim progress bar.

```jsx
<ProgressBar value={64} />
<ProgressBar value={3} max={5} size="sm" color="var(--color-success)" />
<ProgressBar indeterminate label="Installing dependencies" />
```

- Determinate via `value`/`max`; `indeterminate` for unknown durations (installs, builds).
