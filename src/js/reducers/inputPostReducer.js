import * as types from "../constants";
const initial = {
  text: "",
  errors: {}
};
export default function inputPostReducer(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_POST:
      return { ...state, text: action.payload };
    case types.SUBMIT_POST_FAIL:
      return { ...state, errors: action.payload };
    case types.RESET_POST:
      return initial;
    default:
      return state;
  }
}
