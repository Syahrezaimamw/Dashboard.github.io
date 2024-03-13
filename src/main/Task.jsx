import React from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

export const Task = () => {
    const data=JSON.parse(localStorage.getItem('changeDahsboardProfile'))
    console.log(data)
    return (
        <div className='w-full'>
            <div className='w-full py-5 rounded-3xl px-7 h-xl bg-abuu'>
                <div className=' sm:w-[80%] md:w-full  lg:w-[80%]  w-full  '>
                    <h1 className='text-2xl font-medium'>{data.name}</h1>
                    <p className='py-3 pb-4 text-gray-600 text-[15px] text-justify '>{data.deskripsi}</p>
                    <Button>View Details </Button>
                </div>
            </div>
            <div className='w-full mt-9 '>
                <div className='flex items-end justify-between w-full px-5'>
                    <h3 className='font-semibold'>Trending Task</h3>
                    <p className='text-sm text-gray-600 cursor-pointer'>View all</p>
                </div>
                <div className='flex flex-wrap justify-between w-full mt-5 gap-7 md:gap-5 xl:gap-0'>
                    <Card/>
                    <Card theme={true}/>
                    <Card/>
                </div>
            </div>
            <div className='h-[265px] p-6 mt-8 bg-abuu rounded-3xl'>
                <div className='flex justify-between w-full'>
                <h1  className='text-2xl font-medium'>Analitics</h1>
                <div className='flex gap-1'>
                    <Button>Weekly</Button>
                    <button className='px-4 py-2 bg-[rgb(235,235,235)] rounded-xl'>Monthly</button>
                </div>

                </div>
                
            </div>
        </div>
    )
}
