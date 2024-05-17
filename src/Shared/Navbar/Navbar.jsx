import React from 'react';
import navImg from '../../assets/evantoMarketLogo.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-[#262626] h-10  z-100 fixed">
  <div className="flex-1 px-2">
    <a className=" text-xl"><img className='w-40 h-6' src={navImg} alt="" /></a>
  </div>
  <div className="flex-none py-14 px-2">
    <button className=" bg-[#82B440] w-24 h-10 text-sm text-white font-Sora rounded-md shadow-2xl">
      Buy Now
    </button>
  </div>
</div>
    );
};

export default Navbar;