import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitLoginDataSaga(action) {
  const data = action.payload;
  yield put(actions.submitLoginDataAttempt());
  try {
    const res = yield call(api.submitLoginApi, data);
    yield put(actions.submitLoginDataSuccess());
    yield put(actions.resetLoginData());
    localStorage.setItem("token", res.token);
    localStorage.setItem("name", res.name);
    localStorage.setItem("avatar", res.avatar);
    yield put(push("/dashboard"));
  } catch (e) {
    yield put(actions.submitLoginDataError(e.response.data));
  }
}
