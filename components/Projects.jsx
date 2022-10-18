import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
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
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
          <ProjectItem
            title='Random App 1'
            backgroundImg={cryptoImg}
            projectUrl='/property'
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
