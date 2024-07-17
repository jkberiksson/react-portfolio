import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function CvButton() {
  const [language] = useLanguage();
  return (
    <motion.section className='flex justify-center'>
      <a
        className='px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition duration-150 ease-in-out'
        href='/cv.pdf'
        download='Jakob_Eriksson_CV.pdf'>
        {language === 'en' ? 'Download CV' : 'Ladda ner CV'}
      </a>
    </motion.section>
  );
}

export default CvButton;
