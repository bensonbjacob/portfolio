import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Building Things that Matter
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I&#39;m{' '}
            <span className='text-[#4f6d7a]'>Jacob.</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque iusto minus laborum, quas natus molestias deserunt,
            animi commodi sequi eaque dolore reprehenderit iure
            similique sed earum. Consequuntur unde debitis reiciendis
            asperiores!
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
