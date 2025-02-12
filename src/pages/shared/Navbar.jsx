import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import siteLogo from "../../../src/assets/logo.png";
import DarkLightTheme from "./DarkLightTheme";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // Handle Sign Out
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("User signed out successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    // Dropdown Toggle
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close Dropdown on Click Outside
    const closeDropdown = (e) => {
        if (!e.target.closest(".dropdown-container")) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeDropdown);
        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, []);

    // Scroll to Home Section
    const scrollToHome = () => {
        navigate("/");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    // Links
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/marathonsPage">Marathons</NavLink></li>
            {user && (
                <li><NavLink to="/services">Services</NavLink></li>
            )}
            {user && (
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            )}
        </>
    );

    return (
        <div className="sticky top-0 shadow-lg py-2 z-50 dark:text-white bg-gradient-to-r from-purple-700 to-purple-800">
            <div className="navbar container mx-auto px-4">
                {/* Left: Logo */}
                <div className="navbar-start md:w-[30%]">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost md:hidden pl-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={scrollToHome}
                            className="md:text-2xl font-bold flex items-center gap-2"
                        >
                            <img src={siteLogo} alt="siteLogo" className="w-10 md:w-12" />
                            <p className="hidden md:block md:text-xl lg:text-3xl text-white cursor-pointer">RaceTrackers</p>
                        </button>
                    </div>
                </div>

                {/* Right: Auth Links */}
                <div className="navbar-end w-full">
                    <div className="hidden md:block lg:flex">
                        <ul className="menu menu-horizontal lg:text-base text-white flex-nowrap">{links}</ul>
                    </div>
                    {user ? (
                        <div className="relative dropdown-container pr-2">
                            <img
                                className="rounded-full w-9 md:w-11 h-9 md:h-11 object-cover cursor-pointer p-1 hover:bg-gray-300"
                                src={user?.photoURL || "https://via.placeholder.com/40"}
                                alt="User profile"
                                onClick={toggleDropdown}
                            />
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-28 shadow-lg z-10 bg-white rounded-lg">
                                    <ul>
                                        <li>
                                            <button
                                                className="block w-full py-2 rounded-md bg-zinc-800 font-semibold text-white hover:bg-red-700"
                                                onClick={handleSignOut}
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link
                                to="/login"
                                className="btn btn-sm bg-blue-500 text-white hover:text-black hover:dark:text-white border-none"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                    className="btn btn-sm mr-2 bg-green-500 text-white hover:text-black hover:dark:text-white border-none"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
                <div className="lg:pl-2 text-white">
                    <DarkLightTheme></DarkLightTheme>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
