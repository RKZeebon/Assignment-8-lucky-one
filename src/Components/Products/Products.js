import React, { useEffect, useState } from 'react';
import Product from './product/Product';
import Cart from '../Cart/Cart'
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const addToCart = product => {
        console.log(product);
    }
    return (
        <div className='main-area'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.model}
                        product={product}
                        event={addToCart}
                    ></Product>)
                }
            </div>
            <div className='carts'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Products;