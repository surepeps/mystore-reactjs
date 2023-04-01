import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="search">
            <h3 className="search-title">Search:</h3>
            <input type="search" name="" id="" placeholder='Search Product' />
        </div>

        <div className="category">
            <h3 className="search-title">Category:</h3>
            <select name="" id="">
                <option value="">Clothes</option>
                <option value="">Shoes</option>
                <option value="">Suits</option>
            </select>
        </div>

        <div className="price">
            <h3 className="search-title">Price Range:</h3>
            <input type="range" name="" id="" />
        </div>
    </div>
  )
}

export default Sidebar