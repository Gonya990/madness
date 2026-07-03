import * as React from 'react';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/** A keyboard key cap for documenting shortcuts. */
export declare function Kbd(props: KbdProps): JSX.Element;
