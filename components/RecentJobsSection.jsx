import axios from 'axios';
import React, { useEffect, useState } from 'react'

function RecentJobsSection({ image, date, title, desc }) {
    const [recentJob, setRecentJob] = useState([]);

    useEffect(() => {
        const fetchRecentJobs = async () => {
            const res = await axios.get(`http://localhost:8000/api/jobs/recentJob`)
            console.log("recent jobs  : ", res.data)
            setRecentJob(res.data)
        }
        fetchRecentJobs()
    }, [])

    return (

        <div className = 'flex flex-col'>
            <h2 className='m-auto pt-4 pb-8 md:text-2xl text-xl'>Recent Jobs</h2>
            {/* <div className='col-span-2 pl-4 flex mb-4'>
                <Image className='object-fit rounded-xl' src={image} width={700} height={400} alt='aa'/>
                <img className='w-24 h-24 object-fit rounded-lg mr-4' src={image} alt={"ddd"} />
                <div className='flex flex-col'>
                    <h6 >{title}</h6>
                    <p >{date}</p>
                </div>
            </div> */}

            {recentJob.map((job) => (
                <div key={job.id} className='col-span-2 px-2 flex mb-4'>
                    <img className='md:w-24 md:h-24 w-16 h-16 object-fit md:rounded-lg mr-4 md:ml-4' src={job.image} alt={job.title} />
                    <div className='flex flex-col'>
                        <h6 className='md:text-lg text-base'>{job.title}</h6>
                        <p className='md:text-base text-xs'>{job.date}</p>
                    </div>
                </div>
            ))}

        </div >
    )
}

export default RecentJobsSection