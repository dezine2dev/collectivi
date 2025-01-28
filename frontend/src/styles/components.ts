export const styles = {
  layout: {
    container: 'flex h-screen p-2 sm:p-4 gap-2 sm:gap-4 relative overflow-hidden',
    sidebar: 'fixed md:relative inset-y-0 left-0 z-50 w-[280px] sm:w-80 transform transition-transform duration-300 ease-in-out md:translate-x-0 h-full',
    mainContent: 'flex-1 glass-panel flex flex-col overflow-hidden relative ml-0 md:ml-0'
  },
  
  header: {
    container: 'flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-[var(--glass-border)] bg-[var(--glass-bg)]',
    title: 'text-base sm:text-lg font-medium text-[var(--text-primary)] truncate flex-1 text-center',
    menuButton: 'md:hidden glass-button p-2'
  },

  messages: {
    container: 'flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6',
    timestamp: 'text-xs text-[var(--text-secondary)] mt-1'
  },

  input: {
    container: 'flex-shrink-0 p-2 sm:p-4 border-t border-[var(--glass-border)] bg-[var(--glass-bg)]',
    form: 'flex items-center gap-2 sm:gap-4',
    textInput: 'flex-1 glass-input py-2 sm:py-3 text-sm',
    button: {
      base: 'glass-button p-2 group',
      active: 'hover:bg-[var(--accent-color)]/20 text-[var(--accent-color)]',
      disabled: 'opacity-50 cursor-not-allowed'
    }
  },

  search: {
    container: 'relative group',
    icon: 'absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-color)]',
    input: 'w-full glass-input pl-10 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 text-sm'
  },

  chatButton: {
    base: 'chat-button',
    active: 'active',
    inactive: '',
    text: {
      active: 'text-[var(--accent-color)] font-medium',
      inactive: 'text-[var(--text-secondary)]'
    }
  },

  messageBubble: {
    avatar: 'flex-shrink-0 w-8 h-8 glass-card flex items-center justify-center',
    content: {
      wrapper: 'flex flex-col max-w-[85%] sm:max-w-[70%]',
      bubble: 'glass-card p-3 sm:p-4',
      text: 'text-sm leading-relaxed whitespace-pre-wrap text-[var(--text-primary)]'
    }
  },

  promptCard: {
    container: 'glass-card p-4 sm:p-6 text-left transition-all duration-300 hover:scale-105',
    iconWrapper: 'w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center mb-3 sm:mb-4',
    icon: 'w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-color)]',
    title: 'text-base sm:text-lg font-semibold mb-1 sm:mb-2',
    description: 'text-xs sm:text-sm text-[var(--text-secondary)]'
  },

  themeToggle: {
    button: 'glass-button p-2',
    icon: 'w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-primary)]'
  }
};