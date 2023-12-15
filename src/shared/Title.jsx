import React from 'react';

const Title = ({subTitle,title}) => {
  return (
    <div>
      <h1 className=' uppercase font-medium text-xl text-[#0fa968]'>{subTitle }</h1>
      <h1 className=' text-[#111] text-2xl font-bold md:text-4xl'>{title }</h1>
    </div>
  );
};

export default Title;