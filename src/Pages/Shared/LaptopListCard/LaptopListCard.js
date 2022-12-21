import React from 'react';
import { Link } from 'react-router-dom';

const LaptopListCard = ({ category }) => {
    const { image, laptopName, _id } = category;
    return (
        <div className="card bg-blue-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-lg mb-5">{laptopName}</h2>
                <div className="card-actions justify-center">
                    <Link  to={`/services/${_id}`} className="btn btn-primary">See All</Link>
                </div>
            </div>
        </div>
    );
};

export default LaptopListCard;