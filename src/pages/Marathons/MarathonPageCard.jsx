import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';

const MarathonPageCard = ({ marathon }) => {
    return (
        <div className="card card-compact shadow-xl transition-transform duration-500 hover:-translate-y-2 group">
            <img
                src={marathon.marathonImage}
                alt={marathon.title}
                className="w-full md:h-[250px] lg:h-[300px] rounded-2xl p-2"
            />
            <div className="p-4 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{marathon.title}</h3>
                <div className="flex items-center gap-1 mb-2 font-semibold">
                    <span className="text-blue-600 text-lg">
                        <IoLocationSharp />
                    </span>
                    <p>{marathon.location}</p>
                </div>
                <p>
                    <span className='font-semibold'>Registration:</span> {new Date(marathon.startRegistrationDate).toLocaleDateString()} to{' '}
                    {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                </p>
                <Link
                    to={`/marathonDetails/${marathon._id}`}
                    className="btn mt-3 ml-auto shadow-md transition-colors duration-300 text-black group-hover:bg-purple-700 group-hover:text-white"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default MarathonPageCard;
