import React, { useEffect, useState } from "react";

import axios from "axios";

import Product from "../../components/Product";

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
        {items.map((itemData) => (
          <Product data={itemData}></Product>
        ))}
      </section>
    </>
  );
};

export default Products;
