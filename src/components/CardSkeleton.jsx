import React from 'react'

import Skeleton from 'react-loading-skeleton'
export const CardSkeleton = ({ key }) => {
    return (
        <div className={` p-5 w-full sm:w-[47%] md:w-full lg:w-[47%] xl:w-[31%]  rounded-3xl`}>
            <h1 className={`' }`}><Skeleton /></h1>
            <p className={`text-[13px] ${'text-white '} py-3`}>
                <Skeleton count={3} />

            </p>

            <div className='flex justify-between w-full'>
                <div className='relative h-6'>
                    <div className={` border-white size-6 absolute overflow-hidden rounded-full  `} style={{ left: `${0 * 15}px` }}>
                        <Skeleton className='w-full h-[140px] relative bottom-2 rounded-full ' />
                    </div>
                    <div className={` border-white size-6 absolute overflow-hidden rounded-full  `} style={{ left: `${1 * 15}px` }}>
                        <Skeleton className='w-full h-[140px] relative bottom-2 rounded-full' />
                    </div>
                    <div className={` border-white size-6 absolute overflow-hidden rounded-full  `} style={{ left: `${2 * 15}px` }}>
                        <Skeleton className='w-full h-[140px] relative bottom-2 rounded-full' />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-8 ' style={{ transform: 'rotateY(180deg)' }}>
                        <Skeleton className='h-[20px] w-full' />
                    </div>
                    <p className="w-10 h-[20px]"><Skeleton /></p>
                </div>

            </div>

        </div>
    )
}
