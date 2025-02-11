import React from "react";
import { FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Team = () => {
    const axiosPublic = useAxiosPublic();

    const { data: members = [], isLoading, isError } = useQuery({
        queryKey: ["members"],
        queryFn: async () => {
            const res = await axiosPublic.get("/members");
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
    if (isError) return <p className="text-center text-lg font-semibold mb-8">No data available at the moment. Check back later!</p>;

    return (
        <div className="container mx-auto text-center mt-14 mb-8 md:mt-24 px-4">
            {/* Title */}
            <h2 className="text-base font-bold text-center mb-3">
                Meet the Team
            </h2>
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-7">
                Our Expert Members
            </h2>
            <div className="mb-8 h-1 w-36 bg-[#591a6a] mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {members.map(member => (
                    <div key={member._id} className="relative rounded-xl shadow-lg overflow-hidden group">

                        {/* Image Section with Zoom Effect */}
                        <div className="overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[300px] md:h-[350px] lg:h-[500px] lg:object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Hover Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl font-bold text-white">
                                {member.name}
                            </h3>
                            <p className="text-gray-300 text-lg mt-2 mb-6">
                                {member.role}
                            </p>
                            <div className="flex space-x-6">
                                <a
                                    href={member.social.facebook}
                                    className="text-white text-4xl hover:scale-110 transition-transform"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href={member.social.close}
                                    className="text-white text-4xl hover:scale-110 transition-transform"
                                >
                                    <FaTimes />
                                </a>
                                <a
                                    href={member.social.instagram}
                                    className="text-white text-4xl hover:scale-110 transition-transform"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;















// import React from "react";
// import { FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
// import { Fade } from "react-awesome-reveal";

// const Team = () => {
//     const ourTeamMembers = [
//         {
//             name: "Eric Doe",
//             role: "Coaches",
//             image: "https://i.ibb.co.com/PNWq8B5/coache1.png",
//             social: {
//                 facebook: "#",
//                 instagram: "#",
//                 close: "#",
//             },
//         },
//         {
//             name: "Jane Smith",
//             role: "Fitness Trainer",
//             image: "https://i.ibb.co.com/YhkxPqd/coache3.png",
//             social: {
//                 facebook: "#",
//                 instagram: "#",
//                 close: "#",
//             },
//         },
//         {
//             name: "Chris Evans",
//             role: "Marathon Coach",
//             image: "https://i.ibb.co.com/y086N1r/pexels-thisisengineering-3912953.jpg",
//             social: {
//                 facebook: "#",
//                 instagram: "#",
//                 close: "#",
//             },
//         },
//         {
//             name: "Anna Brown",
//             role: "Nutrition Specialist",
//             image: "https://i.ibb.co.com/zfw9Jqr/attractive-sports-girl-personal-trainer-middle-modern-gym-with-workout-plan-her-hand.jpg",
//             social: {
//                 facebook: "#",
//                 instagram: "#",
//                 close: "#",
//             },
//         },
//         {
//             name: "Mike Johnson",
//             role: "Yoga Instructor",
//             image: "https://i.ibb.co.com/Kq7QD04/coache2.png",
//             social: {
//                 facebook: "#",
//                 instagram: "#",
//                 close: "#",
//             },
//         },
//         {
//             name: "John Carter",
//             role: "Pilates Instructor",
//             image: "https://i.ibb.co.com/TwNtvD4/young-handsome-man-sportswear-gym.jpg",
//             social: {
//                 facebook: "#",
//                 instagram: "#",
//                 close: "#",
//             },
//         },
//     ];

//     return (
//         <div className="mt-10 mb-16 md:mb-20">
//             <div className="container mx-auto text-center">
//                 {/* Title */}
//                 <h2 className="text-base font-bold text-center text-purple-700 mb-3">
//                     Meet the Team
//                 </h2>
//                 <h2 className="text-2xl md:text-5xl font-extrabold text-center text-purple-800 mb-7">
//                     Our Expert Members
//                 </h2>
//                 <div className="mb-8 h-1 w-36 bg-[#591a6a] mx-auto"></div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 px-4">
//                     {ourTeamMembers.map((member, index) => (
//                         // <Fade
//                         //     key={member.id}
//                         //     direction="bottom"
//                         //     delay={index * 200}
//                         //     triggerOnce={true}
//                         // >
//                         //     <div className="relative rounded-lg shadow-lg overflow-hidden group">

//                         //         {/* Image Section with Zoom Effect */}
//                         //         <div className="overflow-hidden">
//                         //             <img
//                         //                 src={member.image}
//                         //                 alt={member.name}
//                         //                 className="w-full h-[300px] md:h-[350px] lg:h-[500px] lg:object-cover transition-transform duration-500 group-hover:scale-110"
//                         //             />
//                         //         </div>

//                         //         {/* Hover Content */}
//                         //         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         //             <h3 className="text-2xl font-bold text-white">
//                         //                 {member.name}
//                         //             </h3>
//                         //             <p className="text-gray-300 text-lg mt-2 mb-6">
//                         //                 {member.role}
//                         //             </p>
//                         //             <div className="flex space-x-6">
//                         //                 <a
//                         //                     href={member.social.facebook}
//                         //                     className="text-white text-4xl hover:scale-110 transition-transform"
//                         //                 >
//                         //                     <FaFacebook />
//                         //                 </a>
//                         //                 <a
//                         //                     href={member.social.close}
//                         //                     className="text-white text-4xl hover:scale-110 transition-transform"
//                         //                 >
//                         //                     <FaTimes />
//                         //                 </a>
//                         //                 <a
//                         //                     href={member.social.instagram}
//                         //                     className="text-white text-4xl hover:scale-110 transition-transform"
//                         //                 >
//                         //                     <FaInstagram />
//                         //                 </a>
//                         //             </div>
//                         //         </div>
//                         //     </div>
//                         // </Fade>
//                         <div className="relative rounded-lg shadow-lg overflow-hidden group">

//                             {/* Image Section with Zoom Effect */}
//                             <div className="overflow-hidden">
//                                 <img
//                                     src={member.image}
//                                     alt={member.name}
//                                     className="w-full h-[300px] md:h-[350px] lg:h-[500px] lg:object-cover transition-transform duration-500 group-hover:scale-110"
//                                 />
//                             </div>

//                             {/* Hover Content */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                 <h3 className="text-2xl font-bold text-white">
//                                     {member.name}
//                                 </h3>
//                                 <p className="text-gray-300 text-lg mt-2 mb-6">
//                                     {member.role}
//                                 </p>
//                                 <div className="flex space-x-6">
//                                     <a
//                                         href={member.social.facebook}
//                                         className="text-white text-4xl hover:scale-110 transition-transform"
//                                     >
//                                         <FaFacebook />
//                                     </a>
//                                     <a
//                                         href={member.social.close}
//                                         className="text-white text-4xl hover:scale-110 transition-transform"
//                                     >
//                                         <FaTimes />
//                                     </a>
//                                     <a
//                                         href={member.social.instagram}
//                                         className="text-white text-4xl hover:scale-110 transition-transform"
//                                     >
//                                         <FaInstagram />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Team;
