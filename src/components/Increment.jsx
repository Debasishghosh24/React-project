import { useState, useCallback } from "react"
import MyButton from "./MyButton";

function Increment() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("");

   console.log("parent rendering")

    const increment = useCallback(()=> {
        
        setCount(prev => prev + 1);
    }, [])

    return (
        <div className="flex flex-col items-center mt-40 gap-5 ">
            <h1 className="text-xl text-blue-300 "> Increment Count: {count}</h1>
            <MyButton handleClick={increment}/>
        
        <div>
            <input 
            className="border border-2 border-blue-500 rounded-xl p-1"
            type="text"
            value={text}
            placeholder="Enter Your text here.."
            onChange={(e) => setText(e.target.value)}
            />

            <p className="text-xl text-blue-300 mt-5">Your Text Is: {text}</p>
        </div>
        </div>

    )
}

export default Increment