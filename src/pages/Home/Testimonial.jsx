import React from 'react';
import Title from '../../shared/Title';
import img from '../../../public/images/recipes/chef.jpg'
import img1 from '../../../public/images/home/testimonials/testimonial1.png'
import img2 from '../../../public/images/home/testimonials/testimonial2.png'
import img3 from '../../../public/images/home/testimonials/testimonial3.png'


const Testimonial = () => {
  return (
    <div>
      <header className="bg-white ">
    

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex lg:flex-row-reverse gap-7">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                   <Title subTitle='testimonial' title='What Our Customers Say About Us' />
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">I have been using food for a while now, and I must say, it is become my go-to platform for all things food-related! The variety of recipes available is astounding, catering to different dietary preferences and skill levels.</p>
                    
                <div className=' flex gap-5 mt-8'>
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src={img1} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={img2} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={img3} />
    </div>
  </div>
  
                  </div>
                  <div>
                    <h2>Customer feedback</h2>
                    <div>
                      
                      <p>4.9 (18.k Reviews)</p>
                    </div>
                  </div>
                    </div>
                
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full lg:max-w-3xl" src={img } />
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default Testimonial;