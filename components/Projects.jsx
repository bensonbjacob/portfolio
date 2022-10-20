import React from 'react';
import realtorImg from '../public/assets/projects/property.png';
import restaurantImg from '../public/assets/projects/restaurant.png';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#4f6d7a]'>
          Projects
        </p>
        <h2 className='py-4'>Things I&#39;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Realtor App'
            backgroundImg={realtorImg}
            projectUrl='/realtor'
          />
          <ProjectItem
            title='Restaurant Page'
            backgroundImg={restaurantImg}
            projectUrl='/restaurant'
          />
          <ProjectItem
            title='Random App 2'
            backgroundImg={netflixImg}
            projectUrl='/property'
          />
          <ProjectItem
            title='Random App 3'
            backgroundImg={twitchImg}
            projectUrl='/property'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
