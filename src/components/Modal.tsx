import React, { MouseEvent } from 'react';
import Input from './Input';

const Modal = () => {
    const submitForm=(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
    }
  return (
    <div className='absolute top-[5rem]  left-[10vw] md:left-[20vw] lg:left-[30vw] flex flex-col gap-16 h-[30rem] w-[80vw] md:w-[60vw] lg:w-[40vw] bg-white m-auto mt-6 border border-white rounded-lg '>
      <p className=' text-center py-5 text-xl text-sky-500 font-semibold border border-dotted'>New Task</p>
      <form action='/' className='px-2 flex flex-col gap-6'>
        <Input label='Task name' id='name' />
        <Input label='Deadline' id='deadline' />
        <button className='bg-sky-500 px-4 py-2' onClick={(e)=>submitForm(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Modal;
