import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import { IoCloseOutline } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-[100%] h-[52px] flex justify-between items-center px-4 bg-[#090503] pl-10 pr-8 pt-2  ">
      <Link to='/'><div className="flex flex-row  ">
        <img
          className="w-25 h-12 relative left-0 "
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1709210182/Vector_pzyczx.png"
          alt=""
        />
        <h2 className="text-white text-3xl font-extrabold  absolute left-8  pl-5 py-1 cursor-pointer">
          TRACUS
        </h2>
      </div></Link>
      <div className="hidden  md:flex flex-row justify-between items-center space-x-24 cursor-pointer text-base px-2">
        <Link to={'login'}><div className='text-white'>Login</div></Link>
        <div className="flex flex-row justify-between items-center space-x-10 cursor-pointer">
          <Link to={'about'}><div className='text-white'>About</div></Link>
          <Link to={'contact'}><div className='text-white'>Contact</div></Link>
        </div>
      </div>
      {/**Mobile dropdown */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <IoMdMenu className='text-white' /> : <IoCloseOutline className='text-white'  />}
      </div>

      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute text-black left-0 top-0 w-full bg-[#090503] px-2 py-7 flex flex-col pl-8 focus:underline-offset-2 '
            : 'absolute left-[-100%]'
        }
      >
        <ul className="text-white space-x-2 flex flex-col justify-center text-left  ">
          <div className='flex flex-row justify-center items-center space-x-8'>
            <Link to="login">
              <li className="  ">Login</li>
            </Link>
             
          <Link to={"about"}>
              <li className=" ">About</li>
            </Link>
            <Link to={"contact"}>
              <li className=" ">Contact</li>
            </Link>
            
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
