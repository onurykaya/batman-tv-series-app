import { FETCH_TV_SHOWS, FETCH_TV_SHOW, LOAD_TV_SHOW } from "../actions/actions";

const initialState = {
  data: [],
  item: [],
  loading: false
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
    case LOAD_TV_SHOW:
      return {
        ...state,
        loading:true
      };
    default:
      return state;
  }
}
