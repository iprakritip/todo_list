import React from 'react';

const Date = () => {
  const todaysDate = new window.Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='w-full h-[4rem] flex justify-center items-center bg-gradient-to-r from-[#6EDEF2] to-[#469DDD]'>
      <p className='text-center text-white text-lg'>{todaysDate}</p>
    </div>
  );
};

export default Date;
