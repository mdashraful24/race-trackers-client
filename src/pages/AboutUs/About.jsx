import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import OurVision from "./OurVision";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About | RaceTrackers</title>
            </Helmet>

            <AboutUs />
            <OurVision />
        </div>
    );
};

export default About;