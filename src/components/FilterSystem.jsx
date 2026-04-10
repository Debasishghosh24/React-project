import { useState } from "react";
import ChildFilter from "./ChildFilter"

function FilterSystem () {

    const item = ["mobile", "tablet", "laptop", "headphone", "earbuds"]

    const[query, setQuery] = useState("");



    return(
        <div>
            {item.map(function(obj){
                console.log(obj);
            })}
           
           <ChildFilter onInput={(e) => setQuery(e.target.value)} />
        </div>
    )
}

export default FilterSystem