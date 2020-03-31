import * as types from "../constants";
const initial = {
  isLoading: false,
  error: null,
  data: {}
};
export default function(state = initial, action) {
  switch (action.type) {
    case types.GET_CURRENT_PROFILE_ATTEMPT:
      return { ...state, isLoading: true };
    case types.GET_CURRENT_PROFILE_SUCCESS:
      return { ...state, isLoading: false, data: { ...action.payload } };
    case types.SUBMIT_EDUCATION_DATA_SUCCESS:
      return { ...state, isLoading: false, error: null, data: action.payload };
    case types.SUBMIT_EXPERIENCE_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.DELETE_EDUCATION_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.DELETE_EXPERIENCE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.SUBMIT_PROFILE_DATA_SUCCESS:
      return { ...state, isLoading: false, error: null, data: action.payload };
    case types.GET_CURRENT_PROFILE_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
