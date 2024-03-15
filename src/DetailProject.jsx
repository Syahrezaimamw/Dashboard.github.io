import React from 'react'
import { useState, useEffect } from 'react'
import { getApii } from './service/api'
import { Card } from './components/Card'
import { NavMobile } from './components/NavMobile'
export const DetailProject = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getApii().then((a => setData(a)))
    }, [])
    return (
        <div>
            <NavMobile />
            <div className='flex flex-wrap justify-center w-full px-3 '>
                <div className='flex flex-wrap justify-between w-full gap-5 md:gap-8 mt-9 md:max-w-4xl lg:max-w-6xl xl:max-w-[1500px]  '>
                    {data.map((a, i) => (
                        <div className='w-full sm:w-[47%] md:w-[30%] lg:w-[20%] xl:w-[18%] ' key={i}>

                            <Card theme={i % 2 == 1} title={a.title} link={a.link} description={a.description} language={a.language} key={i} id={a.id} path="/Dashboard.github.io/detail" />
                        </div>
                    )
                    )
                    }
                </div>
            </div>
        </div>
    )
}
