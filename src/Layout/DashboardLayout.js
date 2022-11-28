import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-2 w-45 bg-gray-300 mt-4 text-white">
                        <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard">My Orders</Link></li>
                        <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard">My Products</Link></li>
                        <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/addproduct">Add A Product</Link></li>
                        <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard">All Buyers</Link></li>
                        <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard">All Sellers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;