import { fetchFromAPI } from "../../common/detailsPages/fetchFromAPI";

export const getMovieDetails = ({ id }) => fetchFromAPI(`/movie/${id}?append_to_response=credits%2Cimages`);