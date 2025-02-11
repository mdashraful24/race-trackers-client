import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center container mx-auto pt-8 pb-16 lg:py-20 md:pt-8 md:pb-20">
            {/* Sidebar with NavLinks */}
            <div className='mb-10'>
                <aside className="py-3 md:p-4 lg:rounded-md shadow-md lg:border">
                    <ul className="lg:space-y-4 flex lg:flex-col md:justify-center md:items-center px-2">
                        <li>
                            <NavLink
                                to="addMarathons"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded ${isActive ? 'bg-purple-500 text-white' : ' hover:bg-purple-100'
                                    }`
                                }
                            >
                                Add Marathons
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="myMarathonList"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-100'
                                    }`
                                }
                            >
                                My Marathon List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="myApplyList"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-purple-100'
                                    }`
                                }
                            >
                                My Apply List
                            </NavLink>
                        </li>
                    </ul>
                </aside>
            </div>

            {/* Main content area */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
