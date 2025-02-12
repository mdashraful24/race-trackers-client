import { useNavigate } from 'react-router-dom';

const OurVision = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/marathonsPage');
    };

    return (
        <div className="container mx-auto mt-14 md:mb-20 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 text-justify">
                {/* vision */}
                <div>
                    <h2 className="text-2xl font-extrabold mb-3">
                        Our Vision
                    </h2>
                    <div className="mb-5 h-1 w-36 bg-[#591a6a]"></div>
                    <p className="text-lg">
                        At RaceTrackers, our vision is to build a global community of runners,
                        creating a platform where passion for fitness meets innovation. We aim to
                        inspire individuals of all skill levels to lead healthier lives by providing
                        the best tools and resources to support their fitness journey.
                    </p>
                </div>

                {/* mission */}
                <div>
                    <h2 className="text-2xl font-extrabold mb-3">
                        Our Mission
                    </h2>
                    <div className="mb-5 h-1 w-36 bg-[#591a6a]"></div>
                    <p className="text-lg">
                        Our mission is to empower every runner with the tools, resources, and
                        motivation to achieve their fitness goals. We are dedicated to delivering
                        cutting-edge technology, building supportive communities, and offering
                        exceptional events to ensure that every runner is equipped to succeed.
                    </p>
                </div>
            </div>

            <div className="my-16">
                <div className="flex justify-center">
                    <button
                        className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                        onClick={handleButtonClick}
                    >
                        Discover Our Programs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurVision;
