import React from 'react';

const LaptopListCard = ({ category }) => {
    const { image, laptopName } = category;
    return (
        <div className="card bg-gray-300 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg mb-5">{laptopName}</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default LaptopListCard;