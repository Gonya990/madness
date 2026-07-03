import React from 'react';
import { injectStyle } from '../lib/ui';
import { Icon } from '../components/icon/Icon';
import { Button } from '../components/actions/Button';
import { Badge } from '../components/feedback/Badge';
import { Avatar } from '../components/data-display/Avatar';
import { CodeBlock } from '../components/code/CodeBlock';

const PAGE_CSS = `
.mk-root{ color:var(--color-text); font-family:var(--font-sans); }
.mk-root h1, .mk-root h2, .mk-root h3, .mk-root h4 { font-family:var(--font-display); }
.mk-root section, .mk-foot { padding-left:48px; padding-right:48px; }
.mk-nav{ position:sticky; top:0; z-index:20; background:color-mix(in srgb, var(--color-bg) 85%, transparent); backdrop-filter:saturate(1.4) blur(10px); border-bottom:1px solid var(--color-border); }
.mk-nav__in{ max-width:1200px; margin:0 auto; padding:14px 48px; display:flex; align-items:center; gap:32px; }
.mk-brand{ display:flex; align-items:center; gap:9px; text-decoration:none; color:var(--color-text); }
.mk-brand span{ font-family:var(--font-display); font-weight:700; font-size:20px; letter-spacing:-0.02em; }
.mk-brand i{ font-style:normal; color:var(--color-primary); }
.mk-links{ display:flex; gap:24px; }
.mk-links a{ color:var(--color-text-secondary); text-decoration:none; font-size:14px; font-weight:500; }
.mk-links a:hover{ color:var(--color-text); }
.mk-nav__actions{ margin-left:auto; display:flex; align-items:center; gap:8px; }
.mk-hero{ max-width:1200px; margin:0 auto; padding:64px 48px 48px; display:grid; grid-template-columns:1.02fr 1fr; gap:48px; align-items:center; }
.mk-eyebrow{ margin-bottom:20px; }
.mk-h1{ font-size:clamp(40px,4.6vw,58px); line-height:1.04; letter-spacing:-0.03em; font-weight:700; margin:0 0 20px; }
.mk-h1 em{ font-style:normal; color:var(--color-primary); }
.mk-lead{ font-size:18px; line-height:1.6; color:var(--color-text-secondary); max-width:34em; margin:0 0 28px; }
.mk-cta{ display:flex; gap:12px; flex-wrap:wrap; }
.mk-trust-inline{ display:flex; align-items:center; gap:12px; margin-top:28px; color:var(--color-text-secondary); font-size:14px; }
.mk-faces{ display:flex; }
.mk-faces > *:not(:first-child){ margin-left:-9px; }
.mk-faces :where(span){ box-shadow:0 0 0 2px var(--color-bg); }
.mk-win{ background:var(--code-bg); border-radius:16px; box-shadow:var(--shadow-2xl); overflow:hidden; }
.mk-win__bar{ display:flex; align-items:center; gap:7px; padding:12px 14px; background:#1d1710; }
.mk-dot{ width:11px; height:11px; border-radius:50%; }
.mk-win__tabs{ display:flex; gap:2px; margin-left:14px; }
.mk-win__tab{ background:transparent; border:none; color:#9b8e79; font-family:var(--font-mono); font-size:12px; padding:5px 11px; border-radius:7px; cursor:pointer; }
.mk-win__tab:hover{ color:#e7dcc8; }
.mk-win__tab.is-active{ background:#2a2018; color:#fff; }
.mk-win .uc-code{ border:0; border-radius:0; }
.mk-win__run{ display:flex; align-items:center; justify-content:space-between; padding:11px 16px; background:#1d1710; border-top:1px solid #2a2018; font-family:var(--font-mono); font-size:12px; }
.mk-run-ok{ display:inline-flex; align-items:center; gap:6px; color:var(--green-400); }
.mk-run-url{ color:#9b8e79; }
.mk-trust{ max-width:1200px; margin:0 auto; padding:24px 48px 40px; text-align:center; }
.mk-trust p{ font-size:13px; color:var(--color-text-muted); letter-spacing:.04em; margin:0 0 18px; }
.mk-logos{ display:flex; justify-content:center; gap:44px; flex-wrap:wrap; }
.mk-logo{ font-family:var(--font-display); font-weight:700; font-size:22px; color:var(--color-text-muted); opacity:.7; letter-spacing:-0.01em; text-transform:lowercase; }
.mk-features{ max-width:1200px; margin:0 auto; padding:56px 48px; }
.mk-sec-head{ text-align:center; max-width:620px; margin:0 auto 44px; display:flex; flex-direction:column; align-items:center; gap:14px; }
.mk-sec-head h2{ font-size:38px; letter-spacing:-0.025em; font-weight:700; margin:0; }
.mk-sec-head p{ font-size:17px; color:var(--color-text-secondary); margin:0; line-height:1.5; }
.mk-feat-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.mk-feat{ background:var(--color-surface); border:1px solid var(--color-border); border-radius:var(--radius-xl); padding:24px; box-shadow:var(--shadow-xs); transition:transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base); }
.mk-feat:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
.mk-feat__icon{ width:46px; height:46px; border-radius:12px; background:var(--color-primary-subtle); color:var(--color-primary); display:inline-flex; align-items:center; justify-content:center; margin-bottom:16px; }
.mk-feat h3{ font-size:18px; font-weight:700; margin:0 0 7px; letter-spacing:-0.01em; }
.mk-feat p{ font-size:14px; color:var(--color-text-secondary); line-height:1.55; margin:0; }
.mk-stats{ max-width:1100px; margin:0 auto; padding:36px 48px 64px; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.mk-stat{ text-align:center; }
.mk-stat__num{ font-family:var(--font-display); font-size:44px; font-weight:700; letter-spacing:-0.03em; color:var(--color-primary); line-height:1; }
.mk-stat__label{ font-size:14px; color:var(--color-text-secondary); margin-top:8px; }
.mk-cta-band{ padding:0 48px 64px; }
.mk-cta-band__in{ max-width:1100px; margin:0 auto; background:linear-gradient(135deg, #2a2018, #15110C); border-radius:24px; padding:56px 40px; text-align:center; color:#fff; }
.mk-cta-band__in h2{ font-size:38px; letter-spacing:-0.025em; font-weight:700; margin:0 0 10px; }
.mk-cta-band__in p{ font-size:17px; color:#cbbfa6; margin:0 0 26px; }
.mk-cta-band .mk-cta{ justify-content:center; }
.mk-foot{ border-top:1px solid var(--color-border); background:var(--color-surface); }
.mk-foot__in{ max-width:1200px; margin:0 auto; padding:48px; display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:32px; }
.mk-foot__brand p{ font-size:14px; color:var(--color-text-secondary); line-height:1.5; margin:14px 0 16px; max-width:26em; }
.mk-foot__social{ display:flex; gap:8px; }
.mk-foot__social a{ width:36px; height:36px; border-radius:9px; border:1px solid var(--color-border); display:inline-flex; align-items:center; justify-content:center; color:var(--color-text-secondary); }
.mk-foot__social a:hover{ background:var(--color-surface-2); color:var(--color-text); }
.mk-foot__col h4{ font-size:13px; font-weight:700; margin:0 0 14px; }
.mk-foot__col a{ display:block; font-size:14px; color:var(--color-text-secondary); text-decoration:none; padding:5px 0; }
.mk-foot__col a:hover{ color:var(--color-primary); }
.mk-foot__bar{ max-width:1200px; margin:0 auto; padding:18px 48px; border-top:1px solid var(--color-border); display:flex; justify-content:space-between; font-size:13px; color:var(--color-text-muted); }
@media (max-width:1080px){ .mk-hero{ grid-template-columns:1fr; } .mk-feat-grid{ grid-template-columns:repeat(2,1fr); } .mk-stats{ grid-template-columns:repeat(2,1fr); } .mk-foot__in{ grid-template-columns:1fr 1fr; } }
`;

const NAVLINKS = ['Продукт', 'Решения', 'Цены', 'Документация', 'Блог'];

const SAMPLES: Record<string, { label: string; lang: string; code: string }> = {
  ts: { label: 'TypeScript', lang: 'ts', code: `import { serve } from '@unicode/sdk';

serve({ port: 8080 }, async (req) => {
  const { id } = req.params;
  const user = await db.users.find(id);
  return Response.json(user);
});` },
  py: { label: 'Python', lang: 'python', code: `from unicode import serve

@serve(port=8080)
async def handler(req):
    user = await db.users.find(req.params["id"])
    return json(user)` },
  go: { label: 'Go', lang: 'js', code: `package main

import "unicode/sdk"

func main() {
  sdk.Serve(8080, func(r *sdk.Req) any {
    return db.Users.Find(r.Param("id"))
  })
}` },
};

const FEATURES = [
  { icon: 'mouse-pointer-click', title: 'Редактор в один клик', desc: 'Открывайте полноценную IDE в браузере — без установки. Дерево файлов, терминал, live-превью.' },
  { icon: 'users', title: 'Совместная работа', desc: 'Пишите код вместе в реальном времени. Курсоры, комментарии и ревью — встроены.' },
  { icon: 'rocket', title: 'Деплой в один шаг', desc: 'Из редактора в продакшен за секунды. Превью-окружения на каждый пуш.' },
  { icon: 'box', title: 'Любая среда', desc: 'Node, Python, Go, Rust, Bun и десятки других. Песочница стартует мгновенно.' },
  { icon: 'sparkles', title: 'AI-ассистент', desc: 'Подсказки, объяснения и рефакторинг прямо в потоке письма кода.' },
  { icon: 'book-open', title: 'Учись на практике', desc: 'Интерактивные курсы и задачи в той же среде, где вы пишете боевой код.' },
];

const STATS = [
  { num: '2 млн+', label: 'разработчиков' },
  { num: '40+', label: 'сред выполнения' },
  { num: '4.2с', label: 'среднее время сборки' },
  { num: '99.98%', label: 'аптайм' },
];

const LOGOS = ['acme', 'globex', 'initech', 'umbrella', 'hooli', 'piedpiper'];

function MkNav() {
  return (
    <header className="mk-nav">
      <div className="mk-nav__in">
        <a className="mk-brand" href="#"><img src="/assets/logo-mark.svg" width="30" height="30" alt="UniCode" /><span>Uni<i>Code</i></span></a>
        <nav className="mk-links">
          {NAVLINKS.map((l) => <a key={l} href="#">{l}</a>)}
        </nav>
        <div className="mk-nav__actions">
          <Button variant="ghost" size="sm">Войти</Button>
          <Button size="sm" rightIcon="arrow-right">Начать бесплатно</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [tab, setTab] = React.useState('ts');
  const s = SAMPLES[tab];
  return (
    <section className="mk-hero">
      <div className="mk-hero__copy">
        <div className="mk-eyebrow"><Badge variant="primary" leftIcon="sparkles">Новое — AI-ассистент</Badge></div>
        <h1 className="mk-h1">Пиши, запускай и <em>деплой</em> код — откуда угодно</h1>
        <p className="mk-lead">UniCode — браузерная среда для разработки. Откройте редактор в один клик, запустите любой стек и выкатывайте в продакшен вместе с командой.</p>
        <div className="mk-cta">
          <Button size="lg" leftIcon="play">Открыть редактор</Button>
          <Button size="lg" variant="secondary" leftIcon="github">Войти через GitHub</Button>
        </div>
        <div className="mk-trust-inline">
          <div className="mk-faces">
            {['Ада', 'Грейс', 'Линус', 'Маргарет'].map((n, i) => <Avatar key={n} name={n} size={30} color={['var(--coral-500)', 'var(--blue-500)', 'var(--amber-500)', 'var(--green-500)'][i]} />)}
          </div>
          <span>2 млн+ разработчиков уже с нами</span>
        </div>
      </div>
      <div className="mk-hero__visual">
        <div className="mk-win">
          <div className="mk-win__bar">
            <span className="mk-dot" style={{ background: '#F4522D' }} /><span className="mk-dot" style={{ background: '#E8A23D' }} /><span className="mk-dot" style={{ background: '#1F9D55' }} />
            <div className="mk-win__tabs">
              {Object.entries(SAMPLES).map(([k, v]) => (
                <button key={k} className={'mk-win__tab' + (tab === k ? ' is-active' : '')} onClick={() => setTab(k)}>{v.label}</button>
              ))}
            </div>
          </div>
          <CodeBlock key={tab} language={s.lang} copy={false} dark code={s.code} />
          <div className="mk-win__run">
            <span className="mk-run-ok"><Icon name="circle-check" size={14} /> Развёрнуто за 4.2с</span>
            <span className="mk-run-url">uni.dev/acme</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="mk-trust">
      <p>Команды по всему миру строят на UniCode</p>
      <div className="mk-logos">
        {LOGOS.map((l) => <span key={l} className="mk-logo">{l}</span>)}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="mk-features">
      <div className="mk-sec-head">
        <Badge variant="neutral">Возможности</Badge>
        <h2>Всё для разработки — в одной вкладке</h2>
        <p>От первой строки кода до продакшена. Без локального окружения и настройки.</p>
      </div>
      <div className="mk-feat-grid">
        {FEATURES.map((f) => (
          <div className="mk-feat" key={f.title}>
            <div className="mk-feat__icon"><Icon name={f.icon} size={22} /></div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MkStats() {
  return (
    <section className="mk-stats">
      {STATS.map((s) => (
        <div className="mk-stat" key={s.label}>
          <div className="mk-stat__num">{s.num}</div>
          <div className="mk-stat__label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}

function CTA() {
  return (
    <section className="mk-cta-band">
      <div className="mk-cta-band__in">
        <h2>Откройте редактор. Прямо сейчас.</h2>
        <p>Бесплатный тариф навсегда. Карта не нужна.</p>
        <div className="mk-cta">
          <Button size="lg" leftIcon="play">Начать бесплатно</Button>
          <Button size="lg" variant="secondary" rightIcon="arrow-up-right">Связаться с продажами</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols: [string, string[]][] = [
    ['Продукт', ['Редактор', 'Деплои', 'Команды', 'Цены', 'Что нового']],
    ['Разработчикам', ['Документация', 'API-справочник', 'SDK', 'Статус', 'Шаблоны']],
    ['Компания', ['О нас', 'Блог', 'Вакансии', 'Контакты']],
  ];
  return (
    <footer className="mk-foot">
      <div className="mk-foot__in">
        <div className="mk-foot__brand">
          <a className="mk-brand" href="#"><img src="/assets/logo-mark.svg" width="28" height="28" alt="UniCode" /><span>Uni<i>Code</i></span></a>
          <p>Универсальная платформа для кода. Пиши. Запускай. Деплой.</p>
          <div className="mk-foot__social">
            {['github', 'twitter', 'linkedin'].map((s) => <a key={s} href="#" aria-label={s}><Icon name={s} size={18} /></a>)}
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div className="mk-foot__col" key={h}>
            <h4>{h}</h4>
            {items.map((it) => <a key={it} href="#">{it}</a>)}
          </div>
        ))}
      </div>
      <div className="mk-foot__bar">
        <span>© 2026 UniCode. Все права защищены.</span>
        <span>Конфиденциальность · Условия · Cookie</span>
      </div>
    </footer>
  );
}

export function MarketingPage() {
  injectStyle('mk-page', PAGE_CSS);
  return (
    <div className="mk-root">
      <MkNav />
      <Hero />
      <Trust />
      <Features />
      <MkStats />
      <CTA />
      <Footer />
    </div>
  );
}
