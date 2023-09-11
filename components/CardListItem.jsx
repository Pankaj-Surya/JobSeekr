import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footers from './Footers';
// import AboutImg from '../public/assets/download.png'

const CardListItem = ({cardData}) => {
 
    // console.log(cardData)



    return (
        <div id='CardListItem' className='w-full border border-pink-500 md:h-screen mt-6 flex flex-col items-center py-2 dark:bg-gray-800 ' style={{ height: 'fit-content' }}>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 '>
                <div className='col-span-2'>

                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-6">

                        {/* { cardData.map((data,idx)=>{
                                <img src={data.image} alt={"ddd"} className="w-full h-48 object-cover" />   
                           })
                           }  */}


                           { cardData.map((data,idx)=>{
                                 <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                 <img src={data.image} alt={"ddd"} className="w-full h-48 object-cover" />
 
                                 <div className="p-4">
                                     <p className="text-gray-500 text-sm">{data.date}</p>
                                     <h2 className="text-xl font-semibold mt-2">{data.company}</h2>
                                     <p className="mt-2">{data.description}</p>
                                 </div>
                             </div>        
                           })
                           } 
                          

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <img src={"https://fresherbro.com/wp-content/uploads/2023/09/GlobalLogic-is-hiring-Associate-Analyst-jpg-1024x512.webp"} alt={"ddd"} className="w-full h-48 object-cover" />

                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">September 4, 2023</p>
                                    <h2 className="text-xl font-semibold mt-2">Honeywell Software Eng Recruitment 2023 | Apply Here</h2>
                                    <p className="mt-2"> Honeywell is a global, Fortune 100 technology company that has been at the forefront of innovation for more than a century. With a rich history dating ba</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* xxx */}
                </div>
              

            </div>
         
            <button type="button" className="mt-6 w-56 text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Load More</button>
        </div>
    );
};

export default CardListItem;