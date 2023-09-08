import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '@/components/NavBar'
import Footers from '@/components/Footers'
import JobDescription from '@/components/JobMainSideSection'


function job({ darkMode, setDarkMode }) {
  return (
    <>
      <Head> </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <JobDescription/>
      <Footers />
    </>
  )
}

export default job