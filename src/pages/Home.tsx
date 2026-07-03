import React from 'react';
import { Link } from 'react-router-dom';
import { injectStyle } from '../lib/ui';
import { Logo } from '../components/brand/Logo';
import { ThemeToggle } from '../components/brand/ThemeToggle';
import { Icon } from '../components/icon/Icon';

const CSS = `
.home{ position:relative; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:48px 24px; background:var(--color-bg); font-family:var(--font-sans); color:var(--color-text); }
.home__theme{ position:fixed; top:20px; right:20px; z-index:10; }
.home__logo{ margin-bottom:32px; }
.home__title{ font-family:var(--font-display); font-size:clamp(28px,4vw,42px); font-weight:700; letter-spacing:-0.025em; margin:0 0 8px; text-align:center; }
.home__sub{ font-size:16px; color:var(--color-text-secondary); margin:0 0 48px; text-align:center; }
.home__grid{ display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:16px; width:100%; max-width:900px; }
.home__card{ display:flex; flex-direction:column; gap:12px; padding:24px; background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-xl); text-decoration:none; color:var(--color-text); box-shadow:var(--shadow-xs); transition:transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base), border-color var(--dur-base); }
.home__card:hover{ transform:translateY(-4px); box-shadow:var(--shadow-lg); border-color:var(--color-primary); }
.home__card-icon{ width:48px; height:48px; border-radius:14px; background:var(--color-primary-subtle); color:var(--color-primary); display:inline-flex; align-items:center; justify-content:center; }
.home__card-title{ font-family:var(--font-display); font-size:18px; font-weight:700; letter-spacing:-0.01em; margin:0; }
.home__card-desc{ font-size:13px; color:var(--color-text-secondary); line-height:1.5; margin:0; }
.home__card-arrow{ margin-top:auto; color:var(--color-text-muted); }
`;

const SCREENS = [
  { to: '/editor', icon: 'code-2', title: 'Редактор', desc: 'Облачная IDE с файловым деревом, терминалом и превью' },
  { to: '/dashboard', icon: 'layout-dashboard', title: 'Дашборд', desc: 'Главная проектов — статистика, карточки, деплои' },
  { to: '/mobile', icon: 'smartphone', title: 'Мобильное приложение', desc: 'iOS-фреймы — светлый и тёмный варианты' },
  { to: '/marketing', icon: 'megaphone', title: 'Маркетинг', desc: 'Лендинг с героем, возможностями и CTA' },
  { to: '/docs', icon: 'book-open', title: 'Документация', desc: 'Dok-сайт с сайдбаром, контентом и оглавлением' },
];

export function Home() {
  injectStyle('home', CSS);
  return (
    <div className="home">
      <div className="home__theme"><ThemeToggle /></div>
      <div className="home__logo">
        <Logo size={40} />
      </div>
      <h1 className="home__title">UniCode UI Kit</h1>
      <p className="home__sub">25 компонентов · 5 экранов · Vite + React + TypeScript</p>
      <div className="home__grid">
        {SCREENS.map((s) => (
          <Link key={s.to} to={s.to} className="home__card">
            <div className="home__card-icon"><Icon name={s.icon} size={24} /></div>
            <h2 className="home__card-title">{s.title}</h2>
            <p className="home__card-desc">{s.desc}</p>
            <span className="home__card-arrow"><Icon name="arrow-right" size={18} /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
