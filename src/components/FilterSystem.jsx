import { useState } from "react";
import ChildFilter from "./ChildFilter";

function FilterSystem() {
  const items = ["mobile", "tablet", "laptop", "headphone", "earbuds"];

  const [query, setQuery] = useState("");

  
  const filteredItems = items.filter((item) =>
    item.includes(query)
  );

   function onInputChange(val) {
    return setQuery(val)
   }
   
  return (
    <div className="p-10 flex flex-col items-center">
      
      <ChildFilter onInputChange = {onInputChange} />

      
        {filteredItems.map((obj) => (
          <li  className=" py-2 text-lg">
            {obj}
          </li>
        ))}
     
    </div>
  );
}

export default FilterSystem;