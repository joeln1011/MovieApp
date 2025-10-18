import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";

const RelatedMediaList = ({
  mediaList = [],
  isLoading,
  title,
  className,
  mediaType,
}) => {
  return (
    <div className={className}>
      {title && <p className="mb-4 text-[1.4vw] font-bold">{title}</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              mediaType={media.media_type || mediaType}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
