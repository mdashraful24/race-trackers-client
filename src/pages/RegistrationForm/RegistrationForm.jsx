import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";

const RegistrationForm = () => {
    // Get the marathon ID from the URL
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [marathon, setMarathon] = useState(null);
    const [totalRegistrations, setTotalRegistrations] = useState(0);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const axiosSecure = UseAxiosSecure();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        number: "",
        additionalInfo: "",
    });

    // Fetch marathon data based on the marathon ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/allMarathons/${id}`, {
                    withCredentials: true,
                });
                setMarathon(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching marathon data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, number, additionalInfo } = formData;

        // Validate required fields
        if (!firstName || !lastName || !number || !additionalInfo) {
            toast.error("All fields are required!");
            return;
        }

        // Prepare the new registration object data
        const newRegistration = {
            firstName,
            lastName,
            title: marathon.title,
            number,
            additionalInfo,
            userEmail: user?.email,
            marathonStartDate: marathon.marathonStartDate,
        };

        // Send registration data to the server
        fetch("https://mw-assignments11-server.vercel.app/registrations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRegistration),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setTotalRegistrations((prevCount) => prevCount + 1);

                    Swal.fire({
                        title: "Success!",
                        text: "Registration added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    }).then(() => {
                        navigate("/dashboard/myApplyList");
                    });
                }
            });

        e.target.reset();
    };


    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    // Handle case where marathon data is not found
    if (!marathon) {
        return <p>Marathon not found!</p>;
    }

    const { title, marathonStartDate } = marathon;

    return (
        <div className="container mx-auto px-4 mt-10 md:mt-14 mb-20">
            {/* Helmet */}
            <Helmet>
                <title>Registration Form | RaceTrackers</title>
            </Helmet>

            <div className="max-w-3xl mx-auto p-5 md:p-8 shadow-lg rounded-lg border">
                <h2 className="text-3xl md:text-3xl font-bold text-center mb-6 md:mb-10">
                    Registration for "{title}"
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Email (auto-filled for logged-in users) */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    {/* Marathon Title (Read-only) */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Marathon Title</label>
                        <input
                            type="text"
                            value={title}
                            readOnly
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    {/* Marathon Start Date (Read-only) */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Start Date</label>
                        <input
                            type="text"
                            value={new Date(marathonStartDate).toLocaleDateString()}
                            className="w-full p-3 border rounded-lg"
                            readOnly
                        />
                    </div>
                    {/* First Name Input */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    {/* Last Name Input */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    {/* Contact Number Input */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Contact Number</label>
                        <input
                            type="text"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Contact Number"
                            required
                        />
                    </div>
                    {/* Additional Info Input */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Additional Info</label>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg resize-none"
                            placeholder="Additional Info"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-green-600 text-base text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-500"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
