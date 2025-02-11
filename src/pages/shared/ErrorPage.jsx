import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen">
            {/* Helmet */}
            <Helmet>
                <title>Error Page | RaceTrackers</title>
            </Helmet>
            <div className="hero-content flex-col text-center">
                <div>
                    <img src={error} alt="error.png" className="w-80" />
                </div>
                <div>
                    <p className="md:text-lg">Sorry, we couldn't find this page. But don't worry, you can find many other things on our <Link to={"/"} className="underline text-[#9538E2] leading-8 hover:font-bold">Homepage</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;