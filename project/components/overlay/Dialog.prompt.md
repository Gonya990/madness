A modal dialog: overlay, centered panel, scroll-lock, and close on Escape / overlay / button.

```jsx
const [open, setOpen] = React.useState(false);
<Button onClick={() => setOpen(true)}>Delete project</Button>
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Delete acme-api?"
  description="This permanently removes the project and its deployments."
  footer={<>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" leftIcon="trash-2">Delete</Button>
  </>}
/>
```

- You control `open`. Sizes `sm | md | lg`. Put actions in `footer` (right-aligned).
- For toasts/inline messages use Toast/Alert instead — Dialog is for focused, blocking tasks.
