Text input with optional label, hint, error, and leading icon.

```jsx
<Input label="Project name" placeholder="my-app" />
<Input leftIcon="search" placeholder="Search files…" size="sm" />
<Input label="API key" mono required hint="Starts with uc_" />
<Input label="Email" error="That email is taken" defaultValue="x@y.z" />
```

- `error` both shows the message and turns the border red.
- `mono` swaps to JetBrains Mono — use for keys, paths, IDs.
- Pass any native input attr (`type`, `value`, `onChange`, …). With no label/hint/error it renders the bare `<input>`.
