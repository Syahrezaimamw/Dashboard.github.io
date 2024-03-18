import React from 'react'
import CardAcara from '../components/CardAcara'
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHand } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { Notes } from '../components/Notes';
import Formchange from '../components/Formchange';
import { Friend } from '../components/Friend';
export const Acara = () => {
    
    return (
        <div className='w-full py-2 pb-7 md:pb-5 bg-abuu rounded-3xl'>
            <div className='flex flex-col items-center w-full gap-5 p-5 rounded-2xl' >
                <CardAcara title='Articles posted' path="/Dashboard.github.io/notes" total="3"  ic={<FaRegBookmark />} color='#FFE7CA' />
                <CardAcara title='Claps This Week' total="1.5k" ic={<FaRegHand />} color='#B9BFF8' />
                <CardAcara title='New Followers This Week' total="100" ic={<FaRegUser />} color='rgb(230,230,230)' />
            </div>
            <div className='flex flex-col px-3 mt-6 sm:px-7'>
                <div className='flex justify-between w-full px-4'>
                    <h1 className='text-lg font-medium'>Friend</h1>
                    <p className='text-[14px] text-slate-600'>View all</p>
                </div>

               <div className='flex justify-center w-full'>
                
                {/* md */}
                <div className='justify-center hidden w-full mt-3 md:flex lg:hidden md:w-full'>

                    <Friend jumlah={2}/>
                </div>

                {/* xl */}
                <div className='hidden justify-center w-[300px] mt-3 md:hidden xl:flex md:w-full'>

                    <Friend jumlah={4}/>
                </div>
                
                {/* default */}
                <div className='flex justify-center w-[310px]  mt-3 sm:hidden  md:w-full'>

                    <Friend jumlah={3}/>
                </div>
                
               
               {/* lg  */}
                <div className='justify-center hidden w-full mt-3 lg:flex xl:hidden md:w-full'>

                    <Friend jumlah={3}/>
                </div>
   
               </div>
             <div className='p-6 mt-10 bg-white rounded-3xl h-[255px] '>
                <Notes/>
            </div>
            </div>

        </div>
    )
}
