import React, { useEffect, useReducer, useState } from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile';
import { Task } from '../main/Task';
import { Appcontxt } from '../contex/Ctx';
import { NavMobile } from '../components/NavMobile';
import { Acara } from '../main/Acara';
import axios from 'axios'
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
  // console.log(hamburger)
  async function getApi(){
    await axios.put('https://65557ea384b36e3a431dce2b.mockapi.io/project_github/2', {
      title: 'Web Game Rimayu',
      description: "School work in creating a free website with HTML, CSS, and vanilla JavaScript. for taking school assignment grades",
      language: ['../images/js.png', '../images/html-5.png', '../images/css-3.png'],
      date:'2024-01-18',
      link:'https://syahrezaimamw.github.io/web-game-rimayu/',
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
  })
  }
  useEffect(()=>{
    // getApi()
    
  },[])
  // {
    
  // }

  const [value, dispatch] = useReducer(handleSet, { newname, newDeskripsi,hamburger })


  return (
    <>
      <Appcontxt.Provider value={{ value,hamburger, dispatch, ubah: { setnewDeskripsi, setnewName,setnHamburger } }} >
    <NavMobile/>
     

        <div className='flex'>
          <Navbar />
          <div className='flex justify-center w-full md:py-4'>

            <div className='flex  md:px-3 xl:px-6 xl:max-w-[1580px]'>
              <div className='w-full mt-3 md:pt-0 ps-3 md:ps-3 lg:ps-7 xl:ps-9 pe-3 md:pe-0'>
                <Profile />
                <div className='flex flex-col mt-8 md:flex-row '>

                  {/* bagian menu daftar task */}
                  <div className=' w-full pe-0 md:w-[60%] md:pe-5'>
                    <Task></Task>
                  </div>

                  {/* bagian menu daftar acara */}
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
