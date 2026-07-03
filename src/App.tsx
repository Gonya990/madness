import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Spinner } from './components/feedback/Spinner';

// Экраны UI-кита грузятся лениво: каждый попадает в отдельный чанк,
// поэтому стартовый бандл остаётся лёгким, а страница подтягивается по переходу.
const EditorPage = React.lazy(() => import('./pages/EditorPage').then((m) => ({ default: m.EditorPage })));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const MobilePage = React.lazy(() => import('./pages/MobilePage').then((m) => ({ default: m.MobilePage })));
const MarketingPage = React.lazy(() => import('./pages/MarketingPage').then((m) => ({ default: m.MarketingPage })));
const DocsPage = React.lazy(() => import('./pages/DocsPage').then((m) => ({ default: m.DocsPage })));

function RouteFallback() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
      <Spinner size={32} label="Загрузка…" />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/mobile" element={<MobilePage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
