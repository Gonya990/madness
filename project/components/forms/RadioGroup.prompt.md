A set of mutually-exclusive options.

```jsx
<RadioGroup
  defaultValue="public"
  options={[
    { value: 'public', label: 'Public — anyone can view' },
    { value: 'private', label: 'Private — only you' },
  ]}
  onChange={(v) => console.log(v)}
/>
<RadioGroup orientation="horizontal" options={['JS', 'TS', 'Python']} />
```

- Controlled (`value`) or uncontrolled (`defaultValue`). `onChange` receives `(value, event)`.
