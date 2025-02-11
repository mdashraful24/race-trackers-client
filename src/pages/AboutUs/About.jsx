import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import OurVision from "./OurVision";

const About = () => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

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