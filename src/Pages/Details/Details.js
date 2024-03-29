import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://abacus-electronics-server-side.fly.dev/products/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    return (
        <div>
            <h2 className='my-3 text-center'>Product Details</h2>
            <div class='card mx-auto' style={{ width: '30rem' }}>
                <img src={product.img} class='card-img-top' alt='...' />
                <div class='card-body'>
                    <h4 class='card-title'>{product.name}</h4>
                    <h5 class='card-text'>Price: {product.price}</h5>
                    <h6 class='card-text'>Processor: {product.processor}</h6>
                    <h6 class='card-text'>Memory: {product.memory}</h6>
                    <h6 class='card-text'>Storage: {product.storage}</h6>
                    <h6 class='card-text'>Display: {product.display}</h6>
                    <h6 class='card-text'>Description: {product.description}</h6>
                    <h6 class='card-text'>Quantity: {product.quantity}</h6>
                    <h6 class='card-text'>Supplier: {product.supplier}</h6>
                </div>
                <button className='btn btn-secondary my-2 mx-auto'>
                    <Link to='' className='text-white fw-bold text-decoration-none'>Delivered</Link>
                </button>
                <form className='mx-auto'>
                    <input placeholder='Restock the items' type="number" />
                </form>
                <button className='btn btn-primary my-2 mx-auto'>
                    <Link to='' className='text-white fw-bold text-decoration-none'>Restock</Link>
                </button>
            </div>
            <button className='btn btn-success w-25 mt-5 d-block mx-auto'>
                <Link to='/manageinventories' className='text-white fw-bold text-decoration-none'>Manage Inventories</Link>
            </button>
        </div>
    );
};

export default Details;