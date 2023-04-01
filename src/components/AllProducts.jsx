import React from 'react'
import SingleProduct from './products/SingleProduct'
import Sidebar from './Sidebar'

function AllProducts() {
  let Product = [];

  for(let i = 1; i <= 21; i++){
    Product.push(<SingleProduct />)
  }
  
  return (
    <div className='main-container'>
        <Sidebar />

        <div className="allP">
          {Product}
        </div>
    </div>
  )
}

export default AllProducts