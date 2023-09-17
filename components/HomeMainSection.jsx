import React, { useEffect, useState } from 'react'
import BannerSection from './BannerSection'
import CardListItem from './CardListItem'
import axios from 'axios'

function HomeMainSection() {
  const [jobs, setJobs] = useState([])

  const obj = {
    image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",
    date: "September 4, 2023",
    title: "GlobalLogic Off Campus Hiring: Associate Analyst Roles",
    desc: "GlobalLogic is a renowned multinational company specializing in software product engineering, digital transformation, and consulting services. Founded in.."
  }

  const cardData = [
    {
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
      date: 'September 20, 2023',
      company: 'Company A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
      date: 'October 5, 2023',
      company: 'Company B',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more card data objects here
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get(`http://localhost:8000/api/jobs/allJob`)
      setJobs(res.data)
    }
    fetchJobs()
  }, [])

  // console.log(jobs);


  return (

    <div className='col-span-2 md:h-46 w-full h-auto'>

      {/* 1.Banner */}
      <BannerSection image={obj.image} date={obj.date} title={obj.title} desc={obj.desc} />

      {/* 2.CardList */}
      <CardListItem cardData={jobs} />

    </div>

  )
}

export default HomeMainSection