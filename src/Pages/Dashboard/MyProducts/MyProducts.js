import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myproduct?email=${user?.email}`;

    const { data: myproduct = [] } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <section className='m-14 my-10'>
            <p className='text-center font-bold text-xl'>My Products</p>
            <div className='grid gap-14 grid-cols-1 lg:grid-cols-2 mb-6 mt-6'>
                {
                    myproduct.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </section>
    );
};

export default MyProducts;