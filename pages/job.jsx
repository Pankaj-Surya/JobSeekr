import Head from 'next/head'
import Navbar from '@/components/NavBar'
import Footers from '@/components/Footers'
import JobMainSideSection from '@/components/JobMainSideSection'
import HomeSideSection from '@/components/HomeSideSection'
import { useRouter } from 'next/router'
import { useLocation } from 'react-router-dom'


function job({ data }) {


  // redux get id
    
  // const [singleJob,setSingleJob] = useState({});
  const router = useRouter();
  console.log("path =>",router.pathname)

  
    // useEffect(() => {
    //   const fetchSingleJob =async ()=>{
    //      const res =await axios.get(`http://localhost:8000/api/jobs/find/6505a62ea7019d615d81a671`)
    //      console.log("my records : ",res.data);
    //      setSingleJob(res.data);
    //     }
    //     fetchSingleJob()
    // },[data?._id])

  return (  
    <>
      <Head> </Head>
      <Navbar />
      <div className='pt-24 grid grid-cols-3 m-auto  border-2 border-green-400 max-w-screen-xl'>
        <JobMainSideSection data={data} />
        <HomeSideSection/>
      </div>
      <Footers />
    </>
  )
}

export default job