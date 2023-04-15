import React from 'react'

function SingleProduct({productData}) {
  return (
    <div className='s-prod'>
        <div className="badge">
          <label> -25% OFF</label>
        </div>

        <div className="prod-img">
          <img src={productData.image} alt="" />
        </div>

        <div className="price-title">
          <h3 className="title">{productData.title}</h3>
          <p className="price">${productData.price}</p>
        </div>

        <div className="all-btns">
          <a href="#" className="cart">Add to cart</a>
          <a href="#" className="view">View</a>
        </div>
    </div>
  )
}

export default SingleProduct