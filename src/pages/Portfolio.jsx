import TechBIMG from '../assets/images/tech-blog.png';
import ETrackerIMG from '../assets/images/employee-tracker.png';
import SoNetAPIIMG from '../assets/images/social-network-api.png';

import Project from '../components/Project';

const projects = [
  {
    id: 1,
    name: 'Tech Blog',
    image: TechBIMG,
    repoURL: 'https://github.com/namastenataly/nat-tech-blog',
  },
  {
    id: 2,
    name: 'Note Taker',
    image: ETrackerIMG,
    repoURL: 'https://github.com/namastenataly/nat-note-taker',
  },
  {
    id: 4,
    name: 'Personal Blog',
    image: SoNetAPIIMG,
    repoURL: 'https://github.com/namastenataly/nataly-personal-blog',
  },
];

export default function Portfolio() {
  return (
    <div className='container w-100 p-0 m-0'>
      <ul className='list-group d-flex justify-content-center align-items-center'>
        {projects.map((project) => (
          <li key={project.id} className='list-group-item d-flex justify-content-center align-items-center w-75 my-3'>
            <Project project={project}/>
          </li>
        ))}
      </ul>
    </div>
  );
}