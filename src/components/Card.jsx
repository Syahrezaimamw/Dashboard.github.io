import React from 'react'
import clap from "../images/clap.png";
import clapB from "../images/clap-hands.png";
import js from '../images/js.png'
export const Card = (props) => {
    const { theme, title, language, description, link } = props
    return (
        <div className={`${theme ? 'bg-hitam' : 'bg-abuu'} p-5 w-full  rounded-3xl`}>

            <h1 className={`${theme ? 'text-white' : 'text-gray-500'}`}>
                <a href={link} target='_blank'>

                    {title}
                </a>
            </h1>
            <p className={`text-[13px] ${theme ? 'text-white' : 'text-gray-500'} py-3`}>
                <a href={link} target='_blank'>

                    {description.substring(0, 75)}...
                </a>

            </p>

            <div className='flex justify-between w-full'>

                <div className='relative h-6'>
                    {language.map((a, i) => (

                        
                        
                        

                            <div key={i} className={`border-2 border-white size-6 absolute overflow-hidden bg-black rounded-full  `} style={{ left: `${i * 15}px` }}>
                                <img className='w-full' src='' alt="" />
                            </div>
                        )
                    )
                    }
                    {/* <div className={`border-2 border-white size-6 absolute bg-black rounded-full left-4`}></div>
        <div className={`border-2 border-white size-6 absolute bg-black rounded-full left-8`}></div> */}
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-6 ' style={{ transform: 'rotateY(180deg)' }}>
                        {theme ?
                            <img src={clapB} className='' alt="" /> :
                            <img src={clap} className='' alt="" />
                        }
                    </div>
                    <p className={`${theme ? 'text-white' : "text-black"} text-md font-medium`}>1.2K</p>
                </div>

            </div>

        </div>
    )
}
