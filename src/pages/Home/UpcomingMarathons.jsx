import React from "react";

const UpcomingMarathons = () => {
    const marathons = [
        {
            id: 1,
            title: "City Marathon 2024",
            date: "Jan 15, 2024",
            location: "New York, USA",
        },
        {
            id: 2,
            title: "Spring Run 2024",
            date: "Mar 10, 2024",
            location: "London, UK",
        },
        {
            id: 3,
            title: "Desert Dash 2024",
            date: "Feb 22, 2024",
            location: "Dubai, UAE",
        },
        {
            id: 4,
            title: "Beachside Sprint",
            date: "Apr 5, 2024",
            location: "Sydney, Australia",
        },
        {
            id: 5,
            title: "Mountain Trek Marathon",
            date: "May 20, 2024",
            location: "Kathmandu, Nepal",
        },
        {
            id: 6,
            title: "Night Glow Run",
            date: "Jun 15, 2024",
            location: "Tokyo, Japan",
        },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto px-5">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#591a6a] mb-8">
                    Upcoming Marathons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marathons.map((marathon) => (
                        <div
                            key={marathon.id}
                            className="bg-white shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-semibold text-[#2d0c36] mb-2">
                                {marathon.title}
                            </h3>
                            <p className="text-gray-600">
                                <span className="font-bold">Date:</span> {marathon.date}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-bold">Location:</span> {marathon.location}
                            </p>
                            <button className="mt-4 btn btn-sm bg-[#591a6a] text-white hover:bg-[#3f084d]">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingMarathons;
