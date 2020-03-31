import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitExperienceDataSaga(action) {
  const data = action.payload;
  yield put(actions.submitExperienceDataAttempt());
  try {
    const res = yield call(api.submitExperienceApi, data);
    yield put(actions.submitExperienceDataSuccess(res));
    yield put(actions.resetExperience());
    alert("Submit Experience Successfuly");
    yield put(push("/dashboard"));
  } catch (e) {
    yield put(actions.submitExperienceDataError(e.response.data));
  }
}
