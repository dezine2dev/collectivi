import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { styles } from '../styles/components';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={styles.themeToggle.button}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className={styles.themeToggle.icon} />
      ) : (
        <Moon className={styles.themeToggle.icon} />
      )}
    </button>
  );
};