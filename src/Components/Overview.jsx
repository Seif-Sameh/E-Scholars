import React from 'react'

const Overview = () => {
  return (
    <section id='overview' className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Overview</h1>
        <p className="mt-4 font-medium text-blue-500 capitalize">
        Try our live demos to see how our platform enhances your teaching and streamlines class management!
        </p>
        <iframe className="min-w-full mt-6 h-64 md:h-[650px] rounded-xl overflow-hidden" src="https://drive.google.com/file/d/1yH6oyFX-WI0VNkafBDXGqaNHeChhhFT4/preview" allow="autoplay; fullscreen" allowFullScreen={true}></iframe>
    </div>
    </section>
  )
}

export default Overview