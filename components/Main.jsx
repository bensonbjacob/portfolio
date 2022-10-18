import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#4f6d7a]'>Jacob.</span>
          </h1>
          <h2 className='py-2 text-gray-700'>
            I&#39;m a front end developer based in Auburn, AL.
          </h2>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Previously a carpenter and builder with experience
            managing and growing small businesses. Now I build things
            with code.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a
                href='https://www.linkedin.com/in/jacob-benson-885004240/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a
                href='https://github.com/bensonbjacob'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='halter_curds.0r@icloud.com' target='_blank'>
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
