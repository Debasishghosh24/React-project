function AddField() {
  const products = [
    { name: "shirt", price: 500 },
    { name: "shoes", price: 1500 },
  ];

  return (
    <div className="flex flex-col items-center mt-40 gap-3 ">
      {products.map((obj) => {
        const updateProduct = { ...obj, inStock: true };

        return (
          <div className="text-2xl text-blue-400">
            Name: {updateProduct.name} - Price: {updateProduct.price} InStock:{" "}
            {updateProduct.inStock.toString()}
          </div>
        );
      })}
    </div>
  );
}

export default AddField;
