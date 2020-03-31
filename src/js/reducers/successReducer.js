import * as types from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case types.SIGN_OUT_USER:
      return { display: false };
    case types.SUBMIT_LOGIN_DATA_SUCCESS:
      return { display: true };
    case types.GET_CURRENT_PROFILE_SUCCESS:
      return { display: true };
    case types.GET_CURRENT_PROFILE_FAIL:
      return { display: true };
    case types.SUBMIT_EDUCATION_DATA_SUCCESS:
      return { display: true };
    case types.SUBMIT_EXPERIENCE_DATA_SUCCESS:
      return { display: true };
    default:
      return state;
  }
}
