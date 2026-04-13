import React from "react";

const ProductPrice = () => {
  const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1500 },
    { id: 3, name: "Watch", price: 2000 },
  ];

  return (
    <div className="flex justify-center items-center flex-col mt-50">
      {products.map((product) => (
        <div key={product.id}>
          Name:{product.name} - Price:{product.price}
        </div>
      ))}
    </div>
  );
};

export default ProductPrice;
