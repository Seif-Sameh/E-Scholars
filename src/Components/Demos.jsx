import React from 'react'
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'
const Demos = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="relative container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Live Demos</h1>

        <p className="mt-4 text-center text-blue-500">
        Try our live demos to see how our platform enhances your teaching and streamlines class management!
        </p>

        <div className='relative '>

        <div className="z-0 absolute inset-0 top-[50%] max-md:hidden translate-y-[-50%] left-[50%] translate-x-[-50%] lg:w-[90%] max-w-full h-[90%] blur-3xl bg-gradient-radial from-blue-400 via-gray-900 to-transparent rounded-full opacity-60"></div>

        
        <div className="grid grid-cols-1 gap-10 mt-10  md:grid-cols-2 ">
            <div className="overflow-hidden relative rounded-lg md:h-[330px] lg:h-[400px] cursor-pointer group">
                    <img src={image2} alt="" className='w-full h-full'/>

                <div className='absolute left-0 top-0 w-full h-full'>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Teacher's portal</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                </div>
                </div>
            </div>
            <div className="overflow-hidden relative rounded-lg md:h-[330px] lg:h-[400px] cursor-pointer group">
                    <img src={image3} alt="" className='w-full h-full'/>

                <div className='absolute left-0 top-0 w-full h-full'>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Student's portal</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Demos