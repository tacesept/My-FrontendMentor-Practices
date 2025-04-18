# Tic Tac Toe Game

[Live Demo](https://silly-heliotrope-085a4f.netlify.app/)

A modern implementation of the classic Tic Tac Toe game built with React.

## Project Structure

```
src/
├── components/
│   ├── layout/         # Main layout components
│   │   ├── Game.jsx
│   │   └── Menu.jsx
│   ├── game/          # Game-specific components
│   │   ├── GameBoard.jsx
│   │   ├── GameHeader.jsx
│   │   ├── GameOverMessage.jsx
│   │   ├── RestartMessage.jsx
│   │   └── ScoreBoard.jsx
│   └── ui/            # Reusable UI components
├── styles/            # Global styles
│   └── index.scss
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Features

- Play against CPU or another player
- Score tracking
- Responsive design
- Modern UI/UX

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React
- Vite
- SCSS
- ESLint
