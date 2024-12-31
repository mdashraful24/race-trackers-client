import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import MarathonCards from "./MarathonCards";
import Team from "./Team";
import UpcomingMarathons from "./UpcomingMarathons";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | RaceTrackers</title>
            </Helmet>

            <Banner></Banner>
            <MarathonCards></MarathonCards>
            <UpcomingMarathons></UpcomingMarathons>
            <Team></Team>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;