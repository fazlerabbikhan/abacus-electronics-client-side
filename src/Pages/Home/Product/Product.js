import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, img, processor, memory, storage, display, price, description, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='g-2 col-12 col-md-6 col-lg-4'>
            <div class='card mx-3' style={{ width: '20rem' }}>
                <img src={img} class='card-img-top' alt='...' />
                <div class='card-body'>
                    <h4 class='card-title'>{name}</h4>
                    <h5 class='card-text'>Price: {price}</h5>
                    <h6 class='card-text'>Processor: {processor}</h6>
                    <h6 class='card-text'>Memory: {memory}</h6>
                    <h6 class='card-text'>Storage: {storage}</h6>
                    <h6 class='card-text'>Display: {display}</h6>
                    <h6 class='card-text'>Price: {price}</h6>
                    <h6 class='card-text'>Quantity: {quantity}</h6>
                    <h6 class='card-text'>Supplier: {supplier}</h6>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => navigateToDetails(_id)} className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;