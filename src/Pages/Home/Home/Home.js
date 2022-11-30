import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import LaptopList from '../LaptopList/LaptopList';
import ProductDelivery from '../ProductDelivery/ProductDelivery';

const Home = () => {
    return (
        <div className='m-10'>
            <Banner></Banner>
            <Advertise></Advertise>
            <LaptopList></LaptopList>
            <ProductDelivery></ProductDelivery>
        </div>
    );
};

export default Home;