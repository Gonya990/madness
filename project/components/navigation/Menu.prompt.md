A click-to-open dropdown anchored to any trigger. Closes on outside-click and Escape.

```jsx
<Menu
  trigger={<IconButton icon="more-vertical" label="More" />}
  align="end"
  items={[
    { type: 'heading', label: 'Project' },
    { label: 'Rename', icon: 'pencil', shortcut: 'F2' },
    { label: 'Duplicate', icon: 'copy' },
    { type: 'separator' },
    { label: 'Delete', icon: 'trash-2', danger: true, onClick: del },
  ]}
/>
```

- Items: normal action, `{ type: 'separator' }`, or `{ type: 'heading' }`.
- `align="end"` right-aligns the popover; `placement="up"` opens upward (e.g. footer menus).
