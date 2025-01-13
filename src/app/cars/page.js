
import React from 'react'
import Image from 'next/image'
import bg from '../../../public/assets/all-images/drive.jpg'
import carData from '../../../public/assets/data/carData'
const page = () => {
  return (
    <>
    <div className="relative  bg-gradient-to-r from-purple-600 to-blue-600 h-48 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image  className="object-cover object-center w-full h-full"  src={bg} alt='car'/>
              {/* <img  /> */}
              <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full ">
              <p className="text-3xl text-white mb-3">Car Listing</p>
              
            </div>
          </div>
 

          <div className="px-4 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <p className="mb-2 text-xl text-blue-600 font-semibold">Come With</p>
            <h2 className="text-xl font-extrabold leading-tight  sm:text-2xl xl:text-3xl uppercase mb-6">
             Hot Offers
            </h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-7xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            {carData.map((cardata, index) => (
              <div
                key={index}
                className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                <Image
                  src={cardata.imgUrl}
                  alt={cardata.carName}
                  className=" px-4"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-center text-gray-800">
                    {cardata.carName}
                  </h2>
                  <p className="text-gray-800  text-center font-semibold">
                    Price: ${cardata.price}k
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-gray-600 text-sm">{cardata.model}</p>
                    <p className="text-gray-600 text-sm"> {cardata.speed}</p>
                    <p className="text-gray-600 text-sm">{cardata.automatic}</p>
                  </div>
                  <div className="flex">
                    <button className="mt-6 bg-blue-600 w-full text-white px-4 py-2  hover:bg-blue-800">
                      Rent
                    </button>

                    <button className="mt-6 bg-red-600 w-full text-white px-4 py-2 hover:bg-red-800">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


    </>
  )
}

export default page