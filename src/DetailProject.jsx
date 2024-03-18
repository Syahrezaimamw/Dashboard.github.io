import React from 'react'
import { useState, useEffect } from 'react'
import { getApii } from './service/api'
import { Card } from './components/Card'
import { NavMobile } from './components/NavMobile'
import Navbar from './components/Navbar'
import { CardSkeleton } from './components/CardSkeleton'
export const DetailProject = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getApii().then((a => setData(a)))
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [])
    return (
        <div>
            <NavMobile />


            <div className='flex'>
                <Navbar />
                <div className='flex flex-wrap items-start justify-center w-full md:py-4'>
                    <div className='w-[90%] flex flex-wrap justify-start gap-9 items-start'>
                    {loading ?
                        data.map((a, i) => {
                            
                                // console.log(a)
                                return (
                                    <div className='w-full sm:w-[47%] md:w-full lg:w-[47%] xl:w-[31%] ' key={i}>

                                        <Card theme={i % 2 == 1} title={a.title} link={a.link} path='path="/Dashboard.github.io/' id={a.id} description={a.description} language={a.language} key={i} />
                                    </div>
                                )
                            
                        })

                        :
                        
                            data.map((e,i)=>(
                                
                        
                            <CardSkeleton key={i}></CardSkeleton>
                            ))
                        

                    }
                        </div>

    
                </div>
            </div>
        </div>
    )
}
