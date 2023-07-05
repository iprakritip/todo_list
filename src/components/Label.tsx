import React from 'react'

interface LabelProps{
    label:string;
    htmlFor:string
}

const Label = ({label, htmlFor}:LabelProps) => {
  return (
    <label htmlFor={htmlFor} className='text-xs '>{label}</label>
  )
}

export default Label