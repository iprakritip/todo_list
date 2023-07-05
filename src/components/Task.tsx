import React from 'react';
import TaskBtns from './TaskBtns';

const Task = () => {
  return (
    <div className='h-20 w-full flex justify-between items-center bg-white px-5 py-2 '>
      <div className='left'>
        <p className='time text-gray-400 font-extralight text-xl'>9:45</p>
        <p className='text-gray-600 text-lg font-light'>Attend Meeting</p>
      </div>
      <TaskBtns />
    </div>
  );
};

export default Task;
