import React from 'react';
import AddTask from './AddTask';
import Date from './Date';
import Task from './Task';

const ListContainer = () => {
  return (
    <div className=' relative h-[30rem] w-[80vw] md:w-[60vw] lg:w-[40vw] bg-white m-auto mt-6 border border-white rounded-lg shadow-normal shadow-sky-400 overflow-hidden'>
      <Date />
      <div className='flex gap-2 h-[25rem] divide-y-[1px] flex-col justify-between items-center w-full overflow-scroll'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      <AddTask />
    </div>
  );
};

export default ListContainer;
