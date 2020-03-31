import { call, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function*() {
  yield put(actions.getCurrentProfileAttempt());
  try {
    const res = yield call(api.getCurrentProfileApi);
    yield put(actions.getCurrentProfileSuccess(res.data));
  } catch (e) {
    yield put(actions.getCurrentProfileFail(e.response.data));
  }
}
