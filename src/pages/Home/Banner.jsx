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
                        src={image1}
                        alt="Crowdfunding"
                        className="w-full h-[250px] md:h-[500px] lg:h-[750px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
                        <div>
                            <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
                                Essential Training Tips for Marathon Success
                            </h2>
                            <p className="text-white text-sm sm:text-lg md:w-4/5 lg:w-2/3 mx-auto">
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
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
                        <div>
                            <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
                                Must-Have Tips for Race Day Preparation
                            </h2>
                            <p className="text-white text-sm sm:text-lg md:w-4/5 lg:w-2/3 mx-auto">
                                Learn what to bring and how to prepare for a smooth race experience. From hydration to clothing, we’ve got you covered.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="relative">
                    <img
                        src={image3}
                        alt="Community"
                        className="w-full h-[250px] md:h-[500px] lg:h-[750px]"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4">
                        <div>
                            <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
                                Post-Race Recovery Strategies for Runners
                            </h2>
                            <p className="text-white text-sm sm:text-lg md:w-4/5 lg:w-2/3 mx-auto">
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