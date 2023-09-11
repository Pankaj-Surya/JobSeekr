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

  // const cardData = {
  //   image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg',
  //   date: 'September 20, 2023',
  //   company: 'GlobalLogic Off Campus Hiring: Associate Analyst Roles',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // };

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

  console.log(cardData.company)
  return (
    //1.  Banner
    //2.  CardList

    <div className='col-span-2  border-2 border-black h-46 w-full'>
      <BannerSection image={obj.image} date={obj.date} title={obj.title} desc={obj.desc} />
      {/* <CardListItem cardData={obj.image} date={cardData.date} company={cardData.company} description={cardData.description}  /> */}
      <CardListItem cardData={cardData} />
    </div>
  )
}

export default HomeMainSection