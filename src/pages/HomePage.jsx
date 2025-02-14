import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "../libs/constant";

function HomePage() {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="TopRated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePage;
