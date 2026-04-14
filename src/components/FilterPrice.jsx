function FilterPrice() {
  const products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1500 },
    { name: "Watch", price: 2000 },
  ];
    
  const filteredPrice = products.filter((obj) => {
    return obj.price > 1000;
  })



  return (
    <div className="flex items-center flex-col mt-40 gap-4">
        {filteredPrice.map((obj) => {
            return (
                <div className="text-2xl text-blue-500">
                    {obj.name} - {obj.price}
                </div>
            )
        })}
    </div>
    

  )
}

export default FilterPrice;
