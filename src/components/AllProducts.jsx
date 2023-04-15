import React, { useState } from 'react'
import SingleProduct from './products/SingleProduct'
import Sidebar from './Sidebar'

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
              setAllProducts(json);
            });
   
  return (
    <div className='main-container'>
        <Sidebar />

        <div className="allP">
          {
            allProducts.map((product) => <SingleProduct productData={product} key={product.id} />)
          }
        </div>
    </div>
  )
}

export default AllProducts