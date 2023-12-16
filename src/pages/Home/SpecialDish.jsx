import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from '../../shared/Title';
import SpecialDishesCard from './SpecialDishesCard';

const SpecialDish = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch('/menu.json')
      .then(res => res.json())
      .then(data => {
        const populerMenus = data.filter(pm => pm?.category === 'popular')
        setPopular(populerMenus);
      })
  }, [setPopular]);
  var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div>
      <Title title='Standout Dishes From Our Menu' subTitle='Popular menu' />
        <Slider {...settings}>
          
          {
            popular?.map(pop=> <SpecialDishesCard key={pop.id} pop={pop}/> )
            }
          
         
        </Slider>
    </div>
  );
};

export default SpecialDish;