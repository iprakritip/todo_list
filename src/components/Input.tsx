import React from 'react'
import Label from './Label'

interface InputProps{
   id:string;
   label:string
}

const Input = ({id, label}:InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <Label htmlFor={id} label={label}/>
        <input type="text" id={id} className='border px-2 py-2 rounded-lg text-gray-500 outline-none' />
    </div>
  )
}

export default Input