import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { applyTheme, getInitialTheme } from './lib/theme';
import './styles/index.css';

// Применяем тему до первого рендера, чтобы не было вспышки светлой темы.
applyTheme(getInitialTheme());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
