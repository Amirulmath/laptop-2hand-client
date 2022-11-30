import React from 'react';
import Laptop from '../../../assets/images/laptop2.jpg';

const ProductDelivery = () => {
    return (
        <div>
            <div className="hero bg-slate-200 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Laptop} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Delivery Safely</h1>
                    <p className="py-6">We have started our online business for five years.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDelivery;