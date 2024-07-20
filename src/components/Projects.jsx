import { useLanguage } from '../context/LanguageContext.jsx';
import { projects } from '../utils/data.js';
import Project from './Project.jsx';
import { motion } from 'framer-motion';

function Projects() {
  const [language] = useLanguage();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.6 }}>
      <h1 className='text-lg md:text-xl font-medium mb-2'>
        {language === 'en' ? 'Projects' : 'Projekt'}
      </h1>
      <div className='flex flex-col gap-8'>
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
