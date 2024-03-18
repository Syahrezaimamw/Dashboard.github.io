import React from 'react'
import Markdown from 'react-markdown'
import ReactMarkdown from "react-markdown"
const MainNotes = ({ activeNoted, onUpdateNote }) => {
    const onEdit = (key, value) => {
        onUpdateNote({
            ...activeNoted,
            [key]: value,
            lastModifed: Date.now()
        })

    }

    if (!activeNoted) {
        return <div className=' w-full md:w-[calc(100%-30%)] min-h-[50vh] md:min-h-screen flex justify-center items-center text-3xl font-medium text-gray-600'>No records selected</div>
    } else {

        return (
            <div className='w-full md:w-[calc(100%-30%)] flex  flex-col-reverse md:flex-col '>
                <div className='w-full px-3 py-6 md:px-9'>
                    <div className='w-full h-[56px] overflow-hidden rounded-md md:rounded-lg shadow-md' >
                        <input type="text"
                            id='title'
                            className='w-full h-full px-3 outline-none bg-abuu md:bg-white'
                            value={activeNoted.title}
                            onChange={(e) => onEdit("title", e.target.value)}
                            autoFocus
                

                        />
                    </div>
                    <div className='w-full mt-5 overflow-hidden rounded-lg h-[350px] shadow-md' >
                        <textarea className='w-full h-full px-3 py-2 outline-none bg-abuu md:bg-white'
                            value={activeNoted.body}
                            id='body'
                            // onKeyDown={(e)handleSpace}
                            onChange={(e) => onEdit("body", e.target.value)}
                        />
                    </div>
                </div>
                <div className='w-full hidden md:flex  bg-abuu min-h-[45vh] md:h-[243px] py-4 mt-2 px-4'>
                    <h1 className='text-2xl font-semibold uppercase'>{activeNoted ? activeNoted.title : 'Tit'}</h1>
                    <ReactMarkdown className={' mt-1 text-sm'}>

                        {activeNoted ? activeNoted.body : 'until'}
                    </ReactMarkdown>
                </div>

            </div>
        )
    }
}

export default MainNotes
