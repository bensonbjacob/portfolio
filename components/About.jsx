import React from 'react';

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
          <h2 className='py-4'>Lorem ipsum dolor sit amet.</h2>
          <p className='py-2 text-gray-600'>Lorem ipsum dolor sit.</p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nisi obcaecati esse nihil quia delectus, animi, velit
            aspernatur repudiandae sapiente ipsa eum illo quasi eius
            ullam. Laborum est velit officia. Quaerat, eius, earum
            soluta deserunt, dolor illo ab quasi nulla tempore facilis
            assumenda facere numquam esse?
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur placeat saepe atque totam obcaecati aliquid
            aliquam facilis ea, voluptatem harum nobis non quisquam
            asperiores quas molestias provident voluptatibus officiis
            quidem? Praesentium, facere? Quibusdam accusantium ipsum
            rem distinctio quae.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Below you&#39;ll find some of my most recent work.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default About;
