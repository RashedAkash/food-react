import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const MenuCard = ({ itm }) => {
  
  const [click, setClick] = useState(false);
  const { _id, name, recipe, image, category, price } = itm;
  return (
    <div>
      <div className="card card-compact h-[450px]  bg-base-100 shadow-xl">
        <figure className=' relative'>
          <img src={image} alt="Shoes" />
<span className=' absolute bg-[#0fa968] p-2 top-1 right-2 rounded-tr-lg rounded-bl-lg'><FaHeart className={`${click? 'text-red-700':'text-white'}`} onClick={() => setClick(!click)} /></span>
        </figure>
  <div className="card-body">
          <h2 className="card-title">{name }</h2>
          <p>{ recipe}</p>
          <div className="card-actions ">
            <p className='text-xl'><span className='  text-[#0fa968]'>$</span>{price }</p>
      <button className="btn text-white bg-[#0fa968]">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default MenuCard;