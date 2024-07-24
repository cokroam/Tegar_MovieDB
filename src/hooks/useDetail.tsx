import axios from "axios";
import { useQuery } from "react-query";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "efc6b149e941d5fb2360bb88dd1ea34b";

export const useMovieDetails = (id: string) => {
  return useQuery(["movieDetails", id], async () => {
    const response = await axios.get(
      `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  });
};
