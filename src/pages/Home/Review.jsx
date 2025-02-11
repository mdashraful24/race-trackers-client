import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Review = () => {
    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic.get("/reviews")
            .then((res) => {
                setReviews(res.data);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
            });
    }, [axiosPublic]);

    return (
        <div className="container mx-auto mt-14 mb-20 md:mt-20 px-4">
            <h2 className="text-base font-bold text-center mb-3">
                Feedback
            </h2>
            <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-5">What Our Users Say</h2>
            <div className="mb-8 h-1 w-36 bg-[#591a6a] mx-auto"></div>

            <div className="mt-10 md:mt-16">
                {reviews.length > 0 ? (
                    <Swiper
                        navigation={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* User Info */}
                                    <div className="flex flex-col justify-center items-center space-y-3">
                                        {/* User Image */}
                                        <img
                                            className="w-24 h-24 object-cover rounded-full border-2 shadow-lg"
                                            src={review.image}
                                            alt={review.name}
                                        />

                                        {/* User Name */}
                                        <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>

                                        {/* Quote and Description */}
                                        <div className="flex justify-center gap-1 text-center px-16">
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                            <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                                {review.details}
                                            </p>
                                        </div>

                                        {/* Rating */}
                                        <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="text-center mt-16">
                        <p className="text-lg text-gray-700">No feedback available at the moment. Check back later!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;
