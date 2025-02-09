const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            onClick={() => {
              setActiveMovieId(movie.id);
            }}
            key={movie.id}
            className={`h-2 w-6 cursor-pointer ${movie.id === activeMovieId ? "h-1 w-6 cursor-pointer bg-slate-100" : "h-1 w-6 cursor-pointer bg-slate-600"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
export default PaginateIndicator;
