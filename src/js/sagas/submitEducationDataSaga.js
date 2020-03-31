import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitEducationDataSaga(action) {
  const data = action.payload;

  yield put(actions.submitEducationDataAttempt());
  try {
    const res = yield call(api.submitEducationApi, data);
    yield put(actions.submitEducationDataSuccess(res));
    alert("Submit Education Successfuly");
    yield put(push("/dashboard"));
    yield put(actions.resetEducation());
  } catch (e) {
    yield put(actions.submitEducationDataError(e.response.data));
  }
}
