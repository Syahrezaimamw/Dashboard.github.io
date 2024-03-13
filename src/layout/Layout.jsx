import React, { Children, createContext, useReducer, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Navbar from '../components/Navbar'
import Profile from '../components/Profile';
import { Task } from '../main/Task';
import { FaBars } from 'react-icons/fa6';
import { FaRegBell } from 'react-icons/fa6';
import { Appcontxt } from '../contex/Ctx';
import { FaCaretDown } from 'react-icons/fa6';
import { Acara } from '../main/Acara';

const Layout = () => {
  const [newname,setnewName]=useState('')
  const [newDeskripsi,setnewDeskripsi]=useState('')
  function handleSet(state,action){
    switch(action.type){
      case 'submit':
      return  {name:newname,deskripsi:newDeskripsi}
    }
    
  }
 
  const [value,dispatch]=useReducer(handleSet,{newname,newDeskripsi})


  return (
    <>
      <div className='flex flex-col items-center justify-between w-full pt-3 sm:hidden '>
        <div className='flex items-center justify-between w-full px-3 pb-1 '>

          <div className='bg-[rgb(245,245,245)] px-4 py-2 w-[80%] md:w-[300px] lg:w-[500px]  flex items-center'>
            <p className='text-[20px] text-gray-800'><FaMagnifyingGlass /></p>
            <input type="text" placeholder='Search ' className='placeholder:font-normal placeholder:text-gray-500 border-0 bg-[rgb(245,245,245)]  w-[80%] outline-0 ms-4 h-[30px]' />

          </div>
          <div className='md:hidden'>
            <h1 className='text-xl'><FaBars /></h1>
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
        <div className='w-full px-8 mt-2 text-white bg-hitam'>
          <ul className='flex justify-between w-full text-sm text-white '>
            <li className='cursor-pointer '>Home </li>
            <li className='cursor-pointer'>Table</li>
            <li className='cursor-pointer'>Calender</li>
            <li className='cursor-pointer'>Archive</li>
            <li className='cursor-pointer'>Setting</li>
          </ul>
        </div>
      </div>
      <Appcontxt.Provider value={{value,dispatch,ubah:{setnewDeskripsi,setnewName}}} >

      <div className='flex'>


          <Navbar />
      <div className='flex justify-center w-full md:py-4'>

        <div className='flex  md:px-3 xl:px-6 xl:max-w-[1580px]'>

          {/* <div></div> */}
          <div className='w-full mt-3 md:pt-0 ps-3 md:ps-9 pe-3 md:pe-0'>
            <Profile />
            <div className='flex flex-col mt-8 md:flex-row '>
              <div className=' w-full pe-0 md:w-[60%] md:pe-8'>
                <Task></Task>
              </div>
              <div className=' w-full pe-3 md:w-[40%] mt-20 md:mt-0'>
              <Acara/>
              </div>
            </div>
          </div>
        </div>


      </div>
      </div>
      </Appcontxt.Provider>
    </>
  )
}

export default Layout
