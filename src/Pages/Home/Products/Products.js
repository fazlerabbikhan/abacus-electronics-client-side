import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='container'>
            <h2 className='text-primary text-center fw-bold mt-5'>Products</h2>
            <div className='row'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;