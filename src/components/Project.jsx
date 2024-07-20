import { useLanguage } from '../context/LanguageContext';

function SchoolProject({ project }) {
  const [language] = useLanguage();

  return (
    <div className='border-b border-gray-700'>
      <h1 className='text-sm md:text-base text-teal-500 font-medium mb-2'>
        {project.title}
      </h1>
      <p className='text-sm md:text-base leading-6 opacity-70 mb-4'>
        {language === 'en' ? project.description_en : project.description_sv}
      </p>
      <a
        className='text-sm md:text-base text-teal-500 inline-block underline mb-4'
        href={project.link}
        target='_blank'
        rel='noreferrer'>
        {language === 'en' ? 'Go to project' : 'Gå till projekt'}
      </a>
      <div className='flex flex-wrap gap-4 mb-8'>
        {project.tags.map((tag, idx) => (
          <p
            className='text-xs bg-teal-500 py-1 px-3 rounded-md text-black'
            key={idx}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SchoolProject;
