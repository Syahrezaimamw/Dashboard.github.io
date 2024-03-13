import React from 'react'
import logo from '../images/logo.png'
import { FaUserGear } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaArrowRightFromBracket  } from "react-icons/fa6";
import { IconHome } from '@tabler/icons-react';
const Navbar = () => {
  return (
    <>
    <div className='hidden sm:flex md:w-[95px]   bg-hitam  flex-col px-4 items-center justify-between rounded-r-2xl md:rounded-3xl py-4 pb-8 md:pt-8'>
        <div className='flex flex-col items-center w-full'>

        <div className='md:size-[50px] size-[40px] rounded-full flex overflow-hidden items-center justify-center bg-putih'>
            <img src={logo} alt="" className='w-1/2'/>
        </div>
        <ul className='text-white mt-12 flex flex-col text-[24px]  gap-[50px]'>
            <li className='cursor-pointer '><FaHouse/></li>
            <li className='cursor-pointer'><FaTableCellsLarge></FaTableCellsLarge></li>
            <li className='cursor-pointer'><FaRegCalendar/></li>
            <li className='cursor-pointer'><FaBoxArchive/></li>
            <li className='cursor-pointer'><FaRegSun/></li>
        </ul>
        </div>
        <h1 className='text-xl text-white rotate-180'><FaArrowRightFromBracket /></h1>
      
    </div>
    {/* <div className='flex-col items-center px-4 py-4 pb-8 justify-betw sm:flex bg-hitam rounded-r-2xl md:rounded-3xl md:pt-8'>
        <div className='flex flex-col items-center w-full'>

        <div className='md:size-[50px] size-[40px] rounded-full flex overflow-hidden items-center justify-center bg-putih'>
            <img src={logo} alt="" className='w-1/2'/>
        </div>
        <ul className='text-white mt-12 flex flex-col text-[24px]  gap-[50px]'>
            <li className='cursor-pointer '><FaHouse/></li>
            <li className='cursor-pointer'><FaTableCellsLarge></FaTableCellsLarge></li>
            <li className='cursor-pointer'><FaRegCalendar/></li>
            <li className='cursor-pointer'><FaBoxArchive/></li>
            <li className='cursor-pointer'><FaRegSun/></li>
        </ul>
        </div>
        <h1 className='text-xl text-white rotate-180'><FaArrowRightFromBracket /></h1>
      
    </div> */}
    </>
  )
}

export default Navbar
