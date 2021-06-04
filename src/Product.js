import React from 'react';
import './Product.css';


function product({ id, title, image, price, rating }) {
    return (
        <div className="product">
          < div className= "product_info">
            <p>{title}</p>
            <div  className="product_price">
              <p>Rs</p>
              <strong>{price}</strong>
            </div>
            <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
           </div> 
        </div>
        <img src= {image} />

      <button>Add to Basket</button>
          
      
    </div>
  );
}

export default product
