import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Welcome = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="container mx-auto mt-14 mb-8 md:mt-28 px-4 text-center">
            <div data-aos="zoom-in" className="rounded-xl bg-gradient-to-r light:from-blue-50 light:to-indigo-50 px-2 py-5 md:p-10">
                <div>
                    <h1
                        className="text-2xl md:text-4xl text-black font-extrabold mb-4"
                    >
                        Welcome to Marathon Management!
                    </h1>

                    <p
                        className="md:w-4/5 lg:w-1/2 text-black mx-auto md:text-lg mb-8"
                    >
                        Join us and be a part of an unforgettable experience. Track your progress, register for marathons, and achieve your fitness goals with ease.
                    </p>
                </div>

                <div>
                    <Link
                        to="/register"
                        className="btn rounded-lg text-lg text-white font-semibold shadow-lg"
                        style={{
                            background: "linear-gradient(to right, #000066 0%, #660066 100%)",
                        }}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;


// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

// const Welcome = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000, once: true });
//     }, []);

//     return (
//         <div className="container mx-auto mt-14 mb-8 md:mt-28 px-4 text-center">
//             <div
//                 data-aos="zoom-in"
//                 className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 px-2 py-5 md:p-10 transition-all duration-500"
//             >
//                 <div>
//                     <h1
//                         className="text-2xl md:text-4xl text-black dark:text-white font-extrabold mb-4"
//                     >
//                         Welcome to Marathon Management!
//                     </h1>

//                     <p
//                         className="md:w-4/5 lg:w-1/2 text-black dark:text-gray-300 mx-auto md:text-lg mb-8"
//                     >
//                         Join us and be a part of an unforgettable experience. Track your progress, register for marathons, and achieve your fitness goals with ease.
//                     </p>
//                 </div>

//                 <div>
//                     <Link
//                         to="/register"
//                         className="btn rounded-lg text-lg text-white font-semibold shadow-lg transition-all duration-300"
//                         style={{
//                             background: "linear-gradient(to right, #000066 0%, #660066 100%)",
//                         }}
//                     >
//                         Get Started
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Welcome;
