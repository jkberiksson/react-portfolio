import { sideProjects } from '../utils/data.js';
import SideProject from './SideProject';

function SideProjects() {
  return (
    <section>
      <h1 className='text-lg md:text-xl font-medium mb-2'>Side Projects</h1>
      <div className='flex flex-col gap-8'>
        {sideProjects.map((project, idx) => (
          <SideProject project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default SideProjects;
