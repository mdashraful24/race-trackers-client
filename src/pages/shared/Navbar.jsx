import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import siteLogo from "../../../src/assets/logo.png"
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

    // Links
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/marathonsPage">Marathons</NavLink></li>
            {user && (
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            )}
        </>
    );

    return (
        <div className="shadow-md">
            <div className="navbar container mx-auto">
                {/* Left: Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="md:text-2xl font-bold flex items-center gap-2"
                        >
                            <img src={siteLogo} alt="siteLogo" className="w-12" />
                            <p className="hidden md:block">RaceTrackers</p>
                        </a>
                    </div>
                </div>

                {/* Right: Auth Links */}
                <div className="navbar-end">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2 px-3">{links}</ul>
                    </div>
                    {user ? (
                        <div className="relative dropdown-container">
                            <img
                                className="rounded-full w-12 h-12 object-cover cursor-pointer border p-1 bg-white"
                                src={user?.photoURL || "https://via.placeholder.com/40"}
                                alt="User profile"
                                onClick={toggleDropdown}
                            />
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-28 shadow-lg z-10 bg-white rounded-lg">
                                    <ul>
                                        <li>
                                            <button
                                                className="block w-full py-2 rounded-lg bg-zinc-700 font-semibold text-white hover:bg-[#2d0c36]"
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
                        <div className="flex space-x-3">
                            <Link
                                to="/login"
                                className="btn btn-sm"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="btn btn-sm"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
                <div className="pl-2 md:pl-3">
                    <DarkLightTheme></DarkLightTheme>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
