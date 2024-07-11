import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './context/ThemeContext';
import LanguageContextProvider from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
