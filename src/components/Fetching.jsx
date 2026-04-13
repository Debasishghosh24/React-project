import { useState, useEffect } from "react";
function Fetching() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      console.log(response);
      const data = await response.json();

      setusers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-30">
      {users.map((obj , index) => (
        <li className="text-xl text-blue-400" key={index}>Name: {obj.name}</li>
      ))}
    </div>
  );
}

export default Fetching;
