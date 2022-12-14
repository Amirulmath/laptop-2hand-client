import React from 'react';

const ProductCard = ({ product }) => {
    const { productName, image, name, description, purchasePrice, condition, phone, purchaseTime, usedTime, deliveryLocation, expectedPrice, postDate } = product;
    return (
        <div className="card bg-blue-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{productName}</h2>
                <h2 className="text-center font-bold text-lg">Price: Tk.{expectedPrice}</h2>
                <p><small><b>Description:</b> {description}</small></p>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                    <p><small><b>Laptop Condition:</b> {condition}</small></p>
                    <p><small><b>Purchase Price:</b> Tk.{purchasePrice}</small></p>
                    <p><small><b>Purchase Time:</b> {purchaseTime}</small></p>
                    <p><small><b>Used Time:</b> {usedTime}</small></p>
                    <p><small><b>Seller Name:</b> {name}</small></p>
                    <p><small><b>Seller Phone:</b> {phone}</small></p>
                    <p><small><b>Delivery Location:</b> {deliveryLocation}</small></p>
                    <p><small><b>Post Date:</b> {postDate}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;