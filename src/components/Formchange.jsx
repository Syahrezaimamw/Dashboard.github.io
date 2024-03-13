import React, { useContext } from 'react'
import { Button } from './Button'
import { Appcontxt } from '../contex/Ctx'
const Formchange = () => {
    const data=useContext(Appcontxt)
    const ubah=data.ubah
    console.log(ubah)
    console.log(data)
  return (
    <form className="w-full" onSubmit={(e)=>{
        e.preventDefault()
        data.dispatch({type:'submit'})
        localStorage.setItem('changeDahsboardProfile',JSON.stringify(data.value))
    }
}>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_email"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-hitam peer"
        placeholder=" "
        required=""
        onChange={(e)=>ubah.setnewName(e.target.value)}
      />
      <label
        htmlFor="floating_email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hitam peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 left-0 peer-focus:-translate-y-6"
      >
       Change Name
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_password"
        id="floating_password"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-hitam peer"
        placeholder=" "
        required=""
        onChange={(e)=>ubah.setnewDeskripsi(e.target.value)}
      />
      <label
        htmlFor="floating_password"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-hitam left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
       Change Deskripsion
      </label>
    </div>
  
  <div className='flex items-end justify-between w-full'>
    <p className='text-sm font-medium text-gray-800'>Change Note </p>

    <Button
    >
      Edit 
    </Button>
        </div>
  </form>
  
  )
}

export default Formchange
