import React from 'react';
import useProducts from '../../Hooks/useProducts';

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
            <h2 className='my-5'>Manage Inventories</h2>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                    <h5 className='mb-3'>Price: {product.price}</h5>
                </div>)
            }
        </div>
    );
};

export default ManageInventories;