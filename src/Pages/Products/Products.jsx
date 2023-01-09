import React from 'react'
import './Products.scss'

const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
        <h2>Filter by Price</h2>
        <div className="inputItem">
            <sapn>0</sapn>
           <input type="range" min={0} max={100} />
           <sapn>1000</sapn>
          </div>
        </div>
        <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">
            <input type="radio" id="asnc" value="asnc" name='price' />
            <label htmlFor="3">Price (Lowest Price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="dsnc" value="dsnc" name='price' />
            <label htmlFor="3">Price (Highest Price)</label>
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  )
}

export default Products