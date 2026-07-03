/* UniCode — UI-кит: Документация */
const { useState } = React;
const NS = window.UniCodeDesignSystem_7662ea;
const { Icon, IconButton, Button, Badge, Alert, CodeBlock, Kbd, Input } = NS;

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
        <a className="dc-brand" href="#"><img src="../../assets/logo-mark.svg" width="26" height="26" alt="UniCode" /><span>Uni<i>Code</i></span><span className="dc-docs-tag">Документация</span></a>
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

function Sidebar({ active, setActive }) {
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
      <CodeBlock language="bash" filename="терминал" dark code={`npm install -g @unicode/cli

# проверьте установку
uni --version`} />

      <h2 id="first">Первый проект</h2>
      <p>Создайте новый проект из шаблона. UniCode поднимет песочницу с нужной средой выполнения за секунды.</p>
      <CodeBlock language="bash" filename="терминал" dark code={`uni init acme-api --template node-ts
cd acme-api`} />

      <h3 id="run">Запуск локально</h3>
      <p>Запустите dev-сервер с горячей перезагрузкой. Любая правка в <code>src/</code> применяется мгновенно.</p>
      <CodeBlock language="ts" filename="src/index.ts" showLineNumbers highlightLines={[4]} code={`import { serve } from '@unicode/sdk';

serve({ port: 8080 }, async (req) => {
  // правьте этот обработчик и сохраняйте — сервер перезагрузится
  return Response.json({ ok: true });
});`} />

      <Alert variant="warning" title="Порт занят?">Если порт 8080 уже используется, задайте свой через переменную окружения <code>PORT</code> или флаг <code>--port</code>.</Alert>

      <h2 id="deploy">Деплой</h2>
      <p>Одна команда выкатывает проект в продакшен с превью-URL. Каждый пуш создаёт изолированное окружение.</p>
      <CodeBlock language="bash" filename="терминал" dark code={`uni deploy --prod
# ✓ Развёрнуто на https://uni.dev/acme за 4.2с`} />

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

function DocsApp() {
  const [active, setActive] = useState('quickstart');
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

window.DocsApp = DocsApp;
