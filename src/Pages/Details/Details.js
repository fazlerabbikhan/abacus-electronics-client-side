import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { productId } = useParams();
    return (
        <div className='container mt-5'>
            <h2>Please checkout your booking for {productId}.</h2>
        </div>
    );
};

export default Details;