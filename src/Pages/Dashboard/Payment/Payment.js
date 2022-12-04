import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { expectedPrice, customer, productName } = booking;

    return (
        <div>
            <h3 className="text-3xl text-center m-6">Payment for Laptop: {productName}</h3>
            <p className="text-xl text-center mb-6">{customer}, please pay <strong>Tk.{expectedPrice}</strong> for the Laptop.</p>
            <div className='w-96 my-12 m-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;