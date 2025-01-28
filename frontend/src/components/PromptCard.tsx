import React from 'react';
import { CheckSquare, Mail, FileText, Brain } from 'lucide-react';
import { styles } from '../styles/components';

interface PromptCardProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const iconMap = {
  CheckSquare,
  Mail,
  FileText,
  Brain,
};

export const PromptCard: React.FC<PromptCardProps> = ({ title, description, icon, onClick }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <button
      onClick={onClick}
      className={styles.promptCard.container}
    >
      <div className={styles.promptCard.iconWrapper}>
        <IconComponent className={styles.promptCard.icon} />
      </div>
      <h3 className={styles.promptCard.title}>{title}</h3>
      <p className={styles.promptCard.description}>{description}</p>
    </button>
  );
};