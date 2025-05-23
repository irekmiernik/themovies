
export const getSearchMovie = async (query, page = 1) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjU0MjljZjA3OTdmMDdjY2U4YjM2NjhlODRmOTZjYyIsIm5iZiI6MTc0MTQ4MDE2Mi4wOSwic3ViIjoiNjdjY2UwZTJhNGRmOTdkYjk2NGY5NmQwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RzwXsschNMuLJA_LNlfOMHfzwvMJmGUYxdNXANhhTdY'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, options);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}