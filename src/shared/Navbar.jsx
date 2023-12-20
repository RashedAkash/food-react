import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FireBaseContext } from '../context/AuthContext';



const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { user,logOut } = useContext(FireBaseContext);
 
console.log(user);
   //logout
   const handlelogOut = () => {
    logOut()
    .then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.log(error);
});
  }
 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
    if (offset > 0) {
      setSticky(true)
    } else {
      setSticky(false)
      }
      
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  },[])
  return (
    <div className=' max-w-screen-lg bg-base-100 container mx-auto fixed top-0 left-0 right-0 z-10'>
      <div className={`navbar ${sticky ? 'shadow-xl transition-all bg-base-100 duration-300 ease-in-out':''}`}>
  <div className='navbar-start'>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
        <div className="navbar-end">
        
          {
            user ? <button onClick={handlelogOut} className='btn btn-success text-white'>logout</button>:<Link to='/signIn'>
          <button className="btn btn-success text-white">Login</button>
          </Link>
          }
          
             


    
  </div>
</div>
    </div>
  );
};

export default Navbar;