import React, { useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import load from './load.json'
import Lottie from 'lottie-react'
import { deleteData } from '../service/api';
export const Modal = ({id,path}) => {
    const [show,setShow]=useState(false)
    const [lotLoad,setLodLoad]=useState(false)
    function handleShow(){
        setShow(true)
    }
    function handleOutShow(){
        setShow(false)
    }
    function handleDelete(){
        
        setLodLoad(true)
        deleteData(id)
        setTimeout(()=>{
            window.location.href=path
            setShow(false)
            setLodLoad(false)
        },2000)
        
    }
  return (
    <>
    <button
    onClick={handleShow}
      className="block "
      type="button"
    >
        <FaRegTrashCan className='text-lg'/>
        
   
    </button>
    <div
      id="popup-modal"
      tabIndex={-1}
      className={`${show? 'flex':'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-md max-h-full p-4">
        <div className="relative rounded-lg shadow bg-abuu dark:bg-gray-700">
       
          <div className="p-4 text-center md:p-5">
            {
                lotLoad==false?
                <>
                <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this project?
              
            </h3>
                </>
                :
            <div className='flex justify-center w-full h-[143px]'>
            <Lottie animationData={load} className='w-[80%]  '></Lottie>
            </div>
        }
            <button
            data-modal-hide="popup-modal"
              type="button"
              onClick={handleDelete}
              
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
            onClick={handleOutShow}
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-hitam focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}
