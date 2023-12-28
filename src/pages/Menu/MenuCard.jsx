import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FireBaseContext } from "../../context/AuthContext";

const MenuCard = ({ itm }) => {
  const axiosSecure = useAxiosSecure();
  const {user}= useContext(FireBaseContext)
  const [click, setClick] = useState(false);
  const { _id, name, recipe, image, category, price } = itm;
  const handleCart = (itm) => {
    console.log(itm);
    if (user) {
      const info = {
        name:name,
        recipe:recipe,
        image:image,
        price:price,
        quantity: 1,
        user: user.email
      }
      axiosSecure.post('/cart', info     
      
    ) 
        .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
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
      <button onClick={()=>handleCart(itm)} className="btn text-white bg-[#0fa968]">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default MenuCard;