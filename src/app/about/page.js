import About from '@/components/About';
import Banner from '@/components/Banner';
import React from 'react';
import Image from 'next/image';
import bg from '../../../public/assets/all-images/drive.jpg'
import Team from '@/components/Team';
const Page = () => {
  return (
    <>
      {/* Hero Section */}
       <div className="relative  bg-gradient-to-r from-purple-600 to-blue-600 h-48 text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image  className="object-cover object-center w-full h-full"  src={bg} alt='car'/>
          {/* <img  /> */}
          <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full ">
          <p className="text-3xl text-white mb-3">About Us</p>
          
        </div>
      </div>

      {/* Additional Components */}
      <div>
        <About />
        <Banner />
        <Team/>
      </div>
    </>
  );
};

export default Page;
