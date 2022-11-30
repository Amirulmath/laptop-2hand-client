import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
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
                            <th>Phone/Mobile</th>
                            <th>Meeting Location</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.productName}</td>
                                <td>Tk.{booking.expectedPrice}</td>
                                <td>{booking.customer}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.place}</td>
                                <td></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;