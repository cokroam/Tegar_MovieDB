import { useEffect, useState } from "react";

import { Movie } from "../services/upcoming/type";
import { getMovieDetails } from "../services/upcoming";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setDetailMovie] = useState<Movie>();
  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      if (id) {
        const response = await getMovieDetails(id);
        setDetailMovie(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (!movie) {
    return <div>LOADING...</div>;
  }

  return (
    <div className="flex flex-row gap-8 p-5 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
        className="w-60 h-auto"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-gray-500">
          <strong>Release date : </strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Rating :</strong> {movie.popularity}
        </p>
        <p>
          <strong>Language :</strong> {movie.original_language}
        </p>
        <p>
          <strong>Overview :</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
};
export default Detail;
