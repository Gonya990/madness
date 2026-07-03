/* UniCode — UI-кит: Мобильное приложение
   Два экрана в iOS-фрейме: список проектов (светлый) и мобильный редактор (тёмный). */
const { useState } = React;
const NS = window.UniCodeDesignSystem_7662ea;
const { Icon, Badge, Avatar, CodeBlock } = NS;

const PROJECTS = [
  { name: 'acme-api', lang: 'TypeScript', color: '#2C6FCB', status: 'running', time: '2 ч' },
  { name: 'web-dashboard', lang: 'React', color: '#4A86D6', status: 'building', time: '15 мин' },
  { name: 'ml-pipeline', lang: 'Python', color: '#1F9D55', status: 'running', time: 'вчера' },
  { name: 'edge-cache', lang: 'Rust', color: '#B5351C', status: 'running', time: '5 ч' },
  { name: 'docs-site', lang: 'MDX', color: '#E8A23D', status: 'stopped', time: '3 дня' },
];
const STATUS = {
  running: { variant: 'success', label: 'Работает' },
  building: { variant: 'warning', label: 'Сборка' },
  stopped: { variant: 'neutral', label: 'Стоп' },
};
const FEED = [
  { who: 'Грейс Хоппер', act: 'развернула', what: 'acme-api', when: '4 мин назад', icon: 'rocket', tone: 'var(--green-500)' },
  { who: 'Линус Т', act: 'закоммитил в', what: 'web-dashboard', when: '22 мин назад', icon: 'git-commit-horizontal', tone: 'var(--blue-500)' },
  { who: 'Маргарет Х', act: 'оставила ревью в', what: 'ml-pipeline', when: '1 ч назад', icon: 'message-square', tone: 'var(--coral-500)' },
  { who: 'CI Бот', act: 'собрал', what: 'edge-cache', when: '3 ч назад', icon: 'check', tone: 'var(--green-500)' },
];

const TABS = [
  { id: 'projects', icon: 'folder', label: 'Проекты' },
  { id: 'activity', icon: 'activity', label: 'Активность' },
  { id: 'learn', icon: 'book-open', label: 'Учиться' },
  { id: 'profile', icon: 'user', label: 'Профиль' },
];

function AppHeader({ title, action }) {
  return (
    <div className="m-head">
      <div className="m-head__row">
        <div className="m-brand"><img src="../../assets/logo-mark.svg" width="24" height="24" alt="" /><span>Uni<i>Code</i></span></div>
        {action}
      </div>
      <h1 className="m-title">{title}</h1>
    </div>
  );
}

function ProjectsScreen() {
  const [seg, setSeg] = useState('all');
  return (
    <>
      <AppHeader title="Проекты" action={<button className="m-iconbtn" aria-label="Поиск"><Icon name="search" size={20} /></button>} />
      <div className="m-seg">
        {[['all', 'Все'], ['mine', 'Мои'], ['fav', 'Избранное']].map(([v, l]) => (
          <button key={v} className={'m-seg__btn' + (seg === v ? ' is-active' : '')} onClick={() => setSeg(v)}>{l}</button>
        ))}
      </div>
      <div className="m-list">
        {PROJECTS.map((p) => {
          const st = STATUS[p.status];
          return (
            <div className="m-proj" key={p.name}>
              <span className="m-proj__dot" style={{ background: p.color }} />
              <div className="m-proj__body">
                <strong>{p.name}</strong>
                <span className="m-proj__meta">{p.lang} · обновлён {p.time} назад</span>
              </div>
              <Badge variant={st.variant} dot size="sm">{st.label}</Badge>
            </div>
          );
        })}
      </div>
      <button className="m-fab" aria-label="Новый проект"><Icon name="plus" size={24} strokeWidth={2.4} /></button>
    </>
  );
}

function ActivityScreen() {
  return (
    <>
      <AppHeader title="Активность" action={<button className="m-iconbtn" aria-label="Фильтр"><Icon name="sliders-horizontal" size={20} /></button>} />
      <div className="m-feed">
        {FEED.map((f, i) => (
          <div className="m-feed__item" key={i}>
            <span className="m-feed__icon" style={{ color: f.tone, background: 'color-mix(in srgb, ' + f.tone + ' 14%, transparent)' }}><Icon name={f.icon} size={16} /></span>
            <div className="m-feed__body">
              <p><strong>{f.who}</strong> {f.act} <span className="m-feed__what">{f.what}</span></p>
              <span className="m-feed__when">{f.when}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <AppHeader title="Профиль" action={<button className="m-iconbtn" aria-label="Настройки"><Icon name="settings" size={20} /></button>} />
      <div className="m-profile">
        <Avatar name="Ада Лавлейс" size={72} color="var(--coral-500)" status="online" />
        <h2>Ада Лавлейс</h2>
        <span className="m-profile__handle">@ada · ada@acme.dev</span>
        <div className="m-profile__stats">
          <div><strong>128</strong><span>коммитов</span></div>
          <div><strong>12</strong><span>проектов</span></div>
          <div><strong>34</strong><span>деплоя</span></div>
        </div>
      </div>
      <div className="m-rows">
        {[['credit-card', 'Тариф', 'Pro'], ['users', 'Команда', 'Acme Inc'], ['bell', 'Уведомления', ''], ['moon', 'Тёмная тема', '']].map(([ic, l, d]) => (
          <div className="m-row" key={l}>
            <Icon name={ic} size={18} /><span className="m-row__label">{l}</span>
            {d && <span className="m-row__detail">{d}</span>}
            <Icon name="chevron-right" size={16} />
          </div>
        ))}
      </div>
    </>
  );
}

function TabBar({ tab, setTab }) {
  return (
    <div className="m-tabbar">
      {TABS.map((t) => (
        <button key={t.id} className={'m-tab' + (tab === t.id ? ' is-active' : '')} onClick={() => setTab(t.id)}>
          <Icon name={t.icon} size={22} strokeWidth={tab === t.id ? 2.2 : 1.8} />
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function PhoneApp() {
  const [tab, setTab] = useState('projects');
  return (
    <div className="m-app">
      <div className="m-screen">
        {tab === 'projects' && <ProjectsScreen />}
        {tab === 'activity' && <ActivityScreen />}
        {tab === 'learn' && <ActivityScreen />}
        {tab === 'profile' && <ProfileScreen />}
      </div>
      <TabBar tab={tab} setTab={setTab} />
    </div>
  );
}

function PhoneEditor() {
  return (
    <div className="m-app m-app--dark">
      <div className="m-ehead">
        <button className="m-iconbtn m-iconbtn--d" aria-label="Назад"><Icon name="chevron-left" size={22} /></button>
        <div className="m-ehead__title"><span className="m-proj__dot" style={{ background: '#2C6FCB' }} />index.ts</div>
        <button className="m-runbtn"><Icon name="play" size={15} strokeWidth={2.4} /> Запуск</button>
      </div>
      <div className="m-ecode">
        <CodeBlock language="ts" copy={false} showLineNumbers dark code={`import { serve } from '@unicode/sdk';

serve({ port: 8080 }, async (req) => {
  const { id } = req.params;
  const user = await db.find(id);
  return Response.json(user);
});`} />
      </div>
      <div className="m-console">
        <div className="m-console__bar"><Icon name="terminal" size={14} /> Консоль</div>
        <div className="m-console__line m-c-out">&gt; uni dev — сборка…</div>
        <div className="m-console__line m-c-ok">✓ API слушает :8080</div>
        <div className="m-console__line m-c-mut"># горячая перезагрузка включена</div>
      </div>
    </div>
  );
}

function MobileApp() {
  return (
    <div className="m-stage">
      <div className="m-device">
        <window.IOSDevice>
          <PhoneApp />
        </window.IOSDevice>
        <div className="m-caption">Проекты · светлая</div>
      </div>
      <div className="m-device">
        <window.IOSDevice dark>
          <PhoneEditor />
        </window.IOSDevice>
        <div className="m-caption">Редактор · тёмная</div>
      </div>
    </div>
  );
}

window.MobileApp = MobileApp;
