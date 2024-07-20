import { GitHub, Linkedin, Mail } from 'react-feather';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Contact() {
  const ref = useRef();

  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.section
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      ref={ref}
      className='mb-10 flex flex-col gap-4 justify-center items-center md:items-start'>
      <a
        className='text-sm md:text-base opacity-70 flex items-center gap-2'
        href='mailto: jkberiksson@gmail.com'>
        <p>Email</p>
        <Mail size={20} />
      </a>
      <a
        className='text-sm md:text-base opacity-70 flex items-center gap-2'
        href='https://github.com/jkberiksson'>
        <p>Github</p>
        <GitHub size={20} />
      </a>
      <a
        className='text-sm md:text-base opacity-70 flex items-center gap-2'
        href='https://www.linkedin.com/in/jakob-eriksson-60904b207/'>
        <p>Linkedin</p>
        <Linkedin size={20} />
      </a>
    </motion.section>
  );
}

export default Contact;
