import React from 'react';
import { Search } from 'lucide-react';
import { styles } from '../styles/components';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className={styles.search.container}>
      <Search className={styles.search.icon} />
      <input
        type="text"
        placeholder="Search chats..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.search.input}
      />
    </div>
  );
};