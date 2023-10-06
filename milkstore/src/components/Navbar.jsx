import React from "react";

const Navbar = () => {
  return (
    <div className="">

        <div className="my-5 mx-24 hidden  md:grid grid-cols-12">
          <div className=" text-[#008202] flex col-span-4">
            <span class="material-symbols-outlined ">location_on</span>
            <p>Locate Stores</p>
          </div>
          <div className="col-span-5">
            FLASH SALE THIS WEEK - OFF 5% ITEMS Check it now{" "}
          </div>

          <div className="col-span-2 ">support@gramathupaal.com</div>
          <div className="col-span-1 ">7092419707</div>
        </div>


      <div className="navbar  bg-[#00813d]">
        <div className="navbar-start md:ms-24">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#fff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>PRODUCTS</a>
              </li>
              <li>
                <a>BOOK A TRIAL MILK</a>
              </li>
              <li>
                <a>GOSHALA</a>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>PRESS & MEDIA</a>
              </li>
            </ul>
          </div>
        
            <img className="w-[150px]" src="/img/logo.png" alt="" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  text-[#fff] ">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>PRODUCTS</a>
            </li>
            <li>
              <a>BOOK A TRIAL MILK</a>
            </li>
            <li>
              <a>GOSHALA</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>PRESS & MEDIA</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:me-24">
          <a className="btn">
            <span class="material-symbols-outlined">shopping_bag</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
