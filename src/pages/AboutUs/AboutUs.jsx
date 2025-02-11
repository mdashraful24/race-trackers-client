import bg from '../../assets/bg.jpg';
import about from '../../assets/about.jpg';

const AboutUs = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="container mx-auto px-4 pt-12 pb-20 text-black">
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-5">
                    About Us
                </h2>

                {/* Border */}
                <div className="mb-10 h-1 w-36 bg-[#591a6a] mx-auto"></div>

                <div className="flex items-center justify-center container mx-auto">
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                        {/* Left Image */}
                        <div className="w-full lg:w-1/2 transform transition duration-500 ease-in-out hover:scale-105">
                            <img
                                src={about}
                                alt="About Us"
                                className="w-full h-auto rounded-xl shadow-lg object-cover hover:shadow-xl"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="flex flex-col justify-center mt-10">
                            <h2 className="text-base font-bold mb-3">
                                Welcome To RaceTrackers
                            </h2>
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                                We Are The Best Running Club Since 2022
                            </h2>
                            <div className="mb-5 h-1 w-36 bg-[#591a6a]"></div>

                            <p className="text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 mb-3">
                                We are a forward-thinking company focused on delivering top-tier solutions to our clients. Our team is
                                driven by innovation and a passion for excellence, always striving to exceed expectations.
                            </p>
                            <p className="text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                                From custom-tailored services to cutting-edge technology, we provide everything needed for success. Our vision is clear, and our dedication is unwavering building lasting relationships and achieving results
                                that matter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
