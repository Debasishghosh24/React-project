function FilteredUserID() {
  const users = [
    { id: 1, name: "Tithi" },
    { id: 2, name: "Rahul" },
  ];

  const orders = [
    { userId: 1, product: "Shirt" },
    { userId: 1, product: "Shoes" },
    { userId: 2, product: "watch" },
  ];

  return (
    <div className="flex flex-col items-center mt-40 gap-6">
      {users.map((obj) => {
        const filteredId = orders.filter((order) => obj.id === order.userId);

        console.log(filteredId);

        const productName = filteredId.map((match) => match.product);

        console.log(productName);

        return (
          <div className="text-2xl text-blue-700">
            {obj.name} - {productName}
          </div>
        );
      })}
    </div>
  );
}

export default FilteredUserID;
