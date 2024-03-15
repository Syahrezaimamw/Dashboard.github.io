import React, { useEffect } from 'react'
import { Modal } from './Modal';
import { FaHandsClapping } from "react-icons/fa6";
export const Card = (props) => {

    const { theme, title, language, description, link,id ,path} = props
    // console.log(id)
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
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-6 text-xl' style={{}}>
                        {theme ?
                           <FaHandsClapping className='text-white'/>:
                            <FaHandsClapping className='text-gray-700'/>
                        
                        }
                    </div>
                    <p className={`${theme ? 'text-white' : "text-gray-700"} text-md font-medium`}> <Modal id={id} path={'/Dashboard.github.io/detail'}/></p>
                </div>

            </div>
            

        </div>
    )
}
