import React from 'react';
import Button from './Button'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#222529]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8892b0]'>Hi, my name is</p>
        <h1 className='text-4xl mt-[8px] sm:text-7xl font-bold text-[#ccd6f6]'>
          Abdulazeez Apata
        </h1>
        <h2 className='text-4xl sm:text-5xl mt-[8px] font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am an innovative driven front end developer that meticulously crafts layouts and designs that not 
        only look appealing but also provide an intuitive and exceptional user experience. LOL
        </p>
        <div>
          {/* <button className='text-white w-[content] border-[1px] px-4 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:text-[black]'>
            Get in touch
          </button> */}
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Home;
