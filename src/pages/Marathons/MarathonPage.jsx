import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MarathonPage = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order: 'desc' for newest first

    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const response = await fetch(`http://localhost:5000/marathonPage`);
                const data = await response.json();

                // Sort the data based on startRegistrationDate
                const sortedData = data.sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return new Date(a.startRegistrationDate) - new Date(b.startRegistrationDate);
                    } else {
                        return new Date(b.startRegistrationDate) - new Date(a.startRegistrationDate);
                    }
                });

                setMarathons(sortedData);
            } catch (error) {
                console.error('Error fetching marathons:', error);
            }
        };
        fetchMarathons();
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value); // Update the sort order on change
    };

    return (
        <div className="px-4 mt-10 mb-20 container mx-auto">
            <Helmet>
                <title>Marathons | CrowdCube</title>
            </Helmet>

            {/* Sorting dropdown */}
            <div className="mb-6 text-center">
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
                        <div key={marathon._id} className="border rounded-lg shadow-md overflow-hidden">
                            <img src={marathon.marathonImage} alt={marathon.title} className="w-full md:h-[250px] lg:h-[300px]" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{marathon.title}</h3>
                                <p className="text-gray-600 mb-2">{marathon.location}</p>
                                <p className="text-sm text-gray-500">
                                    Registration: {new Date(marathon.startRegistrationDate).toLocaleDateString()} to {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                                </p>
                                <Link
                                    to={`/marathons/${marathon._id}`}
                                    className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
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
