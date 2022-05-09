import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' type="text" {...register("name")} />
                <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Processor' type="text" {...register("processor")} />
                <input className='mb-2' placeholder='Memory' type="text" {...register("memory")} />
                <input className='mb-2' placeholder='Storage' type="text" {...register("storage")} />
                <input className='mb-2' placeholder='Display' type="text" {...register("display")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddProduct;