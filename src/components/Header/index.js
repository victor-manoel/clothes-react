import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-green-600 flex justify-between py-4 px-4">
      <nav className=" text-white">
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
        </ul>
      </nav>
      <div>
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
