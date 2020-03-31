import * as types from "../constants";
const initial = {
  text: "",
  errors: {}
};
export default function inputCommentReducer(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_COMMENT:
      return { ...state, text: action.payload };
    case types.ADD_COMMENT_POST_FAIL:
      return { ...state, errors: action.payload };
    case types.RESET_COMMENT:
      return initial;
    default:
      return state;
  }
}
