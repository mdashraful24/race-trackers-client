import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    return (
        <div className="flex flex-col lg:flex-row justify-center container mx-auto mt-5 lg:mt-14 mb-8 px-4 min-h-screen">
            {/* Sidebar with NavLinks */}
            <div className='mb-10'>
                <aside className="py-3 md:p-4 lg:rounded-md shadow-md lg:border">
                    <ul className="lg:space-y-4 flex lg:flex-col md:justify-center md:items-center px-2">
                        <li>
                            <NavLink
                                to="addMarathons"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded ${isActive ? 'bg-purple-700 text-white' : ' hover:bg-purple-100'
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
                                    `block px-4 py-2 rounded ${isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-100'
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
                                    `block px-4 py-2 rounded ${isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-100'
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
