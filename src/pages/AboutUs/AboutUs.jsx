import bg from '../../assets/bg.jpg';
import about from '../../assets/about.jpg';

const AboutUs = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat"
        // style={{
        //     backgroundImage: `url(${bg})`,
        //     backgroundAttachment: 'fixed',
        // }}
        >
            {/* Background Overlay for Dark Mode */}
            {/* <div className="absolute inset-0 light:bg-white light:bg-opacity-50 dark:bg-black dark:bg-opacity-70"></div> */}

            <div className="relative container mx-auto px-4 pt-8 pb-10 md:pb-10 lg:pb-20">
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-5">
                    About Us
                </h2>

                {/* Border */}
                <div className="mb-10 md:mb-14 h-1 w-36 bg-[#591a6a] mx-auto"></div>

                <div className="flex items-center justify-center container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Left Image */}
                        <div className="transform transition duration-500 ease-in-out hover:scale-105">
                            <img
                                src={about}
                                alt="About Us"
                                className="lg:max-w-xl h-auto rounded-xl shadow-xl object-cover hover:shadow-2xl"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="flex flex-col text-justify">
                            <h2 className="text-base font-bold mb-3">
                                Welcome To RaceTrackers
                            </h2>
                            <h2 className="text-xl md:text-3xl font-bold mb-5">
                                We Are The Best Running Club Since 2022
                            </h2>
                            <div className="mb-5 h-1 w-36 bg-[#591a6a]"></div>

                            <p className="text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 mb-3">
                                Founded in 2022, <strong>RaceTrackers</strong> is more than just a running club – it's a passionate community of runners, athletes, and fitness enthusiasts who share a love for the sport. Whether you're a beginner looking to start your running journey or an experienced marathoner pushing for new personal bests, we provide a supportive and inspiring environment for everyone.
                            </p>
                            <p className="text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 mb-3">
                                At RaceTrackers, we organize marathons, group training sessions, and fitness events to help runners stay motivated and achieve their goals. Our club emphasizes discipline, endurance, and camaraderie, ensuring that every member experiences the true essence of running.
                            </p>
                            {/* <h3 className="text-2xl font-bold mb-3">Why Join RaceTrackers?</h3>
                            <ul>
                                <li>🏃‍♂️ Expert Guidance & Training Programs</li>
                                <li>🌍 Community-Driven Events & Races</li>
                                <li>💪 Motivation & Support for All Levels</li>
                                <li>🏅 Exclusive Membership Benefits & Challenges</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
