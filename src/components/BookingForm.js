import React from 'react';
import car from '../../public/assets/all-images/cars-img/offer-toyota.png'
const BookingForm = () => {
  return (
    <>
      <div className="relative lg:bottom-24">
        <div className="flex flex-col lg:flex-row container max-w-7xl md:shadow-xl mx-auto">
          {/* Left Section with Background Image */}
          <div
            className="w-full lg:w-1/2 bg-cover bg-center bgimage relative h-64 lg:h-auto"
           
          >
            <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Your Journey Awaits</h1>
              <p className="mt-2 text-sm md:text-lg">Book your travel with ease and comfort.</p>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="w-full lg:w-1/2 bg-white py-6 flex items-center justify-center">
          <form className="w-full px-6 md:w-3/4">
  {/* First Row */}
  <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
    <input
      type="text"
      placeholder="From Address"
      className="w-full md:w-1/2 p-2 text-sm border border-gray-300 rounded mb-4 md:mb-0"
      required
    />
    <input
      type="text"
      placeholder="To Address"
      className="w-full md:w-1/2 p-2 text-sm border border-gray-300 rounded mb-4 md:mb-0"
      required
    />
    <input
      type="date"
      className="w-full md:w-1/2 p-2 text-sm border border-gray-300 rounded mb-4 md:mb-0"
      required
    />
  </div>

  {/* Second Row */}
  <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
    <input
      type="time"
      className="w-full md:w-1/2 p-2 text-sm border border-gray-300 rounded mb-4 md:mb-0"
      required
    />
    <select
      className="w-full md:w-1/2 p-2 text-sm border border-gray-300 rounded mb-4 md:mb-0"
      required
    >
      <option value="1 person">AC Car</option>
      <option value="2 person">Non AC Car</option>
    </select>
    <button
      type="submit"
      className="w-full bg-blue-500 text-sm text-white py-2 font-semibold rounded hover:bg-blue-600 transition"
    >
      Find Car
    </button>
  </div>
</form>

          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
