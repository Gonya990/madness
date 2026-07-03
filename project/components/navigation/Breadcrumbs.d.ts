import * as React from 'react';

export interface Crumb {
  label: React.ReactNode;
  /** Link target; omit (or last item) renders as plain current text. */
  href?: string;
  /** Lucide icon name. */
  icon?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: Crumb[];
}

/** Breadcrumb trail; the final item is the current page. */
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
