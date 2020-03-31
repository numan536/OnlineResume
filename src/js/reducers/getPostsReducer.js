import * as types from "../constants";
const initial = {
  isLoading: false,
  error: null,
  data: []
};
export default function(state = initial, action) {
  switch (action.type) {
    case types.GET_POSTS_ATTEMPT:
      return { ...state, isLoading: true };
    case types.GET_POSTS_SUCCESS:
      return { ...state, isLoading: false, data: [...action.payload] };
    case types.SUBMIT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [] //state.data.concat(action.payload)
      };
    case types.ADD_LIKE_POST_SUCCESS:
      return { ...state, isLoading: false, data: [] };
    case types.REMOVE_LIKE_POST_SUCCESS:
      return { ...state, isLoading: false, data: [] };
    case types.ADD_COMMENT_POST_SUCCESS:
      return { ...state, isLoading: false, data: [] };
    case types.REMOVE_COMMENT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(item => item._id !== action.payload._id)
      };
    case types.DELETE_POST_SUCCESS:
      return { ...state, isLoading: false, data: [] };
    case types.GET_POSTS_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
