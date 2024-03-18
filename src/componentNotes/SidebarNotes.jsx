import React from 'react'

const SidebarNotes = ({ notes, addNotes,onDeletedNotes,active,setActived }) => {
    const sorted=notes.sort((a,b)=>b.lastModifed - a.lastModifed)
    return (
        <div className='w-full md:w-[30%] md:min-h-screen z-30 border-b-2 pb-3 border-black ' style={{ boxShadow: "0px 0px 4px gray" }}>
            <div className='flex items-center justify-between w-full px-3 mt-5 mb-6'>
                <h1 className='text-2xl font-semibold'>Rimayu Notes</h1>
                <button className='px-3 py-1 font-medium text-white border-2 rounded-lg color-hitam bg-hitam' onClick={addNotes}>Add</button>
            </div>
            {
                sorted.map((a) => (

                    <div className='w-full mt-5 ' key={a.id} >
                        <div className={`w-full px-3 py-2 transition-all duration-100 cursor-pointer    group pe-4 ${active==a.id? 'bg-abuu ':'hover:bg-abuu'}  `} onClick={()=>setActived(a.id)}>
                            <div className='flex items-center justify-between full '>
                                <h1 className='font-semibold uppercase'>{a.title.substring(0,15)}</h1>
                                <button className='font-semibold text-red-600 text-md ' onClick={()=>onDeletedNotes(a.id)}>Delete</button>
                            </div>
                            <div className='w-full mt-1'>
                                <p className='text-[13px] font-medium'>{a.body.substring(0,30)+'...'}</p>
                                <p className={`text-[12px]  ${active==a.id? ' text-gray-600 ':'text-gray-600'} `}>Last Modified {new Date(a.lastModifed).toLocaleDateString("en-GB",{
                                    hour: "2-digit",
                                    minute:"2-digit",
                                })}</p>

                            </div>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default SidebarNotes
