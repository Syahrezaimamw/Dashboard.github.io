import React from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
export const Task = () => {
    return (
        <div className='w-full'>
            <div className='w-full py-5 rounded-3xl px-7 h-xl bg-abuu'>
                <div className=' md:w-[80%] '>
                    <h1 className='text-2xl font-medium'>Hi Syahreza</h1>
                    <p className='py-3 pb-4 text-gray-600 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam perferendis accusamus  fuga laborum harum aliquid. Dolores placeat asperiores at maxime perspiciatis.</p>
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
        </div>
    )
}
