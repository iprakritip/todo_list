import React from 'react'
import Label from './Label'

interface InputProps{
   id:string;
   label:string
}

const Input = ({id, label}:InputProps) => {
  return (
    <div>
        <Label htmlFor={id} label={label}/>
        <input type="text" id={id} />
    </div>
  )
}

export default Input