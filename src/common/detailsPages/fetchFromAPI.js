import { API_URL } from "./API_URL";

export const fetchFromAPI = async (path) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmE2MzI0YTM0YjA0N2FkMjA3MzcyN2U1NmM3OTI1MSIsIm5iZiI6MTc0MTk0MDQzNy42MSwic3ViIjoiNjdkM2U2ZDVkY2JhNzBhMjY5NjRlYWMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.brcg1d7jawabimDzPmFtmZoKykPndUNwNzFHAOJIX48'
    }
  };

  const url = `${API_URL}${path}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  };

  return await response.json();
};