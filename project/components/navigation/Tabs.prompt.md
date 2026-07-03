Tab navigation. It tracks the active value; you render the panel for it.

```jsx
const [tab, setTab] = React.useState('files');
<Tabs
  value={tab}
  onChange={setTab}
  items={[
    { value: 'files', label: 'Files', icon: 'folder' },
    { value: 'issues', label: 'Issues', badge: 4 },
    { value: 'settings', label: 'Settings', icon: 'settings' },
  ]}
/>
{tab === 'files' && <FilesPanel />}
```

- `line` (default, underline) for page-level nav; `pill` (segmented) for compact in-card switches.
