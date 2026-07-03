/* UniCode — UI-кит: Маркетинговый сайт (лендинг) */
const { useState } = React;
const NS = window.UniCodeDesignSystem_7662ea;
const { Icon, Button, Badge, CodeBlock, Avatar } = NS;

const NAVLINKS = ['Продукт', 'Решения', 'Цены', 'Документация', 'Блог'];

const SAMPLES = {
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

function Nav() {
  return (
    <header className="mk-nav">
      <div className="mk-nav__in">
        <a className="mk-brand" href="#"><img src="../../assets/logo-mark.svg" width="30" height="30" alt="UniCode" /><span>Uni<i>Code</i></span></a>
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
  const [tab, setTab] = useState('ts');
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
            {['Ада', 'Грейс', 'Линус', 'Маргарет'].map((n, i) => <Avatar key={n} name={n} size={30} color={['var(--coral-500)','var(--blue-500)','var(--amber-500)','var(--green-500)'][i]} />)}
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

function Stats() {
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
  const cols = [
    ['Продукт', ['Редактор', 'Деплои', 'Команды', 'Цены', 'Что нового']],
    ['Разработчикам', ['Документация', 'API-справочник', 'SDK', 'Статус', 'Шаблоны']],
    ['Компания', ['О нас', 'Блог', 'Вакансии', 'Контакты']],
  ];
  return (
    <footer className="mk-foot">
      <div className="mk-foot__in">
        <div className="mk-foot__brand">
          <a className="mk-brand" href="#"><img src="../../assets/logo-mark.svg" width="28" height="28" alt="UniCode" /><span>Uni<i>Code</i></span></a>
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

function MarketingApp() {
  return (
    <div className="mk-root">
      <Nav />
      <Hero />
      <Trust />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

window.MarketingApp = MarketingApp;
