A styled native `<select>`. Best for short, known option lists.

```jsx
<Select label="Runtime" options={['Node 20', 'Python 3.12', 'Go 1.22']} />
<Select label="Visibility" placeholder="Choose…" options={[
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
]} />
```

- Pass `options` (strings or `{value,label,disabled}`) or your own `<option>` children.
- For multi-select or search, build a custom Menu-based control instead.
