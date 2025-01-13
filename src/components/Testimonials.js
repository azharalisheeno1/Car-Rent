import React from 'react'

const Testimonials = () => {
  return (
    <>
    
    <div className="my-6 ">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-extrabold my-3 text-blue-700">Our Happy Clients</h2>
        <h2 className="text-3xl uppercase font-extrabold text-gray-800">Testimonials</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl max-md:gap-16 max-md:max-w-lg mx-auto mt-20">
        <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
          <img src="https://readymadeui.com/team-2.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
          <div className="mt-6 text-center">
            <h4 className="text-sm whitespace-nowrap font-bold">John Doe</h4>
          </div>
          <div className="mt-6 text-justify">
            <p className="text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt at the all time.</p>
          </div>


          
        </div>

        <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
          <img src="https://readymadeui.com/team-3.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
          <div className="mt-6 text-center">
            <h4 className="text-sm whitespace-nowrap font-bold">Karolina Adair</h4>
          </div>
          <div className="mt-6 text-justify">
            <p className="text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt at the all time.</p>
          </div>

        

        
        </div>

        <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
          <img src="https://readymadeui.com/team-4.webp" className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
          <div className="mt-6 text-center">
            <h4 className="text-sm whitespace-nowrap font-bold">Simon Konecki</h4>
          </div>
          <div className="mt-6 text-justify">
            <p className="text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt at the all time.</p>
          </div>

        
         
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials