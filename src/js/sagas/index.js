import { all, fork, takeLatest } from "redux-saga/effects";
import submitRegisterSaga from "./submitRegisterDataSaga";
import getRegisterDataSaga from "./getRegisterDataSaga";
import submitLoginSaga from "./submitLoginDataSaga";
import submitProfileSaga from "./submitProfileDataSaga";
import * as types from "../constants";
import getCurrentProfileSaga from "./getCurrentProfileSaga";
import signoutUserSaga from "./signoutUserSaga";
import deleteProfileSaga from "./deleteProfileDataSaga";
import submitExperienceDataSaga from "./submitExperienceDataSaga";
import submitEducationDataSaga from "./submitEducationDataSaga";
import deleteExperienceSaga from "./deleteExperienceSaga";
import deleteEducationSaga from "./deleteEducationSaga";
import getAllProfileSaga from "./getAllProfilesSaga";
import getProfileHandleSaga from "./getProfileHandleSaga";
import submitPostSaga from "./submitPostSaga";
import getPostsSaga from "./getPostsSaga";
import deletePostSaga from "./deletePostSaga";
import addLikePostSaga from "./addLikePostSaga";
import removeLikePostSaga from "./removeLikePostSaga";
import getSinglePostSaga from "./getSinglePostSaga";
import addCommentPostSaga from "./addCommentPostSaga";
import removeCommentPostSaga from "./removeCommentPostSaga";

function* watchSubmitRegisterData() {
  yield takeLatest(types.SUBMIT_REGISTER_DATA, submitRegisterSaga);
}

function* watchSubmitLoginData() {
  yield takeLatest(types.SUBMIT_LOGIN_DATA, submitLoginSaga);
}

function* watchGetRegisterData() {
  yield takeLatest(types.GET_REGISTER_DATA, getRegisterDataSaga);
}

function* watchGetCurrentProfileData() {
  yield takeLatest(types.GET_CURRENT_PROFILE, getCurrentProfileSaga);
}

function* watchSignoutUser() {
  yield takeLatest(types.SIGN_OUT_USER, signoutUserSaga);
}

function* watchSubmitProfileData() {
  yield takeLatest(types.SUBMIT_PROFILE_DATA, submitProfileSaga);
}

function* watchSubmitExperienceData() {
  yield takeLatest(types.SUBMIT_EXPERIENCE_DATA, submitExperienceDataSaga);
}

function* watchSubmitEducationData() {
  yield takeLatest(types.SUBMIT_EDUCATION_DATA, submitEducationDataSaga);
}

function* watchDeleteProfileData() {
  yield takeLatest(types.DELETE_PROFILE_DATA, deleteProfileSaga);
}

function* watchDeleteExperienceData() {
  yield takeLatest(types.DELETE_EXPERIENCE, deleteExperienceSaga);
}

function* watchDeleteEducationData() {
  yield takeLatest(types.DELETE_EDUCATION, deleteEducationSaga);
}

function* watchGetAllProfileData() {
  yield takeLatest(types.GET_ALL_PROFILE, getAllProfileSaga);
}
function* watchGetProfileHandleData() {
  yield takeLatest(types.GET_PROFILE_HANDLE, getProfileHandleSaga);
}
function* watchSubmitPost() {
  yield takeLatest(types.SUBMIT_POST, submitPostSaga);
}
function* watchGetPost() {
  yield takeLatest(types.GET_POSTS, getPostsSaga);
}
function* watchDeletePost() {
  yield takeLatest(types.DELETE_POST, deletePostSaga);
}
function* watchAddLikePost() {
  yield takeLatest(types.ADD_LIKE_POST, addLikePostSaga);
}
function* watchRemoveLikePost() {
  yield takeLatest(types.REMOVE_LIKE_POST, removeLikePostSaga);
}
function* watchGetSinglePost() {
  yield takeLatest(types.GET_SINGLE_POST, getSinglePostSaga);
}
function* watchAddCommentPost() {
  yield takeLatest(types.ADD_COMMENT_POST, addCommentPostSaga);
}
function* watchRemoveCommentPost() {
  yield takeLatest(types.REMOVE_COMMENT_POST, removeCommentPostSaga);
}

export default function* rootSaga() {
  yield all([
    fork(watchSubmitRegisterData),
    fork(watchGetRegisterData),
    fork(watchSubmitLoginData),
    fork(watchSubmitExperienceData),
    fork(watchSubmitEducationData),
    fork(watchGetCurrentProfileData),
    fork(watchSignoutUser),
    fork(watchSubmitProfileData),
    fork(watchDeleteExperienceData),
    fork(watchDeleteEducationData),
    fork(watchGetAllProfileData),
    fork(watchGetProfileHandleData),
    fork(watchSubmitPost),
    fork(watchGetPost),
    fork(watchDeletePost),
    fork(watchAddLikePost),
    fork(watchRemoveLikePost),
    fork(watchGetSinglePost),
    fork(watchAddCommentPost),
    fork(watchRemoveCommentPost),
    fork(watchDeleteProfileData)
  ]);
}
