import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../src/assets/slide1.jpg'
import image2 from '../../../src/assets/slide2.jpg'
import image3 from '../../../src/assets/slide3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                dynamicHeight={false}
                swipeable
                emulateTouch
                interval={3000}
                transitionTime={500}
                stopOnHover
                renderArrowPrev={(clickHandler) => (
                    <button
                        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 hidden lg:block"
                        onClick={clickHandler}
                    >
                        &lt;
                    </button>
                )}
                renderArrowNext={(clickHandler) => (
                    <button
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 hidden lg:block"
                        onClick={clickHandler}
                    >
                        &gt;
                    </button>
                )}
            >
                {/* Slide 1 */}
                <div className="relative">
                    <img
                        src={image3}
                        alt="Crowdfunding"
                        className="w-full h-[250px] md:h-[500px] lg:h-[750px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center text-center px-4">
                        <div>
                            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                Essential Training Tips for Marathon Success
                            </h2>
                            <p className="text-white text-sm md:text-lg md:w-4/5 lg:w-2/3 mx-auto">
                                Get ready for race day with our expert training advice. Build endurance and strength to ensure you perform your best.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="relative">
                    <img
                        src={image2}
                        alt="Community"
                        className="w-full h-[250px] md:h-[500px] lg:h-[750px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center text-center px-4">
                        <div>
                            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                Must-Have Tips for Race Day Preparation
                            </h2>
                            <p className="text-white text-sm md:text-lg md:w-4/5 lg:w-2/3 mx-auto">
                                Learn what to bring and how to prepare for a smooth race experience. From hydration to clothing, we’ve got you covered.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="relative">
                    <img
                        src={image1}
                        alt="Community"
                        className="w-full h-[250px] md:h-[500px] lg:h-[750px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center text-center px-4">
                        <div>
                            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                Post-Race Recovery Strategies for Runners
                            </h2>
                            <p className="text-white text-sm md:text-lg md:w-4/5 lg:w-2/3 mx-auto">
                                Recover effectively after your marathon with our recovery tips. Focus on nutrition and stretching to aid in muscle recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;









// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import image1 from '../../../src/assets/slide1.jpg';
// import image2 from '../../../src/assets/slide2.jpg';
// import image3 from '../../../src/assets/slide3.jpg';

// const Banner = () => {
//     return (
//         <div>
//             <Carousel
//                 infiniteLoop
//                 useKeyboardArrows
//                 autoPlay
//                 showThumbs={false}
//                 showStatus={false}
//                 showIndicators={true}
//                 dynamicHeight={false}
//                 swipeable
//                 emulateTouch
//                 interval={3000}
//                 transitionTime={500}
//                 stopOnHover
//                 renderArrowPrev={(clickHandler) => (
//                     <button
//                         className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 hidden lg:block"
//                         onClick={clickHandler}
//                     >
//                         &lt;
//                     </button>
//                 )}
//                 renderArrowNext={(clickHandler) => (
//                     <button
//                         className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 hidden lg:block"
//                         onClick={clickHandler}
//                     >
//                         &gt;
//                     </button>
//                 )}
//             >
//                 {/* Slide 1 - Top Left */}
//                 <div className="relative">
//                     <img src={image1} alt="Crowdfunding" className="w-full h-[250px] md:h-[500px] lg:h-[750px]" />
//                     <div className="absolute top-10 left-10 bg-black/80 p-6 rounded-lg max-w-md shadow-lg">
//                         <h2 className="text-lg font-bold text-white">
//                             Essential Training Tips for Marathon Success
//                         </h2>
//                         <p className="text-white text-sm mt-2">
//                             Get ready for race day with expert training advice. Build endurance and strength to perform your best.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Slide 2 - Center */}
//                 <div className="relative">
//                     <img src={image2} alt="Community" className="w-full h-[250px] md:h-[500px] lg:h-[750px]" />
//                     <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//                         <div className="bg-black/60 p-6 rounded-lg shadow-lg max-w-lg">
//                             <h2 className="text-2xl md:text-4xl font-bold text-white">
//                                 Must-Have Tips for Race Day Preparation
//                             </h2>
//                             <p className="text-white text-sm md:text-lg mt-2">
//                                 Learn what to bring and how to prepare for a smooth race experience. Hydration, clothing, and more!
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Slide 3 - Bottom Right */}
//                 <div className="relative">
//                     <img src={image3} alt="Community" className="w-full h-[250px] md:h-[500px] lg:h-[750px]" />
//                     <div className="absolute bottom-10 right-10 bg-black/60 p-6 rounded-lg max-w-md shadow-lg">
//                         <h2 className="text-2xl md:text-4xl font-bold text-white">
//                             Post-Race Recovery Strategies for Runners
//                         </h2>
//                         <p className="text-white text-sm md:text-lg mt-2">
//                             Recover effectively with our expert recovery tips. Focus on nutrition and stretching for faster recovery.
//                         </p>
//                     </div>
//                 </div>
//             </Carousel>
//         </div>
//     );
// };

// export default Banner;





// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import image1 from '../../../src/assets/slide1.jpg';
// import image2 from '../../../src/assets/slide2.jpg';
// import image3 from '../../../src/assets/slide3.jpg';

// const Banner = () => {
//     return (
//         <div>
//             <Carousel
//                 infiniteLoop
//                 useKeyboardArrows
//                 autoPlay
//                 showThumbs={false}
//                 showStatus={false}
//                 showIndicators={true}
//                 dynamicHeight={false}
//                 swipeable
//                 emulateTouch
//                 interval={3000}
//                 transitionTime={500}
//                 stopOnHover
//                 renderArrowPrev={(clickHandler) => (
//                     <button
//                         className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 hidden lg:block"
//                         onClick={clickHandler}
//                     >
//                         &lt;
//                     </button>
//                 )}
//                 renderArrowNext={(clickHandler) => (
//                     <button
//                         className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 hidden lg:block"
//                         onClick={clickHandler}
//                     >
//                         &gt;
//                     </button>
//                 )}
//             >
//                 {/* Slide 1 */}
//                 <div className="relative">
//                     <img src={image1} alt="Crowdfunding" className="w-full h-[250px] md:h-[500px] lg:h-[750px]" />
//                     <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//                         <div className="bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 p-6 rounded-lg shadow-lg max-w-lg">
//                             <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
//                                 Essential Training Tips for Marathon Success
//                             </h2>
//                             <p className="text-white text-sm sm:text-lg">
//                                 Get ready for race day with our expert training advice. Build endurance and strength to ensure you perform your best.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Slide 2 */}
//                 <div className="relative">
//                     <img src={image2} alt="Community" className="w-full h-[250px] md:h-[500px] lg:h-[750px]" />
//                     <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//                         <div className="bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 p-6 rounded-lg shadow-lg max-w-lg">
//                             <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
//                                 Must-Have Tips for Race Day Preparation
//                             </h2>
//                             <p className="text-white text-sm sm:text-lg">
//                                 Learn what to bring and how to prepare for a smooth race experience. From hydration to clothing, we’ve got you covered.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Slide 3 */}
//                 <div className="relative">
//                     <img src={image3} alt="Community" className="w-full h-[250px] md:h-[500px] lg:h-[750px]" />
//                     <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//                         <div className="bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 p-6 rounded-lg shadow-lg max-w-lg">
//                             <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
//                                 Post-Race Recovery Strategies for Runners
//                             </h2>
//                             <p className="text-white text-sm sm:text-lg">
//                                 Recover effectively after your marathon with our recovery tips. Focus on nutrition and stretching to aid in muscle recovery.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </Carousel>
//         </div>
//     );
// };

// export default Banner;