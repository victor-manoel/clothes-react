import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Detail = () => {
  const {
    state: { data },
  } = useLocation();

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
    sizes,
  } = data;

  console.log(data);

  const [sku, setSku] = useState();

  useEffect(() => {
    const firstAvaiableSize = sizes.find(({ available }) => available);

    setSku(firstAvaiableSize.sku);
  }, []);

  const handleChangeSku = (sku, available) => available && setSku(sku);

  return (
    <div className="flex justify-center mt-10">
      <img src={image} alt="imagem do produto" className="border-4"></img>
      <div className="ml-5">
        <h1 className="text-3xl">{name}</h1>
        <span className="text-xs text-gray-500">SKU: {sku}</span>
        <div className="mt-10">
          <span className="text-2xl">{actual_price}</span>
          {discount_percentage && (
            <span className="ml-2 line-through text-red-500">
              {regular_price}
            </span>
          )}
          {discount_percentage && (
            <span className="bg-green-500 text-white text-xs p-1 ml-2">
              -{discount_percentage}
            </span>
          )}
        </div>
        <div className="mt-10">
          <h2 className="mb-2">Tamanhos</h2>
          <div>
            {sizes.map(({ available, size, sku }) => {
              return (
                <div
                  className={`border-black border-2 pb-5 pt-1 w-7 h-8 opacity-50 text-center inline-block mr-2 ${
                    available && "opacity-100 cursor-pointer"
                  }`}
                  onClick={() => handleChangeSku(sku, available)}
                >
                  {size}
                </div>
              );
            })}
          </div>
        </div>
        <button className="mt-10 py-2 px-10 bg-black text-white">
          <GiShoppingCart size={25} className="inline mb-1"></GiShoppingCart>
          <span className="ml-5">ADICIONAR AO CARRINHO</span>
        </button>
      </div>
    </div>
  );
};

export default Detail;
