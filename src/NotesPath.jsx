import React, { useEffect, useState } from 'react'
import SidebarNotes from './componentNotes/SidebarNotes'
import MainNotes from './componentNotes/MainNotes'
const NotesPath = () => {
    localStorage.setItem('notes',JSON.stringify([]))
    const [notes,setNotes]=useState(JSON.parse(localStorage.notes)||[])
    const [active,setActived]=useState()
    // localStorage.removeItem('notes')
    function addNotes(){
        setNotes([...notes,{
            id:notes.length+1,
            title:'Title',
            body:'Untiled note',
            lastModifed:Date.now()
        }])
        
    }
    // useEffect(()=>{
        // setNotes(notes.length>0?JSON.parse(localStorage.notes):[])
    // },[notes])
    // console.log(notes)
    // localStorage.setItem("notes",JSON.stringify(notes))
    function onDeletedNotes(id){
        setNotes(notes.filter((a)=>a.id!==id))
        
    }
    const [notelive,setNotelive]=useState({})
    function activeNoted(){
       return setNotelive( notes.find((a)=>a.id==active))
    }
    useEffect(()=>{
        activeNoted()
        
    },[active])
    const onUpdateNote=(onUpdateValue)=>{
      const dataUpdate=  notes.map((a)=>{
            if(a.id===active){
                return onUpdateValue
            }
            return a
        })
        setNotelive(onUpdateValue)
        setNotes(dataUpdate)
    }
    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes))
        
    },[notes])
  return (
    <div className='flex flex-col w-full md:flex-row'>
        
        <SidebarNotes
         notes={notes} 
         addNotes={addNotes} 
         onDeletedNotes={onDeletedNotes}
         active={active}
         setActived={setActived}
         ></SidebarNotes>
         
        <MainNotes
        activeNoted={notelive}
        onUpdateNote={onUpdateNote}
        />
      
    </div>
  )
}

export default NotesPath
