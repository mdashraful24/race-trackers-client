import { IoLocationSharp } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {
    const {
        _id,
        title,
        startRegistrationDate,
        marathonStartDate,
        location,
        marathonImage,
    } = marathon;

    return (
        <div
            className="card border-l border-r rounded-xl bg-cover bg-center bg-no-repeat h-60"
            style={{
                backgroundImage: `url(${marathonImage})`,
            }}
        >
            {/* Overlay for dark gradient effect */}
            <div className="bg-black bg-opacity-70 h-full w-full rounded-xl p-6">
                {/* Card Content */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-white">
                        {title}
                    </h2>
                    <div className="flex items-center gap-1 text-white">
                        <IoLocationSharp />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                        <MdAppRegistration />
                        <p>Registration End: {new Date(startRegistrationDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                        <MdAppRegistration />
                        <p>Marathon Start: {new Date(marathonStartDate).toLocaleDateString()}</p>
                    </div>
                </div>
                {/* Button */}
                <div className="mt-5">
                    <Link
                        to={`/marathonDetails/${_id}`}
                        className="btn text-base text-white border-none font-medium w-full transition-all duration-500"
                        style={{
                            background: "linear-gradient(to right, #000066 0%, #660066 100%)",
                        }}
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;
