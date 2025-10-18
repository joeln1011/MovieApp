import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Find the index of the current active movie
      const currentIndex = movies.findIndex(
        (movie) => movie.id === activeMovieId,
      );
      // Calculate the index of the next movie (loop back to the start if at the end)
      const nextIndex = (currentIndex + 1) % movies.length;
      // Set the next movie as active
      setActiveMovieId(movies[nextIndex].id);
    }, 5000); // 5 seconds interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [movies, activeMovieId, setActiveMovieId]);

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            onClick={() => {
              setActiveMovieId(movie.id);
            }}
            key={movie.id}
            className={`h-2 w-6 cursor-pointer ${
              movie.id === activeMovieId
                ? "h-1 w-6 cursor-pointer bg-slate-100"
                : "h-1 w-6 cursor-pointer bg-slate-600"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
