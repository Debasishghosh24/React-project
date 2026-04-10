import React from 'react'

const UserCard = (props) => {
  return (
    <div className='w-60 h-60 border-2 border-b-blue-400 mt-7 ml-10 flex flex-col justify-center rounded-2xl'>
      <h3 className='text-amber-200 '>Users Name:{props.Name}</h3>
      <h3 className='text-amber-200 '>Users Age:{props.Age}</h3>
      <h3 className='text-amber-200 '>Users City:{props.City}</h3>
    </div>
  )
}

export default UserCard
