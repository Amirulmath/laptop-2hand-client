import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { productName, image, name, description, purchasePrice, condition, mobile, purchaseTime, deliveryLocation, expectedPrice, postDate } = product;
    return (
        <div className="card bg-gray-300 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg">{productName}</h2>
                <h2 className="text-center font-bold text-lg">Price: Tk.{expectedPrice}</h2>
                <p><small><b>Description:</b> {description}</small></p>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                    <p><small><b>Laptop Condition:</b> {condition}</small></p>
                    <p><small><b>Purchase Price:</b> Tk.{purchasePrice}</small></p>
                    <p><small><b>Purchase Time:</b> {purchaseTime}</small></p>
                    <p><small><b>Seller Name:</b> {name}</small></p>
                    <p><small><b>Seller Mobile:</b> {mobile}</small></p>
                    <p><small><b>Product Delivery Location:</b> {deliveryLocation}</small></p>
                    <p><small><b>Post Date:</b> {postDate}</small></p>
                </div>
                <div className="card-actions justify-center">
                    <Link className="btn btn-primary">See All</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;