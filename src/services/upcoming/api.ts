import {Movie, ResponseMovie} from "./type";

import { API } from ".";

const getUpComingMovie = async(page: string) => {
    try{
  const response = await API.get(`/movie/upcoming?language=en-US&page=${page}`);

  return response.data as ResponseMovie;
    } catch (error){
        console.log(error)
    }
};


const getMovieDetails = async (id: string) => {
  try {
    const response = await API.get(`/movie/${id}?language=en-US`);
    return response.data as Movie;
  } catch (error) {
    console.error(error);
  }
};

export {API,getUpComingMovie,getMovieDetails};
