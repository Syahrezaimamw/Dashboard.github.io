import { createContext } from "react"
export const Appcontxt=createContext({
    name:'',
    deskripsi:''
  })

  
  export function Contex({Children}){
    return <Appcontxt>{Children}</Appcontxt>
  }