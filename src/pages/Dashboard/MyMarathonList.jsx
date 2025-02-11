import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const MyMarathonList = () => {
    const { user } = useContext(AuthContext);
    const [myCampaigns, setMyCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCampaign, setCurrentCampaign] = useState(null);
    const axiosSecure = UseAxiosSecure();

    const [formData, setFormData] = useState({
        title: "",
        startRegistrationDate: "",
        endRegistrationDate: "",
        marathonStartDate: "",
        location: "",
        runningDistance: "",
        description: "",
        marathonImage: "",
    });

    useEffect(() => {
        axiosSecure.get("/newMarathons")
            .then((response) => {
                const userCampaigns = response.data.filter(campaign => campaign.userEmail === user.email);
                setMyCampaigns(userCampaigns);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    }, [user.email]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://mw-assignments11-server.vercel.app/marathonPage/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added marathon has been deleted.",
                                icon: "success",
                            });
                            const remaining = myCampaigns.filter(myCam => myCam._id !== _id);
                            setMyCampaigns(remaining);
                        }
                    });
            }
        });
    };

    const handleUpdate = (campaign) => {
        setCurrentCampaign(campaign);
        setFormData({
            title: campaign.title,
            startRegistrationDate: formatDate(campaign.startRegistrationDate),
            endRegistrationDate: formatDate(campaign.endRegistrationDate),
            marathonStartDate: formatDate(campaign.marathonStartDate),
            location: campaign.location,
            runningDistance: campaign.runningDistance,
            description: campaign.description,
            marathonImage: campaign.marathonImage,
        });
        setIsModalOpen(true);
    };

    // Function to format date to yyyy-mm-dd
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Handle Form Changes
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://mw-assignments11-server.vercel.app/marathonPage/${currentCampaign._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your add marathon has been updated.",
                        icon: "success",
                    });
                    const updatedCampaigns = myCampaigns.map((campaign) =>
                        campaign._id === currentCampaign._id ? { ...campaign, ...formData } : campaign
                    );
                    setMyCampaigns(updatedCampaigns);
                    setIsModalOpen(false);
                }
            })
            .catch((error) => {
                console.error("Error updating campaign:", error);
            });
    };

    // Useful Loading
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 min-h-80">
            {/* Helmet */}
            <Helmet>
                <title>My Marathon List | RaceTrackers</title>
            </Helmet>

            {/* Marathons List */}
            {myCampaigns.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-400 shadow-lg">
                        <thead>
                            <tr className="border-b border-gray-400 uppercase tracking-wider">
                                <th className="p-4 text-center">No.</th>
                                <th className="p-4 text-center">Title</th>
                                <th className="p-4 text-center">Reg. Start</th>
                                <th className="p-4 text-center">Reg. End</th>
                                <th className="p-4 text-center">Marathon Start</th>
                                <th className="p-4 text-center">Location</th>
                                <th className="p-4 text-center">Distance</th>
                                <th className="p-4 text-center">User Mail</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCampaigns.map((myCampaign, index) => (
                                <tr key={myCampaign._id} className="border-b border-gray-400 hover:bg-stone-100 hover:text-slate-900">
                                    <td className="px-6 py-4 text-center">{index + 1}</td>
                                    <td className="p-4 text-center">{myCampaign.title}</td>
                                    <td className="p-4 text-center">{new Date(myCampaign.startRegistrationDate).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">{new Date(myCampaign.endRegistrationDate).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">{new Date(myCampaign.marathonStartDate).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">{myCampaign.location}</td>
                                    <td className="p-4 text-center">{myCampaign.runningDistance}</td>
                                    <td className="p-4 text-center">{myCampaign.userEmail}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex flex-row justify-center items-center gap-3">
                                            <button
                                                className="px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 hover:scale-105 transition-all duration-300"
                                                style={{ background: "linear-gradient(to right, #000066 0%, #660066 100%)" }}
                                                onClick={() => handleUpdate(myCampaign)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300"
                                                onClick={() => handleDelete(myCampaign._id)}
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

            {/* Modal for Updating Marathon List */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-black text-xl font-bold mb-4">Update Campaign</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-black text-sm font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="startRegistrationDate" className="block text-black text-sm font-medium mb-1">Start Registration</label>
                                <input
                                    type="date"
                                    id="startRegistrationDate"
                                    name="startRegistrationDate"
                                    value={formData.startRegistrationDate}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="endRegistrationDate" className="block text-black text-sm font-medium mb-1">End Registration</label>
                                <input
                                    type="date"
                                    id="endRegistrationDate"
                                    name="endRegistrationDate"
                                    value={formData.endRegistrationDate}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="marathonStartDate" className="block text-black text-sm font-medium mb-1">Marathon Start Date</label>
                                <input
                                    type="date"
                                    id="marathonStartDate"
                                    name="marathonStartDate"
                                    value={formData.marathonStartDate}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-black text-sm font-medium mb-1">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="runningDistance" className="block text-black text-sm font-medium mb-1">Running Distance</label>
                                <input
                                    type="text"
                                    id="runningDistance"
                                    name="runningDistance"
                                    value={formData.runningDistance}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-black text-sm font-medium mb-1">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="marathonImage" className="block text-black text-sm font-medium mb-1">Marathon Image URL</label>
                                <input
                                    type="text"
                                    id="marathonImage"
                                    name="marathonImage"
                                    value={formData.marathonImage}
                                    onChange={handleFormChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex gap-3 justify-between">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-200 hover:bg-red-500 text-black font-medium rounded-md"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyMarathonList;
