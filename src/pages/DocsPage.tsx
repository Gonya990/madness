import React from 'react';
import { injectStyle } from '../lib/ui';
import { Icon } from '../components/icon/Icon';
import { IconButton } from '../components/actions/IconButton';
import { Button } from '../components/actions/Button';
import { Alert } from '../components/feedback/Alert';
import { CodeBlock } from '../components/code/CodeBlock';
import { Kbd } from '../components/data-display/Kbd';
import { Input } from '../components/forms/Input';

const PAGE_CSS = `
.dc-root{ height:100vh; display:flex; flex-direction:column; color:var(--color-text); font-family:var(--font-sans); }
.dc-top{ display:flex; align-items:center; gap:20px; padding:11px 24px; border-bottom:1px solid var(--color-border); background:var(--color-surface); flex:0 0 auto; }
.dc-brand{ display:flex; align-items:center; gap:8px; text-decoration:none; color:var(--color-text); }
.dc-brand span{ font-family:var(--font-display); font-weight:700; font-size:18px; letter-spacing:-0.02em; }
.dc-brand i{ font-style:normal; color:var(--color-primary); }
.dc-docs-tag{ font-family:var(--font-mono)!important; font-size:11px!important; font-weight:500!important; letter-spacing:.06em; color:var(--color-text-muted)!important; border-left:1px solid var(--color-border); padding-left:8px; }
.dc-top__search{ position:relative; flex:1; max-width:440px; margin:0 auto; display:flex; align-items:center; }
.dc-kbd{ position:absolute; right:8px; display:flex; gap:3px; pointer-events:none; }
.dc-top__right{ display:flex; align-items:center; gap:10px; }
.dc-ver{ font-family:var(--font-mono); font-size:12px; color:var(--color-text-secondary); background:var(--color-surface-2); border:1px solid var(--color-border); border-radius:7px; padding:5px 8px; cursor:pointer; }
.dc-top__link{ font-size:14px; color:var(--color-text-secondary); text-decoration:none; font-weight:500; }
.dc-top__link:hover{ color:var(--color-text); }
.dc-body{ flex:1; display:grid; grid-template-columns:248px 1fr 220px; min-height:0; }
.dc-side{ border-right:1px solid var(--color-border); overflow-y:auto; padding:22px 14px; }
.dc-side__group{ margin-bottom:22px; }
.dc-side__h{ font-size:12px; font-weight:700; letter-spacing:.04em; color:var(--color-text); text-transform:uppercase; padding:0 10px 8px; }
.dc-side__item{ display:block; width:100%; text-align:left; background:transparent; border:none; cursor:pointer; font-family:var(--font-sans); font-size:14px; color:var(--color-text-secondary); padding:7px 10px; border-radius:8px; border-left:2px solid transparent; }
.dc-side__item:hover{ background:var(--color-surface-2); color:var(--color-text); }
.dc-side__item.is-active{ color:var(--color-primary); background:var(--color-primary-subtle); font-weight:600; }
.dc-content{ overflow-y:auto; padding:32px 56px 80px; max-width:780px; }
.dc-crumbs{ display:flex; align-items:center; gap:7px; font-size:13px; color:var(--color-text-muted); margin-bottom:18px; }
.dc-crumbs a{ color:var(--color-text-secondary); text-decoration:none; }
.dc-content h1{ font-family:var(--font-display); font-size:38px; font-weight:700; letter-spacing:-0.025em; margin:0 0 12px; }
.dc-lead{ font-size:18px; line-height:1.6; color:var(--color-text-secondary); margin:0 0 24px; }
.dc-content h2{ font-family:var(--font-display); font-size:24px; font-weight:700; letter-spacing:-0.015em; margin:38px 0 12px; padding-top:10px; }
.dc-content h3{ font-family:var(--font-display); font-size:18px; font-weight:600; margin:26px 0 10px; }
.dc-content p{ font-size:15.5px; line-height:1.7; color:var(--color-text); margin:0 0 16px; }
.dc-content code{ font-family:var(--font-mono); font-size:0.86em; background:var(--color-surface-2); border:1px solid var(--color-border); padding:1.5px 5px; border-radius:5px; color:var(--coral-700); }
.dc-content .uc-code{ margin:0 0 20px; }
.dc-content .uc-alert{ margin:0 0 20px; }
.dc-cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin:12px 0 28px; }
.dc-next{ display:flex; flex-direction:column; gap:5px; padding:16px; border:1px solid var(--color-border); border-radius:12px; text-decoration:none; color:var(--color-text); background:var(--color-surface); transition:border-color var(--dur-base), box-shadow var(--dur-base), transform var(--dur-base); }
.dc-next:hover{ border-color:var(--color-primary); box-shadow:var(--shadow-md); transform:translateY(-2px); }
.dc-next strong{ font-family:var(--font-display); font-size:14px; }
.dc-next span{ font-size:12.5px; color:var(--color-text-secondary); line-height:1.4; }
.dc-next code{ font-size:11px; }
.dc-pager{ display:flex; justify-content:space-between; gap:14px; margin-top:36px; padding-top:24px; border-top:1px solid var(--color-border); }
.dc-pager__btn{ display:flex; flex-direction:column; gap:4px; padding:14px 18px; border:1px solid var(--color-border); border-radius:12px; text-decoration:none; min-width:200px; }
.dc-pager__btn:hover{ border-color:var(--color-primary); }
.dc-pager__btn span{ font-size:12px; color:var(--color-text-muted); display:inline-flex; align-items:center; gap:5px; }
.dc-pager__btn strong{ font-family:var(--font-display); font-size:15px; color:var(--color-text); }
.dc-pager__btn--next{ text-align:right; }
.dc-pager__btn--next span{ justify-content:flex-end; }
.dc-toc{ border-left:1px solid var(--color-border); overflow-y:auto; padding:32px 20px; }
.dc-toc__h{ font-size:12px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; color:var(--color-text); margin-bottom:12px; }
.dc-toc__item{ display:block; font-size:13px; color:var(--color-text-secondary); text-decoration:none; padding:5px 0 5px 12px; border-left:2px solid var(--color-border); }
.dc-toc__item.is-sub{ padding-left:24px; }
.dc-toc__item:hover{ color:var(--color-text); }
.dc-toc__item.is-active{ color:var(--color-primary); border-left-color:var(--color-primary); font-weight:600; }
.dc-toc__foot{ margin-top:22px; padding-top:16px; border-top:1px solid var(--color-border); display:flex; flex-direction:column; gap:9px; }
.dc-toc__foot a{ display:inline-flex; align-items:center; gap:7px; font-size:13px; color:var(--color-text-secondary); text-decoration:none; }
.dc-toc__foot a:hover{ color:var(--color-primary); }
@media (max-width:1140px){ .dc-body{ grid-template-columns:240px 1fr; } .dc-toc{ display:none; } }
`;

const SIDEBAR = [
  { group: 'Начало', items: [
    { id: 'intro', label: 'Введение' },
    { id: 'quickstart', label: 'Быстрый старт' },
    { id: 'concepts', label: 'Ключевые понятия' },
  ]},
  { group: 'Руководства', items: [
    { id: 'projects', label: 'Проекты и песочницы' },
    { id: 'deploy', label: 'Деплой' },
    { id: 'collab', label: 'Совместная работа' },
    { id: 'env', label: 'Переменные окружения' },
  ]},
  { group: 'Справочник', items: [
    { id: 'cli', label: 'CLI' },
    { id: 'sdk', label: 'SDK' },
    { id: 'api', label: 'REST API' },
  ]},
];

const TOC = [
  { id: 'install', label: 'Установка', lvl: 1 },
  { id: 'first', label: 'Первый проект', lvl: 1 },
  { id: 'run', label: 'Запуск локально', lvl: 2 },
  { id: 'deploy', label: 'Деплой', lvl: 1 },
  { id: 'next', label: 'Что дальше', lvl: 1 },
];

function Topbar() {
  return (
    <header className="dc-top">
      <div className="dc-top__left">
        <a className="dc-brand" href="#"><img src="/assets/logo-mark.svg" width="26" height="26" alt="UniCode" /><span>Uni<i>Code</i></span><span className="dc-docs-tag">Документация</span></a>
      </div>
      <div className="dc-top__search">
        <Input leftIcon="search" placeholder="Поиск по документации…" size="sm" style={{ width: '100%' }} />
        <span className="dc-kbd"><Kbd>⌘</Kbd><Kbd>K</Kbd></span>
      </div>
      <div className="dc-top__right">
        <select className="dc-ver" defaultValue="v2.1"><option>v2.1</option><option>v2.0</option><option>v1.9</option></select>
        <a className="dc-top__link" href="#">Гайды</a>
        <a className="dc-top__link" href="#">API</a>
        <IconButton icon="github" label="GitHub" variant="ghost" />
        <Button size="sm" rightIcon="arrow-up-right">Открыть редактор</Button>
      </div>
    </header>
  );
}

function Sidebar({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <aside className="dc-side">
      {SIDEBAR.map((g) => (
        <div className="dc-side__group" key={g.group}>
          <div className="dc-side__h">{g.group}</div>
          {g.items.map((it) => (
            <button key={it.id} className={'dc-side__item' + (active === it.id ? ' is-active' : '')} onClick={() => setActive(it.id)}>
              {it.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}

function Toc() {
  return (
    <aside className="dc-toc">
      <div className="dc-toc__h">На этой странице</div>
      {TOC.map((t) => (
        <a key={t.id} href={'#' + t.id} className={'dc-toc__item' + (t.lvl === 2 ? ' is-sub' : '') + (t.id === 'install' ? ' is-active' : '')}>{t.label}</a>
      ))}
      <div className="dc-toc__foot">
        <a href="#"><Icon name="pencil" size={13} /> Редактировать страницу</a>
        <a href="#"><Icon name="message-square" size={13} /> Оставить отзыв</a>
      </div>
    </aside>
  );
}

function Content() {
  return (
    <article className="dc-content">
      <div className="dc-crumbs"><a href="#">Документация</a> <Icon name="chevron-right" size={13} /> <a href="#">Начало</a> <Icon name="chevron-right" size={13} /> <span>Быстрый старт</span></div>
      <h1>Быстрый старт</h1>
      <p className="dc-lead">Установите CLI, создайте первый проект и выкатите его в продакшен — за пять минут, не выходя из браузера.</p>

      <Alert variant="info" title="Нужен только браузер">UniCode работает полностью в облаке. Локальная установка CLI опциональна — для тех, кто хочет деплоить из терминала.</Alert>

      <h2 id="install">Установка</h2>
      <p>Установите CLI <code>uni</code> через npm. Поддерживаются macOS, Linux и Windows.</p>
      <CodeBlock language="bash" filename="терминал" dark code={`npm install -g @unicode/cli\n\n# проверьте установку\nuni --version`} />

      <h2 id="first">Первый проект</h2>
      <p>Создайте новый проект из шаблона. UniCode поднимет песочницу с нужной средой выполнения за секунды.</p>
      <CodeBlock language="bash" filename="терминал" dark code={`uni init acme-api --template node-ts\ncd acme-api`} />

      <h3 id="run">Запуск локально</h3>
      <p>Запустите dev-сервер с горячей перезагрузкой. Любая правка в <code>src/</code> применяется мгновенно.</p>
      <CodeBlock language="ts" filename="src/index.ts" showLineNumbers highlightLines={[4]} code={`import { serve } from '@unicode/sdk';\n\nserve({ port: 8080 }, async (req) => {\n  // правьте этот обработчик и сохраняйте — сервер перезагрузится\n  return Response.json({ ok: true });\n});`} />

      <Alert variant="warning" title="Порт занят?">Если порт 8080 уже используется, задайте свой через переменную окружения <code>PORT</code> или флаг <code>--port</code>.</Alert>

      <h2 id="deploy">Деплой</h2>
      <p>Одна команда выкатывает проект в продакшен с превью-URL. Каждый пуш создаёт изолированное окружение.</p>
      <CodeBlock language="bash" filename="терминал" dark code={`uni deploy --prod\n# ✓ Развёрнуто на https://uni.dev/acme за 4.2с`} />

      <h2 id="next">Что дальше</h2>
      <div className="dc-cards">
        <a className="dc-next" href="#"><Icon name="users" size={20} /><strong>Совместная работа</strong><span>Пригласите команду в реальном времени.</span></a>
        <a className="dc-next" href="#"><Icon name="box" size={20} /><strong>Среды выполнения</strong><span>Node, Python, Go, Rust и другие.</span></a>
        <a className="dc-next" href="#"><Icon name="terminal" size={20} /><strong>Справочник CLI</strong><span>Полный список команд <code>uni</code>.</span></a>
      </div>

      <div className="dc-pager">
        <a className="dc-pager__btn" href="#"><span><Icon name="arrow-left" size={15} /> Назад</span><strong>Введение</strong></a>
        <a className="dc-pager__btn dc-pager__btn--next" href="#"><span>Далее <Icon name="arrow-right" size={15} /></span><strong>Ключевые понятия</strong></a>
      </div>
    </article>
  );
}

export function DocsPage() {
  injectStyle('dc-page', PAGE_CSS);
  const [active, setActive] = React.useState('quickstart');
  return (
    <div className="dc-root">
      <Topbar />
      <div className="dc-body">
        <Sidebar active={active} setActive={setActive} />
        <Content />
        <Toc />
      </div>
    </div>
  );
}
