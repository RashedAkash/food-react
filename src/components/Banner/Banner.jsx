import React from 'react';
import img from '../../../public/images/recipes/ban.jpg'

const Banner = () => {
  return (
    <div className=' py-16'>
      <header className="bg-gradient-to-r from-[#fafafa] to-[#fcfcfc]">
   

    <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-black lg:text-4xl">Delicious food can create lasting  <span className="text-[#0fa968] dark:text-[#0fa968]">memories.</span></h2>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-base">Delicious food can be described in various ways, encompassing taste, aroma, presentation, and cultural significance.</p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-[#0fa968] rounded-md hover:bg-gray-700">Order now</a>
                    
                </div>
            </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover">
              <div className="w-full h-full ">
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default Banner;