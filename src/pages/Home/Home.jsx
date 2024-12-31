import Banner from "./Banner";
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
        </div>
    );
};

export default Home;