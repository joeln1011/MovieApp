import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

//
const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2M1NjkzNWY3NWRkMGI1MjQ0MTgxYTFmNzRlZWRlYiIsIm5iZiI6MTczODg4NDUzMi4zNDUsInN1YiI6IjY3YTU0NWI0ZGYzMzZmMzhhYjg1ZDY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iX_x6Rl2bS_91sRHl_iPYmGrW9If48SSB495H0zAYrI",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);
  console.log(movies);
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;
