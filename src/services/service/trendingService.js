import { API_URL } from "../api/apiURL";
import { axiosInstance } from "../api/axiosInstance";

export const getTrendingAll = async () => {
  try {
    const response = await axiosInstance.get(API_URL.getTrendingAll);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get(API_URL.getTrendingMovies);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingPeople = async () => {
  try {
    const response = await axiosInstance.get(API_URL.getTrendingPeople);
    return response;
  } catch (error) {
    console.log(error);
  }
};
