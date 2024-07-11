import { schoolProjects } from '../utils/data.js';
import SchoolProject from './SchoolProject';

function SchoolProjects() {
  return (
    <section>
      <h1 className='text-lg md:text-xl font-medium mb-2'>School Projects</h1>
      <div className='flex flex-col gap-8'>
        {schoolProjects.map((project, idx) => (
          <SchoolProject project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default SchoolProjects;
