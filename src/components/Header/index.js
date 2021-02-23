import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className="bg-green-600 py-4 text-white">
        <ul className="flex flex-wrap justify-center">
        <li className="mx-2 tracking-widest uppercase font-bold text-black ">
          <h1>Amaro</h1>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
          <NavLink to="/" className="transition-colors hover:text-green-900">
              Home
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink
              to="/promotions"
              className="transition-colors hover:text-green-900"
            >
              Promotions
            </NavLink>
          </li>
            <div className="px-7">
          <BsFillBagFill title="Add to ShoppingCart"/>
        </div>
          
         
        </ul>
      </nav>
    </>
  )
}

export default Header;