import React from 'react';
import Input from './Input';

const Modal = () => {
  return (
    <div className='absolute top-[5rem] left-[10vw] md:left-[20vw] lg:left-[30vw] h-[30rem] w-[80vw] md:w-[60vw] lg:w-[40vw] bg-white m-auto mt-6 border border-white rounded-lg '>
        <p>New Task</p>
      <form action="/">
        <Input label='Task Name' id='name' />
        
      </form>
      
    </div>
  );
};

export default Modal;
