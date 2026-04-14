import { useState, useMemo } from "react"

function SearchList() {

    const items = ['apple', 'banana', 'shoe', 'tshirt', 'pant']
   
    const [query , setQuery] = useState('');

    const filteredItem = useMemo(()=>{
        console.log("filtering item");

        return items.filter((obj) => 
            obj.includes(query))
    }, [query, items])



    


    return (
        <div className="flex  flex-col  items-center mt-40">
            <input
            type="text"
            placeholder="Search here.."
            value={query}

            onChange={(e) => setQuery(e.target.value)}
        
            />

            {filteredItem.map((obj, index) => (
                <li key={index} >
                    {obj}
                </li>
            ))}


        </div>
    )
}

export default SearchList