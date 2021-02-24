import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Footer = () => {
  return (
    <header className="bg-pink-600 flex justify-between py-4 px-4">
      <nav className=" text-white">
      <ul className="flex flex-wrap justify-center">
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/" className="transition-colors hover:text-green-900">
              Amaro
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

export default Footer;
