import { useState } from "react"
import ChildInputProduct from "./ChildInputProduct"; 

function InputProduct() {
      const item = ["shoes", "shirt", "pant", "tshirt", "jeans"]

      const [search, setSearch ] = useState("")

      function onInputChange(obj) {
       return  setSearch(obj);
      }

      const filterItem = item.filter(obj => obj.includes(search))

    return (
        <div className="flex justify-center items-center flex-col mt-30">
            <ChildInputProduct onInputChange={onInputChange}/>

            {filterItem.map((obj) => (
                <li className="text-blue-700 text-xl">{obj}</li>
            ))}
        </div>
    )
}


export default InputProduct