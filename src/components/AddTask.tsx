import React from 'react';

const AddTask = () => {
    const openModal=()=>{
        //do sth
    }
  return (
    <div className='bg-white w-[80vw] md:w-[60vw] lg:w-[40vw] fixed  bottom-20 flex justify-center py-1 shadow-inner border-x border-b rounded-lg border-white'>
      <button className=' hover:font-bold px-4 py-2 text-white text-xl font-normal bg-gradient-to-r from-[#6EDEF2] to-[#469DDD]  text-center borer border-sky-500 rounded-full' onClick={openModal}>
        +
      </button>
    </div>
  );
};

export default AddTask;
