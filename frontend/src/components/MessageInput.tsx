import React from 'react';
import { Send } from 'lucide-react';
import { styles } from '../styles/components';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, onSubmit }) => {
  const s = styles.input;
  const hasValue = value.trim().length > 0;

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message..."
        className={s.textInput}
      />
      <button
        type="submit"
        disabled={!hasValue}
        className={`${s.button.base} ${hasValue ? s.button.active : s.button.disabled}`}
      >
        <Send className={`w-4 h-4 ${hasValue ? 'text-[var(--accent-color)] group-hover:scale-110' : 'text-[var(--text-secondary)]'} 
                       transition-transform duration-300`} />
      </button>
    </form>
  );
};