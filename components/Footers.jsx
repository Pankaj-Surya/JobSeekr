import React from 'react'

function Footers() {
    return (

        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-2 lg:py-8">
                {/* Top */}
                <div className="flex md:flex md:justify-between">

                    {/* left part */}
                    <div className="mb-6 flex-1 md:mb-0">
                        <span className='font-bold md:text-lg text-sm' >Job Seekr</span>
                        <div className="p-4 pl-0 dark:bg-gray-800">
                            <p className="mr-6 md:text-sm md:text-base text-xs">
                                We strive to simplify the job search process and empower individuals to achieve their professional goals. Join us in our commitment to helping you find the perfect placement or internship opportunity, all in one convenient location.
                            </p>
                        </div>
                    </div>

                    {/* right part */}
                    <div className="flex-1 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 md:text-lg text-xs md:font-bold font-bold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="md:text-base text-xs text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 md:text-lg text-xs md:font-bold font-bold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="md:text-base text-xs text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 md:text-lg text-xs md:font-bold font-bold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className= "md:text-base text-xs text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footers