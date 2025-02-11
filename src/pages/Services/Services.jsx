import { Helmet } from "react-helmet-async";
import AllService from "./AllService";
import Sponsors from "./Sponsors";

const Services = () => {
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