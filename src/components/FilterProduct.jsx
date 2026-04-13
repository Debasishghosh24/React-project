function FilterProduct() {

  const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1500 },
    { id: 3, name: "Watch", price: 2000 },
  ];

  const newProduct = products.filter(obj => obj.price > 1000);

  return (
    <div className="flex  flex-col  items-center justify-center mt-50">
    {newProduct.map((obj) => (
        <div className="text-2xl text-blue-600" key={obj.id}>
           {obj.name}
        </div>
  ))}
  </div>
  )
  

}

export default FilterProduct;
