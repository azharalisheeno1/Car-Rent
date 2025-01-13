import React from 'react'
import blogData from '../../public/assets/data/blogData'
import Image from 'next/image'
const Blogs = () => {
  return (
    <>
    
    
    <div className=" my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
        <h1 className='font-semibold my-4 text-blue-700'>Explor Our Blogs</h1>
          <h2 className="text-3xl font-extrabold text-gray-800 ">LATEST BLOGS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
         {blogData.map((blog)=>
         <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
         <Image src={blog.imgUrl} alt={blog.title} className="w-full h-60 object-cover" />
         <div className="p-6">
           <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
           <span className="text-sm block text-gray-400 mt-2">{blog.date} | By {blog.author}</span>
           <hr className="my-4" />
           <p className="text-gray-500 text-sm">{blog.description}</p>
         </div>
       </div>
        )}
          
         
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Blogs