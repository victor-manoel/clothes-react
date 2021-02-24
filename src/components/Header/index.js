import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

//Header 

const Header = () => {
  return (
    <header className="bg-pink-600 justify-between py-4 px-4 text-center">
      <nav className="inline-block text-white">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/" className="transition-colors hover:text-green-900">
              Amaro
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="inline-block float-right">
        <GiShoppingCart
          size={25}
          color="white"
          className="inline mb-1"
        ></GiShoppingCart>
      </div>
    </header>
  );
};

export default Header;
