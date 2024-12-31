import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, marathonStartDate } = useLoaderData();
    const [totalRegistrations, setTotalRegistrations] = useState(0); // State for total registrations
    const navigate = useNavigate(); // Hook for navigation

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const form = e.target;
    //     const firstName = form.firstName.value;
    //     const lastName = form.lastName.value;
    //     const number = form.number.value;
    //     const additionalInfo = form.additionalInfo.value;

    //     const newRegistration = {
    //         firstName,
    //         lastName,
    //         title,
    //         number,
    //         additionalInfo,
    //         userEmail: user?.email,
    //     };

    //     if (!firstName || !lastName || !title || !number || !additionalInfo) {
    //         toast.error("All fields are required!");
    //         return;
    //     }

    //     fetch("http://localhost:5000/registrations", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newRegistration),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.insertedId) {
    //                 // Update the total registration count in the state
    //                 setTotalRegistrations(prevCount => prevCount + 1);

    //                 Swal.fire({
    //                     title: "Success!",
    //                     text: "Registration added successfully",
    //                     icon: "success",
    //                     confirmButtonText: "Cool",
    //                 }).then(() => {
    //                     // Redirect to a specific page after success
    //                     navigate("/dashboard/myApplyList");
    //                 });
    //             }
    //         });

    //     form.reset();
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const number = form.number.value;
        const additionalInfo = form.additionalInfo.value;

        const newRegistration = {
            firstName,
            lastName,
            title,
            number,
            additionalInfo,
            userEmail: user?.email,
            marathonStartDate
        };

        if (!firstName || !lastName || !title || !number || !additionalInfo) {
            toast.error("All fields are required!");
            return;
        }

        fetch("http://localhost:5000/registrations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRegistration),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setTotalRegistrations(prevCount => prevCount + 1);

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

        form.reset();
    };

    return (
        <div className="px-3 mt-10 md:mt-14 mb-20">
            <div className="max-w-3xl mx-auto p-5 md:p-8 shadow-lg rounded-lg border">
                <Helmet>
                    <title>|</title>
                </Helmet>

                <h2 className="text-3xl md:text-3xl font-bold text-center mb-6 md:mb-10">Registration for "{title}"</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Marathon Title</label>
                        <input
                            type="text"
                            value={title}
                            readOnly
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Start Date</label>
                        <input
                            type="text"
                            value={new Date(marathonStartDate).toLocaleDateString()}
                            className="w-full p-3 border rounded-lg"
                            readOnly
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="w-full p-3 border rounded-lg"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-full p-3 border rounded-lg"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Contact Number</label>
                        <input
                            type="text"
                            name="number"
                            className="w-full p-3 border rounded-lg"
                            placeholder="Contact Number"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Additional Info</label>
                        <textarea
                            name="additionalInfo"
                            className="w-full p-3 border rounded-lg resize-none"
                            placeholder="Additional Info"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn w-full bg-green-600 text-base text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-500"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
