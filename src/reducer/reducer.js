import { FETCH_TV_SHOWS, FETCH_TV_SHOW } from "../actions/actions";

const initialState = {
  data: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TV_SHOWS:
      return {
        ...state,
        data: action.data
      };
    case FETCH_TV_SHOW:
      return {
        ...state,
        item: action.item
      };
    default:
      return state;
  }
}
