import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const PrevArrow = ({onClick}) => {
  return (
    <div className=' absolute right-20 -top-16' onClick={onClick}>
      <div className=' bg-[#0fa968] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer text-white'>
        <FaArrowAltCircleLeft />
      </div>
    </div>
  );
};

export default PrevArrow;