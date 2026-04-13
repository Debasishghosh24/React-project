import { useState } from "react"

import CounterChild from "./CounterChild";

function Counter () {

    const [count, setCount] = useState(2);

    function IncrementCount() {
        setCount(count + 3);
    }


    return (
        <div className=" flex flex-col justify-center items-center content-center mt-60 gap-5">
           <CounterChild count={count}/>

           <button className="h-6 w-25 border-2 border-black rounded-2xl bg-blue-300 " onClick={IncrementCount}>Increment</button>
        </div>
    )
}

export default Counter