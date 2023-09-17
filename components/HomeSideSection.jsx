import React from 'react'
import SiteDescSetion from './SiteDescSetion'
import RecentJobsSection from './RecentJobsSection'

function HomeSideSection() {
  const obj = {
    image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",
    date: "September 4, 2023",
    title: "GlobalLogic Off Campus Hiring: Associate Analyst Roles",
    desc: "GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in.."
  }
  return (

    <div className='col-span-1 h-auto w-full'>
      {/* 1. Site Desc */}
      <SiteDescSetion />

      {/* 2. Recent Jon List */}
      <RecentJobsSection image={obj.image} date={obj.date} title={obj.title} desc={obj.desc} />
    </div>

  )
}

export default HomeSideSection