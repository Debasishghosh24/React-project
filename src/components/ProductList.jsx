
import React from 'react'
import {Products} from '../Data/products'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {Products.map(function(obj) {
        return(
            <ProductCard id={obj.id} Name={obj.name} Price={obj.price}/>
        )
        
      })}
    </div>
  )
}

export default ProductList
