import React, { useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMarathons = () => {
    const [title, setTitle] = useState("");
    const [startRegistrationDate, setStartRegistrationDate] = useState(null);
    const [endRegistrationDate, setEndRegistrationDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [createdAt] = useState(new Date());
    const [totalRegistrationCount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!title || !startRegistrationDate || !endRegistrationDate || !marathonStartDate || !location || !description || !image) {
            toast.error("Please fill all fields.");
            return;
        }

        const marathonData = {
            title,
            startRegistrationDate,
            endRegistrationDate,
            marathonStartDate,
            location,
            distance,
            description,
            image,
            createdAt,
            totalRegistrationCount,
        };

        // Save the marathon data to the database
        try {
            // Replace this with your database storage logic
            // Example: await saveMarathonToDatabase(marathonData);
            toast.success("Marathon created successfully!");
        } catch (error) {
            toast.error("Error creating marathon. Please try again.");
        }
    };

    return (
        <div className="container mx-auto px-5 py-3 border rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Create a Marathon Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Marathon Title</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Start Registration Date</label>
                    <DatePicker
                        selected={startRegistrationDate}
                        onChange={(date) => setStartRegistrationDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="input input-bordered w-full"
                        placeholderText="Select start registration date"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">End Registration Date</label>
                    <DatePicker
                        selected={endRegistrationDate}
                        onChange={(date) => setEndRegistrationDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="input input-bordered w-full"
                        placeholderText="Select end registration date"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Marathon Start Date</label>
                    <DatePicker
                        selected={marathonStartDate}
                        onChange={(date) => setMarathonStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="input input-bordered w-full"
                        placeholderText="Select marathon start date"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Location</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Running Distance</label>
                    <select
                        className="input input-bordered w-full"
                        defaultValue=""
                        required
                        onChange={(e) => setDistance(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Distance
                        </option>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Marathon Image</label>
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>

                <div className="mb-4">
                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathons;