import { motion } from 'framer-motion';

function CvButton() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.2 }}
      className='flex justify-center mt-8'>
      <a
        className='px-6 py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition duration-150 ease-in-out'
        href='/cv.pdf'
        download='Jakob_Eriksson_CV.pdf'>
        Ladda ner CV
      </a>
    </motion.section>
  );
}

export default CvButton;
