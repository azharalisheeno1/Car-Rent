import React from 'react'
import { FaCar, FaMapMarkerAlt, FaCity, FaClock, FaMap, FaPlane } from 'react-icons/fa';
const Services = () => {
    const data=[
        {id:1,name:"City Transfer",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, est?",logo:(<FaMapMarkerAlt  size={30}/>)},
        {id:2,name:"Whole City Tour",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, est?",logo:(<FaCity size={30}/>)},
        {id:3,name:"Unlimited Miles Car Rental",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, est?",logo:(<FaCar size={30}/>)},
        {id:4,name:"Fast & Easy Booking",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, est?",logo:(<FaClock size={30}/>)},
        {id:5,name:"Many Pickup Locations",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, est?",logo:(<FaMap size={30}/>)},
        {id:6,name:"Airport Transfer",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, est?",logo:(<FaPlane size={30}/>)},
    ]
  return (
    <>
    
    <section className="py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <p className="mb-4 text-xl text-blue-600 font-semibold">See Our</p>
            <h2 className="text-xl font-extrabold leading-tight  sm:text-2xl xl:text-3xl uppercase mb-6">Popular Services</h2>

        </div>
        <div
            className="grid max-w-4xl lg:max-w-7xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
           {data.map((card)=>
        
        <div key={card.id} className="overflow-hidden bg-white shadow-md rounded-xl">
                <div className="p-9">
                    <h1 className='text-blue-600'>{card.logo}</h1>
                    <h3 className="mt-6 text-2xl font-bold hover:text-blue-500  text-gray-900 sm:mt-10">{card.name}</h3>
                    <p className="mt-6 text-base text-gray-600">{card.desc}</p>
                </div>
            </div>
        )}
          
          
          
            
        </div>
    </div>
</section>
    
    </>
  )
}

export default Services