import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials if missing/broken. */
  src?: string;
  /** Full name — used for initials and the title tooltip. */
  name?: string;
  /** Pixel diameter. @default 36 */
  size?: number;
  /** @default "circle" */
  shape?: 'circle' | 'square';
  /** Presence dot. */
  status?: 'online' | 'busy' | 'away' | 'offline';
  /** Background for the initials fallback (text turns white). */
  color?: string;
}

/** User avatar with initials fallback and optional presence status. */
export declare function Avatar(props: AvatarProps): JSX.Element;
