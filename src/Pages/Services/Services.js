import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const {laptopName} = useLoaderData();
    return (
        <div>
            <p>{laptopName}</p>
        </div>
    );
};

export default Services;