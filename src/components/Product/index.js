import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import discount from "../../images/discount.png";

//Product Card

const Product = ({ data }) => {
  const {
    image,
    name,
    on_sale,
    regular_price,
    actual_price,
    discount_percentage,
  } = data;

  return (
    <div className="bg-gray-200 rounded-lg ">
      <Link to={{ pathname: "/detail", state: { data } }}>
        <div className="border-gray border-2 pb-2 pt-0.1 relative">
          <img src={image} alt={name} />
          {on_sale && (
            <img src={discount} className="absolute top-0 right-0 w-24"></img>
          )}
        </div>
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
          {actual_price}
        </small>
      </div>
      <p className="text-2xl px-5 pb-6">{regular_price}</p>
    </div>
    
  ); 
};

export default Product;
