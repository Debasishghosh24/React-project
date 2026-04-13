import { useState } from "react";
import GreetingChild from "./GreetingChild";

function Greeting() {
  const [user, setUser] = useState("Debasish");

  function shubhasish() {
    setUser("shubhasish");
  }

  function santi() {
    setUser("santi");
  }

  return (
    <div className="flex flex-col justify-center mt-30 gap-5 items-center">
      <GreetingChild name={user} />

      <button className="h-10 w-48 border-2 border-b-blue-800 rounded-2xl bg-blue-300 " onClick={shubhasish}>Change to shubhasish</button>
      <button className="h-10 w-48 border-2 border-b-blue-800 rounded-2xl bg-blue-300" onClick={santi}>Change to santi</button>
    </div>
  );
}

export default Greeting;
