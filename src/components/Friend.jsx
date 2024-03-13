import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
export const Friend = ({jumlah}) => {
    
  return (
    <Swiper
     modules={[Scrollbar]}
spaceBetween={30}
className='h-[120px] w-[480px] md:w-[200px] lg:w-[300px] xl:w-[450px] mt-4 pb-5 '
// style={{cursor:'grab'}}
scrollbar={{ draggable: true }}
slidesPerView={jumlah}
onSlideChange={() => {}}
onSwiper={(swiper) => swiper}
>
<SwiperSlide className=''> 
<div className='border-2 border-black rounded-3xl h-[75%]'></div>
</SwiperSlide>
<SwiperSlide className=''> 
<div className='border-2 border-black rounded-3xl h-[75%]'></div>
</SwiperSlide>
<SwiperSlide className=''> 
<div className='border-2 border-black rounded-3xl h-[75%]'></div>
</SwiperSlide>
<SwiperSlide className=''> 
<div className='border-2 border-black rounded-3xl h-[75%]'></div>
</SwiperSlide>
<SwiperSlide className=''> 
<div className='border-2 border-black rounded-3xl h-[75%]'></div>
</SwiperSlide>
<SwiperSlide className=''> 
<div className='border-2 border-black rounded-3xl h-[75%]'></div>
</SwiperSlide>
</Swiper>
        
  )
}
