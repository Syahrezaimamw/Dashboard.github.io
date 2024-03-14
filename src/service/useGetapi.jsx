import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import html from '../images/html-5.png'
const useGetapi = (url) => {
    const [data,setData]=useState([])
    async function getdataapi(){
     return await axios.get(`${url}`)
     .then(a=>{
        return a.data
    })
     }
     useEffect(()=>{
        getdataapi().then(a=>setData(a))
    },[])
     return data
}

export default useGetapi
