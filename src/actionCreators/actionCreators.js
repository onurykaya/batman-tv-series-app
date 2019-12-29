import {FETCH_TV_SHOW, FETCH_TV_SHOWS, LOAD_TV_SHOW} from '../actions/actions';

export const loadTv = () => dispatch => {
    return dispatch({
        type: LOAD_TV_SHOW
    })
}

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

export const fetchTvShow = id => dispatch => {
  fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: FETCH_TV_SHOW,
        item
      })
    );
};