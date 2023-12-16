import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const NextArrow = ({onClick}) => {
  return (
    <div className=' absolute right-4 -top-16' onClick={onClick}>
      <div className=' bg-[#0fa968] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer text-white'>
        <FaArrowAltCircleRight />
      </div>
    </div>
  );
};

export default NextArrow;