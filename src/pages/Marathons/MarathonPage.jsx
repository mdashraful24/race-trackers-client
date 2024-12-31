import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoLocationSharp } from 'react-icons/io5';

const MarathonPage = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/marathonPage`,
                    {
                        params: { sortOrder },
                    });
                setMarathons(response.data);
            } catch (error) {
                console.error('Error fetching marathons:', error);
            }
        };
        fetchMarathons();
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="px-4 mt-10 mb-20 container mx-auto">
            <Helmet>
                <title>Marathons | CrowdCube</title>
            </Helmet>

            <h2 className="text-2xl md:text-4xl font-bold text-center text-purple-800 mb-3">All Marathons Events</h2>
            <div className="mb-8 md:mb-14 h-1 w-36 bg-[#591a6a] mx-auto"></div>

            {/* Sorting dropdown */}
            <div className="mb-16 text-center">
                <label htmlFor="sortOrder" className="mr-2 font-semibold">Sort by:</label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="p-2 border rounded-lg"
                >
                    <option value="desc">Newest to Oldest</option>
                    <option value="asc">Oldest to Newest</option>
                </select>
            </div>

            {/* Marathon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.length === 0 ? (
                    <p className="col-span-3 text-center text-lg">No marathons available</p>
                ) : (
                    marathons.map((marathon) => (
                        <div key={marathon._id} className="card card-compact shadow-xl transition-transform duration-500 hover:-translate-y-2 group">
                            <img src={marathon.marathonImage} alt={marathon.title} className="w-full md:h-[250px] lg:h-[300px] rounded-2xl p-2" />
                            <div className="p-4 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{marathon.title}</h3>
                                <div className='flex items-center gap-1 mb-2'>
                                    <span className='text-blue-600 text-lg'><IoLocationSharp /></span>
                                    <p>{marathon.location}</p>
                                </div>
                                <p>
                                    Registration: {new Date(marathon.startRegistrationDate).toLocaleDateString()} to {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                                </p>
                                <Link
                                    to={`/marathons/${marathon._id}`}
                                    className="btn mt-3 ml-auto shadow-md transition-colors duration-300 text-black group-hover:bg-purple-700 group-hover:text-white"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MarathonPage;