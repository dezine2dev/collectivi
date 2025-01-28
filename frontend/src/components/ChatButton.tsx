import React from 'react';
import { styles } from '../styles/components';

interface ChatButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.chatButton.base} ${
        isActive ? styles.chatButton.active : styles.chatButton.inactive
      }`}
    >
      <div className="relative z-10 flex items-center">
        <span className={`text-sm font-medium ${
          isActive ? styles.chatButton.text.active : styles.chatButton.text.inactive
        }`}>
          {title}
        </span>
      </div>
      {isActive && (
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent
                      animate-pulse" />
      )}
    </button>
  );
};