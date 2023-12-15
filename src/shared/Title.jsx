import React from 'react';

const Title = ({subTitle,title}) => {
  return (
    <div>
      <h1 className=' uppercase font-medium text-xl text-[#0fa968]'>{subTitle }</h1>
      <h1 className=' text-[#777] text-2xl font-bold md:text-5xl'>{title }</h1>
    </div>
  );
};

export default Title;