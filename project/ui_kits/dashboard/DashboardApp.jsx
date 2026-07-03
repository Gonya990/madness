/* UniCode — UI-кит: Веб-приложение / Дашборд
   Главная проектов: статистика, список проектов, деплои. */
const { useState } = React;
const NS = window.UniCodeDesignSystem_7662ea;
const { Icon, IconButton, Button, Badge, Avatar, Card, Tabs, Tooltip, Menu, Input, ProgressBar, Dialog } = NS;

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

const STATUS = {
  running: { variant: 'success', dot: true, label: 'Работает' },
  building: { variant: 'warning', dot: true, label: 'Сборка' },
  stopped: { variant: 'neutral', dot: true, label: 'Остановлен' },
};

function Sidebar({ active, setActive }) {
  return (
    <aside className="db-side">
      <div className="db-brand">
        <img src="../../assets/logo-mark.svg" width="28" height="28" alt="UniCode" />
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

function StatCard({ s }) {
  const toneVar = { primary: 'var(--coral-500)', success: 'var(--green-500)', amber: 'var(--amber-500)', blue: 'var(--blue-500)' }[s.tone];
  const toneBg = { primary: 'var(--coral-50)', success: 'var(--green-50)', amber: 'var(--amber-50)', blue: 'var(--blue-50)' }[s.tone];
  return (
    <div className="db-stat">
      <div className="db-stat__icon" style={{ background: toneBg, color: toneVar }}><Icon name={s.icon} size={20} /></div>
      <div className="db-stat__num">{s.value}</div>
      <div className="db-stat__label">{s.label}</div>
      <div className="db-stat__delta"><Icon name="trending-up" size={13} /> {s.delta}</div>
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  const st = STATUS[p.status];
  return (
    <Card interactive className="db-proj" onClick={onOpen}>
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

function DashboardApp() {
  const [active, setActive] = useState('projects');
  const [view, setView] = useState('grid');
  const [dialog, setDialog] = useState(false);
  const [query, setQuery] = useState('');

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
            {filtered.map((p) => <ProjectCard key={p.name} p={p} onOpen={() => setDialog(false)} />)}
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
            {['Node 20', 'Python 3.12', 'Go 1.22', 'Rust', 'Bun 1.1', 'Deno'].map((r, i) => (
              <button key={r} className={'db-runtime' + (i === 0 ? ' is-active' : '')}>
                <Icon name="box" size={16} />{r}
              </button>
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
}

window.DashboardApp = DashboardApp;
