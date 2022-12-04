import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://laptop-2hand-server.vercel.app/products');
            const data = await res.json();
            return data
        }
    })

    return (
        <section className='my-10'>
            <p className='text-center font-bold text-xl'>Advertisement</p>
            <div className='grid gap-3 grid-cols-3 md:grid-cols-6 lg:grid-cols-8 mb-6 mt-6'>
                {
                    products.map(product => <AdvertiseCard
                        key={product._id}
                        product={product}
                    ></AdvertiseCard>)
                }
            </div>
        </section>
    );
};

export default Advertise;