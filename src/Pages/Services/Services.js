import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Modals/BookingModal/BookingModal';
import ReportModal from '../Modals/ReportModal/ReportModal';
import Loading from '../Shared/Loading/Loading';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const { brand, laptopName } = useLoaderData();
    const [book, setBook] = useState(null);
    const [report, setReport] = useState(null);

    const { data: brands = [], isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-2hand-server.vercel.app/brands?brand=${brand}`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='m-10 my-10'>
            <p className='text-center font-bold text-xl'>{laptopName}</p>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6 mt-6'>
                {
                    brands.map(product => <ServiceCard
                        key={product._id}
                        product={product}
                        setBook={setBook}
                        setReport={setReport}
                    ></ServiceCard>)
                }
            </div>
            {
                book &&
                <BookingModal
                    book={book}
                    setBook={setBook}
                ></BookingModal>
            }
            {
                report &&
                <ReportModal
                    report={report}
                    setReport={setReport}
                ></ReportModal>
            }
        </section>
    );
};

export default Services;