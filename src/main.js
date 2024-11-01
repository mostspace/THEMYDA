import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from "src/theme";
import './index.css';

const MainApp = () => {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider mode={mode}>
      <App toggleTheme={toggleTheme} theme={mode} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
);