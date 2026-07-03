import React from 'react';

// UniCode — управление темой. Токены поддерживают тёмный режим через
// атрибут [data-theme="dark"] на корневом <html>. Значение хранится в
// localStorage; при первом заходе берётся системное предпочтение.

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'unicode-theme';

export function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage недоступен — молча продолжаем */
  }
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* игнорируем ошибку записи */
  }
}

/** Хук: текущая тема и функция переключения. Синхронизирован с <html data-theme>. */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = React.useState<Theme>(
    () => (document.documentElement.getAttribute('data-theme') as Theme) || getInitialTheme(),
  );
  const toggle = React.useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      return next;
    });
  }, []);
  return [theme, toggle];
}
