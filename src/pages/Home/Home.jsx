import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import MarathonCards from "./MarathonCards";
import Team from "./Team";
import UpcomingMarathons from "./UpcomingMarathons";
import Review from "./Review";
// import Welcome from "./Welcome";

const Home = () => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    return (
        <div>
            <Helmet>
                <title>Home | RaceTrackers</title>
            </Helmet>

            <Banner />
            {/* <Welcome /> */}
            <MarathonCards />
            <UpcomingMarathons />
            <Team />
            <ExtraSection />
            <Review />
        </div>
    );
};

export default Home;