import React from 'react';
import { injectStyle } from '../lib/ui';
import { Icon } from '../components/icon/Icon';
import { IconButton } from '../components/actions/IconButton';
import { Button } from '../components/actions/Button';
import { Badge } from '../components/feedback/Badge';
import { Avatar } from '../components/data-display/Avatar';
import { Card } from '../components/data-display/Card';
import { Tabs } from '../components/navigation/Tabs';
import { Tooltip } from '../components/feedback/Tooltip';
import { Menu } from '../components/navigation/Menu';
import { Input } from '../components/forms/Input';
import { Dialog } from '../components/overlay/Dialog';

const PAGE_CSS = `
.db-root{ height:100vh; display:grid; grid-template-columns:248px 1fr; background:var(--color-bg); color:var(--color-text); font-family:var(--font-sans); }
.db-side{ background:var(--color-surface); border-right:1px solid var(--color-border); display:flex; flex-direction:column; padding:16px 12px; gap:14px; }
.db-brand{ display:flex; align-items:center; gap:9px; padding:4px 8px; }
.db-brand__word{ font-family:var(--font-display); font-weight:700; font-size:19px; letter-spacing:-0.02em; }
.db-brand__word i{ font-style:normal; color:var(--color-primary); }
.db-team__btn{ display:flex; align-items:center; gap:9px; width:100%; background:var(--color-surface-2); border:1px solid var(--color-border); border-radius:10px; padding:8px 10px; cursor:pointer; color:var(--color-text); }
.db-team__btn:hover{ background:var(--color-border-subtle); }
.db-team__ava{ width:24px; height:24px; border-radius:7px; background:var(--color-primary); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-family:var(--font-display); font-weight:700; font-size:13px; }
.db-team__name{ font-weight:600; font-size:14px; }
.db-nav{ display:flex; flex-direction:column; gap:2px; }
.db-nav__item{ display:flex; align-items:center; gap:11px; width:100%; background:transparent; border:none; cursor:pointer; color:var(--color-text-secondary); font-family:var(--font-sans); font-size:14px; font-weight:500; padding:9px 11px; border-radius:9px; text-align:left; transition:background .12s, color .12s; }
.db-nav__item:hover{ background:var(--color-surface-2); color:var(--color-text); }
.db-nav__item.is-active{ background:var(--color-primary-subtle); color:var(--color-primary); font-weight:600; }
.db-side__foot{ margin-top:auto; display:flex; flex-direction:column; gap:10px; }
.db-user{ display:flex; align-items:center; gap:9px; padding:8px; border-radius:11px; background:var(--color-surface-2); }
.db-user__meta{ display:flex; flex-direction:column; min-width:0; flex:1; }
.db-user__meta strong{ font-size:13px; }
.db-user__meta span{ font-size:11px; color:var(--color-text-muted); overflow:hidden; text-overflow:ellipsis; }
.db-main{ display:flex; flex-direction:column; min-width:0; }
.db-head{ display:flex; align-items:flex-start; justify-content:space-between; padding:24px 28px; gap:20px; border-bottom:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 60%, var(--color-bg)); }
.db-title{ font-family:var(--font-display); font-size:28px; font-weight:700; letter-spacing:-0.02em; margin:0; }
.db-sub{ margin:4px 0 0; color:var(--color-text-secondary); font-size:14px; }
.db-head__actions{ display:flex; align-items:center; gap:10px; }
.db-scroll{ flex:1; overflow-y:auto; padding:24px 28px 40px; }
.db-stats{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:24px; }
.db-stat{ background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:16px; box-shadow:var(--shadow-xs); }
.db-stat__icon{ width:38px; height:38px; border-radius:10px; display:inline-flex; align-items:center; justify-content:center; margin-bottom:12px; }
.db-stat__num{ font-family:var(--font-display); font-size:28px; font-weight:700; letter-spacing:-0.02em; line-height:1; }
.db-stat__label{ font-size:13px; color:var(--color-text-secondary); margin-top:4px; }
.db-stat__delta{ display:inline-flex; align-items:center; gap:4px; font-size:12px; color:var(--color-success); margin-top:9px; }
.db-toolbar{ display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
.db-toolbar__right{ display:flex; align-items:center; gap:10px; }
.db-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
.db-list{ display:flex; flex-direction:column; gap:10px; }
.db-list .db-proj{ max-width:none; }
.db-proj .uc-card__body{ display:flex; flex-direction:column; gap:11px; }
.db-proj__top{ display:flex; align-items:center; justify-content:space-between; }
.db-proj__title{ display:flex; align-items:center; gap:8px; font-family:var(--font-display); font-size:16px; font-weight:600; }
.db-proj__dot{ width:9px; height:9px; border-radius:50%; flex:0 0 auto; }
.db-proj__desc{ margin:0; font-size:13px; color:var(--color-text-secondary); line-height:1.5; min-height:38px; }
.db-proj__meta{ display:flex; align-items:center; gap:12px; flex-wrap:wrap; font-size:12px; color:var(--color-text-secondary); }
.db-proj__lang{ display:inline-flex; align-items:center; gap:6px; }
.db-proj__branch{ display:inline-flex; align-items:center; gap:5px; font-family:var(--font-mono); font-size:11px; }
.db-proj__foot{ display:flex; align-items:center; justify-content:space-between; padding-top:11px; border-top:1px solid var(--color-border-subtle); }
.db-collab{ display:flex; }
.db-collab > *:not(:first-child){ margin-left:-7px; }
.db-collab :where(span){ box-shadow:0 0 0 2px var(--color-surface); }
.db-proj__time{ display:inline-flex; align-items:center; gap:5px; font-size:12px; color:var(--color-text-muted); }
.db-runtimes{ display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
.db-runtime{ display:flex; align-items:center; gap:8px; padding:10px 12px; border:1px solid var(--color-border-strong); border-radius:10px; background:var(--color-surface); cursor:pointer; font-family:var(--font-sans); font-size:13px; font-weight:500; color:var(--color-text); }
.db-runtime:hover{ background:var(--color-bg-subtle); }
.db-runtime.is-active{ border-color:var(--color-primary); background:var(--color-primary-subtle); color:var(--color-primary); }
@media (max-width:1180px){ .db-stats{ grid-template-columns:repeat(2,1fr); } .db-grid{ grid-template-columns:repeat(2,1fr); } }
`;

const NAV = [
  { id: 'projects', icon: 'folder', label: 'Проекты' },
  { id: 'deploys', icon: 'rocket', label: 'Деплои' },
  { id: 'templates', icon: 'layout-template', label: 'Шаблоны' },
  { id: 'team', icon: 'users', label: 'Команда' },
  { id: 'usage', icon: 'activity', label: 'Использование' },
  { id: 'billing', icon: 'credit-card', label: 'Оплата' },
];

const STATS = [
  { label: 'Активные проекты', value: '12', delta: '+2 за неделю', icon: 'folder', tone: 'primary' },
  { label: 'Деплои сегодня', value: '34', delta: '+8 к вчера', icon: 'rocket', tone: 'success' },
  { label: 'Время сборки', value: '4.2с', delta: '−0.6с', icon: 'zap', tone: 'amber' },
  { label: 'Участники', value: '6', delta: '2 онлайн', icon: 'users', tone: 'blue' },
];

const PROJECTS = [
  { name: 'acme-api', desc: 'Боевой REST API для платформы Acme', lang: 'TypeScript', langColor: '#2C6FCB', status: 'running', branch: 'main', updated: '2 ч назад', members: ['Ада Лавлейс', 'Грейс Хоппер'] },
  { name: 'web-dashboard', desc: 'Клиентская панель и аналитика', lang: 'React', langColor: '#4A86D6', status: 'building', branch: 'feat/charts', updated: '15 мин назад', members: ['Линус Т'] },
  { name: 'ml-pipeline', desc: 'Обучение моделей и инференс', lang: 'Python', langColor: '#1F9D55', status: 'running', branch: 'main', updated: 'вчера', members: ['Маргарет Х', 'Ада Лавлейс'] },
  { name: 'docs-site', desc: 'Публичная документация и гайды', lang: 'MDX', langColor: '#E8A23D', status: 'stopped', branch: 'main', updated: '3 дня назад', members: ['Грейс Хоппер'] },
  { name: 'edge-cache', desc: 'Слой кеширования на воркерах', lang: 'Rust', langColor: '#B5351C', status: 'running', branch: 'main', updated: '5 ч назад', members: ['Линус Т', 'Маргарет Х'] },
  { name: 'mobile-app', desc: 'Клиент на React Native', lang: 'TypeScript', langColor: '#2C6FCB', status: 'building', branch: 'release/2.1', updated: '1 ч назад', members: ['Ада Лавлейс'] },
];

const STATUS_MAP: Record<string, { variant: 'success' | 'warning' | 'neutral'; dot: boolean; label: string }> = {
  running: { variant: 'success', dot: true, label: 'Работает' },
  building: { variant: 'warning', dot: true, label: 'Сборка' },
  stopped: { variant: 'neutral', dot: true, label: 'Остановлен' },
};

function Sidebar({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <aside className="db-side">
      <div className="db-brand">
        <img src="/assets/logo-mark.svg" width="28" height="28" alt="UniCode" />
        <span className="db-brand__word">Uni<i>Code</i></span>
      </div>
      <div className="db-team">
        <Menu trigger={<button className="db-team__btn"><span className="db-team__ava">A</span><span className="db-team__name">Acme Inc</span><Icon name="chevron-down" size={15} /></button>} items={[
          { type: 'heading', label: 'Команды' },
          { label: 'Acme Inc', icon: 'check' },
          { label: 'Личное', icon: 'user' },
          { type: 'separator' },
          { label: 'Создать команду', icon: 'plus' },
        ]} />
      </div>
      <nav className="db-nav">
        {NAV.map((n) => (
          <button key={n.id} className={'db-nav__item' + (active === n.id ? ' is-active' : '')} onClick={() => setActive(n.id)}>
            <Icon name={n.icon} size={18} strokeWidth={1.9} />
            <span>{n.label}</span>
            {n.id === 'deploys' && <Badge size="sm" variant="primary" style={{ marginLeft: 'auto' }}>3</Badge>}
          </button>
        ))}
      </nav>
      <div className="db-side__foot">
        <button className="db-nav__item"><Icon name="settings" size={18} strokeWidth={1.9} /><span>Настройки</span></button>
        <div className="db-user">
          <Avatar name="Ада Лавлейс" size={32} status="online" color="var(--coral-500)" />
          <div className="db-user__meta"><strong>Ада Лавлейс</strong><span>ada@acme.dev</span></div>
          <IconButton icon="log-out" label="Выйти" size="sm" />
        </div>
      </div>
    </aside>
  );
}

function StatCard({ s }: { s: typeof STATS[0] }) {
  const toneVar: Record<string, string> = { primary: 'var(--coral-500)', success: 'var(--green-500)', amber: 'var(--amber-500)', blue: 'var(--blue-500)' };
  const toneBg: Record<string, string> = { primary: 'var(--coral-50)', success: 'var(--green-50)', amber: 'var(--amber-50)', blue: 'var(--blue-50)' };
  return (
    <div className="db-stat">
      <div className="db-stat__icon" style={{ background: toneBg[s.tone], color: toneVar[s.tone] }}><Icon name={s.icon} size={20} /></div>
      <div className="db-stat__num">{s.value}</div>
      <div className="db-stat__label">{s.label}</div>
      <div className="db-stat__delta"><Icon name="trending-up" size={13} /> {s.delta}</div>
    </div>
  );
}

function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
  const st = STATUS_MAP[p.status];
  return (
    <Card interactive className="db-proj">
      <div className="db-proj__top">
        <div className="db-proj__title">
          <span className="db-proj__dot" style={{ background: p.langColor }} />
          <strong>{p.name}</strong>
        </div>
        <Menu align="end" trigger={<IconButton icon="more-horizontal" label="Ещё" size="sm" />} items={[
          { label: 'Открыть в редакторе', icon: 'code' },
          { label: 'Развернуть', icon: 'rocket' },
          { label: 'Дублировать', icon: 'copy' },
          { type: 'separator' },
          { label: 'Удалить', icon: 'trash-2', danger: true },
        ]} />
      </div>
      <p className="db-proj__desc">{p.desc}</p>
      <div className="db-proj__meta">
        <Badge variant={st.variant} dot={st.dot}>{st.label}</Badge>
        <span className="db-proj__lang"><span className="db-proj__dot" style={{ background: p.langColor }} />{p.lang}</span>
        <span className="db-proj__branch"><Icon name="git-branch" size={13} />{p.branch}</span>
      </div>
      <div className="db-proj__foot">
        <div className="db-collab">
          {p.members.map((m, i) => <Avatar key={i} name={m} size={24} color={i % 2 ? 'var(--blue-500)' : 'var(--coral-500)'} />)}
        </div>
        <span className="db-proj__time"><Icon name="clock" size={13} /> {p.updated}</span>
      </div>
    </Card>
  );
}

export function DashboardPage() {
  injectStyle('db-page', PAGE_CSS);
  const [active, setActive] = React.useState('projects');
  const [view, setView] = React.useState('grid');
  const [dialog, setDialog] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [activeRuntime, setActiveRuntime] = React.useState('Node 20');

  const filtered = PROJECTS.filter((p) => p.name.includes(query) || p.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="db-root">
      <Sidebar active={active} setActive={setActive} />
      <main className="db-main">
        <header className="db-head">
          <div>
            <h1 className="db-title">Проекты</h1>
            <p className="db-sub">12 проектов · 6 участников · команда Acme Inc</p>
          </div>
          <div className="db-head__actions">
            <Input leftIcon="search" placeholder="Поиск проектов…" size="md" value={query} onChange={(e) => setQuery(e.target.value)} style={{ width: 240 }} />
            <Tooltip label="Уведомления"><IconButton icon="bell" label="Уведомления" variant="outline" /></Tooltip>
            <Button leftIcon="plus" onClick={() => setDialog(true)}>Новый проект</Button>
          </div>
        </header>

        <div className="db-scroll">
          <section className="db-stats">
            {STATS.map((s) => <StatCard key={s.label} s={s} />)}
          </section>

          <section className="db-toolbar">
            <Tabs defaultValue="all" items={[
              { value: 'all', label: 'Все', badge: 12 },
              { value: 'mine', label: 'Мои' },
              { value: 'archived', label: 'Архив' },
            ]} />
            <div className="db-toolbar__right">
              <Tabs variant="pill" value={view} onChange={setView} items={[
                { value: 'grid', label: '', icon: 'layout-grid' },
                { value: 'list', label: '', icon: 'list' },
              ]} />
              <Button variant="secondary" size="sm" rightIcon="chevron-down" leftIcon="arrow-down-up">Обновлён</Button>
            </div>
          </section>

          <section className={view === 'grid' ? 'db-grid' : 'db-list'}>
            {filtered.map((p) => <ProjectCard key={p.name} p={p} />)}
          </section>
        </div>
      </main>

      <Dialog
        open={dialog}
        onClose={() => setDialog(false)}
        title="Создать проект"
        description="Запустите свежую песочницу с нужной средой выполнения."
        footer={<>
          <Button variant="secondary" onClick={() => setDialog(false)}>Отмена</Button>
          <Button leftIcon="rocket" onClick={() => setDialog(false)}>Создать проект</Button>
        </>}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Название проекта" placeholder="my-app" defaultValue="новый-сервис" />
          <div className="db-runtimes">
            {['Node 20', 'Python 3.12', 'Go 1.22', 'Rust', 'Bun 1.1', 'Deno'].map((r) => (
              <button key={r} className={'db-runtime' + (activeRuntime === r ? ' is-active' : '')} onClick={() => setActiveRuntime(r)}>
                <Icon name="box" size={16} />{r}
              </button>
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
