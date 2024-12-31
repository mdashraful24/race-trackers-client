import { FaUsers } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const MarathonsDetails = () => {
    const {_id,
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

    const navigate = useNavigate();

    // Check if registration is open
    const isRegistrationOpen =
        new Date() >= new Date(startRegistrationDate) &&
        new Date() <= new Date(endRegistrationDate);

    // const handleRegister = () => {
    //     navigate("/register"); // Navigate to the registration page
    // };

    return (
        <div className="container mx-auto p-6">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={marathonImage}
                    alt={title}
                    className="w-full"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center text-lime-600 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-600 mb-6 text-justify">Description: {description}</p>

                    {/* Details Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">📍 Location:</p>
                            <p className="text-gray-700">{location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">📅 Start Registration:</p>
                            <p className="text-gray-700">
                                {new Date(startRegistrationDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">📅 End Registration:</p>
                            <p className="text-gray-700">
                                {new Date(endRegistrationDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">🏃 Marathon Start Date:</p>
                            <p className="text-gray-700">
                                {new Date(marathonStartDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">🏅 Running Distance:</p>
                            <p className="text-gray-700">{runningDistance}</p>
                        </div>
                        {/* Total Registration Count */}
                        <div className="flex items-center gap-2">
                            <FaUsers className="text-blue-500" />
                            <p className="text-lg font-semibold">Total Registration Count: </p>
                            <p>{totalRegistrationCount}</p>
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="mt-6 text-center">
                        <Link to={`/registrationForm/${_id}`}
                            // onClick={handleRegister}
                            disabled={!isRegistrationOpen}
                            className={`btn btn-primary ${isRegistrationOpen ? "" : "btn-disabled"
                                }`}
                        >
                            {isRegistrationOpen ? "Register Now" : "Registration Closed"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonsDetails;
