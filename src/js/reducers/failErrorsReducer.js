import * as types from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case types.SUBMIT_EDUCATION_DATA_FAIL:
      return action.payload;
    case types.SUBMIT_EXPERIENCE_DATA_FAIL:
      return action.payload;
    case types.SUBMIT_REGISTER_DATA_FAIL:
      return action.payload;
    case types.SUBMIT_LOGIN_DATA_FAIL:
      return action.payload;
    case types.GET_ALL_PROFILE_FAIL:
      return action.payload;
    case types.ADD_COMMENT_POST_FAIL:
      return action.payload;
    case types.ADD_LIKE_POST_FAIL:
      return action.payload;
    case types.SUBMIT_PROFILE_DATA_FAIL:
      return action.payload;
    case types.REMOVE_COMMENT_POST_FAIL:
      return action.payload;
    case types.DELETE_EDUCATION_FAIL:
      return action.payload;
    case types.DELETE_POST_FAIL:
      return action.payload;
    case types.DELETE_PROFILE_DATA_FAIL:
      return action.payload;
    case types.DELETE_EXPERIENCE_FAIL:
      return action.payload;
    case types.GET_ALL_PROFILE_FAIL:
      return action.payload;
    case types.GET_POSTS_FAIL:
      return action.payload;
    case types.GET_SINGLE_POST_FAIL:
      return action.payload;
    case types.GET_ALL_PROFILE_FAIL:
      return action.payload;
    case types.GET_PROFILE_HANDLE_FAIL:
      return action.payload;
    case types.GET_CURRENT_PROFILE_FAIL:
      return action.payload;
    case types.GET_CURRENT_PROFILE_SUCCESS:
      return {};
    case types.DELETE_EDUCATION_SUCCESS:
      return {};
    case types.DELETE_EXPERIENCE_SUCCESS:
      return {};
    case types.ADD_LIKE_POST_SUCCESS:
      return {};
    case types.REMOVE_LIKE_POST_SUCCESS:
      return {};
    case types.ADD_COMMENT_POST_SUCCESS:
      return {};
    case types.REMOVE_COMMENT_POST_SUCCESS:
      return {};
    case types.SUBMIT_POST_SUCCESS:
      return {};
    case types.GET_POSTS_SUCCESS:
      return {};
    case types.GET_SINGLE_POST_SUCCESS:
      return {};
    default:
      return state;
  }
}
