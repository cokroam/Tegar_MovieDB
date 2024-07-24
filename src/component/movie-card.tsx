import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
}
const MovieCard = (props: Props) => {
  const { id, title, poster_path, release_date, size } = props;
  return (
    <div
      className={`flex flex-col shadow-lg rounded-2xl p-4 bg-white text-center ${size}`}
    >
      <Link to={`/detail/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`}></img>
        <label className="text-center">{title}</label>
      </Link>

      <p className="text-center">{release_date}</p>
    </div>
  );
};

export default MovieCard;
