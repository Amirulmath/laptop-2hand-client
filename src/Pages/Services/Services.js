import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Services = () => {
    const {brand, laptopName} = useLoaderData();

    const {data: brands = []} = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/brands?brand=${brand}`);
            const data = await res.json();
            return data
        }
    })

    return (
        <section className='m-10 my-10'>
            <p className='text-center font-bold text-xl'>{laptopName}</p>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6 mt-6'>
                {
                    brands.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </section>
    );
};

export default Services;