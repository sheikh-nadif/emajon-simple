import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const cartIcon = <FontAwesomeIcon icon={faCartShopping} />

    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>By: {seller} </small></p>
                <p><small>Limited Stock. Only <strong>{stock} units</strong> are available. </small></p>
                <p>Price: {price} $</p>

                <button 
                onClick={()=> props.handleAddToCart(props.product)}
                className='btn-purchase'>
                    <span className='icon-spacing'>{cartIcon}</span> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;