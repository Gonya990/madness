import * as React from 'react';

export interface TerminalLine {
  /** Row kind. @default "input" */
  type?: 'input' | 'output' | 'success' | 'error' | 'warning' | 'comment';
  /** Row text. */
  text: React.ReactNode;
}

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: TerminalLine[];
  /** Window title (centered in the bar). @default "bash — unicode" */
  title?: string;
  /** Prompt symbol for input lines. @default "$" */
  prompt?: string;
  /** Optional user@host shown before the prompt (green). */
  promptLabel?: string;
  /** Blinking cursor after the last input line. @default true */
  showCursor?: boolean;
}

/** A faux terminal window — always dark, for hero shots, docs and onboarding. */
export declare function Terminal(props: TerminalProps): JSX.Element;
