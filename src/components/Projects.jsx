import { useLanguage } from '../context/LanguageContext.jsx';
import { projects } from '../utils/data.js';
import Project from './Project.jsx';

function Projects() {
  const [language] = useLanguage();
  return (
    <section>
      <h1 className='text-lg md:text-xl font-medium mb-2'>
        {language === 'en' ? 'Projects' : 'Projekt'}
      </h1>
      <div className='flex flex-col gap-8'>
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
