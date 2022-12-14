import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://laptop-2hand-server.vercel.app/myproduct?email=${user?.email}`;

    const { data: myproduct = [], isLoading } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

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