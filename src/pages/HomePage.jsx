import Header from "../components/Header";
import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TOP_REATED_TABS, TRENDING_TABS } from "../libs/constant";

function HomePage() {
  return (
    <div>
      <Header />
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_REATED_TABS} />
    </div>
  );
}

export default HomePage;
