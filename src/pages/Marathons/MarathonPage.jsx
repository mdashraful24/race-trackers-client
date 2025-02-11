import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import MarathonPageCard from './MarathonPageCard';

const MarathonPage = () => {
    const [marathons, setMarathons] = useState([]);
    const axiosSecure = UseAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(true);
    const [sorting, setSorting] = useState(false);
    const [showSorting, setShowSorting] = useState(false);
    const [sortOrder, setSortOrder] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Fetch data using Promises
    useEffect(() => {
        setShowLoading(true);
        setTimeout(() => setShowLoading(false), 1000);

        axiosSecure
            .get('/allMarathons')
            .then((response) => {
                setMarathons(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching marathons:', error);
                setLoading(false);
            });
    }, []);

    // Sort marathons
    useEffect(() => {
        if (sortOrder) {
            setSorting(true);
            setShowSorting(true);
            setTimeout(() => {
                setSorting(false);
                setShowSorting(false);
            }, 300);
        }
    }, [sortOrder]);

    const sortedMarathons = [...marathons].sort((a, b) => {
        if (sortOrder === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
    });

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMarathons = sortedMarathons.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sortedMarathons.length / itemsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Spinner rendering logic
    if (loading && showLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (sorting && showSorting) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="px-4 mt-10 mb-20 container mx-auto min-h-80">
            <Helmet>
                <title>Marathons | RaceTrackers</title>
            </Helmet>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-5 md:mb-7">All Marathon Events</h2>
            <div className="mb-10 h-1 w-36 bg-[#591a6a] mx-auto"></div>

            {/* Sort Options */}
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setSortOrder('newest')}
                    className={`btn ${sortOrder === 'newest' ? 'bg-purple-700 text-white' : ''} mr-2`}
                >
                    Newest
                </button>
                <button
                    onClick={() => setSortOrder('oldest')}
                    className={`btn ${sortOrder === 'oldest' ? 'bg-purple-700 text-white' : ''}`}
                >
                    Oldest
                </button>
            </div>

            {/* Marathon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentMarathons.length === 0 ? (
                    <p className="col-span-3 text-center text-lg">No marathons available</p>
                ) : (
                    currentMarathons.map((marathon) => (
                        <MarathonPageCard key={marathon._id} marathon={marathon} />
                    ))
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-12 font-semibold">
                <button
                    onClick={handlePreviousPage}
                    className={`btn  font-semibold ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="mx-4 flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={handleNextPage}
                    className={`btn font-semibold ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MarathonPage;









// Alternative Way
// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import UseAxiosSecure from '../../hooks/UseAxiosSecure';
// import MarathonPageCard from './MarathonPageCard';

// const MarathonPage = () => {
//     const [marathons, setMarathons] = useState([]);
//     const axiosSecure = UseAxiosSecure();
//     const [loading, setLoading] = useState(true);
//     const [sortOrder, setSortOrder] = useState('newest');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 6;

//     // Fetch data using Promises
//     useEffect(() => {
//         axiosSecure
//             .get("/allMarathons")
//             .then((response) => {
//                 setMarathons(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching marathons:', error);
//                 setLoading(false);
//             });
//     }, []);

//     // Sort marathons based on the selected sorting order
//     const sortedMarathons = [...marathons].sort((a, b) => {
//         if (sortOrder === 'newest') {
//             return new Date(b.createdAt) - new Date(a.createdAt);
//         } else {
//             return new Date(a.createdAt) - new Date(b.createdAt);
//         }
//     });

//     // Calculate pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentMarathons = sortedMarathons.slice(indexOfFirstItem, indexOfLastItem);

//     const totalPages = Math.ceil(sortedMarathons.length / itemsPerPage);

//     const handlePreviousPage = () => {
//         setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     };

//     const handleNextPage = () => {
//         setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//     };

//     // Loading state
//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <span className="loading loading-bars loading-lg"></span>
//             </div>
//         );
//     }

//     return (
//         <div className="px-4 mt-10 mb-20 container mx-auto min-h-80">
//             <Helmet>
//                 <title>Marathons | RaceTrackers</title>
//             </Helmet>

//             {/* Title */}
//             <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-5 md:mb-7">All Marathon Events</h2>
//             <div className="mb-10 md:mb-14 h-1 w-36 bg-[#591a6a] mx-auto"></div>

//             {/* Sort Options */}
//             <div className="flex justify-end mb-6">
//                 <button
//                     onClick={() => setSortOrder('newest')}
//                     className={`btn ${sortOrder === 'newest' ? 'bg-purple-700 text-white' : ''} mr-2`}
//                 >
//                     Newest
//                 </button>
//                 <button
//                     onClick={() => setSortOrder('oldest')}
//                     className={`btn ${sortOrder === 'oldest' ? 'bg-purple-700 text-white' : ''}`}
//                 >
//                     Oldest
//                 </button>
//             </div>

//             {/* Marathon Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {currentMarathons.length === 0 ? (
//                     <p className="col-span-3 text-center text-lg">No marathons available</p>
//                 ) : (
//                     currentMarathons.map((marathon) => (
//                         <MarathonPageCard key={marathon._id} marathon={marathon} />
//                     ))
//                 )}
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-12 font-semibold">
//                 <button
//                     onClick={handlePreviousPage}
//                     className={`btn  font-semibold ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </button>
//                 <span className="mx-4 flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
//                 <button
//                     onClick={handleNextPage}
//                     className={`btn font-semibold ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MarathonPage;





// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import UseAxiosSecure from '../../hooks/UseAxiosSecure';
// import MarathonPageCard from './MarathonPageCard';

// const MarathonPage = () => {
//     const [marathons, setMarathons] = useState([]);
//     const axiosSecure = UseAxiosSecure();
//     const [loading, setLoading] = useState(true);
//     const [sorting, setSorting] = useState(false); // NEW: State to track sorting
//     const [sortOrder, setSortOrder] = useState('newest');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 6;

//     // Fetch data using Promises
//     useEffect(() => {
//         axiosSecure
//             .get("/allMarathons")
//             .then((response) => {
//                 setMarathons(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching marathons:', error);
//                 setLoading(false);
//             });
//     }, []);

//     // Sort marathons based on the selected sorting order
//     useEffect(() => {
//         if (sortOrder) {
//             setSorting(true); // Start sorting indicator
//             setTimeout(() => {
//                 setSorting(false); // End sorting indicator
//             }, 500); // Simulate slight delay for user feedback
//         }
//     }, [sortOrder]);

//     const sortedMarathons = [...marathons].sort((a, b) => {
//         if (sortOrder === 'newest') {
//             return new Date(b.createdAt) - new Date(a.createdAt);
//         } else {
//             return new Date(a.createdAt) - new Date(b.createdAt);
//         }
//     });

//     // Calculate pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentMarathons = sortedMarathons.slice(indexOfFirstItem, indexOfLastItem);

//     const totalPages = Math.ceil(sortedMarathons.length / itemsPerPage);

//     const handlePreviousPage = () => {
//         setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     };

//     const handleNextPage = () => {
//         setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//     };

//     // Loading state
//     // if (loading) {
//     //     return (
//     //         <div className="flex justify-center items-center min-h-screen">
//     //             <span className="loading loading-bars loading-lg"></span>
//     //         </div>
//     //     );
//     // }
//     if (loading || sorting) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 {loading ? (
//                     <>
//                         <span className="loading loading-bars loading-lg"></span>
//                     </>
//                 ) : (
//                     <>
//                         <span className="loading loading-bars loading-lg"></span>
//                     </>
//                 )}
//             </div>
//         );
//     }

//     return (
//         <div className="px-4 mt-10 mb-20 container mx-auto min-h-80">
//             <Helmet>
//                 <title>Marathons | RaceTrackers</title>
//             </Helmet>

//             {/* Title */}
//             <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-5 md:mb-7">All Marathon Events</h2>
//             <div className="mb-10 h-1 w-36 bg-[#591a6a] mx-auto"></div>

//             {/* Sort Options */}
//             <div className="flex justify-end mb-6">
//                 <button
//                     onClick={() => setSortOrder('newest')}
//                     className={`btn ${sortOrder === 'newest' ? 'bg-purple-700 text-white' : ''} mr-2`}
//                 >
//                     Newest
//                 </button>
//                 <button
//                     onClick={() => setSortOrder('oldest')}
//                     className={`btn ${sortOrder === 'oldest' ? 'bg-purple-700 text-white' : ''}`}
//                 >
//                     Oldest
//                 </button>
//             </div>

//             {/* Sorting Indicator
//             {sorting && (
//                 <div className="flex justify-center items-center min-h-screen">
//                     <span className="loading loading-spinner loading-md"></span>
//                     <span className="ml-3 font-semibold text-purple-700">Sorting...</span>
//                 </div>
//             )} */}

//             {/* Marathon Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {currentMarathons.length === 0 ? (
//                     <p className="col-span-3 text-center text-lg">No marathons available</p>
//                 ) : (
//                     currentMarathons.map((marathon) => (
//                         <MarathonPageCard key={marathon._id} marathon={marathon} />
//                     ))
//                 )}
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-12 font-semibold">
//                 <button
//                     onClick={handlePreviousPage}
//                     className={`btn  font-semibold ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     disabled={currentPage === 1}
//                 >
//                     Previous
//                 </button>
//                 <span className="mx-4 flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
//                 <button
//                     onClick={handleNextPage}
//                     className={`btn font-semibold ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     disabled={currentPage === totalPages}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MarathonPage;
