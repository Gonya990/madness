The primary UniCode button — use for any action; pick the variant by emphasis.

```jsx
<Button leftIcon="play">Run</Button>                {/* primary */}
<Button variant="secondary">Cancel</Button>
<Button variant="ghost" leftIcon="settings" />
<Button variant="danger" leftIcon="trash-2">Delete</Button>
<Button loading>Saving</Button>
<Button href="/docs" variant="subtle" rightIcon="arrow-up-right">Docs</Button>
```

- Variants: `primary` (coral, the default CTA), `secondary` (bordered surface), `subtle` (sand fill), `ghost` (transparent), `danger` (red — destructive only).
- Sizes `sm | md | lg`. `leftIcon`/`rightIcon` take Lucide names. `loading` shows a spinner and disables.
- One primary per surface. Reserve `danger` for destructive actions.
