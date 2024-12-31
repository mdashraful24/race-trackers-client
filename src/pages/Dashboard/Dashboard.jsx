import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center container mx-auto my-10">
            {/* Sidebar with NavLinks */}
            <aside className="p-4 h-4/5 rounded-md shadow-md">
                <ul className="space-y-4">
                    <li>
                        <NavLink
                            to="addMarathons"
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded ${isActive ? 'bg-purple-500 text-white' : 'text-gray-700 hover:bg-purple-100'
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
                                `block px-4 py-2 rounded ${isActive ? 'bg-purple-500 text-white' : 'text-gray-700 hover:bg-purple-100'
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
                                `block px-4 py-2 rounded ${isActive ? 'bg-purple-500 text-white' : 'text-gray-700 hover:bg-purple-100'
                                }`
                            }
                        >
                            My Apply List
                        </NavLink>
                    </li>
                </ul>
            </aside>

            {/* Main content area */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
