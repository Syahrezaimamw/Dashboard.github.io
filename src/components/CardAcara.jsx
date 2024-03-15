import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CardAcara = (props) => {
    const {title,total,ic,color,path}=props
    return (
        <div className='flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl' style={{boxShadow:"0px 2px 0px rgba(128, 128, 128,0.5)"}}>
            <Link to={path} className='flex items-center justify-between w-full'> 
            <div className='flex items-center'>

            <div className={`size-[45px] rounded-lg  flex justify-center items-center  text-xl `}style={{backgroundColor:color}}>
                {ic}
                
            </div>
            <div className='ms-3'>
                <h1 className='text-[13px] font-medium'>{title}</h1>
                <p className='text-xl font-medium lg:block md:hidden'>{total}</p>
                </div>
            </div>
                <p><FaAngleRight/></p>
            </Link>
        </div>
    )
}

export default CardAcara
