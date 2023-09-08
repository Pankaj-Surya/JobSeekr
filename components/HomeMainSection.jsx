import React from 'react'
import BannerSection from './BannerSection'
import CardListItem from './CardListItem'

function HomeMainSection() {
  const obj = {
    image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",
    date: "September 4, 2023",
    title: "GlobalLogic Off Campus Hiring: Associate Analyst Roles",
    desc: "GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in.."
  }
  return (
    //1.  Banner
    //2.  CardList

    <div className='col-span-2 border-2 border-black h-screen w-full'>
      <BannerSection image={obj.image} date={obj.date} title={obj.title} desc={obj.desc} />
      {/* <CardListItem /> */}
    </div>
  )
}

export default HomeMainSection