import React from 'react'

const MyButton = React.memo(({handleClick}) => {
    console.log("The child button is rendering")
 
  return (
    <div>
      <button className='h-9 rounded-2xl w-22 bg-blue-600 cursor-pointer ' onClick={handleClick}>Increment</button>
    </div>
  )
})

export default MyButton
