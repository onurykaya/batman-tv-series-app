import { FETCH_TV_SHOWS} from '../actions/actions';


export const fetchTvShows = () => dispatch => {
  fetch("https://api.tvmaze.com/search/shows?q=batman")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_TV_SHOWS,
        data
      })
    );
};
