import { useMovieDetails } from '../hooks/useDetail';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useMovieDetails(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching movie details</div>;
  }

  if (!data) {
    return <div>No movie data found</div>;
  }

  return (
    <div className="p-5">
      <div className="flex flex-col items-center">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={data.title}
          className="w-80 h-auto rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">{data.title}</h1>
        <p className="text-lg text-gray-700 mt-2">{data.release_date}</p>
        <p className="mt-4 text-base text-gray-800">{data                                                                                                                            .overview}</p>
      </div>
    </div>
  );
};

export default DetailMovie;
