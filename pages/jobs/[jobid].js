// pages/job/[jobid].js
import Footers from '@/components/Footers';
import HomeSideSection from '@/components/HomeSideSection';
import JobMainSideSection from '@/components/JobMainSideSection';
import Navbar from '@/components/NavBar';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const JobDetailPage = ({ data }) => {
    const router = useRouter();
    const { jobid } = router.query;
    const [singleJob,setSingleJob] = useState({});
    console.log(jobid)
    console.log(`http://localhost:8000/api/jobs/find/${jobid}`)
    
    useEffect(() => {
        const fetchSingleJob = async () => {
          try {
            const res = await axios.get(`http://localhost:8000/api/jobs/find/${jobid}`);
            setSingleJob(res.data);
          } catch (error) {
            console.error("Error fetching job:", error);
          }
        }
        
        if (jobid) {
          fetchSingleJob();
        }
      }, [jobid]);

    // You can use the jobid from the URL to fetch and display job details
    // For demonstration purposes, we're just displaying the jobid here
    return (
        <>
            {/* Job ID: {jobid} */}
            <Head> </Head>
            <Navbar />
            <div className='pt-24 grid grid-cols-3 m-auto  border-2 border-green-400 max-w-screen-xl'>
                <JobMainSideSection obj={singleJob} />
                <HomeSideSection />
            </div>
            <Footers />
        </>

    );
};

export default JobDetailPage;
