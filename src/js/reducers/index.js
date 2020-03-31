import { combineReducers } from "redux";
import inputSignupReducer from "./inputSignupReducer";
import inputLoginDataReducer from "./inputLoginDataReducer";
import getRegisterDataReducer from "./getRegisterDataReducer";
import getCurrentProfileReducer from "./getCurrentProfileReducer";
import inputProfileDataReducer from "./inputProfileDataReducer";
import inputExperienceReducer from "./inputExperienceReducer";
import inputEducationReducer from "./inputEducationReducer";
import getAllProfileReducer from "./getAllProfileReducer";
import getProfileHandleReducer from "./getProfileHandleReducer";
import inputPostReducer from "./inputPostReducer";
import getPostsReducer from "./getPostsReducer";
import inputCommentReducer from "./inputCommentReducer";
import getSinglePostReducer from "./getSinglePostReducer";
import failErrorsReducer from "./failErrorsReducer";
import successReducer from "./successReducer";

const rootReducer = combineReducers({
  inputSignupData: inputSignupReducer,
  inputLoginData: inputLoginDataReducer,
  registerData: getRegisterDataReducer,
  profileData: getCurrentProfileReducer,
  inputProfileData: inputProfileDataReducer,
  inputExperienceData: inputExperienceReducer,
  inputEducationData: inputEducationReducer,
  allProfilesData: getAllProfileReducer,
  getProfileHandle: getProfileHandleReducer,
  inputPost: inputPostReducer,
  postsData: getPostsReducer,
  inputComment: inputCommentReducer,
  singlePostData: getSinglePostReducer,
  errors: failErrorsReducer,
  success: successReducer
});

export default rootReducer;
