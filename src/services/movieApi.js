const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export const getMovieByName = async (query) => {
  const response = await fetch(`${ENDPOINT}t=${query}`);
  const data = await response.json();

  return data;
}
