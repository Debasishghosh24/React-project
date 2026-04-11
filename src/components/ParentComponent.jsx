
import React, {  useState } from 'react'
import Displays from './Displays'

const ParentComponent = () => {
    
    
     const [input, setInput] = useState("");

 

  return (
    <div className='flex content-center justify-center mt-48 gap-5'>

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

export default ParentComponent
