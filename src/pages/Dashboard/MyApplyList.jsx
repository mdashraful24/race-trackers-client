import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const MyApplyList = () => {
    const { user } = useContext(AuthContext);
    const [applyingRace, setApplyingRace] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedRace, setSelectedRace] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/myApplyList?title=${searchQuery}`)
            .then((response) => {
                const filterData = response.data.filter(run => run.userEmail === user.email);
                setApplyingRace(filterData);
                // setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                // setLoading(false);
            });
    }, [user.email, searchQuery]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/myApplyList/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your campaign has been deleted.",
                                    icon: "success"
                                });
                                const remaining = applyingRace.filter(myRace => myRace._id !== _id);
                                setApplyingRace(remaining);
                            }
                        });
                }
            })
    };

    const handleUpdateClick = (race) => {
        setSelectedRace(race);
        setShowModal(true);
    };

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        const updatedData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            number: event.target.number.value,
            additionalInfo: event.target.additionalInfo.value,
        };

        fetch(`http://localhost:5000/myApplyList/${selectedRace._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your registration details have been updated.",
                        icon: "success"
                    });
                    const updatedRace = applyingRace.map((race) =>
                        race._id === selectedRace._id ? { ...race, ...updatedData } : race
                    );
                    setApplyingRace(updatedRace);
                    setShowModal(false);
                }
            })
            .catch((error) => {
                console.error("Error updating registration:", error);
            });
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center min-h-screen">
    //             <span className="loading loading-bars loading-lg"></span>
    //         </div>
    //     );
    // }

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 min-h-80">
            {/* Helmet */}
            <Helmet>
                <title>My Apply List | RaceTrackers</title>
            </Helmet>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by marathon event title"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Apply List */}
            {applyingRace.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-400 shadow-lg">
                        <thead>
                            <tr className="border-b border-gray-400 uppercase tracking-wider">
                                <th className="p-4 text-center">No.</th>
                                <th className="p-4 text-center">First Name</th>
                                <th className="p-4 text-center">Last Name</th>
                                <th className="p-4 text-center">Title</th>
                                <th className="p-4 text-center">Marathon Start</th>
                                <th className="p-4 text-center">Number</th>
                                <th className="p-4 text-center">Additional Info</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applyingRace?.map((race, index) => (
                                <tr key={race._id} className="border-b border-gray-400 hover:bg-stone-100 hover:text-slate-900">
                                    <td className="px-6 py-4 text-center">{index + 1}</td>
                                    <td className="p-4 text-center">{race.firstName}</td>
                                    <td className="p-4 text-center capitalize">{race.lastName}</td>
                                    <td className="p-4 text-center">{race.title}</td>
                                    <td className="p-4 text-center">{new Date(race.marathonStartDate).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">{race.number}</td>
                                    <td className="p-4 text-center">{race.additionalInfo}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex flex-row justify-center items-center gap-3">
                                            <button
                                                className="px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 hover:scale-105 transition-all duration-300"
                                                style={{ background: "linear-gradient(to right, #000066 0%, #660066 100%)" }}
                                                onClick={() => handleUpdateClick(race)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300"
                                                onClick={() => handleDelete(race._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-600">You have no marathons yet.</p>
            )}

            {/* Modal for Updating Registration List  */}
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 md:w-1/2 lg:w-1/3 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-center text-black text-xl font-bold mb-4">Update Registration</h3>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-black text-sm font-medium mb-1">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-black text-sm font-medium mb-1">Marathon Title</label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={selectedRace?.title}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="startDate" className="block text-black text-sm font-medium mb-1">Marathon Start Date</label>
                                <input
                                    id="startDate"
                                    name="startDate"
                                    type="text"
                                    value={new Date(selectedRace?.marathonStartDate).toLocaleDateString()}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-black text-sm font-medium mb-1">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    defaultValue={selectedRace?.firstName}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-black text-sm font-medium mb-1">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    defaultValue={selectedRace?.lastName}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="number" className="block text-black text-sm font-medium mb-1">Contact Number</label>
                                <input
                                    id="number"
                                    name="number"
                                    type="text"
                                    defaultValue={selectedRace?.number}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="additionalInfo" className="block text-black text-sm font-medium mb-1">Additional Info</label>
                                <input
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    type="text"
                                    defaultValue={selectedRace?.additionalInfo}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-red-200 hover:bg-red-500 text-black font-medium rounded-md"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyApplyList;
