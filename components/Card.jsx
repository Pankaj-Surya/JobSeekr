import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Card({ data }) {    
    console.log(data)
    const router = useRouter();

    
    const navigateToCard =()=>{
     router.push(`/jobs/${data._id}`)
     // redux daal id =>
    } 
    return (
        // <Link href={`/job/${data?._id}`} style={{ textDecoration: "none" }}>
        <div onClick={navigateToCard} key={data._id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={data.image} alt={"ddd"} className="w-full h-48 object-cover" />

            <div className="p-4">
                <p className="text-gray-500 text-sm">{data.date}</p>
                <h2 className="text-xl font-semibold mt-2">{data.title}</h2>
                <p className="mt-2">{data.desc}</p>
            </div>
        </div>
        // </Link> 
    )
}

export default Card