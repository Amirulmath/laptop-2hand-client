import React from 'react';
import Laptop from '../../../assets/images/laptop1.jpg';


const Banner = () => {
    return (
        <div className="hero bg-sky-200 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Laptop} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Used Laptop Resale</h1>
                    <p className="py-6">We have been doing this online business with honestly since last 5 years. This is the best online market place for those who want to buy a good laptop in less money.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;