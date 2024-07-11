import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageContextProvider'
    );
  }

  const [language, setLanguage] = context;
  return [language, setLanguage];
};
