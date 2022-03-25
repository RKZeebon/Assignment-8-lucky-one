import React from 'react';

const Product = (props) => {
    const { name, price, img } = props.products
    // console.log(name);
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
        </div>
    );
};

export default Product;