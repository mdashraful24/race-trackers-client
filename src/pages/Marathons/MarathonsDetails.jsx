import { FaUsers } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MarathonsDetails = () => {
    const [timeLeft, setTimeLeft] = useState("");
    const [timeParts, setTimeParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [registrationClosed, setRegistrationClosed] = useState(false);
    const [loading, setLoading] = useState(true);

    const {
        _id,
        title,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
        location,
        runningDistance,
        description,
        marathonImage,
        totalRegistrationCount,
    } = useLoaderData();

    // Simulate loading completion
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // After 2 seconds, hide the loading spinner
        }, 1000); // Adjust as needed to simulate your loading period

        return () => clearTimeout(timer);
    }, []);

    // Calculate time remaining until the end of registration
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const endDate = new Date(endRegistrationDate);
            const diff = endDate - now;

            if (diff <= 0) {
                setTimeLeft("Registration closed");
                setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setRegistrationClosed(true);
                clearInterval(interval);
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTimeParts({ days, hours, minutes, seconds });
                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval); // Clean up on unmount
    }, [endRegistrationDate]);

    // Check if registration is open
    const isRegistrationOpen =
        new Date() >= new Date(startRegistrationDate) &&
        new Date() <= new Date(endRegistrationDate);

    const circleStyleDay = {
        path: { stroke: '#FF6347' },
        text: { fill: '#FF6347', fontSize: '16px' },
    };

    const circleStyleHour = {
        path: { stroke: '#4682B4' },
        text: { fill: '#4682B4', fontSize: '16px' },
    };

    const circleStyleMinute = {
        path: { stroke: '#32CD32' },
        text: { fill: '#32CD32', fontSize: '16px' },
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <img src={marathonImage} alt={title} className="w-full" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center text-lime-600 mb-4">{title}</h1>
                    <p className="text-gray-600 mb-6 text-justify">Description: {description}</p>

                    {/* Details Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">📍 Location:</p>
                            <p className="text-gray-700">{location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">📅 Start Registration:</p>
                            <p className="text-gray-700">{new Date(startRegistrationDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">📅 End Registration:</p>
                            <p className="text-gray-700">{new Date(endRegistrationDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">🏃 Marathon Start Date:</p>
                            <p className="text-gray-700">{new Date(marathonStartDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">🏅 Running Distance:</p>
                            <p className="text-gray-700">{runningDistance}</p>
                        </div>
                        {/* Total Registration Count */}
                        <div className="flex items-center gap-2">
                            <FaUsers className="text-blue-500" />
                            <p className="text-lg font-semibold">Total Registration Count:</p>
                            <p>{totalRegistrationCount}</p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="flex flex-col items-center gap-4">
                            {registrationClosed ? (
                                <p className="text-red-500 text-lg font-semibold">⏳ Time Left for Registration: Registration closed</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-center items-center">
                                    <div className="flex justify-center items-center w-24 h-24">
                                        <CircularProgressbar value={timeParts.days} maxValue={365} text={`${timeParts.days}d`} styles={circleStyleDay} />
                                    </div>
                                    <div className="flex justify-center items-center w-24 h-24">
                                        <CircularProgressbar value={timeParts.hours} maxValue={24} text={`${timeParts.hours}h`} styles={circleStyleHour} />
                                    </div>
                                    <div className="flex justify-center items-center w-24 h-24">
                                        <CircularProgressbar value={timeParts.minutes} maxValue={60} text={`${timeParts.minutes}m`} styles={circleStyleMinute} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="mt-6 text-center">
                        <Link to={`/registrationForm/${_id}`} disabled={!isRegistrationOpen} className={`btn btn-primary ${isRegistrationOpen ? "" : "btn-disabled"}`}>
                            {isRegistrationOpen ? "Register Now" : "Registration Closed"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonsDetails;












// import { FaUsers } from "react-icons/fa";
// import { Link, useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const MarathonsDetails = () => {
//     const [timeLeft, setTimeLeft] = useState("");
//     const [timeParts, setTimeParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     const [registrationClosed, setRegistrationClosed] = useState(false);

//     const {
//         _id,
//         title,
//         startRegistrationDate,
//         endRegistrationDate,
//         marathonStartDate,
//         location,
//         runningDistance,
//         description,
//         marathonImage,
//         totalRegistrationCount,
//     } = useLoaderData();

//     // Calculate time remaining until the end of registration
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const now = new Date();
//             const endDate = new Date(endRegistrationDate);
//             const diff = endDate - now;

//             if (diff <= 0) {
//                 setTimeLeft("Registration closed");
//                 setTimeParts({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//                 setRegistrationClosed(true);
//                 clearInterval(interval);
//             } else {
//                 const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//                 const minutes = Math.floor((diff / (1000 * 60)) % 60);
//                 const seconds = Math.floor((diff / 1000) % 60);

//                 setTimeParts({ days, hours, minutes, seconds });
//                 setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//             }
//         }, 1000);

//         return () => clearInterval(interval); // Clean up on unmount
//     }, [endRegistrationDate]);

//     // Check if registration is open
//     const isRegistrationOpen =
//         new Date() >= new Date(startRegistrationDate) &&
//         new Date() <= new Date(endRegistrationDate);

//     const circleStyleDay = {
//         path: {
//             stroke: '#FF6347',
//         },
//         text: {
//             fill: '#FF6347',
//             fontSize: '16px',
//         },
//     };

//     const circleStyleHour = {
//         path: {
//             stroke: '#4682B4',
//         },
//         text: {
//             fill: '#4682B4',
//             fontSize: '16px',
//         },
//     };

//     const circleStyleMinute = {
//         path: {
//             stroke: '#32CD32',
//         },
//         text: {
//             fill: '#32CD32',
//             fontSize: '16px',
//         },
//     };

//     return (
//         <div className="container mx-auto p-6">
//             {/* Header Section */}
//             <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//                 <img
//                     src={marathonImage}
//                     alt={title}
//                     className="w-full"
//                 />
//                 <div className="p-6">
//                     <h1 className="text-3xl font-bold text-center text-lime-600 mb-4">
//                         {title}
//                     </h1>
//                     <p className="text-gray-600 mb-6 text-justify">Description: {description}</p>

//                     {/* Details Section */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">📍 Location:</p>
//                             <p className="text-gray-700">{location}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">📅 Start Registration:</p>
//                             <p className="text-gray-700">
//                                 {new Date(startRegistrationDate).toLocaleDateString()}
//                             </p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">📅 End Registration:</p>
//                             <p className="text-gray-700">
//                                 {new Date(endRegistrationDate).toLocaleDateString()}
//                             </p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">🏃 Marathon Start Date:</p>
//                             <p className="text-gray-700">
//                                 {new Date(marathonStartDate).toLocaleDateString()}
//                             </p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">🏅 Running Distance:</p>
//                             <p className="text-gray-700">{runningDistance}</p>
//                         </div>
//                         {/* Total Registration Count */}
//                         <div className="flex items-center gap-2">
//                             <FaUsers className="text-blue-500" />
//                             <p className="text-lg font-semibold">Total Registration Count: </p>
//                             <p>{totalRegistrationCount}</p>
//                         </div>
//                         {/* Countdown Timer */}
//                         <div className="flex flex-col items-center gap-4">
//                             {registrationClosed ? (
//                                 <p className="text-red-500 text-lg font-semibold">⏳ Time Left for Registration: Registration closed</p>
//                             ) : (
//                                 <>
//                                         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-center items-center">
//                                             <div className="flex justify-center items-center w-24 h-24">
//                                                 <CircularProgressbar
//                                                     value={timeParts.days}
//                                                     maxValue={365}
//                                                     text={`${timeParts.days}d`}
//                                                     styles={circleStyleDay}
//                                                 />
//                                             </div>
//                                             <div className="flex justify-center items-center w-24 h-24">
//                                                 <CircularProgressbar
//                                                     value={timeParts.hours}
//                                                     maxValue={24}
//                                                     text={`${timeParts.hours}h`}
//                                                     styles={circleStyleHour}
//                                                 />
//                                             </div>
//                                             <div className="flex justify-center items-center w-24 h-24">
//                                                 <CircularProgressbar
//                                                     value={timeParts.minutes}
//                                                     maxValue={60}
//                                                     text={`${timeParts.minutes}m`}
//                                                     styles={circleStyleMinute}
//                                                 />
//                                             </div>
//                                         </div>
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     {/* Register Button */}
//                     <div className="mt-6 text-center">
//                         <Link
//                             to={`/registrationForm/${_id}`}
//                             disabled={!isRegistrationOpen}
//                             className={`btn btn-primary ${isRegistrationOpen ? "" : "btn-disabled"
//                                 }`}
//                         >
//                             {isRegistrationOpen ? "Register Now" : "Registration Closed"}
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MarathonsDetails;
