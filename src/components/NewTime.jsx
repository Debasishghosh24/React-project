import { useEffect, useState } from "react";

function NewTimer() {
  console.log("this component rendering");

  const [second, setSecond] = useState(0);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  function start() {
    setIsActive(true);
  }

  function stop() {
    setIsActive(false);
  }
  function reset() {
    setIsActive(false);
    setSecond(0);
  }

  return (
    <div className="flex flex-col items-center mt-40 gap-6">
      <h1 className="text-2xl text-blue-400">Timer : {second}</h1>

      <div className="flex flex-row gap-6">
        <button
          className="h-7 w-12 bg-blue-300 rounded-xl cursor-pointer"
          onClick={start}
        >
          Start
        </button>
        <button
          className="h-7 w-12 bg-blue-300 rounded-xl cursor-pointer"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="h-7 w-12 bg-blue-300 rounded-xl cursor-pointer"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default NewTimer;
