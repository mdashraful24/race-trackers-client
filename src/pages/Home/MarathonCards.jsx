import { useEffect } from "react";
import { useState } from "react";
import MarathonCard from "./MarathonCard";

const MarathonCards = () => {

    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/marathons')
            .then(res => res.json())
            .then(data => {
                setMarathons(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    }, []);


    // Show spinner
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-20 mb-14 px-2">
            <h2 className="text-base font-bold text-center text-purple-700 mb-3">
                Welcome To RaceTrackers
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-purple-800 mb-5">Marathon Programs</h2>
            <div className="mb-10 h-1 w-36 bg-[#591a6a] mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                }
            </div>
        </div>
    );
};

export default MarathonCards;