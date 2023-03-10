import React from 'react';
import useProducts from '../../Hooks/useProducts';
import { Link, useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://abacus-electronics-server-side.onrender.com/products/${id}`;
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

    const navigateToDetails = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='container'>
            <h2 className='my-5 text-center'>Manage Inventories</h2>
            <div className='row'>
                {
                    products.map(product =>
                        <div key={product._id} className='g-2 col-12 col-md-6 col-lg-4'>
                            <div className='card mx-3' style={{ width: '20rem' }}>
                                <img src={product.img} className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <h4 className='card-title'>{product.name}</h4>
                                    <h5 className='card-text'>Price: {product.price}</h5>
                                    <h6 className='card-text'>Processor: {product.processor}</h6>
                                    <h6 className='card-text'>Memory: {product.memory}</h6>
                                    <h6 className='card-text'>Storage: {product.storage}</h6>
                                    <h6 className='card-text'>Display: {product.display}</h6>
                                    <h6 className='card-text'>Quantity: {product.quantity}</h6>
                                    <h6 className='card-text'>Supplier: {product.supplier}</h6>
                                    <div className='d-flex justify-content-center'>
                                        <button onClick={() => navigateToDetails(product._id)} className='btn btn-primary me-2'>Update</button>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <button className='btn btn-primary w-25 mt-5 d-block mx-auto'>
                <Link to='/addproduct' className='text-white fw-bold text-decoration-none'>Add New Item</Link>
            </button>
        </div>
    );
};

export default ManageInventories;