import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Moon, Sun } from 'react-feather';
import { motion } from 'framer-motion';

function Header() {
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLanguage();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'sv' : 'en'));
  };

  const name = 'JakobEriksson';
  const title = 'FrontendDeveloper';

  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center'>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='h-20 w-20'
          src='https://sdk.bitmoji.com/render/panel/ffe718ca-8461-4ccc-a192-ffc300e5c946-3faefa3b-12d6-452b-b34d-d6442cf662f6-v1.png?transparent=1&palette=1'
          alt='me'
        />
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='text-base font-medium'>
            {name}
          </motion.h1>
          <div className=' overflow-hidden'>
            {title.split('').map((letter, idx) => (
              <motion.span
                className='text-sm font-medium opacity-65 inline-block'
                key={idx}
                initial={{ y: '120%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + 0.03 * idx }}>
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='flex items-center gap-4'>
        <div
          onClick={toggleLanguage}
          className='cursor-pointer p-1 font-medium'>
          {language === 'sv' ? 'EN' : 'SV'}
        </div>
        <div onClick={toggleTheme} className='cursor-pointer'>
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
