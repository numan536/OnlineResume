import * as types from "../constants";
const initial = {
  name: "",
  email: "",
  password: "",
  password2: "",
  errors: {}
};
export default function inputSignUpReducer(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_NAME:
      return { ...state, name: action.payload };
    case types.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case types.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case types.CHANGE_CONFIRM_PASSWORD:
      return { ...state, password2: action.payload };
    case types.SUBMIT_REGISTER_DATA_FAIL:
      return { ...state, errors: action.payload };
    case types.RESET_SIGN_UP:
      return initial;
    default:
      return state;
  }
}
