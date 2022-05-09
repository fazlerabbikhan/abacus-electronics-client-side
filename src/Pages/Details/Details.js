import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    return (
        <div class='card mt-5 mx-auto' style={{ width: '30rem' }}>
            <img src={product.img} class='card-img-top' alt='...' />
            <div class='card-body'>
                <h4 class='card-title'>{product.name}</h4>
                <h5 class='card-text'>Price: {product.price}</h5>
                <h6 class='card-text'>Processor: {product.processor}</h6>
                <h6 class='card-text'>Memory: {product.memory}</h6>
                <h6 class='card-text'>Storage: {product.storage}</h6>
                <h6 class='card-text'>Display: {product.display}</h6>
                <h6 class='card-text'>Price: {product.price}</h6>
                <h6 class='card-text'>Description: {product.description}</h6>
                <h6 class='card-text'>Quantity: {product.quantity}</h6>
                <h6 class='card-text'>Supplier: {product.supplier}</h6>
            </div>
        </div>
    );
};

export default Details;