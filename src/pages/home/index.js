import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Product from "../../components/Product";
import FrontImage from "../../images/image02.jpg";

const Products = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // API call
    axios
      .get("http://www.mocky.io/v2/59b6a65a0f0000e90471257d")
      .then(({ data }) => setItems(data.products))
      .catch((response) => console.log(response))
      .finally(() => setLoading(false));
  }, []);

  return (
    //Css used was TailwindCss
    <>
      <div>
        <img src={FrontImage} alt="Front" height="700px" width="100%" />
      </div>
      <h1 className="pt-10 text-center font-bold text-4xl">
        Featured Products
      </h1>
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
        {items.map((itemData, index) => (
          <Product key={`product-${index}`} data={itemData}></Product>
        ))}
      </section>
      {loading && (
        <div style={{ position: "absolute", top: "50%", right: "50%" }}>
          <ReactLoading type="spokes" color="black"></ReactLoading>
        </div>
      )}
    </>
  );
};

export default Products;
