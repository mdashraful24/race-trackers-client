import { useState, useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

const DarkLightTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const selectedByTheme = localStorage.getItem("selectedTheme");
        if (selectedByTheme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            setIsDarkTheme(true);
        } else {
            document.body.setAttribute("data-theme", "light");
            setIsDarkTheme(false);
        }
    }, []);

    const toggleTheThemes = () => {
        if (isDarkTheme) {
            // Light mode
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme", "light");
            setIsDarkTheme(false);
        } else {
            // Dark mode
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme", "dark");
            setIsDarkTheme(true);
        }
    };

    return (
        <div className="dark_mode">
            <button onClick={toggleTheThemes} className="text-lg md:text-xl rounded-full mt-1.5">
                {isDarkTheme ? <MdWbSunny className="text-yellow-500" /> : <IoMoonSharp />}
            </button>
        </div>
    );
};

export default DarkLightTheme;