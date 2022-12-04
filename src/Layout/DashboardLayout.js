import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

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
                        <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/myorders">My Orders</Link></li>
                        {
                            isSeller && <>
                                <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/addproduct">Add A Product</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link className='btn btn-primary mt-2 w-full' to="/dashboard/reports">Reports</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;