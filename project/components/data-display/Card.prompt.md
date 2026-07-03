The standard surface container. Compose freely; header/footer are optional slots.

```jsx
<Card title="acme-api" subtitle="Node · updated 2h ago"
      actions={<IconButton icon="more-vertical" label="More" />}>
  <p>Production REST API for the Acme platform.</p>
</Card>

<Card variant="elevated" interactive>Clickable, lifts on hover.</Card>
<Card padding="none">{/* flush media / tables */}</Card>
```

- Variants: `default` (subtle border), `elevated` (shadow, no border), `ghost` (border only).
- `interactive` adds hover-lift + pointer. Control body inset with `padding`.
