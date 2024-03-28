import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="w-[100%] h-[550px]  bg-[#090503] text-white ">
      <img
        className="absolute bg-[#090503] w-full flex justify-center items-center h-fit  "
        src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1709210187/Rectangle_cw73tm.png"
        alt=""
      />
      <div className="flex flex-col justify-center items-center pl-20">
        <h1 className="text-center text-6xl  relative pt-40 py-5 space-x-4 space-y-5  ">
          Know <span className="font-bold">Where </span>Everything is with
          <i className="">Ease</i>
          <br />
          and<span className="font-bold">Comfort</span>
        </h1>
        <div className="relative flex flex-row justify-center items-center pt-10 space-x-5">
          <Link to={'track'}>
            <button className="bg-red-500 w-20 h-8 rounded-md	 ">Track</button>
          </Link>
          <Link to={'signup'}>
            <button className="bg-slate-300 w-20 h-8 text-black rounded-md">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
