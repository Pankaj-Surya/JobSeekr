import Head from 'next/head'
import About from '../components/About'
import Navbar from '@/components/NavBar'

import Footers from '@/components/Footers'
import HomeMainSection from '@/components/HomeMainSection'
import HomeSideSection from '@/components/HomeSideSection'
import JobDescription from '@/components/JobMainSideSection'
import BannerSection from '@/components/BannerSection'

export default function Home({ darkMode, setDarkMode }) {

  return (
      <div className='h-screen box-content'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Main Section =>make vertical using flex */}
      {/* Middle Section */}
      <div className='pt-24 grid grid-cols-3 m-auto  border-2 border-green-400 max-w-screen-xl'>
        <HomeMainSection/>
        <HomeSideSection/>
      </div>
      <Footers/>
      </div>
  )
}
