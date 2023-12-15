import React from 'react';
import Title from '../../shared/Title';
import ServiceCard from './ServiceCard';
const services = [
  {
    img: '../../../public/images/home/services/icon1.png',
    ser: 'Catering',
    desc: 'Exquisite catering services tailored to delight your palate. Indulge in a diverse menu of culinary delights, carefully crafted to elevate every occasion. '
  },
  {
    img: '../../../public/images/home/services/icon2.png',
    ser: 'Fast delivery',
    desc: '"Swift and reliable delivery service ensuring your orders reach you promptly. With our fast delivery system, enjoy the convenience of receiving your items quickly and efficiently, right at your doorstep."'
  },
  {
    img: '../../../public/images/home/services/icon3.png',
    ser: 'online ordering',
    desc: "Convenient and accessible online platform offering a seamless experience for your needs. From browsing to purchasing, our user-friendly online system provides easy access to our products or services at your fingertips, allowing you to engage effortlessly from anywhere, anytime."
  },
  {
    img: '../../../public/images/home/services/icon4.png',
    ser: 'gift card',
    desc: "A versatile and thoughtful present for any occasion. Our gift cards provide the perfect opportunity to give the gift of choice. Recipients can explore a wide range of products or services, selecting what best suits their preferences and desires. It's the ideal way to show someone you care while giving them the freedom to pick their own perfect gift."
  }
];


const Services = () => {
  return (
    <div className=' py-10'>
      <header className="bg-white ">
    

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex gap-5">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                   <Title subTitle='our story & services' title='Our Culinary Journey And Services' />
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400"> Tailored food services that cater to your cravings and convenience. Enjoy a diverse array of culinary options delivered straight to your door. Whether it is a hearty meal, gourmet snacks, or specialized dietary needs, our food services aim to satisfy your tastes while ensuring quality, freshness, and a delightful dining experience.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#0fa968] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore</button>
                </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {
                services?.map(srv => <ServiceCard key={srv?.desc} srv={srv} />)
                }
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default Services;