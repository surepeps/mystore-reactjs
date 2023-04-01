import React from 'react'

function SingleProduct() {
  return (
    <div className='s-prod'>
        <div className="badge">
          <label> -25% OFF</label>
        </div>

        <div className="prod-img">
          <img src="" alt="" />
        </div>

        <div className="price-title">
          <h3 className="title">Garnier Pure Active Miceller</h3>
          <p className="price">$1,999.99</p>
        </div>

        <div className="all-btns">
          <a href="#" className="cart">Add to cart</a>
          <a href="#" className="view">View</a>
        </div>
    </div>
  )
}

export default SingleProduct