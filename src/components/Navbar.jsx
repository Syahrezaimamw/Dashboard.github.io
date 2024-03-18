import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.png'
import { FaHouse } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBoxArchive } from "react-icons/fa6";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const Navbar = () => {
    const [focus, setFocus] = useState(62)
    const home = useRef(null)
    const setting = useRef(null)
    const table = useRef(null)
    const calender = useRef(null)
    const archive = useRef(null)
    const [duration,setDuration]=useState(true)
    function handleText(child) {
        child.current.classList.add('text-hitam')
        child.current.classList.remove('text-white')
        table.current.classList.add('text-white')
        table.current.classList.remove('text-hitam')        
    }
    function handleoutFocus(e) {
        e.map((a)=>{
            a.current.classList.add('text-white')
            a.current.classList.remove('text-hitam')   
        })
        table.current.classList.add('text-hitam')
        table.current.classList.remove('text-white')
    }
    return (
        <>
            <div className='hidden sm:flex md:w-[95px]  min-h-screen  bg-hitam  flex-col px-4 items-center justify-between rounded-r-2xl md:rounded-r-3xl py-4  xl:ps-0 pb-8 md:pt-8'>
                <div className='flex flex-col items-center w-full'>




                    <div className='md:size-[50px] size-[40px] rounded-full flex overflow-hidden items-center justify-center bg-putih'>
                        <img src={logo} alt="" className='w-1/2' />
                    </div>
                    <ul className='text-white mt-12 flex flex-col text-[24px] relative  gap-[50px]'>
                        <div className='absolute -left-[15px] bg-white  rounded-l-full w-[64px] xl:w-[95px] md:w-[86px] transition-all duration-500 ' onMouseLeave={() => {
                            setFocus(62)
                            handleoutFocus([home,calender,setting,archive])
                        }} style={{ transform: `translateY(${focus}px)` }}>
                            <div className='size-[50px] bg-white rounded-full'></div>
                            <div className='absolute -top-[15px] h-[160%] border-0 bg-white right-0 md:right-[14px] flex flex-col justify-between'>
                                <div className='size-[16px] rounded-br-2xl relative -left-[1px] -top-[1px] bg-hitam'></div>
                                <div className='size-[16px] bg-hitam rounded-tr-2xl  relative -left-[1px] -bottom-[1px]'></div>
                            </div>
                        </div>

                        <li className='z-10 cursor-pointer' onMouseEnter={(e) => {
                            handleText(home)
                            setFocus(-11)
                        }}
                          >
                            <span className='transition-all duration-[1000]' ref={home}>

                                <FaHouse />
                            </span>
                        </li>
                        <li className='relative z-10 cursor-pointer text-hitam' onMouseEnter={() => (setFocus(62))}>
                            <span ref={table} className={`transition-all duration-300`} >

                                <FaTableCellsLarge className=''></FaTableCellsLarge>
                            </span>
                        </li>
                        <li className='z-10 cursor-pointer' onMouseEnter={(e) => {
                            handleText(calender)
                            setFocus(137)
                        }} >
                            <span ref={calender} className='transition-all duration-500'>

                                <FaRegCalendar />
                            </span>
                        </li>
                        <li className='z-10 cursor-pointer' onMouseEnter={(e) => {
                            handleText(archive)
                            setFocus(210)
                        }}>
                            <span ref={archive} className='transition-all duration-500'>

                                <FaBoxArchive />
                            </span>
                        </li>
                        <li className='z-10 cursor-pointer' onMouseEnter={(e) => {
                            handleText(setting)
                            setFocus(284)
                        }}>
                            <span ref={setting} className='transition-all duration-500'>

                                <FaRegSun />
                            </span>
                        </li>
                    </ul>
                </div>
                <h1 className='text-xl text-white rotate-180'> <Link to='/Dashboard.github.io/'>
                <FaArrowRightFromBracket />
                </Link> </h1>

            </div>

        </>
    )
}

export default Navbar
