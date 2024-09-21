import React from 'react'
import { TbCrown } from "react-icons/tb";

const Pricing = () => {
    return (
        <div class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-8 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Pricing</h1>

                <p className="mt-4 text-center text-blue-500">
                    Explore our flexible pricing plans designed to fit every educator's needs, ensuring you get the best value for your teaching experience!
                </p>


                <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0  mt-10 relative">
                <div className="z-0 absolute inset-0 top-[50%] max-md:hidden translate-y-[-50%] left-[50%] translate-x-[-50%] lg:w-[90%] max-w-full h-[90%] blur-3xl bg-gradient-radial from-blue-400 via-gray-900 to-transparent rounded-full opacity-60"></div>
                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 z-10">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Basic
                            </h2>
                        </div>

                        <div class="flex-shrink-0">
                            <div>
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    500 EGP
                                </span>

                                <span class="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            <span class="text-gray-500 dark:text-gray-400 text-lg">+</span>
                            <div>
                                <div class="flex-shrink-0">
                                    <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                        15 EGP
                                    </span>

                                    <span class="text-gray-500 dark:text-gray-400">
                                        /Student
                                    </span>
                                </div>
                            </div>
                        </div>


                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                300 to 600 Students
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                100 GB Storage for Materials
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Standerd Performance
                            </li>
                        </ul>

                    </div>

                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700 z-10">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                Pro
                            </h2>
                        </div>

                        <div class="flex-shrink-0">
                            <div>
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                    500 EGP
                                </span>

                                <span class="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            <span class="text-gray-500 dark:text-gray-400 text-lg">+</span>
                            <div>
                                <div class="flex-shrink-0">
                                    <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                        10 EGP
                                    </span>

                                    <span class="text-gray-500 dark:text-gray-400">
                                        /Student
                                    </span>
                                </div>
                            </div>
                        </div>


                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                600 to 1000 Students
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Custom domain with your name
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                200 GB Storage for Materials
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                3X Faster Performance
                            </li>
                        </ul>

                    </div>

                    <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-yellow-500 z-10">
                        <div class="flex-shrink-0">
                            <h2 class="inline-flex items-center justify-center px-2 gap-2 font-semibold tracking-tight text-yellow-500 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                <TbCrown size={22} />
                                Premium
                            </h2>
                        </div>

                        <div class="flex-shrink-0">
                            <div>
                                <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100 relative ">
                                    500 EGP
                                    <span className='w-[40px] h-1 bg-red-500 -rotate-[60deg] absolute -left-3 top-6'></span>
                                </span>

                                <span class="text-gray-500 dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                            <span class="text-gray-500 dark:text-gray-400 text-lg">+</span>
                            <div>
                                <div class="flex-shrink-0">
                                    <span class="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                        10 EGP
                                    </span>

                                    <span class="text-gray-500 dark:text-gray-400">
                                        /Student
                                    </span>
                                </div>
                            </div>
                        </div>


                        <ul class="flex-1 space-y-4">
                            <li class="text-gray-500 dark:text-gray-400">
                                +1000 Students
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                Custom domain with your name
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                250 GB Storage for Materials
                            </li>

                            <li class="text-gray-500 dark:text-gray-400">
                                5X Faster Performance
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing