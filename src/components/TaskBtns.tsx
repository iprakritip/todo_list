import React from 'react';

const TaskBtns = () => {
  const taskBtnClass =
    'right w-7 h-7 border border-sky-400 rounded-full text-sky-400 hover:text-white hover:bg-sky-400 flex justify-center items-center';
  return (
    <div className='flex gap-2'>
      <button className={`${taskBtnClass}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12.75l6 6 9-13.5'
          />
        </svg>
      </button>
      <button className={`${taskBtnClass}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskBtns;
