User avatar; shows the image, or initials derived from `name` if it's missing or fails to load.

```jsx
<Avatar src="/u/ada.jpg" name="Ada Lovelace" status="online" />
<Avatar name="Grace Hopper" size={28} />
<Avatar name="CI Bot" shape="square" color="var(--color-primary)" />
```

- `status` adds a presence dot (`online | busy | away | offline`).
- For overlapping groups, render several with negative margin in a flex row.
