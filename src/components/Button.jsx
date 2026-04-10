
import React, { useState } from 'react'

const Button = () => {
      
  const [login , setLogin] = useState(false);


  function Login() {
    setLogin(!login);
  }
     
  return (
    <div className='flex gap-4 justify-center mt-20'>
        {login && <h1>welcome user </h1>}
        <button onClick={Login} className='h-6 w-16 bg-amber-300 rounded-2xl cursor-pointer'>
          {login ? "logout" : "login"}
        </button>
        
    </div>
  )
}

export default Button
