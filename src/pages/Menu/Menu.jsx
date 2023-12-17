import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [selectCat, setselectCat] = useState('all');

  const [sort, setSort] = useState('default');

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

  const handleSortData = (option) => {
    setSort(option);
    let sortedData = [...menu];
    switch (option) {
      case "A-Z":
        sortedData.sort((a,b)=> a.name.localeCompare(b.name))
        break;
      case "Z-A":
        sortedData.sort((a,b)=> b.name.localeCompare(a.name))
        break;
      case "High-Low":
        sortedData.sort((a,b)=> b.price-a.price )
        break;
      case "Low-High":
        sortedData.sort((a,b)=>a.price-b.price )
        break;
    
      default:
        break;
    }
     setMenu(sortedData);

  }
  
  
  return (
    <div className='py-24'>
      <div>
        <div>
          
        </div>
        <div className=' text-right'>
          <select
            value={sort}
            onChange={(e) => handleSortData(e.target.value)}
            className="select select-info w-full max-w-xs">
  <option value="default" >Default</option>
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>
  <option value="High-Low">High-Low</option>
  <option value="Low-High">Low-High</option>
</select>
      </div>
        
       <div role="tablist" className="tabs tabs-bordered ">
  
          

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="pizza" checked  />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        pizza?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
          


  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Salad"  checked  />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        salad?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="soup" checked  />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        soup?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="drinks" checked  />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        drinks?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab " aria-label="dessert" checked  />
          <div role="tabpanel" className="tab-content p-10 ">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        dessert?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
            
          </div>
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="All" checked   />
          <div role="tabpanel" className="tab-content p-10">
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
        menu?.map(itm=> <MenuCard key={itm.id} itm={itm} />)
      }
            </div>
          </div>
        </div>
        
        
      </div>
     
    </div>
  );
};

export default Menu;