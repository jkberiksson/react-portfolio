import { useLanguage } from '../context/LanguageContext.jsx';
import { schoolProjects } from '../utils/data.js';
import SchoolProject from './SchoolProject';

function SchoolProjects() {
  const [language] = useLanguage();
  return (
    <section>
      <h1 className='text-lg md:text-xl font-medium mb-2'>
        {language === 'en' ? 'School Projects' : 'Skolprojekt'}
      </h1>
      <div className='flex flex-col gap-8'>
        {schoolProjects.map((project, idx) => (
          <SchoolProject project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default SchoolProjects;
