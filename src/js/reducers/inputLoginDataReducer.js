import * as types from "../constants";
const initial = {
  email: "",
  password: "",
  errors: {}
};
export default function inputSignUpReducer(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_LOGIN_EMAIL:
      return { ...state, email: action.payload };
    case types.CHANGE_LOGIN_PASSWORD:
      return { ...state, password: action.payload };
    case types.RESET_LOGIN_DATA:
      return initial;
    case types.SUBMIT_LOGIN_DATA_FAIL:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
