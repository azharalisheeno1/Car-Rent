import React from 'react'
import Image from 'next/image'
import bmw from '../../public/assets/all-images/cars-img/bmw-offer.png'
const About = () => {
  return (
    <>
    
    <section className="container mx-auto px-4 py-10 lg:py-20 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            About Us
          </h2>
          <h2 className="text-3xl text-gray-700 md:text-4xl font-bold  mb-4">
           Welcome to car rent service
          </h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to delivering exceptional services and solutions tailored to meet your needs. With a focus on innovation and excellence, we strive to create value for our customers and partners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6  flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-600">High-quality services</p>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-600">Innovative solutions</p>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-600">Customer-centric approach</p>
            </div>
            <div className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
                ✓
              </span>
              <p className="text-gray-600">Global reach</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 lg:pl-8 mb-6 lg:mb-0">
         <Image  src={bmw} alt='bmw' className=" w-full"/>
        
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About