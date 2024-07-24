
interface Props {
    title: string;
    poster_path: string;
    release_date: string;
    size?: string;
  }
  const MovieCard = (props: Props) => {
    const { title, poster_path, release_date,size } = props;
    return (
      <div className= {`flex flex-col shadow-lg rounded-2xl p-4 bg-white ${size}`}>
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`}></img>
        <label className="text-center">{title}</label>
        <p className="text-center">{release_date}</p>
      </div>
    );
  };
  
  export default MovieCard;
  