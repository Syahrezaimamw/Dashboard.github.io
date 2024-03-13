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
import { NavMobile } from '../components/NavMobile';

const Layout = () => {
  const [newname, setnewName] = useState('')
  const [newDeskripsi, setnewDeskripsi] = useState('')
  const [hamburger, setnHamburger] = useState(false)
  function handleSet(state, action) {
    switch (action.type) {
      case 'submit':
        return { name: newname, deskripsi: newDeskripsi,hamburger:false }
        case 'hamburger':
          return{...state,hamburger:true}
    }

  }
  console.log(hamburger)

  const [value, dispatch] = useReducer(handleSet, { newname, newDeskripsi,hamburger })


  return (
    <>
      <Appcontxt.Provider value={{ value,hamburger, dispatch, ubah: { setnewDeskripsi, setnewName,setnHamburger } }} >
    <NavMobile/>
     

        <div className='flex'>
          <Navbar />
          <div className='flex justify-center w-full md:py-4'>

            <div className='flex  md:px-3 xl:px-6 xl:max-w-[1580px]'>

              {/* <div></div> */}
              <div className='w-full mt-3 md:pt-0 ps-3 md:ps-3 lg:ps-7 xl:ps-9 pe-3 md:pe-0'>
                <Profile />
                <div className='flex flex-col mt-8 md:flex-row '>
                  <div className=' w-full pe-0 md:w-[60%] md:pe-5'>
                    <Task></Task>
                  </div>
                  <div className=' w-full md:pe-3 md:w-[40%] pb-5 md:pb-0 mt-10 md:mt-0'>
                    <Acara />
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
