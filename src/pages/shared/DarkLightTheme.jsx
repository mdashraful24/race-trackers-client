import useTheme from "../../hooks/useTheme";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

export function DarkLightTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="top-8 rounded-full bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark hover:opacity-80 transition-opacity"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <MdWbSunny className="w-5 h-5 text-yellow-500" />
            ) : (
                <IoMoonSharp className="w-5 h-5" />
            )}
        </button>
    );
}

export default DarkLightTheme