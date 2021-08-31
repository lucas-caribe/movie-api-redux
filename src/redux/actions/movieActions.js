import { getMovieByName } from '../../services/movieApi';

const MOVIE_ACTIONS = {
  REQUEST_API: 'REQUEST_API',
  FAILED_REQUEST: 'FAILED_REQUEST',
  SET_MOVIE: 'SET_MOVIE',
};

const requestApi = () => ({ type: MOVIE_ACTIONS.REQUEST_API });

const failedRequest = (error) => ({ type: MOVIE_ACTIONS.FAILED_REQUEST, payload: error });

const setMovie = (movie) => ({ type: MOVIE_ACTIONS.SET_MOVIE, payload: movie });

export const fetchMovie = (query) => async (dispatch) => {
  dispatch(requestApi());

  try {
    const movie = await getMovieByName(query);

    if (movie.Response === 'False') {
      throw new Error(movie.Error);
    }

    dispatch(setMovie(movie));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
}

export default MOVIE_ACTIONS;
