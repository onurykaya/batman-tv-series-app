import { FETCH_TV_SHOWS } from "../actions/actions";

const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TV_SHOWS:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
