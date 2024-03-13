import React from 'react'
import clap from "../images/clap.png";
import clapB from "../images/clap-hands.png";
export const Card = (props) => {
    const {theme}=props
  return (
    <div className={`${theme?'bg-hitam':'bg-abuu'} p-5 w-full sm:w-[47%] md:w-full lg:w-[47%] xl:w-[31%]  rounded-3xl`}>
        <h1 className={`${theme?'text-white':'text-gray-500' }`}>Prototype</h1>
        <p className={`text-[13px] ${theme?'text-white':'text-gray-500'} py-3`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. enetur rem  similique? Ea soluta...
        </p>
        <div className='flex justify-between w-full'>

        <div className='relative h-6'>
            <div className={`border-2 border-white size-6 absolute bg-black rounded-full `}></div>
            <div className={`border-2 border-white size-6 absolute bg-black rounded-full left-4`}></div>
            <div className={`border-2 border-white size-6 absolute bg-black rounded-full left-8`}></div>
        </div>
        <div  className='flex items-center gap-3'>
            <div className='w-6 ' style={{transform:'rotateY(180deg)'}}>
                {theme?
                <img src={clapB} className='' alt="" />:
                <img src={clap} className='' alt="" />
                }
            </div>
            <p className={`${theme?'text-white':"text-black"} text-md font-medium`}>1.2K</p>
        </div>
        
        </div>
        
    </div>
  )
}
