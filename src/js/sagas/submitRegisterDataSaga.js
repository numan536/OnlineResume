import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitRegisterDataSaga(action) {
  const data = action.payload;
  yield put(actions.submitRegisterDataAttempt());
  try {
    yield call(api.submitRegisterApi, data);
    yield put(actions.submitRegisterDataSuccess());
    alert("Submit User Successfully");
    yield put(push("/login"));
    yield put(actions.resetSignUp());
  } catch (e) {
    yield put(actions.submitRegisterDataError(e.response.data));
  }
}
