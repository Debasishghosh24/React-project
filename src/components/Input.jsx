
import React, {  useState } from 'react'
import Displays from './Displays'

const Input = () => {
    
    
     const [input, setInput] = useState("");

 

  return (
    <div>

        <input         
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter Your Name'
          
        />
        
      
      <Displays  name={input}/>
    </div>
  )
}

export default Input
