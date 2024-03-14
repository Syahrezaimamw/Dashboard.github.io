import React, { Children, createContext, useContext, useReducer, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa6';
import { FaRegBell } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa6';
import { AlertProfile } from './AlertProfile';
import { Appcontxt } from '../contex/Ctx';
import App from '../App';
export const NavMobile = () => {
    const data=useContext(Appcontxt)
  return (
    <div className='flex flex-col items-center justify-between w-full pt-3 sm:hidden '>
        <AlertProfile/>
        
        <div className='flex items-center justify-between w-full px-3 pb-1 '>

          <div className='bg-[rgb(245,245,245)] rounded-xl px-4 py-2 w-[80%] md:w-[300px] lg:w-[500px]  flex items-center'>
            <p className='text-[20px] text-gray-800'><FaMagnifyingGlass /></p>
            <input type="text" placeholder='Search ' className='placeholder:font-normal  placeholder:text-gray-500 border-0 bg-[rgb(245,245,245)]  w-[80%] outline-0 ms-4 h-[30px]' />

          </div>
          <div className='md:hidden'>
            <h1 className='text-xl' onClick={()=>data.ubah.setnHamburger(!data.hamburger)}><FaBars /></h1>
          </div>
          <div className='items-center hidden gap-8 md:flex'>
            <p className='text-xl'><FaRegBell /></p>
            <button className='flex items-center'>
              <p className='font-semibold text-slate-800'>EN</p>
              <p className='text-sm text-gray-700 ms-1'><FaCaretDown /></p>
            </button>
            <div className='flex items-center h-full'>
              <div className='me-2 text-slate-700 '>
                <p className='font-semibold text-md text-slate-800 relative tracking-[1x] top-[1px]'> Syahreza</p>
                <p className='text-end relative text-slate-500 bottom-[1px] text-sm'> rimayu</p>
              </div>
              <div className='size-[50px] border-2 border-black rounded-full cursor-pointer'></div>
            </div>

          </div>
        </div>
        <div className='w-full px-8 py-1 mt-2 text-white bg-hitam'>
          <ul className='flex justify-between w-full text-sm text-white '>
            <li className='cursor-pointer '>Home </li>
            <li className='cursor-pointer'>Table</li>
            <li className='cursor-pointer'>Calender</li>
            <li className='cursor-pointer'>Archive</li>
            <li className='cursor-pointer'>Setting</li>
          </ul>

        </div>
      </div>
  )
}
