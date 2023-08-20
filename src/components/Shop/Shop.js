import React, { useEffect, useState } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    })

    const [cart, setCart] = useState ([]);
    

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                products.map(product => <Product 
                    key = {product.key}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    >                        
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;