import { useEffect, useState } from "react";

import { Movie } from "../services/upcoming/type";
import { getMovieDetails } from "../services/upcoming";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>(); // Ambil ID dari URL
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(id as string);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row gap-8 p-5">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
        className="w-60 h-auto"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-gray-500">{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
