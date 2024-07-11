import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

function About() {
  const [language] = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.7, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}>
      <h1 className='text-lg md:text-xl font-medium mb-2'>About Me</h1>
      {language === 'en' ? (
        <p className='text-sm md:text-base leading-6 opacity-70'>
          I'm Jakob, a 28-year-old web developer born and raised in Kalmar,
          Sweden. 🌍 I discovered my passion for web development a few years ago
          and have since focused on honing my skills, particularly in frontend
          development. 💻 I love creating dynamic and interactive user
          experiences through animations and innovative designs. ✨ Challenges
          motivate me, and I thrive on finding creative solutions to complex
          problems. 💪 In my spare time, I enjoy hanging out with friends,
          golfing, hitting the gym, playing football, and traveling. 🏌️‍♂️🏋️‍♂️⚽✈️
        </p>
      ) : (
        <p className='text-sm md:text-base leading-6 opacity-70'>
          Mitt namn är Jakob, en 28-årig webbutvecklare född och uppvuxen i
          Kalmar, Sverige. 🌍 Jag upptäckte min passion för webbutveckling för
          några år sedan och har sedan dess fokuserat på att finslipa mina
          färdigheter, särskilt inom frontend-utveckling. 💻 Jag älskar att
          skapa dynamiska och interaktiva användarupplevelser genom animationer
          och innovativa designer. ✨ Utmaningar motiverar mig, och jag trivs
          med att hitta kreativa lösningar på komplexa problem. 💪 På fritiden
          tycker jag om att umgås med vänner, spela golf, träna på gymmet, spela
          fotboll och resa. 🏌️‍♂️🏋️‍♂️⚽✈️
        </p>
      )}
    </motion.section>
  );
}

export default About;
