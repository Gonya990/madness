/* UniCode — UI-кит: Редактор / Плейграунд
   Флагманская браузерная IDE. Компонует примитивы дизайн-системы. */
const { useState, useEffect, useRef } = React;
const NS = window.UniCodeDesignSystem_7662ea;
const { Icon, IconButton, Button, Badge, Avatar, Tabs, Tooltip, CodeBlock, Terminal, Menu } = NS;

/* ---------- Данные проекта ---------- */
const FILES = {
  'src/index.ts': {
    lang: 'ts',
    body: `import { serve } from '@unicode/sdk';
import { router } from './routes';

// Точка входа боевого API
const PORT = Number(process.env.PORT ?? 8080);

serve({ port: PORT }, async (req) => {
  const res = await router.handle(req);
  res.headers.set('x-powered-by', 'unicode');
  return res;
});

console.log(\`API слушает :\${PORT}\`);`,
  },
  'src/routes.ts': {
    lang: 'ts',
    body: `import { Router } from '@unicode/sdk';

export const router = new Router();

router.get('/health', () => Response.json({ ok: true }));

router.get('/users/:id', async (req) => {
  const user = await db.users.find(req.params.id);
  if (!user) return new Response('Не найдено', { status: 404 });
  return Response.json(user);
});`,
  },
  'package.json': {
    lang: 'json',
    body: `{
  "name": "acme-api",
  "version": "2.1.0",
  "type": "module",
  "scripts": {
    "dev": "uni dev",
    "deploy": "uni deploy --prod"
  },
  "dependencies": {
    "@unicode/sdk": "^2.4.0"
  }
}`,
  },
  'README.md': {
    lang: 'text',
    body: `# acme-api

Боевой REST API для платформы Acme.

## Запуск
    uni dev

## Деплой
    uni deploy --prod`,
  },
};

const TREE = [
  { type: 'folder', name: 'src', open: true, children: [
    { type: 'file', name: 'index.ts', path: 'src/index.ts', icon: 'file-code' },
    { type: 'file', name: 'routes.ts', path: 'src/routes.ts', icon: 'file-code' },
  ]},
  { type: 'file', name: 'package.json', path: 'package.json', icon: 'package' },
  { type: 'file', name: 'README.md', path: 'README.md', icon: 'book-open' },
];

const ACTIVITY = [
  { id: 'files', icon: 'files', label: 'Проводник' },
  { id: 'search', icon: 'search', label: 'Поиск' },
  { id: 'git', icon: 'git-branch', label: 'Контроль версий' },
  { id: 'run', icon: 'play', label: 'Запуск и отладка' },
  { id: 'ext', icon: 'package', label: 'Расширения' },
];

/* ---------- Боковая активность ---------- */
function ActivityBar({ active, setActive }) {
  return (
    <div className="ed-activity">
      <div className="ed-activity__top">
        {ACTIVITY.map((a) => (
          <Tooltip key={a.id} label={a.label} placement="right">
            <button
              className={'ed-act' + (active === a.id ? ' is-active' : '')}
              onClick={() => setActive(a.id)}
              aria-label={a.label}
            >
              <Icon name={a.icon} size={22} strokeWidth={1.8} />
            </button>
          </Tooltip>
        ))}
      </div>
      <div className="ed-activity__bot">
        <Tooltip label="Аккаунт" placement="right">
          <button className="ed-act" aria-label="Аккаунт"><Icon name="user" size={22} strokeWidth={1.8} /></button>
        </Tooltip>
        <Tooltip label="Настройки" placement="right">
          <button className="ed-act" aria-label="Настройки"><Icon name="settings" size={22} strokeWidth={1.8} /></button>
        </Tooltip>
      </div>
    </div>
  );
}

/* ---------- Дерево файлов ---------- */
function FileTree({ openPath, onOpen }) {
  const [folders, setFolders] = useState({ src: true });
  const renderNode = (node, depth) => {
    if (node.type === 'folder') {
      const isOpen = folders[node.name];
      return (
        <div key={node.name}>
          <button className="ed-row" style={{ paddingLeft: 8 + depth * 14 }} onClick={() => setFolders((f) => ({ ...f, [node.name]: !f[node.name] }))}>
            <Icon name={isOpen ? 'chevron-down' : 'chevron-right'} size={14} />
            <Icon name={isOpen ? 'folder-open' : 'folder'} size={15} />
            <span>{node.name}</span>
          </button>
          {isOpen && node.children.map((c) => renderNode(c, depth + 1))}
        </div>
      );
    }
    return (
      <button
        key={node.path}
        className={'ed-row ed-row--file' + (openPath === node.path ? ' is-active' : '')}
        style={{ paddingLeft: 12 + depth * 14 }}
        onClick={() => onOpen(node.path)}
      >
        <Icon name={node.icon} size={15} />
        <span>{node.name}</span>
      </button>
    );
  };
  return (
    <div className="ed-sidebar">
      <div className="ed-sidebar__head">
        <span>Проводник</span>
        <div style={{ display: 'flex', gap: 2 }}>
          <IconButton icon="file-plus" label="Новый файл" size="sm" />
          <IconButton icon="refresh-cw" label="Обновить" size="sm" />
        </div>
      </div>
      <div className="ed-sidebar__project">
        <Icon name="chevron-down" size={14} />
        <strong>ACME-API</strong>
      </div>
      <div className="ed-tree">{TREE.map((n) => renderNode(n, 0))}</div>
    </div>
  );
}

/* ---------- Редактор ---------- */
function EditorPane({ tabs, openPath, onOpen, onClose }) {
  const file = FILES[openPath];
  return (
    <div className="ed-main">
      <div className="ed-tabs">
        {tabs.map((p) => (
          <div key={p} className={'ed-tab' + (openPath === p ? ' is-active' : '')} onClick={() => onOpen(p)}>
            <Icon name={p.endsWith('.json') ? 'package' : p.endsWith('.md') ? 'book-open' : 'file-code'} size={14} />
            <span>{p.split('/').pop()}</span>
            <button className="ed-tab__x" aria-label="Закрыть" onClick={(e) => { e.stopPropagation(); onClose(p); }}>
              <Icon name="x" size={13} />
            </button>
          </div>
        ))}
        <div className="ed-tabs__spacer" />
        <div className="ed-tabs__actions">
          <Tooltip label="Разделить редактор"><IconButton icon="columns-2" label="Разделить" size="sm" /></Tooltip>
        </div>
      </div>
      <div className="ed-breadcrumb">
        <Icon name="folder" size={13} /><span>acme-api</span>
        <Icon name="chevron-right" size={13} />
        {openPath.includes('/') && (<><span>src</span><Icon name="chevron-right" size={13} /></>)}
        <span className="is-file">{openPath.split('/').pop()}</span>
      </div>
      <div className="ed-code">
        <CodeBlock key={openPath} code={file.body} language={file.lang} showLineNumbers copy={false} dark />
      </div>
    </div>
  );
}

/* ---------- Правая панель: Консоль / Превью ---------- */
function RightPanel({ running, runLog }) {
  const [tab, setTab] = useState('console');
  return (
    <div className="ed-right">
      <div className="ed-right__head">
        <Tabs variant="pill" value={tab} onChange={setTab} items={[
          { value: 'console', label: 'Консоль', icon: 'terminal' },
          { value: 'preview', label: 'Превью', icon: 'globe' },
        ]} />
        <IconButton icon="maximize-2" label="Развернуть" size="sm" />
      </div>
      <div className="ed-right__body">
        {tab === 'console' ? (
          <Terminal
            title="консоль — acme-api"
            promptLabel="ada@unicode"
            lines={runLog}
          />
        ) : (
          <div className="ed-preview">
            <div className="ed-preview__bar">
              <div className="ed-preview__url"><Icon name="lock" size={12} /> uni.dev/acme</div>
              <IconButton icon="rotate-cw" label="Перезагрузить" size="sm" />
            </div>
            <div className="ed-preview__page">
              <div className="ed-preview__badge">{running ? '● Работает' : '○ Остановлено'}</div>
              <pre className="ed-preview__json">{`{
  "ok": true,
  "service": "acme-api",
  "version": "2.1.0",
  "uptime": "${running ? '0.4с' : '—'}"
}`}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Главное приложение ---------- */
function EditorApp() {
  const [active, setActive] = useState('files');
  const [tabs, setTabs] = useState(['src/index.ts', 'src/routes.ts', 'package.json']);
  const [openPath, setOpenPath] = useState('src/index.ts');
  const [running, setRunning] = useState(false);
  const [runLog, setRunLog] = useState([
    { type: 'comment', text: '# нажмите «Запустить», чтобы стартовать dev-сервер' },
  ]);

  const open = (p) => { setOpenPath(p); if (!tabs.includes(p)) setTabs((t) => [...t, p]); };
  const close = (p) => {
    const next = tabs.filter((x) => x !== p);
    setTabs(next);
    if (openPath === p && next.length) setOpenPath(next[next.length - 1]);
  };

  const run = () => {
    setRunning(true);
    setRunLog([{ type: 'input', text: 'uni dev' }]);
    const steps = [
      { delay: 350, line: { type: 'output', text: '> uni dev — сборка acme-api…' } },
      { delay: 750, line: { type: 'output', text: '  ✓ типы проверены (412мс)' } },
      { delay: 1100, line: { type: 'success', text: '✓ API слушает http://localhost:8080' } },
      { delay: 1450, line: { type: 'comment', text: '# горячая перезагрузка включена — правьте src/ и сохраняйте' } },
    ];
    steps.forEach((s) => setTimeout(() => setRunLog((l) => [...l, s.line]), s.delay));
  };

  return (
    <div className="ed-root">
      {/* Верхняя панель */}
      <header className="ed-topbar">
        <div className="ed-topbar__left">
          <img src="../../assets/logo-mark.svg" width="24" height="24" alt="UniCode" />
          <div className="ed-proj">
            <Menu trigger={<button className="ed-proj__btn">acme-api <Icon name="chevron-down" size={14} /></button>} items={[
              { type: 'heading', label: 'Проект' },
              { label: 'Переименовать', icon: 'pencil' },
              { label: 'Настройки проекта', icon: 'settings' },
              { type: 'separator' },
              { label: 'Удалить проект', icon: 'trash-2', danger: true },
            ]} />
            <Tooltip label="Текущая ветка"><Badge variant="neutral" leftIcon="git-branch">main</Badge></Tooltip>
          </div>
        </div>
        <div className="ed-topbar__center">
          <div className="ed-omni"><Icon name="search" size={14} /> acme-api <span className="ed-omni__hint">⌘K</span></div>
        </div>
        <div className="ed-topbar__right">
          <Button variant="ghost" size="sm" leftIcon="git-commit-horizontal">Коммит</Button>
          <Button variant={running ? 'secondary' : 'primary'} size="sm" leftIcon={running ? 'rotate-cw' : 'play'} onClick={run}>
            {running ? 'Перезапустить' : 'Запустить'}
          </Button>
          <Button variant="secondary" size="sm" leftIcon="rocket">Развернуть</Button>
          <div className="ed-share">
            <div className="ed-collab">
              <Avatar name="Ада Лавлейс" size={26} status="online" color="var(--coral-500)" />
              <Avatar name="Грейс Хоппер" size={26} status="busy" color="var(--blue-500)" />
            </div>
            <Button size="sm" leftIcon="user-plus" variant="subtle">Пригласить</Button>
          </div>
        </div>
      </header>

      {/* Тело */}
      <div className="ed-body">
        <ActivityBar active={active} setActive={setActive} />
        <FileTree openPath={openPath} onOpen={open} />
        <EditorPane tabs={tabs} openPath={openPath} onOpen={setOpenPath} onClose={close} />
        <RightPanel running={running} runLog={runLog} />
      </div>

      {/* Статусбар */}
      <footer className="ed-status">
        <div className="ed-status__left">
          <span className="ed-status__item"><Icon name="git-branch" size={13} /> main</span>
          <span className="ed-status__item"><Icon name={running ? 'circle-check' : 'circle'} size={13} /> {running ? 'готово' : 'простой'}</span>
          <span className="ed-status__item"><Icon name="cloud" size={13} /> синхронизировано</span>
        </div>
        <div className="ed-status__right">
          <span className="ed-status__item">TypeScript</span>
          <span className="ed-status__item">UTF-8</span>
          <span className="ed-status__item">Стр 6, Кол 12</span>
          <span className="ed-status__item"><Icon name="bell" size={13} /></span>
        </div>
      </footer>
    </div>
  );
}

window.EditorApp = EditorApp;
