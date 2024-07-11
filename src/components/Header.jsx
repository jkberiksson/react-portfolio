import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Moon, Sun } from 'react-feather';
import { useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLanguage();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'sv' : 'en'));
  };

  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center'>
        <img
          className='h-20 w-20'
          src='https://sdk.bitmoji.com/render/panel/ffe718ca-8461-4ccc-a192-ffc300e5c946-3faefa3b-12d6-452b-b34d-d6442cf662f6-v1.png?transparent=1&palette=1'
          alt='me'
        />
        <div>
          <h1 className='text-base font-medium'>Jakob Eriksson</h1>
          <h2 className='text-sm font-medium opacity-65'>
            {language === 'en' ? 'Junior Developer' : 'Junior Utvecklare'}
          </h2>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div
          onClick={toggleLanguage}
          className='cursor-pointer p-1 font-medium'>
          {language === 'sv' ? 'EN' : 'SV'}
        </div>
        <div onClick={toggleTheme} className='cursor-pointer'>
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
