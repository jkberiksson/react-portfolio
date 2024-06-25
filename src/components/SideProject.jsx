function Sideproject({ project }) {
  return (
    <div className='bg-gray-900 rounded p-4'>
      <h1 className='text-sm md:text-base text-teal-500 font-medium mb-2'>
        {project.title}
      </h1>
      <p className='text-sm md:text-base leading-6 opacity-70 mb-4'>
        {project.description}
      </p>
      <div className='mb-2'>
        <a
          className='text-sm md:text-base text-teal-500 underline'
          href={project.link}
          target='_blank'
          rel='noreferrer'>
          Go to project
        </a>
      </div>
      <div className='mb-4'>
        <a
          className='text-sm md:text-base text-teal-500 underline'
          href={project.repo}
          target='_blank'
          rel='noreferrer'>
          Github Repo
        </a>
      </div>
      <div className='flex flex-wrap gap-4'>
        {project.tags.map((tag, idx) => (
          <p
            className='text-xs text-teal-500 py-1 px-3 rounded-md border border-gray-700'
            key={idx}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sideproject;
