import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { useTheme } from './context/ThemeContext';
import CvButton from './components/CvButton';

function App() {
  const [theme] = useTheme();
  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-gray-950 text-white' : ' bg-gray-200 text-black'
      } min-h-screen`}>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col gap-16'>
        <div className='h-80 w-80 absolute left-1/2 top-5 -translate-x-1/2 rounded-full fade-circle pointer-events-none'></div>
        <Header />
        <CvButton />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
