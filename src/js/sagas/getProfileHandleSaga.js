import { call, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function*(action) {
  const handle = action.payload;
  yield put(actions.getProfileHandleAttempt());
  try {
    const res = yield call(api.getProfileHandleApi, handle);
    yield put(actions.getProfileHandleSuccess(res.data));
  } catch (e) {
    yield put(actions.getProfileHandleFail(e.response.data));
  }
}
