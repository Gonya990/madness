import React from 'react';
import { injectStyle } from '../lib/ui';
import { Icon } from '../components/icon/Icon';
import { Badge } from '../components/feedback/Badge';
import { Avatar } from '../components/data-display/Avatar';
import { CodeBlock } from '../components/code/CodeBlock';

const PAGE_CSS = `
.m-stage{ min-height:100vh; display:flex; align-items:center; justify-content:center; gap:44px; padding:40px; flex-wrap:wrap; font-family:var(--font-sans); background:radial-gradient(900px 600px at 30% 0%, #fbeee3, transparent), var(--color-bg); }
.m-device{ display:flex; flex-direction:column; align-items:center; gap:16px; }
.m-caption{ font-family:var(--font-mono); font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:var(--color-text-muted); }
.m-app{ height:100%; display:flex; flex-direction:column; background:var(--color-bg); color:var(--color-text); }
.m-app--dark{ background:#15110C; color:#F3ECDD; }
.m-screen{ flex:1; overflow-y:auto; padding-bottom:8px; }
.m-head{ padding:54px 20px 6px; }
.m-head__row{ display:flex; align-items:center; justify-content:space-between; }
.m-brand{ display:flex; align-items:center; gap:7px; font-family:var(--font-display); font-weight:700; font-size:16px; }
.m-brand i{ font-style:normal; color:var(--color-primary); }
.m-iconbtn{ width:38px; height:38px; border-radius:50%; border:none; background:var(--color-surface-2); color:var(--color-text); display:inline-flex; align-items:center; justify-content:center; cursor:pointer; }
.m-iconbtn--d{ background:#251e16; color:#F3ECDD; }
.m-title{ font-family:var(--font-display); font-size:30px; font-weight:700; letter-spacing:-0.02em; margin:6px 0 12px; }
.m-seg{ display:flex; gap:6px; padding:0 20px 14px; }
.m-seg__btn{ flex:1; padding:8px; border:none; border-radius:9px; background:var(--color-surface-2); color:var(--color-text-secondary); font-family:var(--font-sans); font-size:13px; font-weight:600; cursor:pointer; }
.m-seg__btn.is-active{ background:var(--color-primary); color:#fff; }
.m-list{ display:flex; flex-direction:column; gap:8px; padding:0 16px; }
.m-proj{ display:flex; align-items:center; gap:12px; background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:13px 14px; box-shadow:var(--shadow-xs); }
.m-proj__dot{ width:10px; height:10px; border-radius:50%; flex:0 0 auto; }
.m-proj__body{ flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
.m-proj__body strong{ font-size:15px; font-family:var(--font-display); font-weight:600; }
.m-proj__meta{ font-size:12px; color:var(--color-text-muted); }
.m-fab{ position:absolute; right:20px; bottom:104px; width:56px; height:56px; border-radius:50%; border:none; background:var(--color-primary); color:#fff; box-shadow:var(--shadow-lg); cursor:pointer; display:inline-flex; align-items:center; justify-content:center; }
.m-feed{ display:flex; flex-direction:column; padding:0 20px; }
.m-feed__item{ display:flex; gap:12px; padding:14px 0; border-bottom:1px solid var(--color-border-subtle); }
.m-feed__icon{ width:34px; height:34px; border-radius:10px; display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto; }
.m-feed__body{ flex:1; }
.m-feed__body p{ margin:0; font-size:14px; line-height:1.45; }
.m-feed__what{ color:var(--color-primary); font-weight:600; }
.m-feed__when{ font-size:12px; color:var(--color-text-muted); }
.m-profile{ display:flex; flex-direction:column; align-items:center; gap:6px; padding:8px 20px 20px; text-align:center; }
.m-profile h2{ font-family:var(--font-display); font-size:22px; font-weight:700; margin:10px 0 0; }
.m-profile__handle{ font-size:13px; color:var(--color-text-muted); }
.m-profile__stats{ display:flex; gap:28px; margin-top:16px; }
.m-profile__stats div{ display:flex; flex-direction:column; }
.m-profile__stats strong{ font-family:var(--font-display); font-size:22px; font-weight:700; }
.m-profile__stats span{ font-size:12px; color:var(--color-text-muted); }
.m-rows{ padding:0 16px; display:flex; flex-direction:column; gap:2px; }
.m-row{ display:flex; align-items:center; gap:13px; padding:14px; border-radius:12px; }
.m-row:hover{ background:var(--color-surface-2); }
.m-row__label{ flex:1; font-size:15px; font-weight:500; }
.m-row__detail{ font-size:14px; color:var(--color-text-muted); }
.m-tabbar{ display:flex; padding:8px 8px 30px; background:color-mix(in srgb, var(--color-surface) 80%, transparent); backdrop-filter:blur(12px); border-top:1px solid var(--color-border); }
.m-tab{ flex:1; display:flex; flex-direction:column; align-items:center; gap:3px; background:transparent; border:none; cursor:pointer; color:var(--color-text-muted); font-family:var(--font-sans); font-size:10px; font-weight:600; padding:5px; }
.m-tab.is-active{ color:var(--color-primary); }
.m-ehead{ display:flex; align-items:center; gap:10px; padding:52px 14px 10px; border-bottom:1px solid #2a2018; }
.m-ehead__title{ flex:1; display:flex; align-items:center; gap:8px; font-family:var(--font-mono); font-size:14px; }
.m-runbtn{ display:inline-flex; align-items:center; gap:6px; background:var(--coral-500); color:#fff; border:none; border-radius:8px; padding:7px 12px; font-family:var(--font-sans); font-weight:600; font-size:13px; cursor:pointer; }
.m-ecode{ flex:1; min-height:0; }
.m-ecode .uc-code{ border:0; border-radius:0; height:100%; background:#15110C; }
.m-ecode .uc-code__scroll{ height:100%; }
.m-ecode .uc-code__pre{ font-size:13px; line-height:1.7; }
.m-console{ border-top:1px solid #2a2018; padding:12px 16px 30px; font-family:var(--font-mono); font-size:12.5px; background:#1a1510; }
.m-console__bar{ display:flex; align-items:center; gap:7px; color:#9b8e79; font-family:var(--font-sans); font-size:12px; margin-bottom:8px; }
.m-console__line{ line-height:1.7; }
.m-c-out{ color:#b1a288; } .m-c-ok{ color:var(--green-400); } .m-c-mut{ color:#6e6149; }
`;

const PROJECTS = [
  { name: 'acme-api', lang: 'TypeScript', color: '#2C6FCB', status: 'running', time: '2 ч' },
  { name: 'web-dashboard', lang: 'React', color: '#4A86D6', status: 'building', time: '15 мин' },
  { name: 'ml-pipeline', lang: 'Python', color: '#1F9D55', status: 'running', time: 'вчера' },
  { name: 'edge-cache', lang: 'Rust', color: '#B5351C', status: 'running', time: '5 ч' },
  { name: 'docs-site', lang: 'MDX', color: '#E8A23D', status: 'stopped', time: '3 дня' },
];

const STATUS_MAP: Record<string, { variant: 'success' | 'warning' | 'neutral'; label: string }> = {
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

function IOSStatusBar({ dark = false }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{ display: 'flex', gap: 154, alignItems: 'center', justifyContent: 'center', padding: '21px 24px 19px', boxSizing: 'border-box', position: 'relative', zIndex: 20, width: '100%' }}>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1.5 }}>
        <span style={{ fontFamily: '-apple-system, system-ui', fontWeight: 590, fontSize: 17, lineHeight: '22px', color: c }}>9:41</span>
      </div>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12"><rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/><rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/><rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/><rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/></svg>
        <svg width="17" height="12" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/><path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/><circle cx="8.5" cy="10.5" r="1.5" fill={c}/></svg>
        <svg width="27" height="13" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none"/><rect x="2" y="2" width="20" height="9" rx="2" fill={c}/><path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/></svg>
      </div>
    </div>
  );
}

function IOSDevice({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const width = 390;
  const height = 844;
  return (
    <div style={{ width, height, borderRadius: 48, overflow: 'hidden', position: 'relative', background: dark ? '#000' : '#F2F2F7', boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)', fontFamily: '-apple-system, system-ui, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <IOSStatusBar dark={dark} />
      </div>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60, height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 8, pointerEvents: 'none' }}>
        <div style={{ width: 139, height: 5, borderRadius: 100, background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)' }} />
      </div>
    </div>
  );
}

function AppHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="m-head">
      <div className="m-head__row">
        <div className="m-brand"><img src="/assets/logo-mark.svg" width="24" height="24" alt="" /><span>Uni<i>Code</i></span></div>
        {action}
      </div>
      <h1 className="m-title">{title}</h1>
    </div>
  );
}

function ProjectsScreen() {
  const [seg, setSeg] = React.useState('all');
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
          const st = STATUS_MAP[p.status];
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
            <span className="m-feed__icon" style={{ color: f.tone, background: `color-mix(in srgb, ${f.tone} 14%, transparent)` }}><Icon name={f.icon} size={16} /></span>
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

function TabBar({ tab, setTab }: { tab: string; setTab: (id: string) => void }) {
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
  const [tab, setTab] = React.useState('projects');
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
        <CodeBlock language="ts" copy={false} showLineNumbers dark code={`import { serve } from '@unicode/sdk';\n\nserve({ port: 8080 }, async (req) => {\n  const { id } = req.params;\n  const user = await db.find(id);\n  return Response.json(user);\n});`} />
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

export function MobilePage() {
  injectStyle('m-page', PAGE_CSS);
  return (
    <div className="m-stage">
      <div className="m-device">
        <IOSDevice>
          <PhoneApp />
        </IOSDevice>
        <div className="m-caption">Проекты · светлая</div>
      </div>
      <div className="m-device">
        <IOSDevice dark>
          <PhoneEditor />
        </IOSDevice>
        <div className="m-caption">Редактор · тёмная</div>
      </div>
    </div>
  );
}
