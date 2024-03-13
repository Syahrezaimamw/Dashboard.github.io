import React from 'react'

export const Button = (props) => {
    const {children}=props
  return (
    <button className='px-3 py-2 rounded-lg bg-hitam text-putih  :text-[15px] '>{children}</button>
  )
}
