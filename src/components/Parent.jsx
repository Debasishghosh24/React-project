import React , {useState} from 'react'
import Child from './Child'

const Parent = () => {

    const [show, setShow] = useState(false);

    function Show() {
        setShow(!show);
    }

   


  return (
    <div>
        <button className='mt-20 h-6 w-12 bg-amber-200 rounded-2xl' onClick={Show}>
            {show ? "hide" : "show"}
        </button>


       {show && <Child/>}
    </div>
  )
}

export default Parent
