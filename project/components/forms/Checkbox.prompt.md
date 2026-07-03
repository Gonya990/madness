Checkbox with a custom box and Lucide check; supports an indeterminate state.

```jsx
<Checkbox label="Remember this device" defaultChecked />
<Checkbox label="Select all" indeterminate />
<Checkbox label="Disabled" disabled />
```

- Controlled via `checked` + `onChange`, or uncontrolled via `defaultChecked`.
- Omit `label` to render just the box (e.g. in a table header/row).
