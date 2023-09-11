import React from 'react'
import Image from 'next/image';
import SiteImg from '../public/assets/skills/jobseekr.jpg'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

function SiteDescSetion() {
    return (
        <div>
            <div className='flex border-2 border-zinc-300 flex-col items-center mb-8'>
                <Image className='object-fit rounded-xl' src={SiteImg} width={150} height={150} alt='aa' />
                <h2 className='mt-2'>JobSeekr</h2>
                <hr className='h-px my-4 bg-gray-200 border-0' />
                <p className='mt-2'>Placement | Internship | Study Material</p>
                <p className='px-6 mt-2 justify-evenly text-md font-medium'>We are here with the motive to provide all the placement and internship opportunities.</p>


                <h2 className='mt-6'>Subscribe & Follow</h2>

                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>

                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.instagram.com" url="www.instagram.com" />
                    </div>



                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.facebook.com" url="www.facebook.com" />
                    </div>


                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.telegram.com" url="www.telegram.com" />
                    </div>


                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.linkedin.com" url="www.linkedin.com" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SiteDescSetion