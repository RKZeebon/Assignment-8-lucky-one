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

    const [selectedItems, setSelectedItems] = useState([])
    const addToCart = product => {
        const items = [...selectedItems, product]
        if (selectedItems.length < 4) {
            setSelectedItems(items);
        }
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
            <div>
                <div className='carts'>
                    <h3>Selected Items:</h3>
                    {
                        selectedItems.map(selectedItem => <Cart
                            key={selectedItem.model}
                            selectedItem={selectedItem}
                        ></Cart>)
                    }
                    <div className='cart-btn'>
                        <button>Choose One</button>
                        <button id='cart-btn2'>Reset Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;