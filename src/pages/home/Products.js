import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";

import axios from "axios";

const Products = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/59b6a65a0f0000e90471257d")
      .then(({ data }) => setItems(data.products))
      .catch((response) => console.log(response));
  }, []);

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">
        Featured Products
      </h1>
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
        {items.map((item) => {
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
          } = item;

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
        })}
      </section>
    </>
  );
};

export default Products;
