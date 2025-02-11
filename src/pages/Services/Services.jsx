import { Helmet } from "react-helmet-async";
import AllService from "./AllService";
import Sponsors from "./Sponsors";

const Services = () => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    return (
        <div>
            <Helmet>
                <title>Services | RaceTrackers</title>
            </Helmet>

            <Sponsors />
            <AllService />
        </div>
    );
};

export default Services;