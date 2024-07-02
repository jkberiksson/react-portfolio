import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'react-feather';

function Header() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
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
          <h2 className='text-sm font-medium opacity-65'>Junior Developer</h2>
        </div>
      </div>
      <div onClick={toggleTheme} className='cursor-pointer'>
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </div>
    </header>
  );
}

export default Header;
