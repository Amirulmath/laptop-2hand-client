import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportPage = () => {
    const { data: reported = [] } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('https://laptop-2hand-server.vercel.app/reported');
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='m-12 my-10'>
            <h3 className="text-3xl font-bold text-center mb-6">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Laptop Name</th>
                            <th>Price</th>
                            <th>Buyer Name</th>
                            <th>Report</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reported.map((reporting, i) => <tr key={reporting._id}>
                                <th>{i + 1}</th>
                                <td>{reporting.productName}</td>
                                <td>Tk.{reporting.expectedPrice}</td>
                                <td>{reporting.customer}</td>
                                <td>{reporting.reports}</td>
                                <td>
                                <button className='btn btn-primary btn-sm'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportPage;