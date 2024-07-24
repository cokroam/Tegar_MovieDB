import { API } from '.';
import { ResponseTrending } from './type';

const getTrendingMovie = async() => {
  try{
const response = await API.get("/trending/all/day?language=en-US'");

return response.data as ResponseTrending;
  } catch (error){
      console.log(error)
  }
};
export {getTrendingMovie};