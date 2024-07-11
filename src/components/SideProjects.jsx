import { useLanguage } from '../context/LanguageContext.jsx';
import { sideProjects } from '../utils/data.js';
import SideProject from './SideProject';

function SideProjects() {
  const [language] = useLanguage();
  return (
    <section>
      <h1 className='text-lg md:text-xl font-medium mb-2'>
        {language === 'en' ? 'Side Projects' : 'Sidoprojekt'}
      </h1>
      <div className='flex flex-col gap-8'>
        {sideProjects.map((project, idx) => (
          <SideProject project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default SideProjects;
