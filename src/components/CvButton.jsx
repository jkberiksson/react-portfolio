function CvButton() {
  return (
    <section className='flex justify-center mt-8'>
      <a
        className='px-6 py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition duration-150 ease-in-out'
        href='/cv.pdf'
        download='Jakob_Eriksson_CV.pdf'>
        Ladda ner CV
      </a>
    </section>
  );
}

export default CvButton;
