import React from 'react'
import seifImage from '../assets/seif.jpeg'
import youssefImage from '../assets/youssef.jpeg'

const Team = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="relative container px-6 py-10 mx-auto">
                <div className="z-0 absolute top-[50%] max-md:hidden translate-y-[-50%] right-0 max-xl:left-[50%] max-xl:translate-x-[-50%] lg:w-[50%] max-w-full h-[90%] blur-3xl bg-gradient-radial from-blue-400 via-gray-900 to-transparent rounded-full opacity-60"></div>
                
                <div className="flex flex-col xl:flex-row xl:items-center xL:-mx-4 ">
                    <div className="xl:w-1/2 xl:mx-4">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

                        <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                        Meet our dedicated team of developers: our front-end expert crafts intuitive user experiences, while our back-end specialist ensures seamless performance and robust functionality. Together, they bring your classroom management to life!
                        </p>
                    </div>
        
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2 z-50">
                        <div>
                            <img className="object-cover rounded-xl aspect-square" src={seifImage} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Seif Sameh</h1>

                            <p className="mt-2 text-blue-500 capitalize ">Front-End developer <br/> UX/UI designer</p>
                        </div>

                        <div>
                            <img className="object-cover rounded-xl aspect-square" src={youssefImage} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Youssef Mustafa</h1>

                            <p className="mt-2 text-blue-500 capitalize ">Back-End Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team