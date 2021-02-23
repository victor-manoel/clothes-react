import React from "react";

import { BsHeart } from "react-icons/bs";

const Product = ({ data }) => {
  const {
    id,
    image,
    name,
    desc,
    on_sale,
    regular_price,
    actual_price,
    discount_percentage,
    installments,
  } = data;

  return (
    <div key={id} className="bg-gray-200 rounded-lg">
      <img src={image} alt={name} className="rounded-t-lg" />
      <div className="flex items-center justify-between">
        <div className="px-5">
          <h2 className="font-bold mt-5">{name}</h2>
          <p>{desc}</p>
        </div>

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
