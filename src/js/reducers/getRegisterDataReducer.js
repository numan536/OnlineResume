import * as types from "../constants";
const initial = {
  isLoading: false,
  error: null,
  data: []
};
export default function(state = initial, action) {
  switch (action.type) {
    case types.GET_REGISTER_DATA_ATTEMPT:
      return { ...state, isLoading: true };
    case types.GET_REGISTER_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case types.GET_REGISTER_DATA_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
