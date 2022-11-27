import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LaptopListCard from '../../Shared/LaptopListCard/LaptopListCard';

const LaptopList = () => {
    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data
        }
    })
    return (
        <section className='my-10'>
            <p className='text-center font-bold text-xl'>Laptop Categories</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 mt-6'>
                {
                    categories.map(category => <LaptopListCard
                        key={category._id}
                        category={category}
                    ></LaptopListCard>)
                }
            </div>
        </section>
    );
};

export default LaptopList;