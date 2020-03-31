import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitProfileDataSaga(action) {
  const data = action.payload;

  yield put(actions.submitProfileDataAttempt());
  try {
    const res = yield call(api.submitProfileApi, data);
    yield put(actions.submitProfileDataSuccess(res));
    alert("Submit Profile Successfully");
    yield put(actions.resetProfile());
    yield put(push("/dashboard"));
  } catch (e) {
    yield put(actions.submitProfileDataError(e.response.data));
  }
}
