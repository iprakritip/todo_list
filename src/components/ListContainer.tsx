import React from 'react';
import Date from './Date';
import Task from './Task';

const ListContainer = () => {
  return (
    <div className='min-h-[30rem] w-[30vw] bg-white m-auto mt-6 border border-white rounded-lg overflow-hidden shadow-normal shadow-sky-400 '>
      <Date />
      <div className='flex flex-col'>
        <Task />
      </div>
    </div>
  );
};

export default ListContainer;
