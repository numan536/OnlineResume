import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* submitPostSaga(action) {
  const data = action.payload;
  yield put(actions.submitPostAttempt());
  try {
    const res = yield call(api.submitPostApi, data);
    console.log("this is response from submitPostApi", res);
    yield put(actions.submitPostSuccess(res));
    alert("Submit Post Successfuly");
    yield put(actions.resetPost());
  } catch (e) {
    yield put(actions.submitPostError(e.response.data));
  }
}
