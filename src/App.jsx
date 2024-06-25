import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import SchoolProjects from './components/SchoolProjects';
import SideProjects from './components/SideProjects';

function App() {
  return (
    <div className=' bg-gray-950 text-white min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col gap-16'>
        <div className='h-80 w-80 absolute left-1/2 top-5 -translate-x-1/2 rounded-full fade-circle'></div>
        <Header />
        <About />
        <SchoolProjects />
        <SideProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
