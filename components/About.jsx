import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/download.png'
import ListItem from './CardListItem';
import BannerSection from './BannerSection';
import RecentJobsSection from './RecentJobsSection';
import AboutUsSection from './AboutUsSection';
import Footers from './Footers';

const About = () => {

    const obj = {
        image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",
        date: "September 4, 2023",
        title: "GlobalLogic Off Campus Hiring: Associate Analyst Roles",
        desc: "GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in.."
    }
    return (
        <>
           <div id='about' className='w-full md:h-max p-2 mb-auto flex items-center pt-14 pb-4 dark:bg-gray-800'>
            <div className='max-w-[1240px] m-auto mt-16 md:grid grid-cols-3 gap-8'>

                <BannerSection image={obj.image} date={obj.date} title={obj.title} desc={obj.desc} />

                <div className='col-span-1 flex flex-col items-center'>
                    <AboutUsSection />
                    <h2 className='dark:text-[#a6b595] pb-2 mb-4'>Recent Jobs</h2>
                    <RecentJobsSection image={obj.image} date={obj.date} title={obj.title} desc={obj.desc} />
                </div>

            </div>
        </div>
        {/* <Footers/> */}
        </>
     
    );
};

export default About;