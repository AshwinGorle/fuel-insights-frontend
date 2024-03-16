import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-3 absolute mx-auto z-10 text-white w-full ">
      {/* logo */}
      <Link to="/">
        <div className=" font-Michroma text-3xl  ml-9 text-red-600">
          Fuel Insights
        </div>
      </Link>

      {/* buttons */}
      <div className=" flex items-center gap-x-4">
        <div className=" mr-7 flex justify-center items-center ">
          {
            <Link to="/">
              <button className="text-white text-2xl px-[12px] rounded-[8px] bg-black-700 font-Inconsolata">
                Home
              </button>
            </Link>
          }
          {
            <Link to="/dashboard">
              <button className="text-white text-2xl px-[12px] rounded-[8px] bg-black-700 font-Inconsolata">
                Dashboard
              </button>
            </Link>
          }
          {
            <Link to="/tripAnalysis">
              <button className="text-white text-2xl px-[12px] rounded-[8px] bg-black-700 font-Inconsolata">
                Trip Analysis
              </button>
            </Link>
          }
          {
            <Link to="/aboutus">
              <button className="  text-white text-2xl font-Inconsolata px-[12px] rounded-[8px] bg-black-700 ">
                About Us
              </button>
            </Link>
          }
          {
            <Link to="/contactus">
              <button className=" text-white text-2xl font-Inconsolata px-[12px] rounded-[8px] bg-black-700  ">
                Contact Us
              </button>
            </Link>
          }
          {
            <Link to="/profile">
              <button className=" text-white text-[32px] px-[12px] rounded- bg-black-700">
                <FaUserCircle></FaUserCircle>
              </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
