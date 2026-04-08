import React from 'react';

const ProductDetails = ({ product }) => {
    if (!product) {
        return null;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetails;
