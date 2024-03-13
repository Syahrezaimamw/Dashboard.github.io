import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const CardAcara = (props) => {
    const {title,total,ic,color}=props
    return (
        <div className='flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl' style={{boxShadow:"0px 2px 0px rgba(128, 128, 128,0.5)"}}>
            <div className='flex items-center'>

            <div className={`size-[45px] rounded-lg  flex justify-center items-center  text-xl ${total=="80"?'bg-[#FFE7CA]':''} ${total=="1.5k"?'bg-[#B9BFF8]':''} ${total=="100"?'bg-[rgb(230,230,230)]':''}`}>
                {ic}
                
            </div>
            <div className='ms-3'>
                <h1 className='text-[13px] font-medium'>{title}</h1>
                <p className='text-xl font-medium lg:block md:hidden'>{total}</p>
                </div>
            </div>
                <p><FaAngleRight/></p>
        </div>
    )
}

export default CardAcara
