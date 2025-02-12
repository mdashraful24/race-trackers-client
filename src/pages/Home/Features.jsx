import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();

    return (
        <section className="container mx-auto text-center mt-14 md:mt-24 px-6">
            {/* Title Section */}
            <div className="mb-8">
                <h2 className="text-base font-bold text-center mb-3">
                    Our Services
                </h2>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                    Elevate Your Experience
                </h2>
                <div className="mt-4 h-1 w-36 bg-[#591a6a] mx-auto"></div>
                {/* <div className="mt-4 h-1 w-16 bg-purple-700 mx-auto"></div> */}
            </div>

            {/* Description */}
            <p className="lg:w-2/3 mx-auto md:text-lg leading-relaxed">
                Unlock new opportunities with our specialized services, including <strong>Coaching Certification</strong>,
                <strong> Championship Events</strong>, and the<strong> National Convention</strong> etc. Whether you're looking to enhance
                your skills or connect with like-minded professionals, we provide the perfect platform to
                help you succeed.
            </p>

            {/* CTA Button */}
            <button
                onClick={() => navigate("/services")}
                className="mt-6 px-6 py-3 text-lg font-medium bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
            >
                Explore Services
            </button>
        </section>
    );
};

export default Features;
