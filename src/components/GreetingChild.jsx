import { useEffect } from "react";

function GreetingChild(props) {
  useEffect(() => {
    console.log(`name changed : ${props.name}`);
  }, [props.name]);

  return (
    <div className="flex justify-center ">
      <h1 className="text-2xl text-blue-400">Hello, {props.name}</h1>
    </div>
  );
}

export default GreetingChild;
