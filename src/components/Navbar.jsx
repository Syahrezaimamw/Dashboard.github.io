import React, { useRef, useState } from 'react'
import logo from '../images/logo.png'
import { FaHouse } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaArrowRightFromBracket  } from "react-icons/fa6";
const Navbar = () => {
    const [focus,setFocus]=useState(62)
    const home=useRef(null)
    const setting=useRef(null)
    const table=useRef(null)
    const calender=useRef(null)
    const archive=useRef(null)
    function handleText(child){
            // child.current.classList.add('text-hitam')
            // child.current.classList.remove('text-white')
    }
    function handleOutText(child){
            // child.current.classList.add('text-white')
            // child.current.classList.remove('text-hitam')
    }
  return (
    <>
    <div className='hidden sm:flex md:w-[95px]   bg-hitam  flex-col px-4 items-center justify-between rounded-r-2xl md:rounded-r-3xl py-4  xl:ps-0 pb-8 md:pt-8'>
        <div className='flex flex-col items-center w-full'>

      


        <div className='md:size-[50px] size-[40px] rounded-full flex overflow-hidden items-center justify-center bg-putih'>
            <img src={logo} alt="" className='w-1/2'/>
        </div>
        <ul className='text-white mt-12 flex flex-col text-[24px] relative  gap-[50px]'>
            <div className='absolute -left-[15px] bg-white  rounded-l-full w-[64px] xl:w-[95px] md:w-[86px] transition-all duration-500 ' style={{transform:`translateY(${focus}px)`}}>
                <div className='size-[50px] bg-white rounded-full'></div>
                <div className='absolute -top-[15px] h-[160%] border-0 bg-white right-0 md:right-[14px] flex flex-col justify-between'>
                    <div className='size-[16px] rounded-br-2xl relative -left-[1px] -top-[1px] bg-hitam'></div>
                    <div className='size-[16px] bg-hitam rounded-tr-2xl  relative -left-[1px] -bottom-[1px]'></div>
                </div>
            </div>
            
            <li className='z-10 cursor-pointer ' onMouseEnter={(e)=>{
                handleText(home)
                setFocus(-11)
            }}
            onMouseLeave={()=>handleOutText(home)}>
                <span ref={home}>

            <FaHouse />
                </span>
             </li>
            <li className='relative z-10 text-black cursor-pointer' onMouseEnter={()=>(setFocus(62))}>
                <span ref={table}>

                <FaTableCellsLarge className=''></FaTableCellsLarge>
                </span>
                </li>
            <li className='z-10 cursor-pointer' onMouseEnter={()=>(setFocus(137))}>
                <span ref={calender}>

                <FaRegCalendar/>
                </span>
                </li>
            <li className='z-10 cursor-pointer'  onMouseEnter={()=>(setFocus(210))}>
                <span ref={archive}>

                <FaBoxArchive/>
                </span>
                </li>
            <li className='z-10 cursor-pointer'  onMouseEnter={()=>(setFocus(284))}>
                <span ref={setting}>
                    
                <FaRegSun/>
                </span>
                </li>
        </ul>
        </div>
        <h1 className='text-xl text-white rotate-180'><FaArrowRightFromBracket /></h1>
      
    </div>
 
    </>
  )
}

export default Navbar
