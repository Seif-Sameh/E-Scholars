import React from 'react'
import { RiSettings5Fill } from "react-icons/ri";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdScreenShare } from "react-icons/md";


const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className=" relative flex flex-col justify-center container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our awesome <span className="text-blue-500">Features</span></h1>
        <div className="z-0 absolute inset-0 top-[50%] max-md:hidden translate-y-[-50%] left-[50%] translate-x-[-50%] lg:w-[90%] max-w-full h-[90%] blur-3xl bg-gradient-radial from-blue-400 via-gray-900 to-transparent rounded-full opacity-60"></div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 z-10">
            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <RiSettings5Fill size={25}/>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Manage Your classes & students </h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Easily organize and oversee all your classes and students in one centralized platform. Track attendance, grades, and progress effortlessly, allowing you to focus on what you do best—teaching!
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <BsCalendar2DateFill size={25}/>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Schedule your sessions</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Effortlessly schedule your classes and sessions with our intuitive calendar tool. Set reminders and manage conflicts to ensure every student gets the attention they need at the right time!
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <MdNotificationsActive size={25}/>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Notify Classes with the latest updates</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Instantly notify students of class updates and important announcements. Enhance communication and keep everyone on the same page!
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <FaTasks size={25}/>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Assign tasks & homework</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Easily assign tasks and homework with just a few clicks. Track submissions and progress to ensure students stay engaged and accountable!
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <BsFillStopwatchFill size={25}/>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Easily make & grade quizzes</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Create and customize quizzes in minutes with our user-friendly interface. Effortlessly grade submissions and provide instant feedback to keep students motivated!
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <MdScreenShare size={25}/>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Securely share your materials</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Easily share your teaching materials with students while ensuring their security and privacy. Control access levels to keep your content protected and promote effective collaboration!                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features