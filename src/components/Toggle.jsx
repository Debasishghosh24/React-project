
import React, { useState } from 'react'

const Toggle = () => {
      
  const [login , setLogin] = useState(false);


  function Login() {
    setLogin(!login);
  }
     
  return (
    <div className='flex  flex-col items-center justify-center mt-60'>
      <div className='h-10'>
        {login && <h1 className='text-xl font-bold'>welcome user </h1>}
        </div>
        <button onClick={Login} className=' mt-10 h-8 w-20 bg-amber-300 rounded-2xl cursor-pointer'>
          {login ? "logout" : "login"}
        </button>
        
    </div>
  )
}

export default Toggle
