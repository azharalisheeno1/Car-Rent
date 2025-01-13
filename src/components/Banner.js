import React from "react";
import Image from "next/image";
import toyota from "../../public/assets/all-images/toyota-offer-2.png";
const Banner = () => {
  return (
    <>
      <div className="bg-blue-700 my-4 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-12 lg:py-8">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={toyota} // Replace with your image path
              alt="Banner Image"
              width={600}
              height={400}
              className=""
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 text-white lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
              Do You Want To Earn With Us? So Don't Be Late
            </h1>

            <button className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition">
              Become a Driver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
