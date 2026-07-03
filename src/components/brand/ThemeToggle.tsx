import React from 'react';
import { IconButton } from '../actions/IconButton';
import { useTheme } from '../../lib/theme';

type ThemeToggleProps = Omit<React.ComponentProps<typeof IconButton>, 'icon' | 'label' | 'onClick'>;

/** Переключатель светлой/тёмной темы. Меняет [data-theme] на <html> и запоминает выбор. */
export function ThemeToggle({ variant = 'outline', round = true, ...rest }: ThemeToggleProps) {
  const [theme, toggle] = useTheme();
  const dark = theme === 'dark';
  return (
    <IconButton
      icon={dark ? 'sun' : 'moon'}
      label={dark ? 'Светлая тема' : 'Тёмная тема'}
      variant={variant}
      round={round}
      onClick={toggle}
      {...rest}
    />
  );
}
