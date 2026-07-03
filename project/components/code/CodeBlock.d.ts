import * as React from 'react';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Source code (or pass as children). */
  code?: string;
  /** Language for highlighting: js/ts/jsx, python, bash, json, html, css (+ aliases). @default "js" */
  language?: string;
  /** Filename shown in the header bar. */
  filename?: string;
  /** Show a left line-number gutter. @default false */
  showLineNumbers?: boolean;
  /** Show the copy button. @default true */
  copy?: boolean;
  /** 1-based line numbers to highlight. */
  highlightLines?: number[];
  /** Force the dark code theme regardless of page theme (great on light marketing pages). @default false */
  dark?: boolean;
  /** Cap height (scrolls past it). */
  maxHeight?: number | string;
}

/** Syntax-highlighted code block — UniCode's signature surface. */
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
