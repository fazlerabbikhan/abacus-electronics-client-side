import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { id, name, price, description, img } = product;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='g-2 col-12 col-md-6 col-lg-4'>
            <div class='card mx-3' style={{ width: '20rem' }}>
                <img src={img} class='card-img-top' alt='...' />
                <div class='card-body'>
                    <h4 class='card-title'>City: {name}</h4>
                    <h5 class='card-text'>Price: {price}</h5>
                    <h6 class='card-text'>Description: {description}</h6>
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => navigateToDetails(id)} className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;