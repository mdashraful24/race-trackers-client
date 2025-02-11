import { IoLocationSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const UpcomingMarathons = () => {
    const axiosPublic = useAxiosPublic();

    const { data: marathons = [], isLoading, isError } = useQuery({
        queryKey: ["events"],
        queryFn: async () => {
            const res = await axiosPublic.get("/events");
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner text-purple-700"></span>
            </div>
        );
    }
    if (isError) return <p className="text-center text-lg font-semibold mb-8">No upcoming events available at the moment. Check back later!</p>;

    return (
        <div className="container mx-auto mt-14 mb-8 md:mt-24 px-4">
            {/* Title and Subtitle */}
            <h2 className="text-base font-bold text-center mb-3">
                Events
            </h2>
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-5">
                Upcoming Marathon Events
            </h2>

            {/* Border */}
            <div className="mb-8 h-1 w-36 bg-[#591a6a] mx-auto"></div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.map((marathon) => (
                    <div
                        key={marathon._id}
                        className="relative shadow-lg rounded-xl p-5 overflow-hidden border"
                    >
                        {/* Image */}
                        <img
                            src={marathon.image}
                            alt={marathon.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        {/* Overlay for "Upcoming" text */}
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-purple-500 text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Upcoming
                        </div>
                        {/* title */}
                        <h3 className="text-xl font-semibold mb-2">
                            {marathon.title}
                        </h3>
                        {/* description */}
                        <p className="mb-2">
                            {marathon.description}
                        </p>
                        {/* location */}
                        <div className="flex items-center gap-2 my-3">
                            <IoLocationSharp className="text-purple-600 text-lg" />
                            <p>{marathon.location}</p>
                        </div>

                        {/* all dates */}
                        <p>
                            <span className="font-semibold">Registration Start:</span> {marathon.registrationStart}
                        </p>
                        <p>
                            <span className="font-semibold">Registration End:</span> {marathon.registrationEnd}
                        </p>
                        <p className="mt-5">
                            <span className="font-semibold">Marathon Date:</span> {marathon.marathonDate}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMarathons;










// Submitted code
// import React from "react";
// import { IoLocationSharp } from "react-icons/io5";

// const UpcomingMarathons = () => {
//     const marathons = [
//         {
//             id: 1,
//             title: "City Marathon",
//             description: "Join us for a thrilling run through the heart of New York City.",
//             registrationStart: "Mar 1, 2025",
//             registrationEnd: "Apr 31, 2025",
//             marathonDate: "May 15, 2025",
//             location: "New York, USA",
//             image: "https://i.ibb.co.com/4V70T92/853881-1470.jpg"
//         },
//         {
//             id: 2,
//             title: "Spring Run",
//             description: "Experience the beauty of London in spring while you run.",
//             registrationStart: "Apr 1, 2025",
//             registrationEnd: "May 30, 2025",
//             marathonDate: "Jun 10, 2025",
//             location: "London, UK",
//             image: "https://i.ibb.co.com/bPYG6W2/marathon-runners-running-a-race-scaled.jpg"
//         },
//         {
//             id: 3,
//             title: "Desert Dash",
//             description: "Challenge yourself with an unforgettable dash through Dubai's deserts.",
//             registrationStart: "May 1, 2025",
//             registrationEnd: "Jun 31, 2025",
//             marathonDate: "Jul 22, 2025",
//             location: "Dubai, UAE",
//             image: "https://i.ibb.co.com/3mCrnKF/xtimthumb-php-qsrc-https-P3-A-P2-F-P2-Fwww-209events-com-P2-Fassets-P2-Fuploads-P2-Fimages-P2-FBerli.webp"
//         },
//         {
//             id: 4,
//             title: "Beachside Sprint",
//             description: "Run alongside the stunning beaches of Sydney.",
//             registrationStart: "Jul 1, 2025",
//             registrationEnd: "Aug 30, 2025",
//             marathonDate: "Sep 5, 2025",
//             location: "Sydney, Australia",
//             image: "https://i.ibb.co.com/Js3QtBR/images.jpg"
//         },
//         {
//             id: 5,
//             title: "Mountain Trek Marathon",
//             description: "Test your endurance with a trek through the majestic mountains of Nepal.",
//             registrationStart: "Sep 1, 2025",
//             registrationEnd: "Oct 31, 2025",
//             marathonDate: "Nov 20, 2025",
//             location: "Kathmandu, Nepal",
//             image: "https://i.ibb.co.com/hBfQw35/4590058-2416600.jpg"
//         },
//         {
//             id: 6,
//             title: "Night Glow Run",
//             description: "Enjoy a mesmerizing night run under the glowing Tokyo skyline.",
//             registrationStart: "Oct 1, 2025",
//             registrationEnd: "Nov 31, 2025",
//             marathonDate: "Dec 15, 2025",
//             location: "Tokyo, Japan",
//             image: "https://i.ibb.co.com/DC6CCt7/4730894-2460799.jpg"
//         },
//     ];

//     return (
//         <section className="py-8">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-base font-bold text-center text-purple-700 mb-3">
//                     Events
//                 </h2>
//                 <h2 className="text-2xl md:text-5xl font-extrabold text-center text-purple-800 mb-5">
//                     Upcoming Marathon Events
//                 </h2>
//                 <div className="mb-8 h-1 w-36 bg-[#591a6a] mx-auto"></div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {marathons.map((marathon) => (
//                         <div
//                             key={marathon.id}
//                             className="relative shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300 overflow-hidden border"
//                         >
//                             {/* Image */}
//                             <img
//                                 src={marathon.image}
//                                 alt={marathon.title}
//                                 className="w-full h-48 object-cover rounded-lg mb-4"
//                             />
//                             {/* Overlay for "Upcoming" text */}
//                             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
//                                 Upcoming
//                             </div>
//                             <h3 className="text-xl font-semibold mb-2">
//                                 {marathon.title}
//                             </h3>
//                             <p className=" mb-2">
//                                 {marathon.description}
//                             </p>
//                             <div className="flex items-center gap-1 mt-3 mb-5">
//                                 <p className="text-blue-500"><IoLocationSharp /></p>
//                                 {/* <p className="font-semibold">Location:</p> */}
//                                 <p>{marathon.location}</p>
//                             </div>
//                             <p className="">
//                                 <span className="font-semibold">Registration Start:</span> {marathon.registrationStart}
//                             </p>
//                             <p className="">
//                                 <span className="font-semibold">Registration End:</span> {marathon.registrationEnd}
//                             </p>
//                             <p className="mt-5">
//                                 <span className="font-semibold">Marathon Date:</span> {marathon.marathonDate}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default UpcomingMarathons;
