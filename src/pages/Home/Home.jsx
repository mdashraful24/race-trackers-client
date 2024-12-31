import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import MarathonCards from "./MarathonCards";
import Team from "./Team";
import UpcomingMarathons from "./UpcomingMarathons";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarathonCards></MarathonCards>
            <UpcomingMarathons></UpcomingMarathons>
            <Team></Team>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;