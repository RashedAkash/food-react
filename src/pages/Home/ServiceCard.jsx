import React from 'react';

const ServiceCard = ({srv}) => {
  return (
     <div>
      <div className="card card-compact hover:scale-105 hover:-translate-y-4 transition-all duration-300  bg-base-100 shadow-xl">
  <figure><img src={srv?.img} className='p-4' alt="Shoes" /></figure>
  <div className="card-body text-center">
          <h2 className="card-title flex justify-center uppercase text-[#0fa968]">{srv?.ser }</h2>
    <p>({srv?.desc?.slice(0,100)})...</p>
    
  </div>
</div>
      
    </div>
  );
};

export default ServiceCard;