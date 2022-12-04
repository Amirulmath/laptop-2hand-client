import React from 'react';

const AdvertiseCard = ({ product }) => {
    const { image, productName, expectedPrice } = product;
    return (
        <div className="card bg-violet-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className='m-2'>
                <p><small>{productName}</small></p>
                <p><small>Price: Tk.{expectedPrice}</small></p>
            </div>
        </div>
    );
};

export default AdvertiseCard;