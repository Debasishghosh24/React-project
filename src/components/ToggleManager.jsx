import React , {useState} from 'react'
import HiddenMessage from './HiddenMessage'

const ToggleManager = () => {

    const [show, setShow] = useState(false);

    function Show() {
        setShow(!show);
    }

   


  return (
    <div className='flex  flex-col ml-80 mt-10 '>
        <button className='mt-20 h-10 w-20 bg-blue-400 rounded-2xl' onClick={Show}>
            {show ? "hide" : "show"}
        </button>


       {show && <HiddenMessage/>}
    </div>
  )
}

export default ToggleManager
