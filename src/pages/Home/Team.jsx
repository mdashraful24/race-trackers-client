import React from "react";
import { FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Team = () => {
    const ourTeamMembers = [
        {
            id: 1,
            name: "Eric Doe",
            role: "Coaches",
            image: "https://i.ibb.co.com/YhkxPqd/coache3.png",
            social: {
                facebook: "#",
                instagram: "#",
                close: "#",
            },
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Fitness Trainer",
            image: "https://i.ibb.co.com/Kq7QD04/coache2.png",
            social: {
                facebook: "#",
                instagram: "#",
                close: "#",
            },
        },
        {
            id: 3,
            name: "Mike Johnson",
            role: "Yoga Instructor",
            image: "https://i.ibb.co.com/PNWq8B5/coache1.png",
            social: {
                facebook: "#",
                instagram: "#",
                close: "#",
            },
        },
    ];

    return (
        <div className="mt-10 mb-24">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-base font-bold text-center text-purple-700 mb-3">
                    Meet the Team
                </h2>
                <h2 className="text-2xl md:text-5xl font-extrabold text-center text-purple-800 mb-7">
                    Our Expert Coaches
                </h2>
                <div className="mb-16 h-1 w-36 bg-[#591a6a] mx-auto"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                    {ourTeamMembers.map((member, index) => (
                        <Fade
                            key={member.id}
                            direction="bottom"
                            delay={index * 200}
                            triggerOnce={true}
                        >
                            <div className="relative rounded-lg shadow-lg overflow-hidden group">
                                
                                {/* Image Section with Zoom Effect */}
                                <div className="overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
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
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
