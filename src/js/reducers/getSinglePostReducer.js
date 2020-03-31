import * as types from "../constants";
const initial = {
  isLoading: false,
  error: null,
  data: {}
};
export default function(state = initial, action) {
  switch (action.type) {
    case types.GET_SINGLE_POST_ATTEMPT:
      return { ...state, isLoading: true };
    case types.GET_SINGLE_POST_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_SINGLE_POST_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case types.ADD_COMMENT_POST_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.REMOVE_COMMENT_POST_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    default:
      return state;
  }
}
