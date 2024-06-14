import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ["latin"] })

export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about", "about page"]
};


// const getTime = async () => {
//     const res = await fetch('http://localhost:3000/time', { next: { revalidate: 3 } })
//     // const res = await fetch('http://localhost:3000/time', {cache: 'no-store'})
//     const data = await res.json()
//     return data.currentTime
// }



const page = async () => {
    // const currentTime = getTime()
    return (
        <div className={`${headland.className} h-screen `}>
            <h6 className='text-3xl'>About Page</h6>
            {/* <h6 className='text-3xl text-red-400 my-12'>Time: {currentTime}</h6> */}
        </div>
    );
};

export default page;