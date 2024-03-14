import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './corousel.css'
import Formchange from './Formchange';
export const Notes = () => {
  return (
    <div className=' h-[95%] yayac' >
         <Swiper
        direction={'vertical'}
        pagination={{
        //   clickable: true,
          
        }}
        effect='flip'
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=' w-100 cursor-grab'>
            <div className='w-full'>

            <Formchange/>
            </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-grap'>
            <div className='w-full mt-3 cursor-grab'>
                <textarea name="" id="" className=' cursor-grap  w-full h-full text-[15px] text-gray-900 outline-none' value={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium et maxime placeat aliquid cupiditate unde voluptate necessitatibus officiis quasi repudiandae qui quos delectus magni facilis, architecto minima vel animi!'}></textarea>
                
            </div>
        </SwiperSlide>
      </Swiper>
       
    </div>
  )
}
