import Head from 'next/head'
import Navbar from '@/components/NavBar'
import Footers from '@/components/Footers'
import JobMainSideSection from '@/components/JobMainSideSection'
import HomeSideSection from '@/components/HomeSideSection'


function job({ darkMode, setDarkMode }) {
  return (
    <>
      <Head> </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='pt-24 grid grid-cols-3 m-auto  border-2 border-green-400 max-w-screen-xl'>
        <JobMainSideSection/>
        <HomeSideSection/>
      </div>
      <Footers />
    </>
  )
}

export default job