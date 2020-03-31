import * as types from "../constants";

// SIGN UP ACTIONS

export function changeName(value) {
  return {
    type: types.CHANGE_NAME,
    payload: value
  };
}
export function changeEmail(value) {
  return {
    type: types.CHANGE_EMAIL,
    payload: value
  };
}

export function changePassword(value) {
  return {
    type: types.CHANGE_PASSWORD,
    payload: value
  };
}

export function changeConfirmPassword(value) {
  return {
    type: types.CHANGE_CONFIRM_PASSWORD,
    payload: value
  };
}

export function resetSignUp() {
  return {
    type: types.RESET_SIGN_UP
  };
}

// LOGIN ACTIONS

export function changeLoginEmail(value) {
  return {
    type: types.CHANGE_LOGIN_EMAIL,
    payload: value
  };
}
export function changeLoginPassword(value) {
  return {
    type: types.CHANGE_LOGIN_PASSWORD,
    payload: value
  };
}

export function resetLoginData(value) {
  return {
    type: types.RESET_LOGIN_DATA
  };
}

// Submit Register User Actions

export function submitRegisterData(data) {
  return {
    type: types.SUBMIT_REGISTER_DATA,
    payload: data
  };
}

export function submitRegisterDataAttempt() {
  return {
    type: types.SUBMIT_REGISTER_DATA_ATTEMPT
  };
}

export function submitRegisterDataSuccess() {
  return {
    type: types.SUBMIT_REGISTER_DATA_SUCCESS
  };
}

export function submitRegisterDataError(error) {
  return {
    type: types.SUBMIT_REGISTER_DATA_FAIL,
    payload: error
  };
}

// Get Register User Actions

export function getRegisterData() {
  return {
    type: types.GET_REGISTER_DATA
  };
}

export function getRegisterDataAttempt() {
  return {
    type: types.GET_REGISTER_DATA_ATTEMPT
  };
}

export function getRegisterDataSuccess(data) {
  return {
    type: types.GET_REGISTER_DATA_SUCCESS,
    payload: data
  };
}

export function getRegisterDataError(error) {
  return {
    type: types.GET_REGISTER_DATA_FAIL,
    payload: error
  };
}

// Submit login User Actions

export function submitLoginData(data) {
  return {
    type: types.SUBMIT_LOGIN_DATA,
    payload: data
  };
}

export function submitLoginDataAttempt() {
  return {
    type: types.SUBMIT_LOGIN_DATA_ATTEMPT
  };
}

export function submitLoginDataSuccess() {
  return {
    type: types.SUBMIT_LOGIN_DATA_SUCCESS
  };
}

export function submitLoginDataError(error) {
  return {
    type: types.SUBMIT_LOGIN_DATA_FAIL,
    payload: error
  };
}
export function signoutUser() {
  return {
    type: types.SIGN_OUT_USER
  };
}

// Get Current Profile Actions

export function getCurrentProfile() {
  return {
    type: types.GET_CURRENT_PROFILE
  };
}

export function getCurrentProfileSuccess(data) {
  return {
    type: types.GET_CURRENT_PROFILE_SUCCESS,
    payload: data
  };
}

export function getCurrentProfileAttempt() {
  return {
    type: types.GET_CURRENT_PROFILE_ATTEMPT
  };
}

export function getCurrentProfileFail(error) {
  return {
    type: types.GET_CURRENT_PROFILE_FAIL,
    payload: error
  };
}

// On Change Profile Actions

export function changeProfileHandle(value) {
  return {
    type: types.CHANGE_PROFILE_HANDLE,
    payload: value
  };
}

export function changeProfileStatus(value) {
  return {
    type: types.CHANGE_PROFILE_STATUS,
    payload: value
  };
}

export function changeProfileCompany(value) {
  return {
    type: types.CHANGE_PROFILE_COMPANY,
    payload: value
  };
}
export function changeProfileWebsite(value) {
  return {
    type: types.CHANGE_PROFILE_WEBSITE,
    payload: value
  };
}
export function changeProfileLocation(value) {
  return {
    type: types.CHANGE_PROFILE_LOCATION,
    payload: value
  };
}
export function changeProfileSkills(value) {
  return {
    type: types.CHANGE_PROFILE_SKILLS,
    payload: value
  };
}
export function changeProfileGithubUsername(value) {
  return {
    type: types.CHANGE_PROFILE_GITHUB_USERNAME,
    payload: value
  };
}
export function changeProfileBio(value) {
  return {
    type: types.CHANGE_PROFILE_BIO,
    payload: value
  };
}
export function changeProfileTwitter(value) {
  return {
    type: types.CHANGE_PROFILE_TWITTER,
    payload: value
  };
}
export function changeDisplaySocial(value) {
  return {
    type: types.CHANGE_PROFILE_DISPLAY_INPUTS,
    payload: value
  };
}

export function changeProfileFacebook(value) {
  return {
    type: types.CHANGE_PROFILE_FACEBOOK,
    payload: value
  };
}

export function changeProfileYoutube(value) {
  return {
    type: types.CHANGE_PROFILE_YOUTUBE,
    payload: value
  };
}

export function changeProfileLinkedin(value) {
  return {
    type: types.CHANGE_PROFILE_LINKEDIN,
    payload: value
  };
}

export function changeProfileInstagram(value) {
  return {
    type: types.CHANGE_PROFILE_INSTAGRAM,
    payload: value
  };
}

export function changeProfileSocialInputs(value) {
  return {
    type: types.CHANGE_PROFILE_SOCIAL_INPUTS,
    payload: value
  };
}

export function resetProfile(value) {
  return {
    type: types.RESET_PROFILE,
    payload: value
  };
}

// Submit Profile Actions

export function submitProfileData(data) {
  return {
    type: types.SUBMIT_PROFILE_DATA,
    payload: data
  };
}

export function submitProfileDataAttempt() {
  return {
    type: types.SUBMIT_PROFILE_DATA_ATTEMPT
  };
}

export function submitProfileDataSuccess(res) {
  return {
    type: types.SUBMIT_PROFILE_DATA_SUCCESS,
    payload: res
  };
}

export function submitProfileDataError(error) {
  return {
    type: types.SUBMIT_PROFILE_DATA_FAIL,
    payload: error
  };
}

// Delete Profile Actions

export function deleteProfileData() {
  return {
    type: types.DELETE_PROFILE_DATA
  };
}

export function deleteProfileDataAttempt() {
  return {
    type: types.DELETE_PROFILE_DATA_ATTEMPT
  };
}

export function deleteProfileDataSuccess(res) {
  return {
    type: types.DELETE_PROFILE_DATA_SUCCESS,
    payload: res
  };
}

export function deleteProfileDataError(error) {
  return {
    type: types.DELETE_PROFILE_DATA_FAIL,
    payload: error
  };
}

// Edit profile Actions

export function editProfileData(data) {
  return {
    type: types.EDIT_PROFILE_DATA,
    payload: data
  };
}

//on Change Experience Actions

export function changeExperienceTitle(value) {
  return {
    type: types.CHANGE_EXPERIENCE_TITLE,
    payload: value
  };
}

export function changeExperienceLocation(value) {
  return {
    type: types.CHANGE_EXPERIENCE_LOCATION,
    payload: value
  };
}

export function changeExperienceTo(value) {
  return {
    type: types.CHANGE_EXPERIENCE_TO,
    payload: value
  };
}

export function changeExperienceFrom(value) {
  return {
    type: types.CHANGE_EXPERIENCE_FROM,
    payload: value
  };
}

export function changeExperienceCompany(value) {
  return {
    type: types.CHANGE_EXPERIENCE_COMPANY,
    payload: value
  };
}

export function changeExperienceCurrent(value) {
  return {
    type: types.CHANGE_EXPERIENCE_CURRENT,
    payload: value
  };
}
export function changeExperienceDescription(value) {
  return {
    type: types.CHANGE_EXPERIENCE_DESCRIPTION,
    payload: value
  };
}
export function resetExperience() {
  return {
    type: types.RESET_EXPERIENCE
  };
}

// Submit Experience Actions

export function submitExperienceData(data) {
  return {
    type: types.SUBMIT_EXPERIENCE_DATA,
    payload: data
  };
}

export function submitExperienceDataAttempt() {
  return {
    type: types.SUBMIT_EXPERIENCE_DATA_ATTEMPT
  };
}

export function submitExperienceDataSuccess(res) {
  return {
    type: types.SUBMIT_EXPERIENCE_DATA_SUCCESS,
    payload: res
  };
}

export function submitExperienceDataError(error) {
  return {
    type: types.SUBMIT_EXPERIENCE_DATA_FAIL,
    payload: error
  };
}

// Delete Experience Actions

export function deleteExperience(id) {
  return {
    type: types.DELETE_EXPERIENCE,
    payload: id
  };
}
export function deleteExperienceAttempt() {
  return {
    type: types.DELETE_EXPERIENCE_ATTEMPT
  };
}

export function deleteExperienceSuccess(res) {
  return {
    type: types.DELETE_EXPERIENCE_SUCCESS,
    payload: res
  };
}
export function deleteExperienceError(error) {
  return {
    type: types.DELETE_EXPERIENCE_FAIL,
    payload: error
  };
}

//on Change Education Actions

export function changeEducationDegree(value) {
  return {
    type: types.CHANGE_EDUCATION_DEGREE,
    payload: value
  };
}

export function changeEducationLocation(value) {
  return {
    type: types.CHANGE_EDUCATION_LOCATION,
    payload: value
  };
}

export function changeEducationTo(value) {
  return {
    type: types.CHANGE_EDUCATION_TO,
    payload: value
  };
}

export function changeEducationFrom(value) {
  return {
    type: types.CHANGE_EDUCATION_FROM,
    payload: value
  };
}

export function changeEducationSchool(value) {
  return {
    type: types.CHANGE_EDUCATION_SCHOOL,
    payload: value
  };
}

export function changeEducationCurrent(value) {
  return {
    type: types.CHANGE_EDUCATION_CURRENT,
    payload: value
  };
}
export function changeEducationDescription(value) {
  return {
    type: types.CHANGE_EDUCATION_DESCRIPTION,
    payload: value
  };
}
export function resetEducation() {
  return {
    type: types.RESET_EDUCATION
  };
}

// Submit Education Actions

export function submitEducationData(data) {
  return {
    type: types.SUBMIT_EDUCATION_DATA,
    payload: data
  };
}

export function submitEducationDataAttempt() {
  return {
    type: types.SUBMIT_EDUCATION_DATA_ATTEMPT
  };
}

export function submitEducationDataSuccess(res) {
  return {
    type: types.SUBMIT_EDUCATION_DATA_SUCCESS,
    payload: res
  };
}

export function submitEducationDataError(error) {
  return {
    type: types.SUBMIT_EDUCATION_DATA_FAIL,
    payload: error
  };
}

// Delete Education Actions

export function deleteEducation(id) {
  return {
    type: types.DELETE_EDUCATION,
    payload: id
  };
}

export function deleteEducationAttempt() {
  return {
    type: types.DELETE_EDUCATION_ATTEMPT
  };
}

export function deleteEducationSuccess(res) {
  return {
    type: types.DELETE_EDUCATION_SUCCESS,
    payload: res
  };
}

export function deleteEducationError(error) {
  return {
    type: types.DELETE_EDUCATION_FAIL,
    payload: error
  };
}

// Get All Profiles Actions

export function getAllProfile() {
  return {
    type: types.GET_ALL_PROFILE
  };
}

export function getAllProfileSuccess(data) {
  return {
    type: types.GET_ALL_PROFILE_SUCCESS,
    payload: data
  };
}

export function getAllProfileAttempt() {
  return {
    type: types.GET_ALL_PROFILE_ATTEMPT
  };
}

export function getAllProfileFail(error) {
  return {
    type: types.GET_ALL_PROFILE_FAIL,
    payload: error
  };
}

// Get Profile By Handle Actions

export function getProfileHandle(handle) {
  return {
    type: types.GET_PROFILE_HANDLE,
    payload: handle
  };
}

export function getProfileHandleSuccess(data) {
  return {
    type: types.GET_PROFILE_HANDLE_SUCCESS,
    payload: data
  };
}

export function getProfileHandleAttempt() {
  return {
    type: types.GET_PROFILE_HANDLE_ATTEMPT
  };
}

export function getProfileHandleFail(error) {
  return {
    type: types.GET_PROFILE_HANDLE_FAIL,
    payload: error
  };
}

//Submit Post Actions

export function submitPost(id) {
  return {
    type: types.SUBMIT_POST,
    payload: id
  };
}
export function submitPostAttempt() {
  return {
    type: types.SUBMIT_POST_ATTEMPT
  };
}

export function submitPostSuccess(res) {
  return {
    type: types.SUBMIT_POST_SUCCESS,
    payload: res
  };
}
export function submitPostError(error) {
  return {
    type: types.SUBMIT_POST_FAIL,
    payload: error
  };
}

// Change Post Actions

export function changePost(value) {
  return {
    type: types.CHANGE_POST,
    payload: value
  };
}
export function resetPost(value) {
  return {
    type: types.RESET_POST,
    payload: value
  };
}

//Get Posts Post Actions

export function getPosts() {
  return {
    type: types.GET_POSTS
  };
}
export function getPostsAttempt() {
  return {
    type: types.GET_POSTS_ATTEMPT
  };
}

export function getPostsSuccess(data) {
  return {
    type: types.GET_POSTS_SUCCESS,
    payload: data
  };
}
export function getPostsError(error) {
  return {
    type: types.GET_POSTS_FAIL,
    payload: error
  };
}

//Delete Posts Post Actions

export function deletePost(id) {
  return {
    type: types.DELETE_POST,
    payload: id
  };
}
export function deletePostAttempt() {
  return {
    type: types.DELETE_POST_ATTEMPT
  };
}

export function deletePostSuccess(res) {
  return {
    type: types.DELETE_POST_SUCCESS,
    payload: res
  };
}
export function deletePostError(error) {
  return {
    type: types.DELETE_POST_FAIL,
    payload: error
  };
}

//Add Like Posts Post Actions

export function addLikePost(id) {
  return {
    type: types.ADD_LIKE_POST,
    payload: id
  };
}
export function addLikePostAttempt() {
  return {
    type: types.ADD_LIKE_POST_ATTEMPT
  };
}

export function addLikePostSuccess() {
  return {
    type: types.ADD_LIKE_POST_SUCCESS
  };
}
export function addLikePostError(error) {
  return {
    type: types.ADD_LIKE_POST_FAIL,
    payload: error
  };
}

//Remove Like Posts Post Actions

export function removeLikePost(id) {
  return {
    type: types.REMOVE_LIKE_POST,
    payload: id
  };
}
export function removeLikePostAttempt() {
  return {
    type: types.REMOVE_LIKE_POST_ATTEMPT
  };
}

export function removeLikePostSuccess() {
  return {
    type: types.REMOVE_LIKE_POST_SUCCESS
  };
}
export function removeLikePostError(error) {
  return {
    type: types.REMOVE_LIKE_POST_FAIL,
    payload: error
  };
}

//Add Comment Posts Post Actions

export function addCommentPost(id, data) {
  return {
    type: types.ADD_COMMENT_POST,
    payload: { id, data }
  };
}
export function addCommentPostAttempt() {
  return {
    type: types.ADD_COMMENT_POST_ATTEMPT
  };
}

export function addCommentPostSuccess(data) {
  return {
    type: types.ADD_COMMENT_POST_SUCCESS,
    payload: data
  };
}
export function addCommentPostError(error) {
  return {
    type: types.ADD_COMMENT_POST_FAIL,
    payload: error
  };
}

//Remove Commet Posts Post Actions

export function removeCommentPost(id, commentId) {
  return {
    type: types.REMOVE_COMMENT_POST,
    payload: { id, commentId }
  };
}
export function removeCommentPostAttempt() {
  return {
    type: types.REMOVE_COMMENT_POST_ATTEMPT
  };
}

export function removeCommentPostSuccess(data) {
  return {
    type: types.REMOVE_COMMENT_POST_SUCCESS,
    payload: data
  };
}
export function removeCommentPostError(error) {
  return {
    type: types.REMOVE_COMMENT_POST_FAIL,
    payload: error
  };
}

//Get Single Posts Post Actions

export function getSinglePost(id) {
  return {
    type: types.GET_SINGLE_POST,
    payload: id
  };
}
export function getSinglePostAttempt() {
  return {
    type: types.GET_SINGLE_POST_ATTEMPT
  };
}

export function getSinglePostSuccess(data) {
  return {
    type: types.GET_SINGLE_POST_SUCCESS,
    payload: data
  };
}
export function getSinglePostError(error) {
  return {
    type: types.GET_SINGLE_POST_FAIL,
    payload: error
  };
}

// CHANGE COMMENT ACTIONS

export function changeComment(value) {
  return {
    type: types.CHANGE_COMMENT,
    payload: value
  };
}

export function resetComment() {
  return {
    type: types.RESET_COMMENT
  };
}
