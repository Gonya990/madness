import React from 'react';
import { injectStyle, cx } from '../../lib/ui';
import { Icon } from '../icon/Icon';

const CSS = `
.uc-crumbs{ display:flex; align-items:center; gap:6px; font-size:var(--text-sm); color:var(--color-text-secondary); flex-wrap:wrap; }
.uc-crumbs__item{ display:inline-flex; align-items:center; gap:6px; color:var(--color-text-secondary); text-decoration:none; transition:color var(--dur-fast); }
.uc-crumbs__item:hover{ color:var(--color-text); }
.uc-crumbs__item--current{ color:var(--color-text); font-weight:var(--weight-medium); }
.uc-crumbs__sep{ color:var(--color-text-muted); display:inline-flex; }
`;

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items = [], className = '', style = {}, ...rest }: BreadcrumbsProps) {
  injectStyle('crumbs', CSS);
  return (
    <nav aria-label="Breadcrumb" className={cx('uc-crumbs', className)} style={style} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const inner = <>{it.icon && <Icon name={it.icon} size={15} />}{it.label}</>;
        return (
          <React.Fragment key={i}>
            {it.href && !last
              ? <a className="uc-crumbs__item" href={it.href}>{inner}</a>
              : <span className={cx('uc-crumbs__item', last && 'uc-crumbs__item--current')} aria-current={last ? 'page' : undefined}>{inner}</span>}
            {!last && <span className="uc-crumbs__sep"><Icon name="chevron-right" size={15} /></span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
