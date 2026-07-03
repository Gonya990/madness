import React, { useState } from 'react';
import { Icon } from '../components/icon/Icon';
import { IconButton } from '../components/actions/IconButton';
import { Button } from '../components/actions/Button';
import { Badge } from '../components/feedback/Badge';
import { Avatar } from '../components/data-display/Avatar';
import { Tabs } from '../components/navigation/Tabs';
import { Tooltip } from '../components/feedback/Tooltip';
import { CodeBlock } from '../components/code/CodeBlock';
import { Terminal } from '../components/code/Terminal';
import { Menu } from '../components/navigation/Menu';

const CSS = `
  .ed-root{
    height:100vh; display:grid; grid-template-rows:48px 1fr 26px;
    background:#1A1611; color:#F3ECDD; font-family:var(--font-sans);
    --b:#2A2218; --b2:#352B1F; --bg2:#221D16; --mut:#9b8e79;
  }
  .ed-topbar{ display:flex; align-items:center; gap:16px; padding:0 12px; background:#1F1A13; border-bottom:1px solid var(--b); }
  .ed-topbar__left{ display:flex; align-items:center; gap:12px; }
  .ed-proj{ display:flex; align-items:center; gap:10px; }
  .ed-proj__btn{ display:inline-flex; align-items:center; gap:6px; background:transparent; border:none; color:#F3ECDD; font-family:var(--font-display); font-weight:600; font-size:15px; cursor:pointer; padding:4px 6px; border-radius:7px; white-space:nowrap; }
  .ed-proj__btn:hover{ background:var(--bg2); }
  .ed-topbar__center{ flex:1; display:flex; justify-content:center; }
  .ed-omni{ display:inline-flex; align-items:center; gap:8px; background:#15110C; border:1px solid var(--b); color:var(--mut); font-size:13px; padding:6px 12px; border-radius:8px; min-width:280px; white-space:nowrap; }
  .ed-omni__hint{ margin-left:auto; font-family:var(--font-mono); font-size:11px; background:var(--bg2); padding:1px 6px; border-radius:5px; }
  .ed-topbar__right{ display:flex; align-items:center; gap:8px; }
  .ed-share{ display:flex; align-items:center; gap:10px; margin-left:6px; padding-left:12px; border-left:1px solid var(--b); }
  .ed-collab{ display:flex; }
  .ed-collab > *:not(:first-child){ margin-left:-8px; }
  .ed-body{ display:grid; grid-template-columns:52px 234px 1fr 384px; min-height:0; }
  .ed-activity{ background:#15110C; border-right:1px solid var(--b); display:flex; flex-direction:column; justify-content:space-between; padding:8px 0; }
  .ed-activity__top, .ed-activity__bot{ display:flex; flex-direction:column; align-items:center; gap:4px; }
  .ed-act{ width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center; background:transparent; border:none; color:var(--mut); cursor:pointer; border-radius:9px; position:relative; transition:color .12s, background .12s; }
  .ed-act:hover{ color:#F3ECDD; background:var(--bg2); }
  .ed-act.is-active{ color:var(--coral-400); }
  .ed-act.is-active::before{ content:""; position:absolute; left:-8px; top:9px; bottom:9px; width:3px; border-radius:0 3px 3px 0; background:var(--coral-500); }
  .ed-sidebar{ background:#1A1611; border-right:1px solid var(--b); display:flex; flex-direction:column; min-height:0; }
  .ed-sidebar__head{ display:flex; align-items:center; justify-content:space-between; padding:11px 8px 8px 14px; font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--mut); }
  .ed-sidebar__head .uc-iconbtn{ color:var(--mut); }
  .ed-sidebar__project{ display:flex; align-items:center; gap:6px; padding:6px 14px; font-family:var(--font-display); font-size:12px; letter-spacing:.04em; color:#cbbfa6; }
  .ed-tree{ overflow-y:auto; padding:2px 6px 12px; }
  .ed-row{ display:flex; align-items:center; gap:7px; width:100%; background:transparent; border:none; color:#d7ccb6; font-family:var(--font-sans); font-size:13px; cursor:pointer; padding:5px 8px; border-radius:7px; text-align:left; }
  .ed-row:hover{ background:var(--bg2); }
  .ed-row--file.is-active{ background:#2a2117; color:#fff; }
  .ed-main{ display:flex; flex-direction:column; min-width:0; background:#15110C; }
  .ed-tabs{ display:flex; align-items:stretch; background:#1A1611; border-bottom:1px solid var(--b); height:40px; }
  .ed-tab{ display:inline-flex; align-items:center; gap:8px; padding:0 12px; font-size:13px; color:var(--mut); cursor:pointer; border-right:1px solid var(--b); position:relative; white-space:nowrap; }
  .ed-tab:hover{ color:#e7dcc8; }
  .ed-tab.is-active{ background:#15110C; color:#fff; }
  .ed-tab.is-active::before{ content:""; position:absolute; top:0; left:0; right:0; height:2px; background:var(--coral-500); }
  .ed-tab__x{ display:inline-flex; background:transparent; border:none; color:inherit; cursor:pointer; opacity:.55; padding:2px; border-radius:4px; }
  .ed-tab__x:hover{ opacity:1; background:var(--b2); }
  .ed-tabs__spacer{ flex:1; }
  .ed-tabs__actions{ display:flex; align-items:center; padding:0 6px; }
  .ed-tabs__actions .uc-iconbtn{ color:var(--mut); }
  .ed-breadcrumb{ display:flex; align-items:center; gap:6px; padding:6px 16px; font-size:12px; color:var(--mut); background:#15110C; border-bottom:1px solid #1f1810; }
  .ed-breadcrumb .is-file{ color:#d7ccb6; }
  .ed-code{ flex:1; min-height:0; overflow:hidden; }
  .ed-code .uc-code{ border:0; border-radius:0; height:100%; background:#15110C; }
  .ed-code .uc-code__scroll{ height:100%; overflow-y:auto; }
  .ed-code .uc-code__pre{ font-size:13.5px; line-height:1.65; }
  .ed-right{ background:#1A1611; border-left:1px solid var(--b); display:flex; flex-direction:column; min-width:0; }
  .ed-right__head{ display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border-bottom:1px solid var(--b); }
  .ed-right__head .uc-iconbtn{ color:var(--mut); }
  .ed-right__body{ flex:1; min-height:0; padding:12px; overflow:auto; }
  .ed-right__body .uc-term{ box-shadow:none; }
  .ed-preview{ height:100%; display:flex; flex-direction:column; border:1px solid var(--b); border-radius:10px; overflow:hidden; background:#fff; }
  .ed-preview__bar{ display:flex; align-items:center; gap:8px; padding:7px 10px; background:#f4eee3; border-bottom:1px solid #e3d8c4; }
  .ed-preview__url{ flex:1; display:flex; align-items:center; gap:6px; font-family:var(--font-mono); font-size:11px; color:#75654e; background:#fff; padding:4px 9px; border-radius:6px; border:1px solid #e3d8c4; }
  .ed-preview__page{ flex:1; padding:18px; color:#261e16; }
  .ed-preview__badge{ display:inline-block; font-size:12px; font-weight:600; color:var(--green-600); background:var(--green-50); padding:4px 10px; border-radius:999px; margin-bottom:14px; }
  .ed-preview__json{ margin:0; font-family:var(--font-mono); font-size:12.5px; line-height:1.7; color:#3a2f25; }
  .ed-status{ display:flex; align-items:center; justify-content:space-between; padding:0 12px; background:var(--coral-600); color:#fff; font-size:12px; }
  .ed-status__left, .ed-status__right{ display:flex; align-items:center; gap:14px; }
  .ed-status__item{ display:inline-flex; align-items:center; gap:5px; opacity:.96; }
  ::-webkit-scrollbar{ width:11px; height:11px; }
  ::-webkit-scrollbar-thumb{ background:#3a2f22; border-radius:6px; border:3px solid transparent; background-clip:content-box; }
`;

const FILES: Record<string, { lang: string; body: string }> = {
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

interface TreeNode {
  type: 'folder' | 'file';
  name: string;
  path?: string;
  icon?: string;
  open?: boolean;
  children?: TreeNode[];
}

const TREE: TreeNode[] = [
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

function ActivityBar({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <div className="ed-activity">
      <div className="ed-activity__top">
        {ACTIVITY.map((a) => (
          <Tooltip key={a.id} label={a.label} placement="right">
            <button className={'ed-act' + (active === a.id ? ' is-active' : '')} onClick={() => setActive(a.id)} aria-label={a.label}>
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

function FileTree({ openPath, onOpen }: { openPath: string; onOpen: (p: string) => void }) {
  const [folders, setFolders] = useState<Record<string, boolean>>({ src: true });
  const renderNode = (node: TreeNode, depth: number): React.ReactNode => {
    if (node.type === 'folder') {
      const isOpen = folders[node.name];
      return (
        <div key={node.name}>
          <button className="ed-row" style={{ paddingLeft: 8 + depth * 14 }} onClick={() => setFolders((f) => ({ ...f, [node.name]: !f[node.name] }))}>
            <Icon name={isOpen ? 'chevron-down' : 'chevron-right'} size={14} />
            <Icon name={isOpen ? 'folder-open' : 'folder'} size={15} />
            <span>{node.name}</span>
          </button>
          {isOpen && node.children?.map((c) => renderNode(c, depth + 1))}
        </div>
      );
    }
    return (
      <button key={node.path} className={'ed-row ed-row--file' + (openPath === node.path ? ' is-active' : '')} style={{ paddingLeft: 12 + depth * 14 }} onClick={() => onOpen(node.path!)}>
        <Icon name={node.icon || 'file'} size={15} />
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

function EditorPane({ tabs, openPath, onOpen, onClose }: { tabs: string[]; openPath: string; onOpen: (p: string) => void; onClose: (p: string) => void }) {
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

interface TermLine { type?: 'input' | 'output' | 'success' | 'error' | 'comment'; text: string; }

function RightPanel({ running, runLog }: { running: boolean; runLog: TermLine[] }) {
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
          <Terminal title="консоль — acme-api" promptLabel="ada@unicode" lines={runLog} />
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

export function EditorPage() {
  const [active, setActive] = useState('files');
  const [tabs, setTabs] = useState(['src/index.ts', 'src/routes.ts', 'package.json']);
  const [openPath, setOpenPath] = useState('src/index.ts');
  const [running, setRunning] = useState(false);
  const [runLog, setRunLog] = useState<TermLine[]>([
    { type: 'comment', text: '# нажмите «Запустить», чтобы стартовать dev-сервер' },
  ]);

  const open = (p: string) => { setOpenPath(p); if (!tabs.includes(p)) setTabs((t) => [...t, p]); };
  const close = (p: string) => {
    const next = tabs.filter((x) => x !== p);
    setTabs(next);
    if (openPath === p && next.length) setOpenPath(next[next.length - 1]);
  };

  const run = () => {
    setRunning(true);
    setRunLog([{ type: 'input', text: 'uni dev' }]);
    const steps: { delay: number; line: TermLine }[] = [
      { delay: 350, line: { type: 'output', text: '> uni dev — сборка acme-api…' } },
      { delay: 750, line: { type: 'output', text: '  ✓ типы проверены (412мс)' } },
      { delay: 1100, line: { type: 'success', text: '✓ API слушает http://localhost:8080' } },
      { delay: 1450, line: { type: 'comment', text: '# горячая перезагрузка включена — правьте src/ и сохраняйте' } },
    ];
    steps.forEach((s) => setTimeout(() => setRunLog((l) => [...l, s.line]), s.delay));
  };

  // inject page CSS once
  React.useEffect(() => {
    const el = document.createElement('style');
    el.setAttribute('data-page', 'editor');
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <div className="ed-root">
      <header className="ed-topbar">
        <div className="ed-topbar__left">
          <img src="/assets/logo-mark.svg" width="24" height="24" alt="UniCode" />
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
      <div className="ed-body">
        <ActivityBar active={active} setActive={setActive} />
        <FileTree openPath={openPath} onOpen={open} />
        <EditorPane tabs={tabs} openPath={openPath} onOpen={setOpenPath} onClose={close} />
        <RightPanel running={running} runLog={runLog} />
      </div>
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
