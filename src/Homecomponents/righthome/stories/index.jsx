import React from 'react'
import { StoriesData } from './storiesData'
import { Swiper, SwiperSlide } from 'swiper/react';

const Stories = () => {
  return (
    <>
     <div className='mb-5'>
        <h4 className='font-gilroyBold text-lg text-black'>Stories</h4>
     </div> 
     
<div className='w-[300px]'>
<Swiper
      spaceBetween={5}
      slidesPerView={3}
    >
     
        {
            StoriesData.map((data,index)=>(
                <SwiperSlide key={index} style={{
                    background: `url(${data.bgPicture})`
                }} className='bg-cover bg-no-repeat bg-center h-[150px] rounded-md'
                >
                <div className='w-9 h-9 rounded-full overflow-hidden object-cover mt-2 ml-2 border-2 border-primary_bg'>
                  <img src={data.picture}/>
                </div>  
                </SwiperSlide>
            ))
        }
  
    </Swiper>
</div>
    </>
  )
}

export default Stories
