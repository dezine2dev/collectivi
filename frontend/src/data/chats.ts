export interface Message {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

export interface Chat {
  id: number;
  title: string;
  messages: Message[];
}

export const initialChats: Chat[] = [
  {
    id: 1,
    title: "React State Management",
    messages: []
  },
  {
    id: 2,
    title: "Authentication Implementation",
    messages: [
      {
        id: 4,
        content: "Can you explain how to implement authentication in a React app?",
        sender: 'user',
        timestamp: '2024-03-10 14:30:00'
      },
      {
        id: 5,
        content: "For authentication in React, you have several secure options:\n\n1. JWT (JSON Web Tokens):\n- Store tokens in memory or secure cookies\n- Use interceptors for API requests\n- Implement refresh token logic\n\n2. Auth Providers:\n- Auth0\n- Firebase Authentication\n- Supabase Auth\n\nWould you like a specific example of either approach?",
        sender: 'assistant',
        timestamp: '2024-03-10 14:30:30'
      }
    ]
  },
  {
    id: 3,
    title: "React Performance Tips",
    messages: []
  },
  {
    id: 4,
    title: "Component Architecture",
    messages: []
  },
  {
    id: 5,
    title: "API Integration Best Practices",
    messages: []
  }
];