import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {

    const { _id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, marathonImage, totalRegistrationCount } = marathon;


    return (
        <div className="card shadow-md p-4 rounded-md">
            {/* Placeholder Image */}
            <figure className="mb-4">
                {/* <div className="bg-gray-300 h-32 w-full rounded-md"></div> */}
                <img className="h-[300px] w-full rounded-md" src={marathonImage} alt="" />
            </figure>
            {/* Card Body */}
            <div className="card-body p-0">
                {/* Product Name */}
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                {/* Price */}
                <p className="text-gray-600">{location}</p>
                <p className="text-gray-600">{startRegistrationDate}</p>
                <p className="text-gray-600">{endRegistrationDate}</p>
                {/* Button */}
                <div className="mt-4">
                    <Link to={`/marathons/${_id}`} className="btn btn-outline btn-primary w-full rounded-full">
                        View Details
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default MarathonCard;