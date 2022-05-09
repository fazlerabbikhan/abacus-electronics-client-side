import React from 'react';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='my-5 text-center'>Manage Inventories</h2>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                    <h5 className='mb-3'>Price: {product.price}</h5>
                </div>)
            }
            <button className='btn btn-primary w-50 mt-5 d-block mx-auto'>
                <Link to='/addproduct' className='text-white fw-bold text-decoration-none'>Add New Item</Link>
            </button>
        </div>
    );
};

export default ManageInventories;