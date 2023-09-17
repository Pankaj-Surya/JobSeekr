import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/download.png'
import ListItem from './CardListItem';
import BannerSection from './BannerSection';
import RecentJobsSection from './RecentJobsSection';
import AboutUsSection from './AboutUsSection';
import axios from 'axios';


//components\JobMainSideSection.jsx
const JobMainSideSection = ({obj}) => {

    // const [singleJob,setSingleJob] = useState({});
    

  
    // useEffect(() => {
    //   const fetchSingleJob =async ()=>{
    //      const res =await axios.get(`http://localhost:8000/api/jobs/find/6505a62ea7019d615d81a671`)
    //      console.log("my records : ",res.data);
    //      setSingleJob(res.data);
    //     }
    //     fetchSingleJob()
    // },[data?._id])

    // const obj = {
    //     image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",
    //     date: "September 4, 2023",
    //     title: "GlobalLogic Off Campus Hiring: Associate Analyst Roles",
    //     desc: "GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in.."
    // }
    return (
        <div className='col-span-2  border-2 border-black h-46 w-full'>
            {/* <div id='job-description' className='w-full md:h-max p-2 flex items-center pt-14 pb-4 dark:bg-gray-800'> */}
                <div className='max-w-[1240px] m-auto mt-8 md:grid grid-cols-3 gap-8'>

                    <div className='col-span-3 px-6 '>
                        {/* <Image className='object-fit rounded-xl' src={image} width={700} height={400} alt='aa'/> */}
                        <img className='h-1/4 w-full object-cover rounded-xl' src={obj.image} alt={"ddd"} />
                        <p className='mt-4'>{obj.date}</p>
                        <h2 className='mt-2'>{obj.title}</h2>
                        <p className='mt-2'>{obj.desc}</p>

                        <div className='mt-6'>
                            <div className='mt-2'>
                                <strong>Company Name: </strong> : Jade Global
                            </div>
                            <div className='mt-2'>
                                <strong>Job Role: </strong> : Jade Global
                            </div>
                            <div className='mt-2'>
                                <strong>Experience: </strong> : Jade Global
                            </div>
                            <div className='mt-2'>
                                <strong>Location: </strong> : Jade Global
                            </div>

                            <div className='mt-4'>
                                <h2 className='mt-2'>Job Description</h2>
                                <p className='mt-4'>Developing and maintaining front-end and back-end applications.
                                    Building and integrating RESTful APIs.
                                    Writing clean, testable, and efficient code.
                                    Collaborating with other developers and stakeholders.
                                    Debugging and fixing issues in the application.
                                    Staying up-to-date with new technologies and tools.
                                    Writing technical documentation.
                                    Participating in code reviews.
                                    Testing and deploying applications.
                                    Collaborating with UX/UI designers to implement visually appealing and user-friendly interfaces.</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className='mt-2'>Requirements</h2>
                                <p className='mt-4'>Bachelor’s degree in Computer Science, Information Systems, or a related field

                                    Excellent problem-solving and critical-thinking skills

                                    Strong communication and interpersonal skills

                                    Ability to work independently and as part of a team

                                    A passion for learning and a drive to continuously improve</p>
                            </div>
                            <div className='mt-4'>
                                <h2 className='mt-2'>Benefits</h2>
                                <p className='mt-4'>Opportunity to learn and work with cutting-edge technology and contribute to the development of AI-powered solutions

                                    Collaborate with a talented and driven team of professionals

                                    Career growth and advancement opportunities

                                    Competitive salary and benefits package</p>
                            </div>

                            <h4 className='mt-4'>How to Apply for Jade Global Off Campus ?</h4>
                            <p className='mt-4'>Eligible candidates apply for this Drive online by following the below link.</p>
                            <button className='mt-4 font-bold h-10 w-40'>Apply Now</button>

                            <h4 className='mt-4'>Also Apply For: – </h4>
                            <p className='mt-2'>NxtWave is hiring for Freshers for Associate</p>
                            <p className='mt-2'>NxtWave is hiring for Freshers for Associate</p>
                        </div>

                    </div>

                </div>
            {/* </div> */}
        </div>
    );
};

export default JobMainSideSection;