
import { useState } from "react";
import { useRef } from "react";



function Timer() {

  const [Time, setTime] = useState(0);

  const intervalIdRef = useRef(null);

  function handleStart() {
    intervalIdRef.current =  setInterval(()=> {
      setTime(Time => Time + 1);

    },1000)
  }

  function handleStop(){
    clearInterval(intervalIdRef.current)
    
  }

  function handleReset(){
    clearInterval(intervalIdRef.current);
    setTime(0);
  }
   

  return (
    <>
    <div className="flex  flex-col items-center justify-center mt-30">
      <h1> ⏱️ StopWatch: {Time}</h1>

      <div className=" flex justify-center items-center mt-15 ml-7">
        <div className="flex gap-4 ">
        <button className="h-10 w-20 border-2 bg-blue-300 cursor-pointer rounded-lg text-black text-xl" onClick={handleStart}>Start</button>
        <button className="h-10 w-20 border-2 bg-blue-300 cursor-pointer rounded-lg  text-black text-xl" onClick={handleStop}>Stop</button>
        <button className="h-10 w-20 border-2 bg-blue-300 cursor-pointer rounded-lg  text-black text-xl" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Timer