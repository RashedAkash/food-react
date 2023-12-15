import React from 'react';

const CatCard = ({cat}) => {
  return (
    <div>
      <div className="card card-compact hover:scale-105 hover:-translate-y-4 transition-all duration-300 h-[200px] bg-base-100 shadow-xl">
  <figure><img src={cat?.img} alt="Shoes" /></figure>
  <div className="card-body text-center">
          <h2 className="card-title flex justify-center">{cat?.cat }</h2>
    <p>({cat?.dishes})</p>
    
  </div>
</div>
      
    </div>
  );
};

export default CatCard;