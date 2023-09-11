import React from 'react'
import Image from 'next/image'
import ListItem from './CardListItem'
// import AboutImg from '../public/assets/projects/AirBnbClone.png'

function BannerSection({ image, date, title, desc }) {
    return (
        <div className='col-span-2 px-6 pt-6  h-[600px] border border-yellow-500'>
            {/* <Image className='object-fit rounded-xl' src={image} width={700} height={400} alt='aa'/> */}
            <img className='h-2/3  w-full object-cover rounded-xl' src={image} alt={"ddd"} />
            <p className='mt-4'>{date}</p>
            <h2 className='mt-2'>{title}</h2>
            <p className='mt-2'>{desc}</p>
            {/* <ListItem/> */}

        </div>
    )
}

export default BannerSection