import { fetchFromAPI } from "../../common/detailsPages/fetchFromAPI";

export const getActorDetails = ({ id }) => fetchFromAPI(`/person/${id}?append_to_response=movie_credits%2Cimages`);