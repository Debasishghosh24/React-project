import React from 'react'

const Displays = (props) => {
  return (
    <div>
      <h1 className='text-xl text-blue-600'> Your Name is: {props.name}</h1>
    </div>
  )
}

export default Displays
