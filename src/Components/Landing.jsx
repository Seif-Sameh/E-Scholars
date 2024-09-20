import React, { useState } from 'react'
import image1 from '../assets/image-1.jpg'
const Landing = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <header>
                <nav className="bg-white shadow dark:bg-gray-900">
                    <div className="container px-6 py-4 mx-auto">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="flex items-center justify-between">
                                <div className="mx-auto flex items-center">
                                    <p className='text-blue-500 text-3xl font-bold'>E-Scholars</p>
                                </div>

                                <div className="flex lg:hidden">
                                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu"
                                        onClick={() => setToggleMenu(!toggleMenu)}
                                    >
                                        {!toggleMenu && 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>}

                                        {toggleMenu && 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>}
                                    </button>
                                </div>
                            </div>

                            <div className={`${toggleMenu ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0`}>
                                <div className="-mx-4 lg:flex lg:items-center">
                                    <a href="#" onClick={()=>setToggleMenu(false)} className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Overview</a>
                                    <a href="#" onClick={()=>setToggleMenu(false)} className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Features</a>
                                    <a href="#" onClick={()=>setToggleMenu(false)} className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Live Demos</a>
                                    <a href="#" onClick={()=>setToggleMenu(false)} className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Pricing</a>
                                    <a href="#" onClick={()=>setToggleMenu(false)} className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Team</a>
                                    <a href="#" onClick={()=>setToggleMenu(false)} className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="w-full bg-top bg-cover  h-[38rem]" style={{backgroundImage: `url(${image1})`}} >
                    <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold text-white lg:text-4xl">Transform Your Classroom: <span className="text-[#054bb4]">Simplify Management, Maximize Learning!</span></h1>
                            <button className="w-[150px] px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#054bb4] rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Landing