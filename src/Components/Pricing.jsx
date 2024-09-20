import React from 'react'

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="relative container px-6 py-8 mx-auto">
        <div className="z-0 absolute inset-0 top-[50%] max-md:hidden translate-y-[-50%] left-[50%] translate-x-[-50%] lg:w-[90%] max-w-full h-[90%] blur-3xl bg-gradient-radial from-blue-400 via-gray-900 to-transparent rounded-full opacity-60"></div>

        <p className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center mb-10'>Pricing</p>
        <div className="max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
            <div className="grid gap-3 md:grid-cols-3">
                <button className="px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200">Monthly</button>

                <button className="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-300 transform bg-gray-200 rounded-lg dark:bg-gray-700 focus:outline-none dark:text-gray-200">
                    <span className="mx-1">Annually</span>
                    <span className="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">save 10%</span>
                </button>

                <button className="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-200">
                    <span className="mx-1">LifeTime</span>
                </button>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
            <div className="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Basic</p>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>
                    <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>
                    <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>
                </div>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">5 wathclists included</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">5 exclusive widgets</span>
                    </div>
                </div>

            </div>

            <div className="w-full overflow-hidden transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800">
                <p className="py-2 text-sm text-center text-white uppercase bg-blue-500">Recommended by experts</p>
                <div className="px-6 py-4">
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Pro</p>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">Advanced Features</p>
                        <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$89.99</h4>
                        <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$80.99</h4>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>
                    </div>

                    <div className="mt-8 space-y-8">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">10+ exclusive pro widgets</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Pricing