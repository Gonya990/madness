A breadcrumb trail for nested locations (files, docs, settings).

```jsx
<Breadcrumbs items={[
  { label: 'Projects', href: '/projects', icon: 'folder' },
  { label: 'acme-api', href: '/projects/acme-api' },
  { label: 'src/index.ts' },
]} />
```

- The last item renders as the current page (no link). Chevron separators are automatic.
