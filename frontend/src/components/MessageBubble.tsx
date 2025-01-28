import React from 'react';
import { User, Bot } from 'lucide-react';
import { Message } from '../data/chats';
import { styles } from '../styles/components';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={styles.messageBubble.avatar}>
        {isUser ? (
          <User className="w-4 h-4 text-[var(--text-secondary)]" />
        ) : (
          <Bot className="w-4 h-4 text-[var(--accent-color)]" />
        )}
      </div>
      
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[70%]`}>
        <div className={`glass-card p-4 ${isUser ? 'bg-[var(--accent-color)]/5' : ''}`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap text-[var(--text-primary)]">
            {message.content}
          </p>
        </div>
        <span className="text-xs text-[var(--text-secondary)] mt-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};