import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

const Product = ({ data }) => {
  const {
    image,
    name,
    on_sale,
    regular_price,
    actual_price,
    discount_percentage,
    installments,
  } = data;

  return (
    <div className="bg-gray-200 rounded-lg">
      <Link to={{ pathname: "/detail", state: { data } }}>
        <img
          src={image}
          alt={name}
          className="border-gray border-2 pb-2 pt-0.1  "
        />
      </Link>

      <div className="flex items-center justify-between">
        <Link className="px-5" to={{ pathname: "/detail", state: { data } }}>
          <h2 className="font-bold mt-5">{name}</h2>
        </Link>

        <div className="px-5">
          <BsHeart title="Add to Wishlist" className="cursor-pointer" />
        </div>
      </div>
      <div className="my-2 px-5">
        <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
          {on_sale}
        </small>
        <small className="bg-green-500  rounded-full px-2 text-white tracking-widest mr-3">
          {regular_price}
        </small>
      </div>
      <p className="text-2xl px-5 pb-6">$ {actual_price}</p>
    </div>
  );
};

export default Product;
