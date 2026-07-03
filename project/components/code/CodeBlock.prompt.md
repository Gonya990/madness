UniCode's signature code surface — highlighted, with an optional filename bar, line numbers and copy.

```jsx
<CodeBlock language="ts" filename="server.ts" showLineNumbers code={source} />
<CodeBlock language="bash" copy>{`npm i @unicode/sdk`}</CodeBlock>
<CodeBlock language="json" dark code={config} highlightLines={[2, 3]} />
```

- Languages: `js/ts/jsx`, `python`, `bash`, `json`, `html`, `css` (+ common aliases). Unknown languages render as plain text.
- Follows the page theme by default; pass `dark` to force the dark code theme on a light page.
- The highlighter is intentionally lightweight — perfect for specimens and mocks, not a full IDE grammar.
