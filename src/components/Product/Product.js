import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
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
                <p>Price: {price} </p>
            </div>
        </div>
    );
};

export default Product;