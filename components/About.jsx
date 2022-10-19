import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jacobImg from '../public/assets/jacob_jacob.png';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#4f6d7a]'>
            About
          </p>
          <h2 className='py-4'>I love to build.</h2>
          <p className='py-2 text-gray-600'>
            I started coding in the 90s with by making HTML pages and
            simple QBASIC apps. That experience led to creating IRC
            bots and managing a local BBS. I moved to the Caribbean
            shortly after finishing high school and I didn&#39;t find
            many opportunities to use my computer skills there. I then
            began honing my skills as a carpenter and electrician in
            order to support myself. I&#39;ve spent the past ~20 years
            building and remodeling homes, restaurants and retail
            buildings all across the US and Caribbean.
          </p>
          <p className='py-2 text-gray-600'>
            I&#39;ve recently found myself in a unique position where
            I could focus on learning modern web development while
            also remodeling our home in Auburn, AL. I have built a few
            small static sites for friends and businesses while also
            building various projects to demonstrate what I have
            learned. I am now pursuing a full-time remote web
            developer position.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Below you&#39;ll find some of my most recent work.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={jacobImg}></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
