import React, { useState } from 'react';
import { Menu, X, Paperclip, Image, Send } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ChatButton } from './components/ChatButton';
import { MessageBubble } from './components/MessageBubble';
import { StatusIndicator } from './components/StatusIndicator';
import { ThemeToggle } from './components/ThemeToggle';
import { PromptCard } from './components/PromptCard';
import { initialChats, type Chat } from './data/chats';
import { styles } from './styles/components';
import { sendMessage } from './services/api';


const commonPrompts = [
  {
    title: 'Write a to-do list',
    description: 'Create a to-do list for a personal project or task',
    icon: 'CheckSquare'
  },
  {
    title: 'Generate an email',
    description: 'Generate an email to reply to a job offer',
    icon: 'Mail'
  },
  {
    title: 'Summarize text',
    description: 'Summarise this article or text for me in one paragraph',
    icon: 'FileText'
  },
  {
    title: 'Explain AI',
    description: 'How does AI work in a technical capacity',
    icon: 'Brain'
  }
];

function App() {
  const [chats] = useState<Chat[]>(initialChats);
  const [currentChat, setCurrentChat] = useState<Chat>(chats[0]);
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace('T', ' ');

    const userMessage = {
      id: Date.now(),
      content: input,
      sender: 'user' as const,
      timestamp,
    };

    setCurrentChat((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
    }));
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessage(input);
      const assistantMessage = {
        id: Date.now(),
        content: response,
        sender: 'assistant' as const,
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
      };

      setCurrentChat((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
      }));
    } catch (error) {
      console.error('Failed to get response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredChats = chats.filter(chat => 
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.layout.container}>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${styles.layout.sidebar} ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="glass-panel h-full p-4 flex flex-col">
          <div className="mb-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="flex-1 overflow-y-auto space-y-6">
            <div>
              <h2 className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider px-4 mb-3">
                Recent Chats
              </h2>
              <div className="space-y-2">
                {filteredChats.map((chat) => (
                  <ChatButton
                    key={chat.id}
                    title={chat.title}
                    isActive={currentChat.id === chat.id}
                    onClick={() => {
                      setCurrentChat(chat);
                      closeSidebar();
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.layout.mainContent}>
        {/* Header */}
        <div className={styles.header.container}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={styles.header.menuButton}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
          <h1 className={styles.header.title}>{currentChat.title}</h1>
          <div className="flex items-center gap-2">
            <StatusIndicator />
            <ThemeToggle />
          </div>
        </div>

        {/* Welcome Section */}
        {currentChat.messages.length === 0 && (
          <div className="flex-1 overflow-y-auto">
            <div className="min-h-full flex flex-col items-center justify-center p-4 md:p-8">
              <div className="text-center mb-8 md:mb-12 space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Hi there,{' '}
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    John
                  </span>
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  What would you like to know?
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Use one of the most common prompts below or use your own to
                  begin
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full px-4">
                {commonPrompts.map((prompt) => (
                  <PromptCard
                    key={prompt.title}
                    title={prompt.title}
                    description={prompt.description}
                    icon={prompt.icon}
                    onClick={() => setInput(prompt.description)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {currentChat.messages.length > 0 && (
          <div className={styles.messages.container}>
            {currentChat.messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        )}

        {/* Input */}
        <div className={styles.input.container}>
          <form onSubmit={handleSubmit} className={styles.input.form}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask whatever you want..."
              className={styles.input.textInput}
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={`${styles.input.button.base} hidden sm:flex`}
                aria-label="Attach file"
              >
                <Paperclip className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>
              <button
                type="button"
                className={`${styles.input.button.base} hidden sm:flex`}
                aria-label="Attach image"
              >
                <Image className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>
              <button
                type="submit"
                disabled={!input.trim()}
                className={`${styles.input.button.base} ${
                  input.trim()
                    ? styles.input.button.active
                    : styles.input.button.disabled
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;