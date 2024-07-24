import { Movie, ResponseMovie } from "../../services/upcoming/type";
import { useEffect, useState } from "react";

import MovieCard from "../../component/movie-card";
import { getUpComingMovie } from "../../services/upcoming/api";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const UpComing = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [loading, setLoading] = useState(false);
  const [upComingDate, setUpComingMovie] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);
  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await getUpComingMovie(page as string);
      setUpComingMovie(response);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };
  const handlingPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage - 1}`);
  };

  return (
    <div className="flex flex-col p-5">
      <label className="text-2xl font-semibold text-center py-4  text-white">
        Up Coming Movie
      </label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center ">
          {upComingDate?.results.map((item: Movie) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              size="w-40"
            />
          ))}
          ;
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      <div className="flex flex-row justify-between">
        <button onClick={handlingPage} className="bg-white rounded-lg p-4 ">
          Back
        </button>
        <button onClick={handlePage} className="bg-white rounded-lg p-4 ">
          Next
        </button>
      </div>
    </div>
  );
};

export default UpComing;
