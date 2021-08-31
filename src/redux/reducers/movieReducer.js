import MOVIE_ACTIONS from '../actions/movieActions';

const INITIAL_STATE = {
  error: '',
  loading: false,
  movieInfo: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_ACTIONS.REQUEST_API:
      return { ...state, loading: true };
    case MOVIE_ACTIONS.SET_MOVIE:
      return { ...state, loading: false, movieInfo: action.payload, error: '' };
    case MOVIE_ACTIONS.FAILED_REQUEST:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
