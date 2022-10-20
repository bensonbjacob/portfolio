import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' class='w-full'>
      <div class='max-w-[1240px] px-5 mx-auto mt-32'>
        <p className='text-xl tracking-widest uppercase text-[#4f6d7a]'>
          Contact
        </p>
        <h2 className='py-4'>Let&#39;s Talk</h2>
        <p className='py-2 text-gray-600'>
          You can message me directly on{' '}
          <a
            href='https://www.linkedin.com/in/jacob-benson-885004240/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            LinkedIn
          </a>
          , view my code on{' '}
          <a
            href='https://github.com/bensonbjacob'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            GitHub
          </a>
          , or simply send me an{' '}
          <a
            href='mailto:halter_curds.0r@icloud.com'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            email.
          </a>
        </p>
      </div>
      <div className='flex justify-center mt-6 py-12'>
        <Link href='/'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp
              className='text-[#4f6d7a]'
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
