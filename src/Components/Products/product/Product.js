import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, event } = props
    const { name, price, img } = product
    // console.log(name);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <button onClick={() => event(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;