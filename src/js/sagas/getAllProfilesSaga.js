import { call, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function*() {
  yield put(actions.getAllProfileAttempt());
  try {
    const res = yield call(api.getAllProfileApi);
    yield put(actions.getAllProfileSuccess(res.data));
  } catch (e) {
    yield put(actions.getAllProfileFail(e.response.data));
  }
}
