import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [selectCat, setselectCat] = useState('all');

  const [sort, setSort] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/menu.json')
      const data = await res.json();
      setMenu(data)
      
     
    }
   
    fetchData()
  }, []);
 
  const pizza = menu?.filter(item => item.category === 'pizza')
  const salad = menu?.filter(item => item.category === 'salad')
  const soup = menu?.filter(item => item.category === 'soup')
  const dessert = menu?.filter(item => item.category === 'dessert')
  const drinks = menu?.filter(item => item.category === 'drinks')
  
  
  return (
    <div className='py-16'>
      <div>
        
       <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="All" checked />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        menu?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
          

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="pizza" />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        pizza?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
          


  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Salad"  />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        salad?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="soup" />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        soup?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="drinks" />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        drinks?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="dessert" />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        dessert?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
</div>
      </div>
     
    </div>
  );
};

export default Menu;