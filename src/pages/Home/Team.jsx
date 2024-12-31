import React from "react";
import { FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Eric Doe",
            role: "Coaches",
            image: "https://i.ibb.co.com/PNWq8B5/coache1.png",
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
            image: "https://i.ibb.co.com/YhkxPqd/coache3.png",
            social: {
                facebook: "#",
                instagram: "#",
                close: "#",
            },
        },
    ];

    return (
        <div className="py-16">
            <div className="container mx-auto text-center">
                <h3 className="text-lg uppercase">Team</h3>
                <h2 className="text-4xl font-bold mt-5">Our Coaches</h2>
                <div className="mt-2 mb-10 h-1 w-36 bg-lime-400 mx-auto"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="relative rounded-lg shadow-xl overflow-hidden group"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[500px]"
                            />
                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-xl font-semibold text-lime-400">
                                    {member.name}
                                </h3>
                                <p className="text-gray-300 mb-4">{member.role}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={member.social.facebook}
                                        className="text-lime-400 hover:text-white text-2xl"
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        href={member.social.close}
                                        className="text-lime-400 hover:text-white text-2xl"
                                    >
                                        <FaTimes />
                                    </a>
                                    <a
                                        href={member.social.instagram}
                                        className="text-lime-400 hover:text-white text-2xl"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
