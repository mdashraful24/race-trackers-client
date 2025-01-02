import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMarathons = () => {
    const { user } = useContext(AuthContext);
    const [startRegistrationDate, setStartRegistrationDate] = useState(null);
    const [endRegistrationDate, setEndRegistrationDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);

    // Handle Form
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const location = form.location.value;
        const runningDistance = form.runningDistance.value;
        const description = form.description.value;
        const marathonImage = form.marathonImage.value;
        const createdAt = new Date();
        const totalRegistrationCount = 0;

        // Proses new object data
        const newMarathon = {
            title,
            startRegistrationDate,
            endRegistrationDate,
            marathonStartDate,
            location,
            runningDistance,
            description,
            marathonImage,
            createdAt,
            totalRegistrationCount,
            userEmail: user?.email,
            userName: user?.displayName,
        };

        // Validation
        if (!title || !startRegistrationDate || !endRegistrationDate || !marathonStartDate || !location || !runningDistance || !description || !marathonImage) {
            toast.error("All fields are required!");
            return;
        }

        if (startRegistrationDate >= endRegistrationDate) {
            toast.error("Start registration date must be before end registration date.");
            return;
        }

        if (endRegistrationDate >= marathonStartDate) {
            toast.error("End registration date must be before the marathon start date.");
            return;
        }

        try {
            new URL(marathonImage);
        } catch {
            toast.error("Invalid image URL!");
            return;
        }

        // Post to Server
        // fetch("http://localhost:5000/addMarathons", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newMarathon),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Success!",
        //                 text: "Marathon added successfully",
        //                 icon: "success",
        //                 confirmButtonText: "Cool",
        //             });
        //         }
        //     });

        fetch("http://localhost:5000/addMarathons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMarathon),
            credentials: "include",  // Include cookies/credentials with the request
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Marathon added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            })
            .catch((error) => {
                console.error("Error adding marathon:", error);
            });


        // Reset form
        form.reset();
        setStartRegistrationDate(null);
        setEndRegistrationDate(null);
        setMarathonStartDate(null);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-80">
            {/* Helmet */}
            <Helmet>
                <title>Add Marathons | RaceTrackers</title>
            </Helmet>

            <form onSubmit={handleSubmit} className="border rounded-xl px-6 py-4">

                {/* Marathon Title */}
                <div className="form-group mb-4">
                    <label className="block mb-2">Marathon Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter marathon title"
                        required
                    />
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    {/* Start Registration Date */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Start Registration Date</label>
                        <DatePicker
                            selected={startRegistrationDate}
                            onChange={(date) => setStartRegistrationDate(date)}
                            className="w-full p-3 border rounded-lg"
                            placeholderText="Start registration date"
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </div>

                    {/* End Registration Date */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">End Registration Date</label>
                        <DatePicker
                            selected={endRegistrationDate}
                            onChange={(date) => setEndRegistrationDate(date)}
                            className="w-full p-3 border rounded-lg"
                            placeholderText="End registration date"
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </div>

                    {/* Marathon Start Date */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="w-full p-3 border rounded-lg"
                            placeholderText="Marathon start date"
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="form-group mb-4">
                    <label className="block mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter location"
                        required
                    />
                </div>

                {/* Running Distance */}
                <div className="form-group mb-4">
                    <label className="block mb-2">Running Distance</label>
                    <select
                        name="runningDistance"
                        className="w-full p-3 border rounded-lg"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            Select a distance
                        </option>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-group mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        name="description"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter description"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Marathon Image */}
                <div className="form-group mb-4">
                    <label className="block mb-2">Marathon Image (URL)</label>
                    <input
                        type="text"
                        name="marathonImage"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* User Email */}
                <div className="form-group mb-4">
                    <label className="block mb-2">User Email</label>
                    <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full p-3 border rounded-lg cursor-not-allowed"
                    />
                </div>

                {/* User Name */}
                <div className="form-group mb-6">
                    <label className="block mb-2">User Name</label>
                    <input
                        type="text"
                        value={user?.displayName || ""}
                        readOnly
                        className="w-full p-3 border rounded-lg cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn w-full bg-green-600 text-base text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-500"
                >
                    Submit Marathon
                </button>
            </form>
        </div>
    );
};

export default AddMarathons;





{/* <div className="mb-4">
    <label className="block text-sm font-medium">Marathon Image</label>
    Marathon Image
    <div className="form-group mb-4">
        <label className="block mb-2">Marathon Image (URL)</label>
        <input
            type="file"
            className="file-input file-input-bordered w-full"
            type="text"
            name="marathonImage"
            className="w-full p-3 border rounded-lg"
            placeholder="Enter image URL"
            required
            onChange={(e) => setImage(e.target.files[0])}
        />
    </div>
</div> */}