import { ResponseTrending, TrendingVar } from "../../services/trending/type";
import  { useEffect, useState } from "react";

import MovieCard from "../../component/movie-card";
import { getTrendingMovie } from "../../services/trending/api";

const Trending = () => {
  const [TrendingDate, setTrendingMovie] = useState<ResponseTrending>();
  useEffect(() => {
    fetchMovie();
  }, []);
  const fetchMovie = async () => {
    try {
      const response = await getTrendingMovie();

      setTrendingMovie(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <label className="text-2xl font-semibold text-center py-4 text-white">Trending All</label>
      <div className="flex flex-row flex-wrap gap-5 justify-center ">
        {TrendingDate?.results.map((item: TrendingVar) => (
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
    </div>
  );
};

export default Trending;
