import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { FaUsers } from "react-icons/fa";

const MarathonsDetails = () => {
    const { id } = useParams();
    const [marathonDetails, setMarathonDetails] = useState(null);
    const [timeLeft, setTimeLeft] = useState("");
    const [timeParts, setTimeParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [registrationClosed, setRegistrationClosed] = useState(false);
    const [loading, setLoading] = useState(true);
    const axiosSecure = UseAxiosSecure();

    // Fetch marathon data
    useEffect(() => {
        const fetchMarathonData = async () => {
            try {
                const response = await axiosSecure.get(`/allMarathons/${id}`);
                setMarathonDetails(response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            } catch (error) {
                console.error('Failed to fetch marathon data', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchMarathonData();
        }
    }, [id]);

    useEffect(() => {
        if (marathonDetails) {
            const { startRegistrationDate, endRegistrationDate } = marathonDetails;

            if (new Date() < new Date(startRegistrationDate)) {
                setTimeLeft("Coming Soon");
                setRegistrationClosed(true);
                return;
            }

            const interval = setInterval(() => {
                const now = new Date();
                const endDate = new Date(endRegistrationDate);
                const diff = endDate - now;

                if (diff <= 0) {
                    setTimeLeft("Closed");
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

            return () => clearInterval(interval);
        }
    }, [marathonDetails]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg"></span> {/* Loading spinner */}
            </div>
        );
    }

    // If marathon details are loaded, render the content
    const { title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, marathonImage, totalRegistrationCount } = marathonDetails;

    const isRegistrationOpen = new Date() >= new Date(startRegistrationDate) && new Date() <= new Date(endRegistrationDate);

    const circleStyleDay = { path: { stroke: '#FF6347' }, text: { fill: '#FF6347', fontSize: '16px' } };
    const circleStyleHour = { path: { stroke: '#4682B4' }, text: { fill: '#4682B4', fontSize: '16px' } };
    const circleStyleMinute = { path: { stroke: '#32CD32' }, text: { fill: '#32CD32', fontSize: '16px' } };

    return (
        <div className="container mx-auto mb-20 mt-10 px-4">
            <Helmet>
                <title>Marathon Details | RaceTrackers</title>
            </Helmet>

            <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-5 md:mb-7">Marathon Details</h2>
            <div className="mb-10 md:mb-14 h-1 w-36 bg-[#591a6a] mx-auto"></div>

            {/* Header Section */}
            <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
                <img src={marathonImage} alt={title} className="w-full" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center text-lime-600 mb-4">{title}</h1>

                    {/* Description */}
                    <p className="mb-6 text-justify"><span className=" md:text-lg font-semibold">Description:</span> {description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Location: */}
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <p className="text-blue-500 text-xl"><IoLocationSharp /></p>
                            <p className="md:text-lg font-semibold">Location:</p>
                            <p>{location}</p>
                        </div>

                        {/* Running Distance: */}
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg font-semibold">🏅 Running Distance:</p>
                            <p>{runningDistance}</p>
                        </div>

                        {/* Start Registration: */}
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg font-semibold">📅 Start Registration:</p>
                            <p>{new Date(startRegistrationDate).toLocaleDateString()}</p>
                        </div>

                        {/* End Registration: */}
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg font-semibold">📅 End Registration:</p>
                            <p>{new Date(endRegistrationDate).toLocaleDateString()}</p>
                        </div>

                        {/* Marathon Start Date: */}
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg font-semibold">🏃 Marathon Start Date:</p>
                            <p>{new Date(marathonStartDate).toLocaleDateString()}</p>
                        </div>

                        {/* Total Registration Count: */}
                        <div className="flex items-center gap-2.5">
                            <FaUsers className="text-blue-500" />
                            <p className="md:text-lg font-semibold">Total Registration Count:</p>
                            <p>{totalRegistrationCount}</p>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mt-5">{timeLeft === "Coming Soon" ? (
                        <p className="md:text-lg font-semibold">⏳ Registration: <span className="text-blue-600 md:text-lg font-semibold">{timeLeft}</span></p>
                    ) : registrationClosed ? (
                        <p className="md:text-lg font-semibold">🚫 Registration: <span className="text-red-500 md:text-lg font-semibold">{timeLeft}</span></p>
                    ) : (
                        <div className="flex justify-center items-center gap-10">
                            <div className="flex justify-center items-center w-24 h-24">
                                <CircularProgressbar value={timeParts.days} maxValue={365} text={`${timeParts.days} days`} styles={circleStyleDay} />
                            </div>
                            <div className="flex justify-center items-center w-24 h-24">
                                <CircularProgressbar value={timeParts.hours} maxValue={24} text={`${timeParts.hours} hours`} styles={circleStyleHour} />
                            </div>
                            <div className="flex justify-center items-center w-24 h-24">
                                <CircularProgressbar value={timeParts.minutes} maxValue={60} text={`${timeParts.minutes} min`} styles={circleStyleMinute} />
                            </div>
                        </div>
                    )}</div>

                    {/* Register Button */}
                    <div className="mt-10 text-center">
                        {timeLeft !== "Coming Soon" && !registrationClosed && (
                            <Link to={`/registrationForm/${id}`} disabled={!isRegistrationOpen} className={`btn bg-purple-700 hover:bg-purple-800 text-white text-base w-full ${isRegistrationOpen ? "" : "btn-disabled"}`}>
                                {isRegistrationOpen ? "Register Now" : "Registration Closed"}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonsDetails;







// Alternative Way
// import { FaUsers } from "react-icons/fa";
// import { Link, useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { IoLocationSharp } from "react-icons/io5";
// import { Helmet } from "react-helmet-async";

// const MarathonsDetails = () => {
//     const [timeLeft, setTimeLeft] = useState("");
//     const [timeParts, setTimeParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     const [registrationClosed, setRegistrationClosed] = useState(false);
//     const [loading, setLoading] = useState(true);

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

// useEffect(() => {
//     const timer = setTimeout(() => {
//         setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
// }, []);

//     useEffect(() => {
//         if (new Date() < new Date(startRegistrationDate)) {
//             setTimeLeft("Coming Soon");
//             setRegistrationClosed(true);
//             return;
//         }

//         const interval = setInterval(() => {
//             const now = new Date();
//             const endDate = new Date(endRegistrationDate);
//             const diff = endDate - now;

//             if (diff <= 0) {
//                 setTimeLeft("Closed");
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

//         return () => clearInterval(interval);
//     }, [endRegistrationDate, startRegistrationDate]);

//     const isRegistrationOpen =
//         new Date() >= new Date(startRegistrationDate) &&
//         new Date() <= new Date(endRegistrationDate);

//     const circleStyleDay = {
//         path: { stroke: '#FF6347' },
//         text: { fill: '#FF6347', fontSize: '16px' },
//     };

//     const circleStyleHour = {
//         path: { stroke: '#4682B4' },
//         text: { fill: '#4682B4', fontSize: '16px' },
//     };

//     const circleStyleMinute = {
//         path: { stroke: '#32CD32' },
//         text: { fill: '#32CD32', fontSize: '16px' },
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <span className="loading loading-bars loading-lg"></span>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto mb-20 mt-10 px-4">
//             <Helmet>
//                 <title>Marathon Details | RaceTrackers</title>
//             </Helmet>

//             <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-800 mb-5 md:mb-7">Marathon Details</h2>
//             <div className="mb-10 md:mb-14 h-1 w-36 bg-[#591a6a] mx-auto"></div>

//             {/* Header Section */}
//             <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
//                 <img src={marathonImage} alt={title} className="w-full" />
//                 <div className="p-6">
//                     <h1 className="text-3xl font-bold text-center text-lime-600 mb-4">{title}</h1>
//                     <p className="mb-6 text-justify">Description: {description}</p>
//                     {/* Details Section */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         <div className="flex items-center gap-2">
//                             <p className="text-blue-500 text-xl"><IoLocationSharp /></p>
//                             <p className="text-lg font-semibold">Location:</p>
//                             <p>{location}</p>
//                         </div>
//                         {/* Start Reg */}
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">📅 Start Registration:</p>
//                             <p>{new Date(startRegistrationDate).toLocaleDateString()}</p>
//                         </div>
//                         {/* Distance */}
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">🏅 Running Distance:</p>
//                             <p>{runningDistance}</p>
//                         </div>
//                         {/* End Reg */}
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">📅 End Registration:</p>
//                             <p>{new Date(endRegistrationDate).toLocaleDateString()}</p>
//                         </div>
//                         {/* Total Registration Count */}
//                         <div className="flex items-center gap-2.5">
//                             <FaUsers className="text-blue-500" />
//                             <p className="text-lg font-semibold">Total Registration Count:</p>
//                             <p>{totalRegistrationCount}</p>
//                         </div>
//                         {/* Marathon Start */}
//                         <div className="flex items-center gap-2">
//                             <p className="text-lg font-semibold">🏃 Marathon Start Date:</p>
//                             <p>{new Date(marathonStartDate).toLocaleDateString()}</p>
//                         </div>
//                         {/* Countdown Timer */}
//                         <div className="">
//                             {timeLeft === "Coming Soon" ? (
//                                 <p className="text-lg font-semibold">⏳ Registration: <span className="text-blue-600 text-lg font-semibold">{timeLeft}</span></p>
//                             ) : registrationClosed ? (
//                                     <p className="text-lg font-semibold">🚫 Registration: <span className="text-red-500 text-lg font-semibold">{timeLeft}</span></p>
//                             ) : (
//                                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-center items-center">
//                                     <div className="flex justify-center items-center w-24 h-24">
//                                         <CircularProgressbar value={timeParts.days} maxValue={365} text={`${timeParts.days}d`} styles={circleStyleDay} />
//                                     </div>
//                                     <div className="flex justify-center items-center w-24 h-24">
//                                         <CircularProgressbar value={timeParts.hours} maxValue={24} text={`${timeParts.hours}h`} styles={circleStyleHour} />
//                                     </div>
//                                     <div className="flex justify-center items-center w-24 h-24">
//                                         <CircularProgressbar value={timeParts.minutes} maxValue={60} text={`${timeParts.minutes}m`} styles={circleStyleMinute} />
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {/* Register Button */}
//                     <div className="mt-10 text-center">
//                         {timeLeft !== "Coming Soon" && !registrationClosed && (
//                             <Link to={`/registrationForm/${_id}`} disabled={!isRegistrationOpen} className={`btn bg-purple-700 hover:bg-purple-800 text-white text-base w-full ${isRegistrationOpen ? "" : "btn-disabled"}`}>
//                                 {isRegistrationOpen ? "Register Now" : "Registration Closed"}
//                             </Link>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MarathonsDetails;
