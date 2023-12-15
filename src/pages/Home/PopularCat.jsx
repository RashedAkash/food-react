import React from 'react';
import CatCard from './CatCard';
import Title from '../../shared/Title';

const PopularCat = () => {
  const popularCats = [
  {
    img: '../../../public/images/home/category/img1.png',
    cat: 'Main Dish',
    dishes: 'main dish'
  },
  {
    img: '../../../public/images/home/category/img2.png',
    cat: 'Breakfast',
    dishes: '15 bread fast'
  },
  {
    img: '../../../public/images/home/category/img3.png',
    cat: 'Dessert',
    dishes: '48 dessert'
  },
  {
    img: '../../../public/images/home/category/img4.png',
    cat: 'All',
    dishes: '255 items'
  }
];

  return (
    <div>
      <div className='text-center pb-16'>
        <Title subTitle='Customer favorites' title='Popular Category' />
      </div>
       <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'>
      {
        popularCats?.map(cat=> <CatCard key={cat.cat} cat={cat} />)
      }
    </div>
   </div>
  );
};

export default PopularCat;