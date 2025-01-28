# AI Chat Interface

A modern, glass-morphism styled chat interface built with React, TypeScript, and Tailwind CSS. The application features a beautiful UI with dark/light theme support, real-time chat functionality, and a responsive design.

Live Demo: [https://silly-bubblegum-c8ac96.netlify.app](https://silly-bubblegum-c8ac96.netlify.app)

## Features

- 🎨 Beautiful glass-morphism design
- 🌓 Dark/Light theme support
- 📱 Fully responsive layout
- ⚡ Real-time chat interface
- 🎯 Quick-access prompt templates
- 🔍 Chat search functionality

## Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── ChatButton.tsx   # Chat history item button
│   ├── MessageBubble.tsx # Individual chat message
│   ├── MessageInput.tsx  # Chat input field
│   ├── PromptCard.tsx   # Quick access prompt card
│   ├── SearchBar.tsx    # Chat search functionality
│   └── ThemeToggle.tsx  # Theme switcher
├── contexts/
│   └── ThemeContext.tsx # Theme management
├── data/
│   └── chats.ts        # Chat data and types
├── styles/
│   ├── components.ts   # Component-specific styles
│   └── theme.ts        # Theme variables
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and utilities
```

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Netlify** - Deployment

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```
2. Preview the production build locally:
   ```bash
   npm run preview
   ```

The production build will be available in the `dist` directory.

## Design System

The application uses a custom glass-morphism design system with:

- **Glass Panels**: Semi-transparent containers with blur effects
- **Glass Buttons**: Interactive elements with hover and active states
- **Glass Cards**: Content containers with shine effects
- **Custom Scrollbars**: Themed scrollbars matching the design
- **Dynamic Themes**: Light and dark mode with smooth transitions
- **Gradient Text**: Beautiful text gradients for headings
- **Responsive Layout**: Mobile-first design with sidebar

## Component Architecture

- **Smart Components**: Handle state and business logic (App.tsx)
- **Presentational Components**: Pure UI components (MessageBubble, PromptCard, etc.)
- **Context Providers**: Global state management (ThemeContext)
- **Style Organization**: Centralized style definitions in components.ts

## Contributing

Feel free to submit issues and enhancement requests!
