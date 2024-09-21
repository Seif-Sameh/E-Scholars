import React from 'react'

const Footer = () => {
  return (
<footer class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-8 mx-auto">
        <div class="flex flex-col items-center text-center">
            <a href="#">
                <p className='text-blue-500 text-3xl font-bold'>E-Scholars</p>
            </a>

            <div class="flex flex-wrap justify-center mt-6 -mx-4">
                <a href="#home" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>
                
                <a href="#overview" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Overview </a>
                
                <a href="#features" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Features </a>

                <a href="#demos" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Demos </a>

                <a href="#pricing" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Pricing </a>

                <a href="#team" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Team </a>

                <a href="#contact" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Contact </a>
            </div>

        </div>

        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className='w-full flex flex-col gap-1 text-sm text-center text-gray-500 dark:text-gray-300'>
            <p>Designed and Developed by Seif Sameh & Youssef Mostafa</p>
            <p>&#169; 2024 - E-Scholars Company - All Rights Reserved </p>
        </div>
    </div>
</footer>
  )
}

export default Footer