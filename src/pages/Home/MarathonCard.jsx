import { IoLocationSharp } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {
    const {
        _id,
        title,
        description,
        startRegistrationDate,
        marathonStartDate,
        location,
        marathonImage,
    } = marathon;

    return (
        <div
            className="card border-l border rounded-xl bg-cover bg-center bg-no-repeat h-full flex flex-col"
            style={{
                backgroundImage: `url(${marathonImage})`,
            }}
        >
            {/* Overlay for dark gradient effect */}
            <div className="bg-black bg-opacity-70 h-full w-full rounded-xl p-6 flex flex-col justify-between">
                {/* Card Content */}
                <div className="space-y-2 flex-grow">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">
                        {title}
                    </h2>
                    <p className="md:text-lg text-stone-100">
                        {description.length > 70
                            ? `${description.slice(0, 70)}...`
                            : description}
                    </p>
                    <div className="flex items-center gap-1 md:text-lg text-stone-100">
                        <IoLocationSharp className="text-purple-600 text-xl" />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-1 md:text-lg text-stone-100">
                        <MdAppRegistration />
                        <p>Registration End: {new Date(startRegistrationDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-1 md:text-lg text-stone-100">
                        <MdAppRegistration />
                        <p>Marathon Start: {new Date(marathonStartDate).toLocaleDateString()}</p>
                    </div>
                </div>
                {/* Button at the same position */}
                <div className="mt-5">
                    <Link
                        to={`/marathonDetails/${_id}`}
                        className="btn text-base text-white bg-purple-700 hover:bg-purple-800 border-none font-medium w-full transition-all duration-500"
                        // style={{
                        //     background: "linear-gradient(to right, #000066 0%, #660066 100%)",
                        // }}
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;
