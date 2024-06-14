import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className='h-screen px-12 py-24'>
           <p className='text-3xl mb-12'> Gallery Gallery</p>
           {
            [1,2,3,4,5,6,7,8,9]?.map(img =>(
                  <Image key={img} src={`/Images/${img}.png`} alt="" height="1080" width="1920"/>
            ) )
           }
           {/* <Image src="/Images/1.png" alt="" height="1080" width="1920"/> */}
        </div>
    );
};

export default GalleryPage;