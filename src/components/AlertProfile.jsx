import React, { useContext } from 'react'
import { FaRegBell } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import App from '../App';
import { Appcontxt } from '../contex/Ctx';
export const AlertProfile = () => {
    const {hamburger}=useContext(Appcontxt)
    // console.log(hamburger)
    
  return (
         
    <div className={`absolute ${hamburger?'block':'hidden'} md:hidden right-[10px] top-[60px] w-[200px] py-2 px-3 rounded-lg bg-white`} style={{boxShadow:"0px 0px 5px rgba(210,210,210)"}}>
    <div className='flex justify-between w-full pb-2 border-b-[1px] items-center border-gray-500'>

    <div>
    <h1 className='font-medium'>Syahreza</h1>
    <p className='text-sm text-gray-800'>Rimayu</p>
    </div>
    <div className='border-2 border-black rounded-full size-[50px]'></div>
    </div>
    <div className='flex items-center justify-between mt-3'>
        <p><FaRegBell/></p>
        <p className='flex items-center'>
            EN
            <FaCaretDown/></p>
    </div>
</div>
  )
}
