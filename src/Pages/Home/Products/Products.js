import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sierra-19113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])

    return (
        <div className='container'>
            <h2 className='text-primary text-center fw-bold mt-5'>Products</h2>
            <div className='row'>
                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                }
            </div>
            <button className='btn btn-success w-25 mt-5 d-block mx-auto'>
                <Link to='/manageinventories' className='text-white fw-bold text-decoration-none'>Manage Inventories</Link>
            </button>
        </div>
    );
};

export default Products;