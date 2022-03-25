import React, { useEffect, useState } from 'react';
import Product from './product/Product';
import Cart from '../Cart/Cart'
import './Products.css'
import Picked from '../Cart/Picked/Picked';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [selectedItems, setSelectedItems] = useState([])
    const addToCart = product => {
        if (selectedItems.includes(product)) {

        }
        else {
            const items = [...selectedItems, product]
            if (selectedItems.length < 4) {
                setSelectedItems(items);
            }
        }
    }


    const [pickedItem, setPickedItem] = useState([])
    function randomNumber(max) {

        let randomNumber = Math.random() * max - 1
        let result = Math.floor(randomNumber) + 1;
        return result;
    }
    function picker(number) {
        let index = randomNumber(number)
        return index;
    }
    const chooseOne = () => {
        if (selectedItems.length > 1) {
            const pickerValue = selectedItems.length
            const chooseditem = selectedItems[picker(pickerValue)];
            setPickedItem(chooseditem);
        }

    }


    const resetCart = () => {
        const emptyCart = []
        setSelectedItems(emptyCart)
        setPickedItem(emptyCart)
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
                        <button onClick={chooseOne}>Choose One</button>
                        <button onClick={resetCart} id='cart-btn2'>Reset Cart</button>
                    </div>
                    <Picked item={pickedItem}></Picked>
                </div>

            </div>
        </div>
    );
};

export default Products;