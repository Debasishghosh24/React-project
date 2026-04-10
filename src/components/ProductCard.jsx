import React from 'react'

const ProductCard = (props) => {
  return (
    <div className=' text-black w-60 h-15 border-2  mt-7 ml-10 flex flex-col justify-center rounded-2xl bg-blue-100'>
        <h3>product Name: {props.Name}</h3>
        <h3>product Price: {props.Price}</h3>
    </div>
  )
}

export default ProductCard
