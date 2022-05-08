import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center bg-info mt-5 py-2'>
            <h5>Abacus Electronics</h5>
            <h6>Copyright ©{year}</h6>
        </footer>
    );
};

export default Footer;